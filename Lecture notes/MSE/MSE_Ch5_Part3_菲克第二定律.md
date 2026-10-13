# 第5章 擴散（Diffusion）講義 Part 3：菲克第二定律與非穩態擴散

> **範圍**：課本 5.4 菲克第二定律（Fick's second law）—非穩態擴散；教授簡報 p.19–25
> **跨章連結**：Part 2 的質量守恆推導；Part 4 的 $D = D_0\exp(-Q_d/RT)$（本份部分題目會先用到，公式見第 6 節）
> **本份例題**：課本 Example 5.2、5.3、Design Example 5.1、簡報 p.22–25 滲碳反求溫度
> **本份習題**：5.12、5.13、5.14、★5.15、5.16、5.17、5.18、★5.19、5.38、5.41、5.D3、5.D4（★ = 教授指定作業）

---

## 本份在全章的位置

| 講義 | 內容 | 一句話重點 |
|---|---|---|
| Part 1 | 擴散是什麼、原子怎麼動 | 空位擴散 vs 間隙擴散 |
| Part 2 | 菲克第一定律 | 穩態：$J = -D\,dC/dx$ |
| **Part 3（本份）** | **菲克第二定律** | **非穩態：$\dfrac{C_x - C_0}{C_s - C_0} = 1 - \text{erf}\left(\dfrac{x}{2\sqrt{Dt}}\right)$** |
| Part 4 | 溫度效應、半導體擴散、其他路徑 | $D = D_0\exp(-Q_d/RT)$ |
| 總複習 | 全章 | 公式卡＋題型判斷流程 |

**學習目標（對應課本 Learning Objective 2、3、4）**：
1. 寫出菲克第二定律，知道它用於**非穩態**擴散；
2. 寫出半無限固體（semi-infinite solid）、表面濃度固定時的解，並定義每個參數；
3. 熟練誤差函數（error function）查表與內插（interpolation）；
4. 會用 $x^2/Dt$ = 常數、$Dt$ = 常數做比例計算。

> **本份是全章計算題的重心**，考試大題幾乎都從這裡出。建議分兩次讀：第一次讀第 1–5 節＋例題；第二次做習題。

---

## 0. 用 PSPP 看非穩態擴散：滲碳（carburizing）

| PSPP 環節 | 齒輪滲碳 |
|---|---|
| **製程（Processing）** | 把低碳鋼放進富含碳氫氣體（如甲烷 methane, CH₄）的高溫爐中；表面碳濃度維持固定 $C_s$ |
| **結構（Structure）** | 碳原子以**間隙擴散**由表面往內部推進，形成「表面高、內部低」的濃度剖面，且剖面**隨時間往內推移** |
| **性質（Properties）** | 指定深度的碳含量決定該處的硬度（hardness）；硬化層深度 ∝ $\sqrt{Dt}$ |
| **表現（Performance）** | 齒輪表面耐磨、內部保有韌性（toughness），不易脆斷 |

> 工程問題通常是：「要在 0.5 mm 深處達到 0.8 wt% C，需在幾度處理幾小時？」這正是本份的核心計算。

---

## 1. 非穩態擴散（nonsteady-state diffusion）

### 1.1 定義

- 實際的擴散大多是**非穩態**：某一點的擴散通量與濃度梯度**隨時間改變**，造成擴散物種的**淨累積或淨消耗**。
- 濃度是位置與時間的函數：$C = C(x, t)$（簡報 p.19）。

```
 C
 │█
 │█╲╲ ╲
 │█ ╲ ╲  ╲              t₃ > t₂ > t₁
 │█  ╲  ╲   ╲
 │█   t₁  t₂   t₃       濃度剖面隨時間往內推進
 └──────────────── x
```

### 1.2 穩態 vs 非穩態

| | 穩態（Part 2） | 非穩態（本份） |
|---|---|---|
| 通量 $J$ | 不隨時間變 | 隨時間變 |
| 濃度剖面 | 固定（$D$ 為常數時為直線） | 隨時間改變（曲線往內推進） |
| 淨累積 | 無 | 有累積或消耗 |
| 使用公式 | 菲克第一定律 | 菲克第二定律 |
| 典型情境 | 氣體穿透薄板（兩側濃度固定、已達穩態） | 滲碳、脫碳、擴散偶、半導體摻雜 |

> 非穩態時第一定律**仍然成立**（每一瞬間、每一點都成立），只是 $dC/dx$ 一直在變，直接用它不方便，所以改用第二定律。

---

## 2. 菲克第二定律（Fick's second law）

### 2.1 推導（接續 Part 2 第 3.3 節）

**步驟 1：質量守恆**（Part 2 已推導）

$$\frac{\partial C}{\partial t} = -\frac{\partial J}{\partial x}$$

意義：某處濃度增加的速率 ＝ 流入減流出（通量沿 $x$ 方向減少，該處就累積）。

**步驟 2：代入菲克第一定律** $J = -D\dfrac{\partial C}{\partial x}$

$$\frac{\partial C}{\partial t} = \frac{\partial}{\partial x}\left(D\frac{\partial C}{\partial x}\right)\qquad(5.4a)$$

**步驟 3：若 $D$ 與濃度無關**（常數，可提出微分外）

$$\boxed{\frac{\partial C}{\partial t} = D\frac{\partial^2 C}{\partial x^2}}\qquad(5.4b)$$

> 簡報 p.19 特別強調：**這個形式假設 $D$ 與濃度無關**。每次使用前理論上都該確認這一點。

### 2.2 物理意義：曲率決定變化方向

$\dfrac{\partial^2 C}{\partial x^2}$ 是濃度剖面的**曲率**（curvature）：

| 剖面形狀 | $\partial^2C/\partial x^2$ | $\partial C/\partial t$ | 結果 |
|---|---|---|---|
| 向上凹（谷，∪） | > 0 | > 0 | 濃度**上升**，谷被填平 |
| 向下凹（峰，∩） | < 0 | < 0 | 濃度**下降**，峰被削平 |
| 直線 | = 0 | = 0 | **不變**（這就是穩態！） |

**結論**：擴散永遠在「把起伏抹平」。穩態直線剖面是第二定律在 $\partial C/\partial t = 0$ 時的特例，與 Part 2 的結論一致。

> **比喻**：在一盆水中滴入墨水，墨水的濃度峰會逐漸變矮、變寬，最後均勻。這正是第二定律描述的行為。

---

## 3. 半無限固體、表面濃度固定時的解

### 3.1 問題設定（簡報 p.20：Cu 擴散進 Al 棒）

**半無限固體**（semi-infinite solid）：擴散時間內，擴散原子**到不了棒的另一端**。判斷標準：棒長 $l > 10\sqrt{Dt}$。

**三個假設**：
1. 擴散前，溶質原子在固體中**均勻分布**，濃度為 $C_0$；
2. 表面位於 $x = 0$，$x$ 往固體內部增加；
3. 擴散開始前的瞬間定為 $t = 0$。

**初始條件**（initial condition）與**邊界條件**（boundary condition）：

| 條件 | 數學式 | 意義 |
|---|---|---|
| 初始條件 | $t = 0$，$0 \le x \le \infty$：$C = C_0$ | 一開始到處都是原始濃度 |
| 邊界條件 1 | $t > 0$，$x = 0$：$C = C_s$ | **表面濃度固定**（例如由氣相分壓維持） |
| 邊界條件 2 | $t > 0$，$x = \infty$：$C = C_0$ | 無限遠處不受影響 |

