import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
import matplotlib
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

FILE_PATH = 'free_fall.xlsx'

try:
    data = pd.read_excel(FILE_PATH)
    print("成功讀取數據文件")
    print("數據概覽：")
    print(data.head())
    print(f"\n數據形狀：{data.shape}")
    
except FileNotFoundError:
    print(f"錯誤：找不到文件 {FILE_PATH}")
    print("請確保文件在正確的路徑中")
    exit()

time_data = data['time(s)']
height_data = data['height(m)']

print(f"\n時間數據範圍：{time_data.min():.3f} ~ {time_data.max():.3f} 秒")
print(f"高度數據範圍：{height_data.min():.3f} ~ {height_data.max():.3f} 米")


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


print("\n正在進行曲線擬合...")

try:
    popt, pcov = curve_fit(free_fall_function, time_data, height_data)
  
    fitted_g = popt[0]
    
    param_errors = np.sqrt(np.diag(pcov))
    g_error = param_errors[0]
    
    print(f"擬合成功！")
    print(f"擬合得到的重力加速度：{fitted_g:.4f} ± {g_error:.4f} m/s²")
    print(f"理論重力加速度：9.8000 m/s²")
    print(f"誤差百分比：{abs(fitted_g - 9.8) / 9.8 * 100:.2f}%")
    
except Exception as e:
    print(f"擬合失敗：{e}")
    exit()

time_fit = np.linspace(start=0, stop=max(time_data), num=200)
height_fit = free_fall_function(time_fit, fitted_g)

ss_res = np.sum((height_data - free_fall_function(time_data, fitted_g))**2)
ss_tot = np.sum((height_data - np.mean(height_data))**2)
r_squared = 1 - (ss_res / ss_tot)
print(f"R² 決定係數：{r_squared:.4f}")

plt.figure(figsize=(10, 7))

plt.scatter(time_data, height_data, 
           color='blue', 
           s=50, 
           alpha=0.7, 
           label='實驗數據', 
           zorder=5)

plt.plot(time_fit, height_fit, 
         color='red', 
         linewidth=2, 
         label=f'擬合曲線 (g = {fitted_g:.3f} m/s²)', 
         zorder=4)

plt.title('自由落體運動數據擬合', fontsize=16, fontweight='bold')
plt.xlabel('時間 (秒)', fontsize=14)
plt.ylabel('位移 (米)', fontsize=14)

plt.grid(True, alpha=0.3, linestyle='--')

plt.legend(fontsize=12, loc='upper left')

info_text = f'擬合方程：h = ½gt²\n'
info_text += f'重力加速度：{fitted_g:.4f} ± {g_error:.4f} m/s²\n'
info_text += f'R² = {r_squared:.4f}\n'
info_text += f'理論值誤差：{abs(fitted_g - 9.8) / 9.8 * 100:.2f}%'

plt.text(0.02, 0.98, info_text, 
         transform=plt.gca().transAxes, 
         fontsize=10,
         verticalalignment='top',
         bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.8))

plt.tight_layout()

plt.show()

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

print(f"\n原始數據表：")
print(f"{'時間(s)':<10} {'高度(m)':<10} {'擬合值(m)':<12} {'殘差(m)':<10}")
print("-" * 45)
for i in range(len(time_data)):
    fitted_value = free_fall_function(time_data.iloc[i], fitted_g)
    residual = height_data.iloc[i] - fitted_value
    print(f"{time_data.iloc[i]:<10.3f} {height_data.iloc[i]:<10.5f} {fitted_value:<12.5f} {residual:<10.5f}")
