import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
import matplotlib

# 設定中文字體（避免中文顯示問題）
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 讀取Excel文件
FILE_PATH = 'free_fall.xlsx'  # 請確保文件路徑正確

try:
    # 讀取Excel數據
    data = pd.read_excel(FILE_PATH)
    print("成功讀取數據文件")
    print("數據概覽：")
    print(data.head())
    print(f"\n數據形狀：{data.shape}")
    
except FileNotFoundError:
    print(f"錯誤：找不到文件 {FILE_PATH}")
    print("請確保文件在正確的路徑中")
    exit()

# 提取時間和高度數據
# 根據您的Excel文件，列名應該是 'time(s)' 和 'hight(m)'
time_data = data['time(s)']  # 時間數據（秒）
height_data = data['hight(m)']  # 高度數據（米）

# 如果列名不同，請根據實際情況修改，例如：
# time_data = data.iloc[:, 0]  # 第一列為時間
# height_data = data.iloc[:, 1]  # 第二列為高度

print(f"\n時間數據範圍：{time_data.min():.3f} ~ {time_data.max():.3f} 秒")
print(f"高度數據範圍：{height_data.min():.3f} ~ {height_data.max():.3f} 米")

# 定義自由落體的理論函數
# h = (1/2) * g * t^2
# 其中 h 是位移，g 是重力加速度，t 是時間
def free_fall_function(t, g):
    """
    自由落體函數
    參數：
    t: 時間 (秒)
    g: 重力加速度 (m/s²)
    
    返回：
    h: 位移 (米)
    """
    return 0.5 * g * t**2

# 進行曲線擬合
print("\n正在進行曲線擬合...")

try:
    # 使用curve_fit進行非線性最小二乘法擬合
    # popt: 最佳擬合參數
    # pcov: 參數的協方差矩陣
    popt, pcov = curve_fit(free_fall_function, time_data, height_data)
    
    # 提取擬合得到的重力加速度
    fitted_g = popt[0]
    
    # 計算擬合參數的標準誤差
    param_errors = np.sqrt(np.diag(pcov))
    g_error = param_errors[0]
    
    print(f"擬合成功！")
    print(f"擬合得到的重力加速度：{fitted_g:.4f} ± {g_error:.4f} m/s²")
    print(f"理論重力加速度：9.8000 m/s²")
    print(f"誤差百分比：{abs(fitted_g - 9.8) / 9.8 * 100:.2f}%")
    
except Exception as e:
    print(f"擬合失敗：{e}")
    exit()

# 生成擬合曲線的數據點
time_fit = np.linspace(start=0, stop=max(time_data), num=200)
height_fit = free_fall_function(time_fit, fitted_g)

# 計算R²決定係數（擬合優度）
ss_res = np.sum((height_data - free_fall_function(time_data, fitted_g))**2)
ss_tot = np.sum((height_data - np.mean(height_data))**2)
r_squared = 1 - (ss_res / ss_tot)
print(f"R² 決定係數：{r_squared:.4f}")

# 繪製圖形
plt.figure(figsize=(10, 7))

# 繪製原始數據點
plt.scatter(time_data, height_data, 
           color='blue', 
           s=50, 
           alpha=0.7, 
           label='實驗數據', 
           zorder=5)

# 繪製擬合曲線
plt.plot(time_fit, height_fit, 
         color='red', 
         linewidth=2, 
         label=f'擬合曲線 (g = {fitted_g:.3f} m/s²)', 
         zorder=4)

# 設定圖形標題和標籤
plt.title('自由落體運動數據擬合', fontsize=16, fontweight='bold')
plt.xlabel('時間 (秒)', fontsize=14)
plt.ylabel('位移 (米)', fontsize=14)

# 添加網格
plt.grid(True, alpha=0.3, linestyle='--')

# 添加圖例
plt.legend(fontsize=12, loc='upper left')

# 在圖上添加擬合信息
info_text = f'擬合方程：h = ½gt²\n'
info_text += f'重力加速度：{fitted_g:.4f} ± {g_error:.4f} m/s²\n'
info_text += f'R² = {r_squared:.4f}\n'
info_text += f'理論值誤差：{abs(fitted_g - 9.8) / 9.8 * 100:.2f}%'

plt.text(0.02, 0.98, info_text, 
         transform=plt.gca().transAxes, 
         fontsize=10,
         verticalalignment='top',
         bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.8))

# 調整佈局
plt.tight_layout()

# 顯示圖形
plt.show()

# 輸出詳細的統計信息
print("\n" + "="*50)
print("詳細擬合結果")
print("="*50)
print(f"擬合函數：h = (1/2) × g × t²")
print(f"擬合參數：")
print(f"  重力加速度 g = {fitted_g:.6f} ± {g_error:.6f} m/s²")
print(f"擬合質量：")
print(f"  R² 決定係數 = {r_squared:.6f}")
print(f"  均方根誤差 = {np.sqrt(ss_res / len(height_data)):.6f} m")
print(f"與理論值比較：")
print(f"  理論重力加速度 = 9.800000 m/s²")
print(f"  絕對誤差 = {abs(fitted_g - 9.8):.6f} m/s²")
print(f"  相對誤差 = {abs(fitted_g - 9.8) / 9.8 * 100:.4f}%")

# 輸出原始數據表
print(f"\n原始數據表：")
print(f"{'時間(s)':<10} {'高度(m)':<10} {'擬合值(m)':<12} {'殘差(m)':<10}")
print("-" * 45)
for i in range(len(time_data)):
    fitted_value = free_fall_function(time_data.iloc[i], fitted_g)
    residual = height_data.iloc[i] - fitted_value
    print(f"{time_data.iloc[i]:<10.3f} {height_data.iloc[i]:<10.5f} {fitted_value:<12.5f} {residual:<10.5f}")