### 3.2 解（Eq. 5.5）

$$\boxed{\frac{C_x - C_0}{C_s - C_0} = 1 - \text{erf}\left(\frac{x}{2\sqrt{Dt}}\right)}$$

| 符號 | 意義 |
|---|---|
| $C_x$ | 時間 $t$ 時、深度 $x$ 處的濃度（簡報寫作 $C(x,t)$） |
| $C_0$ | 初始（背景）濃度（簡報寫作 $C_o$） |
| $C_s$ | 固定的表面濃度 |
| $\text{erf}(z)$ | 高斯誤差函數（Gaussian error function） |
| $z = \dfrac{x}{2\sqrt{Dt}}$ | 無因次（dimensionless）變數 |

```
 C
 Cs ┤╲
    │ ╲            ↕ Cs − C0
 Cx ┤- -╲- - -
    │    ↕ ╲       ↕ Cx − C0
 C0 ┤- - - - ╲______________
    └──┬──────────────────── x
       x
```

**左式的意義**：$\dfrac{C_x - C_0}{C_s - C_0}$ ＝ 在 $x$ 處，濃度已經「爬升了全程的幾成」。0 表示還沒變，1 表示已等於表面濃度。

### 3.3 誤差函數（error function）

**定義**：
$$\text{erf}(z) = \frac{2}{\sqrt\pi}\int_0^z e^{-y^2}\,dy$$

**必須熟悉的性質**：

| 性質 | 值 |
|---|---|
| $\text{erf}(0)$ | 0 |
| $\text{erf}(\infty)$ | 1（$z \ge 2.8$ 時已達 0.9999） |
| $\text{erf}(-z)$ | $-\text{erf}(z)$（奇函數 odd function） |
| $z$ 很小時 | $\text{erf}(z) \approx \dfrac{2z}{\sqrt\pi} = 1.128z$ |
| $\text{erf}(z) = 0.5$ | $z \approx 0.477$ |
| 互補誤差函數 | $\text{erfc}(z) = 1 - \text{erf}(z)$（complementary error function） |

**Table 5.1（考試會附，但要會用）**：

| $z$ | erf($z$) | $z$ | erf($z$) | $z$ | erf($z$) |
|---|---|---|---|---|---|
| 0 | 0 | 0.55 | 0.5633 | 1.3 | 0.9340 |
| 0.025 | 0.0282 | 0.60 | 0.6039 | 1.4 | 0.9523 |
| 0.05 | 0.0564 | 0.65 | 0.6420 | 1.5 | 0.9661 |
| 0.10 | 0.1125 | 0.70 | 0.6778 | 1.6 | 0.9763 |
| 0.15 | 0.1680 | 0.75 | 0.7112 | 1.7 | 0.9838 |
| 0.20 | 0.2227 | 0.80 | 0.7421 | 1.8 | 0.9891 |
| 0.25 | 0.2763 | 0.85 | 0.7707 | 1.9 | 0.9928 |
| 0.30 | 0.3286 | 0.90 | 0.7970 | 2.0 | 0.9953 |
| 0.35 | 0.3794 | 0.95 | 0.8209 | 2.2 | 0.9981 |
| 0.40 | 0.4284 | 1.0 | 0.8427 | 2.4 | 0.9993 |
| 0.45 | 0.4755 | 1.1 | 0.8802 | 2.6 | 0.9998 |
| 0.50 | 0.5205 | 1.2 | 0.9103 | 2.8 | 0.9999 |

### 3.4 公式推導（波茲曼變換 Boltzmann transformation）

> 課本直接給答案；這裡補上推導，理解「為什麼解只跟 $x/\sqrt{Dt}$ 有關」。考試通常不考推導，但懂了之後 3.5 節的比例關係就不用死背。

**步驟 1：引入相似變數**（similarity variable）$\eta = \dfrac{x}{2\sqrt{Dt}}$，假設 $C$ 只是 $\eta$ 的函數。

**步驟 2：連鎖律**（chain rule）

$$\frac{\partial C}{\partial t} = \frac{dC}{d\eta}\frac{\partial\eta}{\partial t} = \frac{dC}{d\eta}\left(-\frac{\eta}{2t}\right)$$

$$\frac{\partial^2 C}{\partial x^2} = \frac{d^2C}{d\eta^2}\left(\frac{\partial\eta}{\partial x}\right)^2 = \frac{d^2C}{d\eta^2}\cdot\frac{1}{4Dt}$$

**步驟 3：代入第二定律**，偏微分方程式（partial differential equation, PDE）變成常微分方程式（ordinary differential equation, ODE）：

$$-\frac{\eta}{2t}\frac{dC}{d\eta} = \frac{D}{4Dt}\frac{d^2C}{d\eta^2}\quad\Rightarrow\quad\frac{d^2C}{d\eta^2} = -2\eta\frac{dC}{d\eta}$$

**步驟 4：積分兩次**

$$\frac{dC}{d\eta} = A\,e^{-\eta^2}\quad\Rightarrow\quad C = A'\,\text{erf}(\eta) + B$$

**步驟 5：代入條件**
- $x = 0$（$\eta = 0$）：$C = C_s$ → $B = C_s$
- $x = \infty$ **或** $t = 0$（兩者都使 $\eta \to \infty$）：$C = C_0$ → $A' = C_0 - C_s$

$$C = C_s - (C_s - C_0)\,\text{erf}(\eta)\quad\Rightarrow\quad\frac{C - C_0}{C_s - C_0} = 1 - \text{erf}\left(\frac{x}{2\sqrt{Dt}}\right)\quad\checkmark$$

> **巧妙之處**：初始條件（$t = 0$）與遠處邊界條件（$x = \infty$）在 $\eta$ 座標中是**同一件事**，所以三個條件剛好被兩個常數滿足。

### 3.5 重要推論：$x^2/Dt$ = 常數、$Dt$ = 常數

若要在某深度達到**指定濃度** $C_1$，左式是常數：

$$\frac{C_1 - C_0}{C_s - C_0} = \text{常數}\ \Rightarrow\ \frac{x}{2\sqrt{Dt}} = \text{常數}\ (5.6a)\ \Rightarrow\ \boxed{\frac{x^2}{Dt} = \text{常數}}\ (5.6b)$$

**三種常見用法**：

| 情境 | 不變的量 | 比例式 | 例子 |
|---|---|---|---|
| **同溫度**（$D$ 不變），改深度 | $x^2/t$ | $\dfrac{x_1^2}{t_1} = \dfrac{x_2^2}{t_2}$ | 習題 5.19、5.38 |
| **同深度**，改溫度 | $Dt$ | $D_1t_1 = D_2t_2$（Eq. 5.7） | Example 5.3 |
| 改溫度也改深度 | $x^2/Dt$ | $\dfrac{x_1^2}{D_1t_1} = \dfrac{x_2^2}{D_2t_2}$ | Part 4 的 5.36、5.37 |

**擴散距離**（diffusion distance）的經驗法則：

$$x \sim \sqrt{Dt}$$

- 深度要**加倍**，時間要變**4 倍**；
- 時間變 4 倍，深度只變 **2 倍**。

> 這是本章最「划算」的公式：不需查 erf 表、不需知道 $C_s$、$C_0$，只要兩次處理達到「相同濃度」就能用。

### 3.6 erf 表內插法（簡報 p.24）

**情況 A：已知 erf($z$)，求 $z$**（最常見）

例：erf($z$) = 0.4210，夾在表中 0.35（0.3794）與 0.40（0.4284）之間：

| $z$ | erf($z$) |
|---|---|
| 0.35 | 0.3794 |
| $z$ | 0.4210 |
| 0.40 | 0.4284 |

$$\frac{z - 0.35}{0.40 - 0.35} = \frac{0.4210 - 0.3794}{0.4284 - 0.3794}\quad\Rightarrow\quad z = 0.35 + 0.05\times0.849 = 0.392$$

**情況 B：已知 $z$，求 erf($z$)**：同樣比例，只是未知數換到右邊。

> **口訣**：「左邊比例 ＝ 右邊比例」，**同一列的數字對齊寫**就不會錯。

---

## 4. 解題 SOP（非穩態、表面濃度固定）

```
① 確認是非穩態、表面濃度固定、半無限 → 用 Eq. 5.5
② 列出 C0, Cs, Cx（濃度單位只要一致，可直接用 wt%，不必換成 kg/m³！）
③ 算左式 (Cx − C0)/(Cs − C0)，再算 erf(z) = 1 − 左式
④ 查表內插求 z（或已知 z 求 erf）
⑤ 由 z = x / (2√(Dt)) 解出未知數：
     求 t：t = x² / (4z²D)
     求 x：x = 2z√(Dt)
     求 D：D = x² / (4z²t)  → 再求 T（Part 4）
⑥ 檢查單位（m、s）與合理性
```

> **重點**：第一定律要用 kg/m³，但 **Eq. 5.5 左式是濃度比值**，單位相消，wt% 可直接代入。這是兩條定律的關鍵差異之一。

---

## 5. 擴散偶（diffusion couple）的解（Eq. 5.15，習題 5.16–5.18 用）

### 5.1 設定

兩塊**半無限**合金接合（同一基地金屬，雜質濃度不同）：

- $x < 0$ 側：雜質濃度 $C_1$
- $x > 0$ 側：雜質濃度 $C_2$
- 界面原位置為 $x = 0$

$$C_x = C_2 + \left(\frac{C_1 - C_2}{2}\right)\left[1 - \text{erf}\left(\frac{x}{2\sqrt{Dt}}\right)\right]\qquad(5.15)$$

```
 C
 C1 ━━━━━━╲                 t = 0：在 x = 0 突然跳變
          │ ╲               t > 0：平滑 S 形
(C1+C2)/2 ┼─ ●
          │    ╲
 C2       │     ╲━━━━━━━━
          x = 0
```

### 5.2 推導（與 3.4 節同一套方法）

通解 $C = A + B\,\text{erf}(\eta)$，條件改為：
- $x \to -\infty$（$\eta \to -\infty$，erf → −1）：$C = C_1$ → $A - B = C_1$
- $x \to +\infty$（erf → +1）：$C = C_2$ → $A + B = C_2$

解得 $A = \dfrac{C_1 + C_2}{2}$，$B = -\dfrac{C_1 - C_2}{2}$：

$$C = \frac{C_1 + C_2}{2} - \frac{C_1 - C_2}{2}\text{erf}(\eta) = C_2 + \frac{C_1 - C_2}{2}\left[1 - \text{erf}(\eta)\right]\quad\checkmark$$

**重要推論**：界面 $x = 0$ 處 erf(0) = 0，濃度**永遠固定在平均值** $\dfrac{C_1 + C_2}{2}$。所以擴散偶的每一半，就相當於「表面濃度固定為 $\dfrac{C_1+C_2}{2}$」的半無限固體。

### 5.3 擴散偶解題 SOP

$$\frac{C_x - C_2}{(C_1 - C_2)/2} = 1 - \text{erf}(z)$$

先判斷 $x$ 在哪一側、$C_1$、$C_2$ 誰是誰，算出左式 → erf($z$) → $z$ → 未知數。

---

## 6. 預借 Part 4 的公式

本份部分題目需要由 Table 5.2 算 $D$、或由 $D$ 反求 $T$：

$$D = D_0\exp\left(-\frac{Q_d}{RT}\right)\qquad(5.8)$$

取自然對數後移項（簡報 p.25，「Eq. 5.9a 的改寫」）：

$$\ln D = \ln D_0 - \frac{Q_d}{RT}\quad\Rightarrow\quad\boxed{T = \frac{Q_d}{R(\ln D_0 - \ln D)}}$$

**本份會用到的 Table 5.2 數據**：

| 擴散物種 | 基地 | $D_0$（m²/s） | $Q_d$（J/mol） |
|---|---|---|---|
| C | γ-Fe（FCC） | $2.3\times10^{-5}$ | 148,000 |
| C | α-Fe（BCC） | $1.1\times10^{-6}$ | 87,400 |

---

## 7. 例題講解

### 例題 1（課本 Example 5.2）滲碳時間計算 I

**題目**：初始碳含量均勻為 0.25 wt% 的鋼，在 950 °C 滲碳。表面碳濃度突然升到 1.20 wt% 並維持。多久後，表面下 0.5 mm 處碳含量可達 0.80 wt%？950 °C 時碳在鐵中 $D = 1.6\times10^{-11}$ m²/s；假設鋼件為半無限。

**解**：

**步驟 1：列數據**

| $C_0$ | $C_s$ | $C_x$ | $x$ | $D$ |
|---|---|---|---|---|
| 0.25 wt% | 1.20 wt% | 0.80 wt% | $5\times10^{-4}$ m | $1.6\times10^{-11}$ m²/s |

**步驟 2：算 erf($z$)**

$$\frac{C_x - C_0}{C_s - C_0} = \frac{0.80 - 0.25}{1.20 - 0.25} = 0.5789 = 1 - \text{erf}(z)\ \Rightarrow\ \text{erf}(z) = 0.4210$$

**步驟 3：內插求 $z$**（見 3.6 節）：$z = 0.392$

**步驟 4：解 $t$**

$$z = \frac{x}{2\sqrt{Dt}}\ \Rightarrow\ \frac{5\times10^{-4}}{2\sqrt{(1.6\times10^{-11})t}} = \frac{62.5\ \text{s}^{1/2}}{\sqrt t} = 0.392$$

$$t = \left(\frac{62.5}{0.392}\right)^2 = 25{,}400\ \text{s} = 7.1\ \text{h}$$

**半無限檢查**：$10\sqrt{Dt} = 10\sqrt{(1.6\times10^{-11})(25{,}400)} = 6.4$ mm，鋼件只要比 6.4 mm 厚即可視為半無限 ✓

---

### 例題 2（課本 Example 5.3）兩溫度、同效果的時間換算

**題目**：Cu 在 Al 中的擴散係數，500 °C 為 $4.8\times10^{-14}$、600 °C 為 $5.3\times10^{-13}$ m²/s。在 500 °C 要多久才能得到與 600 °C 處理 10 h 相同的擴散結果（某特定點的 Cu 濃度相同）？

**解**：同一位置 $x_0$、同一濃度 → $\dfrac{x_0^2}{D_{500}t_{500}} = \dfrac{x_0^2}{D_{600}t_{600}}$ → $D_{500}t_{500} = D_{600}t_{600}$

$$t_{500} = \frac{D_{600}t_{600}}{D_{500}} = \frac{(5.3\times10^{-13})(10\ \text{h})}{4.8\times10^{-14}} = 110.4\ \text{h}$$

**觀察**：溫度只降 100 °C，時間就要 11 倍。時間單位可以直接用 h，因為比例中單位相消。

---

### 例題 3（課本 Design Example 5.1）熱處理溫度—時間的規格設計

**題目**：鋼齒輪初始碳含量 0.20 wt%，表面維持 1.00 wt%。要在表面下 0.75 mm 處建立 0.60 wt% C。在 900–1050 °C 範圍內規劃溫度與時間（用 Table 5.2 中 C 在 γ-Fe 的數據）。

**解**：

**步驟 1**：
$$\frac{0.60 - 0.20}{1.00 - 0.20} = 0.5 = 1 - \text{erf}(z)\ \Rightarrow\ \text{erf}(z) = 0.5$$

**步驟 2**：內插得 $z \approx 0.477$（課本取 0.4747，差異在於內插誤差，不影響結論）

$$\frac{7.5\times10^{-4}\ \text{m}}{2\sqrt{Dt}} = 0.4747\ \Rightarrow\ Dt = 6.24\times10^{-7}\ \text{m}^2$$

**步驟 3**：代入 $D = (2.3\times10^{-5})\exp\left(-\dfrac{148{,}000}{8.31T}\right)$

$$t\ (\text{s}) = \frac{6.24\times10^{-7}}{(2.3\times10^{-5})\exp(-17{,}810/T)} = \frac{0.0271}{\exp(-17{,}810/T)}$$

| 溫度（°C） | 時間（s） | 時間（h） |
|---|---|---|
| 900 | 106,400 | 29.6 |
| 950 | 57,200 | 15.9 |
| 1000 | 32,300 | 9.0 |
| 1050 | 19,000 | 5.3 |

**設計觀點**：溫度升高 150 °C，時間縮為約 1/6。實務上要在「爐子耗能、生產時間」與「高溫造成晶粒成長（grain growth）、變形」之間取捨。設計題**沒有唯一答案**，給出一組合理的 (T, t) 並說明理由即可。

---

### 例題 4（教授簡報 p.22–25）由滲碳結果反求處理溫度

**題目**：FCC 鐵碳合金（iron–carbon alloy）初始含 0.20 wt% C，在高溫、表面碳濃度維持 1.0 wt% 的氣氛中滲碳。49.5 h 後，表面下 4.0 mm 處的碳濃度為 0.35 wt%，求處理溫度。

**解**：

**步驟 1：列數據**：$t = 49.5$ h，$x = 4\times10^{-3}$ m，$C_x = 0.35$，$C_s = 1.0$，$C_0 = 0.20$ wt%

**步驟 2**：
$$\frac{0.35 - 0.20}{1.0 - 0.20} = 0.1875 = 1 - \text{erf}(z)\ \Rightarrow\ \text{erf}(z) = 0.8125$$

**步驟 3：內插**

| $z$ | erf($z$) |
|---|---|
| 0.90 | 0.7970 |
| $z$ | 0.8125 |
| 0.95 | 0.8209 |

$$\frac{z - 0.90}{0.95 - 0.90} = \frac{0.8125 - 0.7970}{0.8209 - 0.7970}\ \Rightarrow\ z = 0.93$$

**步驟 4：解 $D$**
$$D = \frac{x^2}{4z^2t} = \frac{(4\times10^{-3})^2}{(4)(0.93)^2(49.5\ \text{h})(3600\ \text{s/h})} = 2.6\times10^{-11}\ \text{m}^2/\text{s}$$

**步驟 5：由 $D$ 反求 $T$**（Table 5.2，C 在 FCC Fe）

$$T = \frac{Q_d}{R(\ln D_0 - \ln D)} = \frac{148{,}000}{(8.314)\left[\ln(2.3\times10^{-5}) - \ln(2.6\times10^{-11})\right]} = \frac{148{,}000}{(8.314)(13.69)}$$

$$T = 1300\ \text{K} = 1027\ ^\circ\text{C}$$

**合理性檢查**：1027 °C > 912 °C，確實是 FCC（γ-Fe）✓（題目說 FCC，所以要選 γ-Fe 的數據）。

> **這是「全章串連型」題目**：Eq. 5.5（erf）→ 內插 → 求 $D$ → Eq. 5.8 反求 $T$。習題 5.41、5.18 是同一題型，考試出現機率很高。

---

## 8. 章末習題詳解

### 習題 5.12　證明高斯解也滿足第二定律（證明題）

**題目**：Show that
$$C_x = \frac{B}{\sqrt{Dt}}\exp\left(-\frac{x^2}{4Dt}\right)$$
is also a solution to Equation 5.4b. The parameter $B$ is a constant, being independent of both $x$ and $t$. *Hint*: From Equation 5.4b, demonstrate that $\dfrac{\partial}{\partial t}\left[\dfrac{B}{\sqrt{Dt}}\exp\left(-\dfrac{x^2}{4Dt}\right)\right]$ is equal to $D\dfrac{\partial^2}{\partial x^2}\left[\dfrac{B}{\sqrt{Dt}}\exp\left(-\dfrac{x^2}{4Dt}\right)\right]$.

**證明**：令 $K = \dfrac{B}{\sqrt D}$（常數），$E = \exp\left(-\dfrac{x^2}{4Dt}\right)$，則 $C = K\,t^{-1/2}E$。

**左邊：對 $t$ 微分**（乘積法則 product rule）

$$\frac{\partial E}{\partial t} = E\cdot\frac{x^2}{4Dt^2}$$

$$\frac{\partial C}{\partial t} = K\left[-\frac12t^{-3/2}E + t^{-1/2}E\frac{x^2}{4Dt^2}\right] = K\,t^{-3/2}E\left[-\frac12 + \frac{x^2}{4Dt}\right]$$

**右邊：對 $x$ 微分兩次**

$$\frac{\partial C}{\partial x} = K\,t^{-1/2}E\left(-\frac{x}{2Dt}\right)$$

$$\frac{\partial^2 C}{\partial x^2} = K\,t^{-1/2}\left[E\left(-\frac{1}{2Dt}\right) + E\left(-\frac{x}{2Dt}\right)^2\right] = K\,t^{-1/2}E\left[-\frac{1}{2Dt} + \frac{x^2}{4D^2t^2}\right]$$

$$D\frac{\partial^2 C}{\partial x^2} = K\,t^{-1/2}E\left[-\frac{1}{2t} + \frac{x^2}{4Dt^2}\right] = K\,t^{-3/2}E\left[-\frac12 + \frac{x^2}{4Dt}\right]$$

**左邊 ＝ 右邊**，得證。∎

> **物理意義**：這是「表面有**固定總量**的溶質薄層、向內擴散」的解（總量不變、表面濃度逐漸降低）。它就是 Part 4 半導體**驅入擴散**（drive-in diffusion）的 Eq. 5.11：$C = \dfrac{Q_0}{\sqrt{\pi Dt}}\exp\left(-\dfrac{x^2}{4Dt}\right)$。比較：
>
> | | erf 解（Eq. 5.5） | 高斯解（本題、Eq. 5.11） |
> |---|---|---|
> | 表面條件 | 表面**濃度**固定 | 溶質**總量**固定 |
> | 表面濃度 | 永遠 $C_s$ | 隨時間 $\propto 1/\sqrt t$ 下降 |
> | 應用 | 滲碳、預沉積（predeposition） | 驅入擴散 |

---

### 習題 5.13　滲碳所需時間

**題目**：Determine the carburizing time necessary to achieve a carbon concentration of 0.30 wt% at a position 4 mm into an iron–carbon alloy that initially contains 0.10 wt% C. The surface concentration is to be maintained at 0.90 wt% C, and the treatment is to be conducted at 1100 °C. Use the diffusion data for γ-Fe in Table 5.2.

**解**：

**步驟 1**：
$$\frac{0.30 - 0.10}{0.90 - 0.10} = 0.25 = 1 - \text{erf}(z)\ \Rightarrow\ \text{erf}(z) = 0.75$$

**步驟 2：內插**（0.80 → 0.7421；0.85 → 0.7707）
$$z = 0.80 + 0.05\times\frac{0.75 - 0.7421}{0.7707 - 0.7421} = 0.80 + 0.05\times0.276 = 0.814$$

**步驟 3：1100 °C（1373 K）的 $D$**
$$D = (2.3\times10^{-5})\exp\left[-\frac{148{,}000}{(8.31)(1373)}\right] = (2.3\times10^{-5})\,e^{-12.97} = 5.35\times10^{-11}\ \text{m}^2/\text{s}$$

**步驟 4**：
$$t = \frac{x^2}{4z^2D} = \frac{(4\times10^{-3})^2}{(4)(0.814)^2(5.35\times10^{-11})} = 1.13\times10^5\ \text{s} = 31.4\ \text{h}$$

**答案**：約 31 h。

---

### 習題 5.14　脫碳（decarburization）：濃度降到 0.25 wt% 的位置

**題目**：An FCC iron–carbon alloy initially containing 0.55 wt% C is exposed to an oxygen-rich and virtually carbon-free atmosphere at 1325 K (1052 °C). Under these circumstances, the carbon diffuses from the alloy and reacts at the surface with the oxygen in the atmosphere—that is, the carbon concentration at the surface position is maintained essentially at 0 wt% C. (This process of carbon depletion is termed *decarburization*.) At what position will the carbon concentration be 0.25 wt% after a 10-h treatment? The value of $D$ at 1325 K is $3.3\times10^{-11}$ m²/s.

**觀念**：**Eq. 5.5 同樣適用於「往外擴散」**，只要表面濃度固定即可。這裡 $C_s = 0 < C_0$，分子分母都是負數，比值仍為正。

**解**：

**步驟 1**：$C_0 = 0.55$，$C_s = 0$，$C_x = 0.25$ wt%

$$\frac{C_x - C_0}{C_s - C_0} = \frac{0.25 - 0.55}{0 - 0.55} = \frac{-0.30}{-0.55} = 0.5455 = 1 - \text{erf}(z)\ \Rightarrow\ \text{erf}(z) = 0.4545$$

**步驟 2：內插**（0.40 → 0.4284；0.45 → 0.4755）
$$z = 0.40 + 0.05\times\frac{0.4545 - 0.4284}{0.4755 - 0.4284} = 0.40 + 0.05\times0.554 = 0.428$$

**步驟 3**：$t = 10\ \text{h} = 36{,}000$ s
$$x = 2z\sqrt{Dt} = 2(0.428)\sqrt{(3.3\times10^{-11})(36{,}000)} = 2(0.428)(1.09\times10^{-3}) = 9.3\times10^{-4}\ \text{m}$$

**答案**：約 0.93 mm 深處。

```
 C (wt%)
0.55 ┤          ___________   ← C0（內部未受影響）
     │        ／
0.25 ┤- - - ●                 ← x ≈ 0.93 mm
     │   ／
  0  ┼／                       ← Cs = 0（表面）
     └───────────────── x
```

> **工程意義**：脫碳會使鋼表面變軟、疲勞強度下降，熱處理時常用保護氣氛（protective atmosphere）避免。

---

### ★習題 5.15　氮化：25 h 後 2 mm 處的濃度（作業）

**題目**：Nitrogen from a gaseous phase is to be diffused into pure iron at 675 °C. If the surface concentration is maintained at 0.2 wt% N, what will be the concentration 2 mm from the surface after 25 h? The diffusion coefficient for nitrogen in iron at 675 °C is $2.8\times10^{-11}$ m²/s.

**解題思路**：這題是「**已知 $z$，求 erf($z$)**」，方向和前面相反。純鐵 → $C_0 = 0$。

**步驟 1：算 $z$**
$$Dt = (2.8\times10^{-11})(25\times3600) = 2.52\times10^{-6}\ \text{m}^2$$

$$z = \frac{x}{2\sqrt{Dt}} = \frac{2\times10^{-3}}{2\sqrt{2.52\times10^{-6}}} = \frac{2\times10^{-3}}{2(1.587\times10^{-3})} = 0.63$$

**步驟 2：內插求 erf(0.63)**（0.60 → 0.6039；0.65 → 0.6420）
$$\frac{0.63 - 0.60}{0.65 - 0.60} = \frac{\text{erf}(z) - 0.6039}{0.6420 - 0.6039}\ \Rightarrow\ \text{erf}(0.63) = 0.6039 + 0.6\times0.0381 = 0.6268$$

**步驟 3：求 $C_x$**
$$\frac{C_x - 0}{0.2 - 0} = 1 - 0.6268 = 0.3732\ \Rightarrow\ C_x = 0.0746\ \text{wt\%}$$

**答案**：$C_x \approx 0.075$ wt% N

> **易錯**：$C_0 = 0$（**純鐵**），別漏看。675 °C < 912 °C，是 α-Fe；題目已給 $D$，不必查表。

---

### 習題 5.16　Ni–Cu 擴散偶的加熱時間

**題目**：Consider a diffusion couple composed of two semi-infinite solids of the same metal and that each side of the diffusion couple has a different concentration of the same elemental impurity; furthermore, assume each impurity level is constant throughout its side of the diffusion couple. For this situation, the solution to Fick's second law (assuming that the diffusion coefficient for the impurity is independent of concentration) is as follows:

$$C_x = C_2 + \left(\frac{C_1 - C_2}{2}\right)\left[1 - \text{erf}\left(\frac{x}{2\sqrt{Dt}}\right)\right]\qquad(5.15)$$

The schematic diffusion profile in Figure 5.13 shows these concentration parameters as well as concentration profiles at times $t = 0$ and $t > 0$. Please note that at $t = 0$, the $x = 0$ position is taken as the initial diffusion couple interface, whereas $C_1$ is the impurity concentration for $x < 0$, and $C_2$ is the impurity content for $x > 0$.

Consider a diffusion couple composed of pure nickel and a 55 wt% Ni–45 wt% Cu alloy (similar to the couple shown in Figure 5.1). Determine the time this diffusion couple must be heated at 1000 °C (1273 K) in order to achieve a composition of 56.5 wt% Ni a distance of 15 μm into the Ni–Cu alloy referenced to the original interface. Values for the preexponential and activation energy for this diffusion system are $2.3\times10^{-4}$ m²/s and 252,000 J/mol.

**解**：

**步驟 1：分配 $C_1$、$C_2$**（以 Ni 濃度為「雜質濃度」）
- $x < 0$：純 Ni → $C_1 = 100$ wt% Ni
- $x > 0$：合金 → $C_2 = 55$ wt% Ni
- 所求點在合金側 $x = +15\ \mu\text{m}$，$C_x = 56.5$ wt% Ni

**步驟 2**：
$$\frac{C_x - C_2}{(C_1 - C_2)/2} = \frac{56.5 - 55}{(100 - 55)/2} = \frac{1.5}{22.5} = 0.0667 = 1 - \text{erf}(z)\ \Rightarrow\ \text{erf}(z) = 0.9333$$

**步驟 3：內插**（1.2 → 0.9103；1.3 → 0.9340）
$$z = 1.2 + 0.1\times\frac{0.9333 - 0.9103}{0.9340 - 0.9103} = 1.2 + 0.1\times0.970 = 1.297$$

**步驟 4：1273 K 的 $D$**
$$D = (2.3\times10^{-4})\exp\left[-\frac{252{,}000}{(8.31)(1273)}\right] = 1.04\times10^{-14}\ \text{m}^2/\text{s}$$

**步驟 5**：
$$t = \frac{x^2}{4z^2D} = \frac{(15\times10^{-6})^2}{(4)(1.297)^2(1.04\times10^{-14})} = 3.2\times10^3\ \text{s} \approx 0.9\ \text{h}$$

**答案**：約 3200 s（0.9 h）。

> **易錯**：$x$ 是 **μm**（$10^{-6}$ m）。界面處 Ni 濃度永遠是 $(100 + 55)/2 = 77.5$ wt%。

---

### 習題 5.17　Co–Fe 擴散偶的位置

**題目**：Consider a diffusion couple composed of two cobalt–iron alloys; one has a composition of 75 wt% Co–25 wt% Fe; the other alloy composition is 50 wt% Co–50 wt% Fe. If this couple is heated to a temperature of 800 °C (1073 K) for 20,000 s, determine how far from the original interface into the 50 wt% Co–50 wt% Fe alloy the composition has increased to 52 wt% Co–48 wt% Fe. For the diffusion coefficient, assume values of $6.6\times10^{-6}$ m²/s and 247,000 J/mol, respectively, for the preexponential and activation energy.

**解**：

**步驟 1**：以 Co 濃度計：$C_1 = 75$（$x < 0$），$C_2 = 50$（$x > 0$），$C_x = 52$ wt% Co

**步驟 2**：
$$\frac{52 - 50}{(75 - 50)/2} = \frac{2}{12.5} = 0.16 = 1 - \text{erf}(z)\ \Rightarrow\ \text{erf}(z) = 0.84$$

**步驟 3：內插**（0.95 → 0.8209；1.0 → 0.8427）
$$z = 0.95 + 0.05\times\frac{0.84 - 0.8209}{0.8427 - 0.8209} = 0.95 + 0.05\times0.876 = 0.994$$

**步驟 4：1073 K 的 $D$**
$$D = (6.6\times10^{-6})\exp\left[-\frac{247{,}000}{(8.31)(1073)}\right] = 6.15\times10^{-18}\ \text{m}^2/\text{s}$$

**步驟 5**：
$$x = 2z\sqrt{Dt} = 2(0.994)\sqrt{(6.15\times10^{-18})(20{,}000)} = 2(0.994)(3.51\times10^{-7}) = 7.0\times10^{-7}\ \text{m}$$

**答案**：約 0.70 μm。

> **觀察**：$D$ 極小（$10^{-18}$），5.5 小時只擴散不到 1 μm。Co、Fe 都是大原子，以空位機制擴散，這呼應 Part 1 的機制比較。

---

### 習題 5.18　Ag–Au 擴散偶反求溫度（挑戰題）

**題目**：Consider a diffusion couple between silver and a gold alloy that contains 10 wt% silver. This couple is heat treated at an elevated temperature and it was found that after 850 s, the concentration of silver had increased to 12 wt% at 10 μm from the interface into the Ag–Au alloy. Assuming preexponential and activation energy values of $7.2\times10^{-6}$ m²/s and 168,000 J/mol, respectively, compute the temperature of this heat treatment. (*Note*: You may find Figure 5.13 and Equation 5.15 helpful.)

**解題思路**：擴散偶（Eq. 5.15）→ $z$ → $D$ → 反求 $T$。結合本份兩個重點題型。

**步驟 1**：以 Ag 濃度計：$C_1 = 100$（純 Ag，$x < 0$），$C_2 = 10$（Au 合金，$x > 0$），$C_x = 12$ wt% Ag，$x = 10\ \mu\text{m}$

**步驟 2**：
$$\frac{12 - 10}{(100 - 10)/2} = \frac{2}{45} = 0.0444 = 1 - \text{erf}(z)\ \Rightarrow\ \text{erf}(z) = 0.9556$$

**步驟 3：內插**（1.4 → 0.9523；1.5 → 0.9661）
$$z = 1.4 + 0.1\times\frac{0.9556 - 0.9523}{0.9661 - 0.9523} = 1.4 + 0.1\times0.239 = 1.424$$

**步驟 4：求 $D$**
$$D = \frac{x^2}{4z^2t} = \frac{(10\times10^{-6})^2}{(4)(1.424)^2(850)} = 1.45\times10^{-14}\ \text{m}^2/\text{s}$$

**步驟 5：反求 $T$**
$$T = \frac{Q_d}{R(\ln D_0 - \ln D)} = \frac{168{,}000}{(8.31)\left[\ln(7.2\times10^{-6}) - \ln(1.45\times10^{-14})\right]} = \frac{168{,}000}{(8.31)(20.02)}$$

$$T \approx 1010\ \text{K}\ (\approx 737\ ^\circ\text{C})$$

**答案**：約 1010 K。

> **計算技巧**：$\ln D_0 - \ln D = \ln\dfrac{D_0}{D} = \ln\dfrac{7.2\times10^{-6}}{1.45\times10^{-14}} = \ln(4.97\times10^8) = 20.02$。先算比值再取對數，按計算機比較不會錯。

---

### ★習題 5.19　同溫度、改深度：時間要多久？（作業）

**題目**：For a steel alloy, it has been determined that a carburizing heat treatment of 15 h duration will raise the carbon concentration to 0.35 wt% at a point 2.0 mm from the surface. Estimate the time necessary to achieve the same concentration at a 6.0-mm position for an identical steel and at the same carburizing temperature.

**解題思路**：相同鋼材、相同溫度 → $D$ 相同；相同濃度 → $\dfrac{x^2}{Dt}$ = 常數 → $\dfrac{x^2}{t}$ = 常數。

$$\frac{x_1^2}{t_1} = \frac{x_2^2}{t_2}\ \Rightarrow\ t_2 = t_1\left(\frac{x_2}{x_1}\right)^2 = (15\ \text{h})\left(\frac{6.0}{2.0}\right)^2 = 135\ \text{h}$$

**答案**：135 h。

> **觀念**：深度變 3 倍，時間變 $3^2 = 9$ 倍。單位（mm、h）在比例中相消，可直接代入。本題**不需要** erf 表、$C_0$、$C_s$。

---

### 習題 5.38　同溫度、改時間：位置在哪？

**題目**：Consider the diffusion of some hypothetical metal Y into another hypothetical metal Z at 950 °C; after 10 h the concentration at the 0.5 mm position (in metal Z) is 2.0 wt% Y. At what position will the concentration also be 2.0 wt% Y after a 17.5-h heat treatment again at 950 °C? Assume preexponential and activation energy values of $4.3\times10^{-4}$ m²/s and 180,000 J/mol, respectively, for this diffusion system.

**解**：同溫度 → $D$ 相同 → $\dfrac{x^2}{t}$ = 常數

$$x_2 = x_1\sqrt{\frac{t_2}{t_1}} = (0.5\ \text{mm})\sqrt{\frac{17.5}{10}} = 0.66\ \text{mm}$$

**答案**：約 0.66 mm。

> **陷阱**：題目給的 $D_0$、$Q_d$ 是**多餘資訊**（溫度相同，$D$ 會消掉）。看到兩次處理溫度相同，就不要去算 $D$。

---

### 習題 5.41　由滲碳結果反求溫度（簡報例題的變化題）

**題目**：An FCC iron–carbon alloy initially containing 0.10 wt% C is carburized at an elevated temperature and in an atmosphere in which the surface carbon concentration is maintained at 1.10 wt%. If, after 48 h, the concentration of carbon is 0.30 wt% at a position 3.5 mm below the surface, determine the temperature at which the treatment was carried out.

**解**（步驟與例題 4 完全相同）：

**步驟 1**：
$$\frac{0.30 - 0.10}{1.10 - 0.10} = 0.20 = 1 - \text{erf}(z)\ \Rightarrow\ \text{erf}(z) = 0.80$$

**步驟 2：內插**（0.90 → 0.7970；0.95 → 0.8209）
$$z = 0.90 + 0.05\times\frac{0.80 - 0.7970}{0.8209 - 0.7970} = 0.90 + 0.05\times0.126 = 0.906$$

**步驟 3**：
$$D = \frac{x^2}{4z^2t} = \frac{(3.5\times10^{-3})^2}{(4)(0.906)^2(48\times3600)} = 2.16\times10^{-11}\ \text{m}^2/\text{s}$$

**步驟 4**（C 在 γ-Fe）：
$$T = \frac{148{,}000}{(8.31)\ln\dfrac{2.3\times10^{-5}}{2.16\times10^{-11}}} = \frac{148{,}000}{(8.31)\ln(1.065\times10^6)} = \frac{148{,}000}{(8.31)(13.88)} \approx 1283\ \text{K}\ (1010\ ^\circ\text{C})$$

**答案**：約 1283 K（1010 °C）。1010 °C > 912 °C，FCC ✓

---

### 習題 5.D3　鋼軸氮化（nitriding）熱處理設計（設計題）

**題目**：The wear resistance of a steel shaft is to be improved by hardening its surface by increasing the nitrogen content within an outer surface layer as a result of nitrogen diffusion into the steel; the nitrogen is to be supplied from an external nitrogen-rich gas at an elevated and constant temperature. The initial nitrogen content of the steel is 0.0025 wt%, whereas the surface concentration is to be maintained at 0.45 wt%. For this treatment to be effective, a nitrogen content of 0.12 wt% must be established at a position 0.45 mm below the surface. Specify an appropriate heat treatment in terms of temperature and time for a temperature between 475 °C and 625 °C. The preexponential and activation energy for the diffusion of nitrogen in iron are $5\times10^{-7}$ m²/s and 77,000 J/mol, respectively, over this temperature range.

**解**：

**步驟 1**：
$$\frac{0.12 - 0.0025}{0.45 - 0.0025} = \frac{0.1175}{0.4475} = 0.2626 = 1 - \text{erf}(z)\ \Rightarrow\ \text{erf}(z) = 0.7374$$

**步驟 2：內插**（0.75 → 0.7112；0.80 → 0.7421）
$$z = 0.75 + 0.05\times\frac{0.7374 - 0.7112}{0.7421 - 0.7112} = 0.75 + 0.05\times0.848 = 0.792$$

**步驟 3：求所需 $Dt$**
$$Dt = \left(\frac{x}{2z}\right)^2 = \left(\frac{4.5\times10^{-4}}{2\times0.792}\right)^2 = 8.06\times10^{-8}\ \text{m}^2$$

**步驟 4：各溫度的 $D$ 與時間** $t = \dfrac{8.06\times10^{-8}}{D}$，$D = (5\times10^{-7})\exp\left(-\dfrac{77{,}000}{8.31T}\right)$

| 溫度（°C） | $T$（K） | $D$（m²/s） | $t$（s） | $t$（h） |
|---|---|---|---|---|
| 475 | 748 | $2.08\times10^{-12}$ | 38,700 | 10.7 |
| 500 | 773 | $3.11\times10^{-12}$ | 25,900 | 7.2 |
| 550 | 823 | $6.45\times10^{-12}$ | 12,500 | 3.5 |
| 600 | 873 | $1.23\times10^{-11}$ | 6,560 | 1.8 |
| 625 | 898 | $1.65\times10^{-11}$ | 4,880 | 1.4 |

**參考答案**：例如 **550 °C、約 3.5 h**（或表中任一組）。

> **設計說明**：氮化（nitriding）通常在較低溫（約 500–570 °C）進行，優點是處理溫度低、工件變形小，缺點是時間較長。整個溫度範圍都低於 912 °C，鐵為 α-Fe。

---

### 習題 5.D4　齒輪滲碳設計：表面濃度與時間（設計題）

**題目**：The wear resistance of a steel gear is to be improved by hardening its surface, as described in Design Example 5.1. However, in this case, the initial carbon content of the steel is 0.15 wt%, and a carbon content of 0.75 wt% is to be established at a position 0.65 mm below the surface. Furthermore, the surface concentration is to be maintained constant, but may be varied between 1.2 and 1.4 wt% C. Specify an appropriate heat treatment in terms of surface carbon concentration and time, and for a temperature between 1000 °C and 1200 °C.

**解題思路**：這題有**兩個可調變數**（$C_s$、$T$），先選 $C_s$ 求 $Dt$，再選 $T$ 求 $t$。溫度 > 912 °C → 用 C 在 γ-Fe 的數據。

**步驟 1：各 $C_s$ 對應的 $z$ 與 $Dt$**（$x = 6.5\times10^{-4}$ m）

| $C_s$（wt%） | $\dfrac{0.75 - 0.15}{C_s - 0.15}$ | erf($z$) | $z$ | $Dt = (x/2z)^2$（m²） |
|---|---|---|---|---|
| 1.2 | 0.5714 | 0.4286 | 0.400 | $6.60\times10^{-7}$ |
| 1.3 | 0.5217 | 0.4783 | 0.453 | $5.15\times10^{-7}$ |
| 1.4 | 0.4800 | 0.5200 | 0.499 | $4.23\times10^{-7}$ |

（內插示範：$C_s = 1.2$ 時，erf = 0.4286 介於 0.40（0.4284）與 0.45（0.4755）之間，$z = 0.40 + 0.05\times0.004 \approx 0.400$）

**步驟 2：各溫度的 $D$**（$D_0 = 2.3\times10^{-5}$，$Q_d = 148{,}000$）

| 溫度（°C） | $D$（m²/s） |
|---|---|
| 1000 | $1.93\times10^{-11}$ |
| 1100 | $5.35\times10^{-11}$ |
| 1200 | $1.29\times10^{-10}$ |

**步驟 3：所需時間（h）** $t = Dt / D$

| $C_s$ ＼ 溫度 | 1000 °C | 1100 °C | 1200 °C |
|---|---|---|---|
| 1.2 wt% | 9.5 | 3.4 | 1.4 |
| 1.3 wt% | 7.4 | 2.7 | 1.1 |
| 1.4 wt% | 6.1 | 2.2 | 0.91 |

**參考答案**：例如 **$C_s$ = 1.2 wt%、1100 °C、約 3.4 h**（或表中任一組並說明理由）。

> **設計觀點**：$C_s$ 愈高或溫度愈高，時間愈短；但表面碳過高可能形成脆的碳化物（雪明碳鐵 cementite, Fe₃C），溫度過高則晶粒粗化、變形增加。好的設計答案要**說出取捨**。

---

## 9. 本節總整理

| 主題 | 核心內容 | 考試形式 |
|---|---|---|
| 非穩態 | $J$、$C(x)$ 隨時間變，有累積 | 名詞解釋、與穩態比較 |
| 菲克第二定律 | $\partial C/\partial t = D\,\partial^2C/\partial x^2$（$D$ 與濃度無關） | 寫出公式、推導 |
| 曲率意義 | 谷填平、峰削平；直線不變 ＝ 穩態 | 概念題 |
| 半無限固體 | $l > 10\sqrt{Dt}$ | 判斷條件 |
| erf 解（Eq. 5.5） | $\dfrac{C_x - C_0}{C_s - C_0} = 1 - \text{erf}\left(\dfrac{x}{2\sqrt{Dt}}\right)$ | **必考計算** |
| 邊界／初始條件 | $t = 0$：$C_0$；$x = 0$：$C_s$；$x = \infty$：$C_0$ | 寫出條件 |
| 內插 | 左右比例相等 | 每題都用 |
| $x^2/Dt$ = 常數 | 同溫改深度：$x^2/t$；同深度改溫度：$Dt$ | **必考**（5.19、5.38、Ex 5.3） |
| 擴散距離 | $x \sim \sqrt{Dt}$；深度 ×2 → 時間 ×4 | 概念＋估算 |
| 擴散偶（Eq. 5.15） | 界面濃度永遠 $(C_1 + C_2)/2$ | 計算（5.16–5.18） |
| 反求溫度 | erf → $z$ → $D$ → $T = Q_d/[R\ln(D_0/D)]$ | **高機率大題**（簡報例題、5.41、5.18） |
| 高斯解 | 總量固定（5.12）→ Part 4 驅入擴散 | 證明題 |
| 設計題 | 給範圍，列表選一組並說明取捨 | 5.D3、5.D4 |

---

## 10. 易混淆名詞與觀念

| 容易搞混的一對 | 區分方式 |
|---|---|
| 菲克第一定律 vs 第二定律 | 第一：$J$ 與梯度的關係（穩態用）；第二：濃度隨時間的變化（非穩態用）。第二定律 ＝ 第一定律 ＋ 質量守恆 |
| $C_0$ vs $C_s$ vs $C_x$ | 初始（內部原始）濃度／**固定的**表面濃度／所求位置與時間的濃度 |
| erf($z$) vs $z$ | 題目求 $t$、$x$、$D$ 時，要由 erf 反查 $z$；求 $C_x$ 時，要由 $z$ 正查 erf |
| erf($z$) vs $1 -$ erf($z$) | 左式 $= 1 -$ erf，**查表前要先用 1 減**（最常見的錯誤） |
| 滲碳 vs 脫碳 | $C_s > C_0$ vs $C_s < C_0$；兩者都用 Eq. 5.5 |
| 表面濃度固定 vs 總量固定 | erf 解（滲碳、預沉積）vs 高斯解（驅入擴散） |
| 半無限 vs 有限厚度 | 擴散前緣碰不到另一端才能用 Eq. 5.5 |
| $x^2/t$ = 常數 vs $Dt$ = 常數 | 前者用於**同溫度**；後者用於**同位置**換溫度 |
| α-Fe vs γ-Fe 的數據 | 912 °C 以下用 α（BCC），以上用 γ（FCC） |
| 濃度單位 | Eq. 5.5 是**比值**，wt% 可直接代；菲克第一定律要 kg/m³ |

---

## 11. 考前提醒

1. **看到「表面濃度固定」＋「求時間／深度／濃度」**，立刻寫 Eq. 5.5。
2. **最常見的錯**：左式算完忘了「1 −」就去查表。順序是：左式 → erf = 1 − 左式 → 查 $z$。
3. **內插要寫出算式**，不要心算；表格三列對齊寫。
4. **單位**：$x$ 用 m（μm = $10^{-6}$、mm = $10^{-3}$），$t$ 用 s。只有在比例式（$x^2/t$、$Dt$）中單位相消時，才能直接用 mm、h。
5. **擴散偶**：分清 $C_1$（$x < 0$）、$C_2$（$x > 0$）；左式分母是 $(C_1 - C_2)/2$，不是 $C_1 - C_2$。
6. **反求溫度**用 $T = \dfrac{Q_d}{R\ln(D_0/D)}$，先算 $D_0/D$ 再取 ln。算完確認相（912 °C）與題目給的晶體結構一致。
7. **比例題先看有沒有多餘資訊**：5.38 的 $D_0$、$Q_d$ 用不到。
8. **設計題**：列表給多組解，最後明確選一組並寫一句取捨理由。
9. 考場若沒附 erf 表：記住 erf(0.5) ≈ 0.52、erf(1) ≈ 0.84、erf(2) ≈ 0.995，以及 $z$ 小時 erf($z$) ≈ $1.128z$，可做粗估。

---

## 附錄：本份名詞中英對照

| 中文（台灣用語） | 英文 |
|---|---|
| 菲克第二定律 | Fick's second law |
| 非穩態擴散 | nonsteady-state diffusion |
| 穩態擴散 | steady-state diffusion |
| 偏微分方程式 | partial differential equation, PDE |
| 常微分方程式 | ordinary differential equation, ODE |
| 質量守恆 | conservation of mass |
| 曲率 | curvature |
| 半無限固體 | semi-infinite solid |
| 初始條件 | initial condition |
| 邊界條件 | boundary condition |
| 表面濃度 | surface concentration |
| 初始濃度 | initial concentration |
| 誤差函數／高斯誤差函數 | error function / Gaussian error function |
| 互補誤差函數 | complementary error function, erfc |
| 奇函數 | odd function |
| 無因次 | dimensionless |
| 相似變數 | similarity variable |
| 波茲曼變換 | Boltzmann transformation |
| 連鎖律 | chain rule |
| 乘積法則 | product rule |
| 內插法 | interpolation |
| 擴散距離 | diffusion distance |
| 擴散偶 | diffusion couple |
| 界面 | interface |
| 滲碳 | carburizing |
| 脫碳 | decarburization |
| 氮化 | nitriding |
| 甲烷 | methane |
| 鐵碳合金 | iron–carbon alloy |
| 鋼 | steel |
| 硬度 | hardness |
| 韌性 | toughness |
| 晶粒成長 | grain growth |
| 雪明碳鐵（碳化鐵） | cementite, Fe₃C |
| 保護氣氛 | protective atmosphere |
| 預沉積 | predeposition |
| 驅入擴散 | drive-in diffusion |
| 擴散係數 | diffusion coefficient |
| 前指數因子 | pre-exponential factor |
| 活化能 | activation energy |
| 面心立方 | face-centered cubic, FCC |
| 體心立方 | body-centered cubic, BCC |
