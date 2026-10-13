# 第5章 擴散（Diffusion）講義 Part 4：溫度效應、半導體擴散與其他擴散路徑

> **範圍**：課本 5.5 影響擴散的因素、5.6 半導體材料中的擴散、5.7 其他擴散路徑；教授簡報 p.13–18
> **跨章連結**：Part 1 的擴散機制；Part 3 的 erf 解、$Dt$ = 常數、高斯解（習題 5.12）
> **本份例題**：課本 Example 5.4、5.5、5.6、Concept Check 5.2、簡報 p.17–18 兩溫度公式
> **本份習題**：5.20、★5.21、5.22–5.37、5.39、5.40、5.42–5.44、5.D5、5.2FE（★ = 教授指定作業）
> （5.38、5.41 雖列在本節，但屬於 $x^2/Dt$ 與 erf 題型，已在 Part 3 詳解）

---

## 本份在全章的位置

| 講義 | 內容 | 一句話重點 |
|---|---|---|
| Part 1 | 擴散是什麼、原子怎麼動 | 空位擴散 vs 間隙擴散 |
| Part 2 | 菲克第一定律 | 穩態：$J = -D\,dC/dx$ |
| Part 3 | 菲克第二定律 | 非穩態：erf 解、$x^2/Dt$ = 常數 |
| **Part 4（本份）** | **溫度效應、半導體擴散、其他路徑** | **$D = D_0\exp(-Q_d/RT)$** |
| 總複習 | 全章 | 公式卡＋題型判斷流程 |

**學習目標（對應課本 Learning Objective 5、6）**：
1. 由 $D_0$、$Q_d$ 計算任一溫度的 $D$；由兩組 $(T, D)$ 或 $\log D$–$1/T$ 圖求 $Q_d$、$D_0$；
2. 說明半導體製程中**預沉積**（predeposition）與**驅入擴散**（drive-in diffusion）的差異，並計算 $Q_0$、接面深度 $x_j$。

> **本份是「計算題型最多」的一份**：題型雖多，但核心只有一條式子 $D = D_0\exp(-Q_d/RT)$ 的四種用法（第 3 節）。先把那四種用法練熟，再做習題。

---

## 0. 用 PSPP 看溫度效應與半導體擴散：積體電路製程

| PSPP 環節 | 矽晶片摻雜與內連線 |
|---|---|
| **製程（Processing）** | 預沉積（900–1000 °C、表面濃度固定）→ 驅入擴散（最高約 1200 °C、氧化氣氛）；之後沉積金屬內連線（interconnect），後續熱處理可達 500 °C |
| **結構（Structure）** | 摻雜原子（dopant，如 B、P）的濃度剖面與接面深度 $x_j$；內連線金屬是否擴散進矽 |
| **性質（Properties）** | 摻雜濃度決定區域的導電型態（n 型 / p 型）與導電度（electrical conductivity）；金屬擴散進矽會破壞電性 |
| **表現（Performance）** | 元件正常運作；內連線選鋁（Al）而非導電度更高的銀、銅、金，因為 Al 在 Si 中的 $D$ 小了 $10^8$ 倍以上 |

> 這個例子把「溫度如何控制 $D$」直接連到「選材」：**不是只看導電度，還要看擴散係數**。

---

## 1. 影響擴散的因素（5.5）

### 1.1 擴散物種與基地（diffusing species & host）

$D$ 的大小代表原子擴散的速率，同時取決於**擴散的原子**與**基地材料**。

| 比較（500 °C，α-Fe 基地） | $D$（m²/s） | 機制 |
|---|---|---|
| Fe 自擴散 | $3.0\times10^{-21}$ | 空位擴散 |
| C 互擴散 | $1.4\times10^{-12}$ | 間隙擴散 |

相差約 $10^8$ 倍（Part 1 例題 3 已詳算）。

### 1.2 溫度（temperature）：阿瑞尼斯型關係

溫度對擴散係數的影響**極大**。例如 Fe 在 α-Fe 中的自擴散，從 500 °C 升到 900 °C，$D$ 由 $3.0\times10^{-21}$ 增為 $1.8\times10^{-15}$ m²/s，**增加約六個數量級**。

$$\boxed{D = D_0\exp\left(-\frac{Q_d}{RT}\right)}\qquad(5.8)$$

| 符號 | 意義 | 單位 |
|---|---|---|
| $D_0$ | **前指數因子**（pre-exponential factor），與溫度無關的常數 | m²/s |
| $Q_d$ | **擴散活化能**（activation energy for diffusion） | J/mol 或 eV/atom |
| $R$ | 氣體常數（gas constant） | 8.31 J/mol·K（課本）、8.314（簡報） |
| $T$ | 絕對溫度（absolute temperature） | K |

- **活化能**：使**一莫耳**原子產生擴散運動所需的能量。
- $Q_d$ 愈大，$D$ 愈小。
- 這類「$\exp(-Q/RT)$」形式的關係稱為**阿瑞尼斯方程式**（Arrhenius equation），與高中化學的反應速率常數 $k = A\,e^{-E_a/RT}$ 完全同型。

### 1.3 為什麼是指數形式？（連回 Part 1）

Part 1 提到：原子要跳一步需要足夠的**振動能**。依**波茲曼分布**（Boltzmann distribution），能量超過 $Q$ 的原子比例正比於 $\exp(-Q/RT)$。Part 2 的補充推導又得到 $D = \frac16\Gamma\lambda^2$，跳躍頻率 $\Gamma$ 就正比於這個比例，所以：

$$D \propto \Gamma \propto \exp\left(-\frac{Q_d}{RT}\right)$$

> **比喻**：一群人要翻過一道牆（能量障壁 energy barrier），$Q_d$ 是牆高，$RT$ 是大家的平均體力。牆高一點點或體力少一點點，翻得過去的人數會**呈指數**減少。

### 1.4 能量單位：J/mol vs eV/atom

| 若 $Q_d$ 的單位是 | 指數中的分母用 | 數值 |
|---|---|---|
| J/mol | 氣體常數 $R$ | 8.31 J/mol·K |
| eV/atom | **波茲曼常數** $k$ | $8.62\times10^{-5}$ eV/atom·K |

換算：$1\ \text{eV/atom} = 96{,}500\ \text{J/mol}$（例如 B 在 Si 中 $Q_d$ = 3.87 eV/atom ≈ 373 kJ/mol）。

> **半導體題幾乎都用 eV/atom**，記得改用 $k$。這是 5.42–5.44、5.D5 最常見的失分點。

---

## 2. 線性化：$\ln D$、$\log D$ 對 $1/T$ 作圖

### 2.1 推導（簡報 p.14）

對 Eq. 5.8 兩邊取自然對數：

$$\ln D = \ln D_0 - \frac{Q_d}{R}\left(\frac1T\right)\qquad(5.9a)$$

改用常用對數（以 10 為底）：$\log D = (\log e)\ln D = 0.434\ln D = \dfrac{\ln D}{2.3}$

$$\log D = \log D_0 - \frac{Q_d}{2.3R}\left(\frac1T\right)\qquad(5.9b)$$

### 2.2 對應直線方程式 $y = b + mx$

| 直線 | $y$ | $x$ | 斜率 $m$ | 截距 $b$ |
|---|---|---|---|---|
| Eq. 5.9a | $\ln D$ | $1/T$ | $-Q_d/R$ | $\ln D_0$ |
| Eq. 5.9b | $\log D$ | $1/T$ | $-Q_d/2.3R$ | $\log D_0$ |

**實驗上就是這樣求 $Q_d$、$D_0$**：在數個溫度量 $D$，畫 $\log D$ 對 $1/T$，取斜率與截距。

```
 log D
   │●  ← 截距 = log D0（1/T = 0，即 T → ∞）
   │  ╲
   │    ╲     斜率 = −Qd / 2.3R
   │      ╲   （愈陡 → Qd 愈大 → 對溫度愈敏感）
   │        ╲
   └──────────── 1/T
  高溫 ←        → 低溫
```

> **讀圖兩大陷阱**（課本 Example 5.5 特別提醒）：
> 1. 縱軸是**對數刻度**：標示「$10^{-14}$」的位置，代入的是 $\log D = -14$，不是 $10^{-14}$。
> 2. 對數刻度上兩個整數刻度的**正中間**不是 $5\times10^{-15}$，而是 $10^{-14.5} = 3.2\times10^{-15}$。
> 3. 橫軸若標「1000/K」，讀到 0.9 代表 $1/T = 0.9\times10^{-3}$ K⁻¹。

### 2.3 簡報 p.15 的圖（課本 Figure 5.6）怎麼看

- 所有系統在 $\log D$–$1/T$ 圖上都是**直線**，驗證了 Eq. 5.8。
- **C 在 α-Fe、C 在 γ-Fe**（間隙擴散）的線在最上方；**Fe 在 α-Fe、Fe 在 γ-Fe、Al 在 Al**（自擴散，空位機制）在下方 → $D_{\text{interstitial}} \gg D_{\text{substitutional}}$。
- 線愈陡 → $Q_d$ 愈大。

---

## 3. $D = D_0\exp(-Q_d/RT)$ 的四種用法（本份核心）

| 用法 | 已知 | 求 | 公式 | 習題 |
|---|---|---|---|---|
| **A. 求 $D$** | $D_0$、$Q_d$、$T$ | $D$ | 直接代 Eq. 5.8 | ★5.21、5.22、5.35a、5.2FE |
| **B. 反求 $T$** | $D_0$、$Q_d$、$D$ | $T$ | $T = \dfrac{Q_d}{R\ln(D_0/D)}$ | 5.23、5.24、5.25、5.32 |
| **C. 兩溫度換算** | $Q_d$、$D_1$（在 $T_1$） | $D_2$（在 $T_2$） | $D_2 = D_1\exp\left[-\dfrac{Q_d}{R}\left(\dfrac1{T_2} - \dfrac1{T_1}\right)\right]$ | 5.26、5.33 |
| **D. 兩點求參數** | $(T_1, D_1)$、$(T_2, D_2)$ 或圖 | $Q_d$、$D_0$ | $Q_d = -R\dfrac{\ln D_1 - \ln D_2}{1/T_1 - 1/T_2}$ | 5.27–5.31、5.39 |

再加上與 Part 3 的**組合題型**：$Dt$ = 常數或 $x^2/Dt$ = 常數 → 求溫度、時間或位置（5.34、5.35b、5.36、5.37、5.39、5.40）。

### 3.1 用法 B 的推導（簡報 p.25）

$$\ln D = \ln D_0 - \frac{Q_d}{RT}\ \Rightarrow\ \frac{Q_d}{RT} = \ln D_0 - \ln D\ \Rightarrow\ T = \frac{Q_d}{R(\ln D_0 - \ln D)} = \frac{Q_d}{R\ln(D_0/D)}$$

### 3.2 用法 C 的推導（簡報 p.17，課本沒有明寫）

在 $T_1$、$T_2$ 各寫一次 Eq. 5.9a：

$$\ln D_2 = \ln D_0 - \frac{Q_d}{RT_2},\qquad \ln D_1 = \ln D_0 - \frac{Q_d}{RT_1}$$

兩式相減，$\ln D_0$ **消去**：

$$\ln D_2 - \ln D_1 = \ln\frac{D_2}{D_1} = -\frac{Q_d}{R}\left(\frac1{T_2} - \frac1{T_1}\right)$$

兩邊取指數：

$$\boxed{D_2 = D_1\exp\left[-\frac{Q_d}{R}\left(\frac1{T_2} - \frac1{T_1}\right)\right]}$$

**優點**：不需要知道 $D_0$。

### 3.3 用法 D 的推導

同樣兩式相減，改解 $Q_d$：

$$\boxed{Q_d = -R\,\frac{\ln D_1 - \ln D_2}{\dfrac1{T_1} - \dfrac1{T_2}} = -2.3R\,\frac{\log D_1 - \log D_2}{\dfrac1{T_1} - \dfrac1{T_2}}}$$

求出 $Q_d$ 後，代回任一點求 $D_0$：

$$D_0 = D_1\exp\left(\frac{Q_d}{RT_1}\right)\quad\text{或}\quad\log D_0 = \log D_1 + \frac{Q_d}{2.3R}\cdot\frac1{T_1}$$

> **檢查符號**：$T_1 < T_2$ 時 $D_1 < D_2$，分子、分母都為負（或都為正），$Q_d$ 必為**正值**。算出負值代表代反了。

---

## 4. 半導體材料中的擴散（5.6）

### 4.1 背景

- **積體電路**（integrated circuit, IC）晶片：約 6 mm × 6 mm × 0.4 mm 的薄方片，表面嵌有數百萬個互連的電子元件。
- 基材：**單晶矽**（single-crystal silicon）。
- 必須在極小的區域內，精確加入特定濃度的雜質，方法之一就是**原子擴散**。
- 現代高密度晶片多改用**離子佈植**（ion implantation），解析度更高；擴散法仍用於低密度晶片與**太陽能板**（solar panel）元件。

### 4.2 兩步驟熱處理

| | **預沉積**（predeposition） | **驅入擴散**（drive-in diffusion） |
|---|---|---|
| 目的 | 把雜質原子**送進**矽的表層 | 把雜質**推得更深**，得到合適的濃度分布，**不增加總量** |
| 雜質來源 | 氣相，分壓固定 | 只有預沉積留下的量 |
| 表面條件 | **表面濃度 $C_s$ 固定** | **雜質總量 $Q_0$ 固定**（表面濃度逐漸下降） |
| 溫度、時間 | 900–1000 °C，通常 < 1 h | 較高，最高約 1200 °C |
| 氣氛 | — | **氧化氣氛**，表面生成 SiO₂ 層，雜質很難穿過，幾乎不會逸散 |
| 數學解 | **erf 解**（Eq. 5.5） | **高斯解**（Eq. 5.11，即 Part 3 習題 5.12） |
| 濃度剖面 | 類似 Part 3 滲碳曲線 | 鐘形曲線的一半，隨時間變矮、變寬 |

```
 C
 Cs ┤╲  ← 預沉積後：表面高、很淺
    │ ╲
    │  ╲ ╱‾‾╲    ← 驅入後：表面降低、分布更深
    │   ╳     ╲
    │  ╱ ╲      ╲
 CB ┤─────────────●───── 背景濃度
    └─────────────┼───── x
                  xj（接面深度）
```

### 4.3 驅入擴散的解（Eq. 5.11）

假設預沉積進來的雜質全部集中在表面極薄的一層（近似），第二定律的解為：

$$C(x, t) = \frac{Q_0}{\sqrt{\pi Dt}}\exp\left(-\frac{x^2}{4Dt}\right)\qquad(5.11)$$

- $Q_0$：預沉積引入的雜質**總量**（每單位面積的原子數，atoms/m²）。
- 這正是 Part 3 習題 5.12 證明過的解，其中 $B = Q_0/\sqrt\pi$。

**驗證總量守恆**（理解用）：利用高斯積分 $\displaystyle\int_0^\infty e^{-x^2/4Dt}dx = \sqrt{\pi Dt}$

$$\int_0^\infty C\,dx = \frac{Q_0}{\sqrt{\pi Dt}}\cdot\sqrt{\pi Dt} = Q_0\quad\checkmark$$

不論經過多久，總量永遠是 $Q_0$，這就是「不增加總量」的數學表現。

**表面濃度**（$x = 0$）：$C(0, t) = \dfrac{Q_0}{\sqrt{\pi Dt}}$，隨時間 $\propto 1/\sqrt t$ 下降。

### 4.4 預沉積引入的總量 $Q_0$（Eq. 5.12）

$$\boxed{Q_0 = 2C_s\sqrt{\frac{D_pt_p}{\pi}}}\qquad(5.12)$$

$C_s$：預沉積的表面濃度；$D_p$、$t_p$：預沉積的擴散係數與時間。

**推導（課本只寫「it can be shown」）**：預沉積時背景濃度很小（$C_0 \approx 0$），濃度剖面 $C = C_s\,\text{erfc}\left(\dfrac{x}{2\sqrt{D_pt_p}}\right)$。總量為

$$Q_0 = \int_0^\infty C_s\,\text{erfc}\left(\frac{x}{2\sqrt{D_pt_p}}\right)dx = C_s\cdot2\sqrt{D_pt_p}\int_0^\infty\text{erfc}(u)\,du = C_s\cdot2\sqrt{D_pt_p}\cdot\frac{1}{\sqrt\pi}$$

（用到 $\displaystyle\int_0^\infty\text{erfc}(u)\,du = \frac1{\sqrt\pi}$）

**物理意義**：$Q_0 \propto \sqrt{t_p}$，預沉積時間變 4 倍，進入的雜質量只變 2 倍。

### 4.5 接面深度（junction depth）$x_j$（Eq. 5.13）

**定義**：摻雜濃度**剛好等於矽中原有的背景濃度** $C_B$（background concentration）的深度。在 $x_j$ 處通常形成 p–n 接面（p–n junction）。

$$\boxed{x_j = \left[(4D_dt_d)\ln\left(\frac{Q_0}{C_B\sqrt{\pi D_dt_d}}\right)\right]^{1/2}}\qquad(5.13)$$

$D_d$、$t_d$：驅入擴散的擴散係數與時間。

**推導**：在 Eq. 5.11 中令 $C = C_B$、$x = x_j$：

$$C_B = \frac{Q_0}{\sqrt{\pi D_dt_d}}\exp\left(-\frac{x_j^2}{4D_dt_d}\right)\ \Rightarrow\ \frac{x_j^2}{4D_dt_d} = \ln\left(\frac{Q_0}{C_B\sqrt{\pi D_dt_d}}\right)\quad\checkmark$$

> **記法**：Eq. 5.13 不必背，**由 Eq. 5.11 令 $C = C_B$ 兩行就推得出來**。同樣的方法可求任何指定濃度的位置（習題 5.43c）。

### 4.6 半導體題解題 SOP

```
① 溫度換 K；Qd 若是 eV/atom → 用 k = 8.62×10⁻⁵ eV/atom·K
② 分別算 Dp（預沉積溫度）與 Dd（驅入溫度）—— 兩者溫度不同，不能共用！
③ Q0 = 2Cs √(Dp tp / π)            （時間換秒）
④ 驅入：C(x,t) = Q0/√(πDdtd) · exp(−x²/4Ddtd)
   求 xj：令 C = CB；求某濃度的位置：令 C = 指定值
⑤ 反向題（已知 xj 求 tp）：由 ④ 反解 Q0，再由 ③ 反解 tp
```

### 4.7 延伸閱讀：IC 內連線為什麼用鋁？（Materials of Importance 5.1）

**內連線**（interconnect）：連接各元件、傳導電流的細窄金屬線路。需要高導電度，所以選金屬。

| 金屬 | 室溫導電度［(Ω·m)⁻¹］ | 500 °C 在 Si 中的 $D$（m²/s） |
|---|---|---|
| 銀（Ag） | $6.8\times10^7$ | $6.9\times10^{-18}$ |
| 銅（Cu） | $6.0\times10^7$ | $7.1\times10^{-10}$ |
| 金（Au） | $4.3\times10^7$ | $2.8\times10^{-14}$ |
| 鋁（Al） | $3.8\times10^7$ | $\mathbf{3.6\times10^{-26}}$ |

- 只看導電度：Ag > Cu > Au > Al。
- 但沉積內連線後還要經歷最高約 500 °C 的熱處理；若金屬擴散進矽，**晶片電性會被破壞**。
- Al 的 $D$ 比其他三者**小至少 $10^8$ 倍** → 雖導電度稍低，仍是首選。常用 Al–Cu–Si 合金（94.5 wt% Al–4 wt% Cu–1.5 wt% Si），易與晶片接合且更耐腐蝕（corrosion resistant）。
- 近年也用**銅內連線**，但必須先在銅下方鍍一層極薄的**鉭**（tantalum, Ta）或**氮化鉭**（tantalum nitride, TaN）作為**擴散阻障層**（diffusion barrier）。

> **PSPP 結論**：這是「擴散係數決定選材」的經典案例，也是習題 5.31 的背景。

---

## 5. 其他擴散路徑（5.7）

原子也可沿著以下路徑遷移，稱為**短路擴散路徑**（short-circuit diffusion paths）：

| 路徑 | 說明 |
|---|---|
| **差排**（dislocation） | 沿差排線的「管道擴散」（pipe diffusion） |
| **晶界**（grain boundary） | 原子排列鬆散的界面 |
| **外表面**（external surface） | 原子只有一側有鄰居，最容易移動 |

- 這些路徑的擴散速率**遠快於體擴散**（bulk diffusion，又稱晶格擴散 lattice diffusion）。
- **但在大多數情況下，對總擴散通量的貢獻可以忽略**，因為這些路徑的**截面積極小**。

**【補充：理解用，超出課本】** 活化能大小通常為
$$Q_{\text{表面}} < Q_{\text{晶界}} < Q_{\text{體擴散}}$$
所以在**低溫、細晶粒**材料中，晶界擴散的相對比重會變大（體擴散因 $Q$ 大而在低溫幾乎停止）。

> **比喻**：高速公路（晶界、表面）車速很快，但只有一兩條車道；一般道路（體擴散）慢，但遍布全城。總運量仍以一般道路為主。

---

## 6. 例題講解

### 例題 1（課本 Example 5.4）由 Table 5.2 求 $D$（用法 A）

**題目**：利用 Table 5.2，計算 550 °C 時鎂（Mg）在鋁（Al）中的擴散係數。

**解**：Table 5.2：Mg 在 Al 中 $D_0 = 1.2\times10^{-4}$ m²/s，$Q_d = 130$ kJ/mol

$$D = (1.2\times10^{-4})\exp\left[-\frac{130{,}000}{(8.31)(550 + 273)}\right] = (1.2\times10^{-4})\,e^{-19.01} = 6.7\times10^{-13}\ \text{m}^2/\text{s}$$

---

### 例題 2（教授簡報 p.18）兩溫度換算（用法 C）

**題目**：300 °C 時 Cu 在 Si 中的擴散係數與活化能為 $D_1 = 7.8\times10^{-11}$ m²/s、$Q_d = 41.5$ kJ/mol。求 350 °C 時的 $D_2$。

**解**：$T_1 = 573$ K，$T_2 = 623$ K

$$D_2 = (7.8\times10^{-11})\exp\left[-\frac{41{,}500}{8.314}\left(\frac1{623} - \frac1{573}\right)\right]$$

$$\frac1{623} - \frac1{573} = -1.40\times10^{-4}\ \text{K}^{-1}\quad\Rightarrow\quad\text{指數} = (4992)(1.40\times10^{-4}) = 0.699$$

$$D_2 = (7.8\times10^{-11})\,e^{0.699} = 15.7\times10^{-11}\ \text{m}^2/\text{s}$$

**觀察**：溫度只升 50 °C，$D$ 就**加倍**。Cu 在 Si 中 $Q_d$ 很小（約 42 kJ/mol，Cu 是 Si 中的快速間隙擴散者），所以對溫度相對「不敏感」；$Q_d$ 大的系統，同樣 50 °C 會差更多倍。

---

### 例題 3（課本 Example 5.5）由 $\log D$–$1/T$ 圖求 $Q_d$、$D_0$（用法 D）

**題目**：Figure 5.7 為銅（Cu）在金（Au）中擴散的 $\log D$ 對 $1/T$ 圖，求活化能與前指數因子。

**解**：

**步驟 1：在直線上任取兩點讀值**（取離得遠一點的兩點，誤差較小）
- $1/T_1 = 0.8\times10^{-3}$ K⁻¹ → $\log D_1 = -12.40$
- $1/T_2 = 1.1\times10^{-3}$ K⁻¹ → $\log D_2 = -15.45$

**步驟 2：斜率求 $Q_d$**

$$Q_d = -2.3R\left[\frac{\log D_1 - \log D_2}{1/T_1 - 1/T_2}\right] = -2.3(8.31)\left[\frac{-12.40 - (-15.45)}{0.8\times10^{-3} - 1.1\times10^{-3}}\right]$$

$$= -2.3(8.31)\left[\frac{3.05}{-0.3\times10^{-3}}\right] = 194{,}000\ \text{J/mol} = 194\ \text{kJ/mol}$$

**步驟 3：代回求 $D_0$**（不要用作圖外插到 $1/T = 0$，誤差大）

$$\log D_0 = \log D_2 + \frac{Q_d}{2.3R}\cdot\frac1{T_2} = -15.45 + \frac{(194{,}000)(1.1\times10^{-3})}{(2.3)(8.31)} = -4.28$$

$$D_0 = 10^{-4.28} = 5.2\times10^{-5}\ \text{m}^2/\text{s}$$

---

### 例題 4（課本 Concept Check 5.2）兩金屬的 $\ln D$–$1/T$ 示意圖

**題目**：兩種假想金屬 A、B 的自擴散，已知 $D_0(\text{A}) > D_0(\text{B})$、$Q_d(\text{A}) > Q_d(\text{B})$。在 $\ln D$ 對 $1/T$ 的示意圖上畫出兩條線。

**解**：
- 截距 $\ln D_0$：A 較高；
- 斜率 $-Q_d/R$：A 較陡。

```
 ln D
   │A●
   │B● ╲
   │  ╲  ╲
   │    ╲╱ ← 交叉點
   │    ╱╲
   │   ╱   ╲  A（較陡）
   │ B（較平） ╲
   └──────────────── 1/T
   高溫          低溫
```

**結論**：兩線**會交叉**。高溫（左側）A 擴散較快；低溫（右側）B 擴散較快。$Q_d$ 大的系統「對溫度更敏感」。

---

### 例題 5（課本 Example 5.6）硼（B）擴散進矽：預沉積＋驅入

**題目**：硼（boron, B）原子以預沉積與驅入兩步驟擴散進矽晶圓（silicon wafer），矽中 B 的背景濃度為 $1\times10^{20}$ atoms/m³。預沉積在 900 °C 進行 30 min，表面 B 濃度維持 $3\times10^{26}$ atoms/m³；驅入在 1100 °C 進行 2 h。B 在 Si 中 $Q_d = 3.87$ eV/atom、$D_0 = 2.4\times10^{-3}$ m²/s。
(a) 求 $Q_0$；(b) 求驅入後的 $x_j$；(c) 求驅入後表面下 1 μm 處的 B 濃度。

**解**：

**(a)** 先求預沉積溫度（1173 K）的 $D_p$，**$Q_d$ 是 eV/atom，用 $k$**：

$$D_p = (2.4\times10^{-3})\exp\left[-\frac{3.87}{(8.62\times10^{-5})(1173)}\right] = 5.73\times10^{-20}\ \text{m}^2/\text{s}$$

$$Q_0 = 2C_s\sqrt{\frac{D_pt_p}{\pi}} = 2(3\times10^{26})\sqrt{\frac{(5.73\times10^{-20})(1800)}{\pi}} = 3.44\times10^{18}\ \text{atoms/m}^2$$

**(b)** 驅入溫度（1373 K）的 $D_d$：

$$D_d = (2.4\times10^{-3})\exp\left[-\frac{3.87}{(8.62\times10^{-5})(1373)}\right] = 1.51\times10^{-17}\ \text{m}^2/\text{s}$$

$D_dt_d = (1.51\times10^{-17})(7200) = 1.087\times10^{-13}$ m²

$$x_j = \left\{(4)(1.087\times10^{-13})\ln\left[\frac{3.44\times10^{18}}{(1\times10^{20})\sqrt{\pi(1.087\times10^{-13})}}\right]\right\}^{1/2} = 2.19\times10^{-6}\ \text{m} = 2.19\ \mu\text{m}$$

**(c)** 用 Eq. 5.11：

$$C = \frac{3.44\times10^{18}}{\sqrt{\pi(1.087\times10^{-13})}}\exp\left[-\frac{(1\times10^{-6})^2}{4(1.087\times10^{-13})}\right] = 5.90\times10^{23}\ \text{atoms/m}^3$$

---

## 7. 章末習題詳解

> **Table 5.2 本份會用到的數據**（考試通常會附表）：
>
> | 擴散物種 | 基地 | $D_0$（m²/s） | $Q_d$（J/mol） | 機制 |
> |---|---|---|---|---|
> | C | α-Fe（BCC） | $1.1\times10^{-6}$ | 87,400 | 間隙 |
> | C | γ-Fe（FCC） | $2.3\times10^{-5}$ | 148,000 | 間隙 |
> | N | α-Fe（BCC） | $5.0\times10^{-7}$ | 77,000 | 間隙 |
> | N | γ-Fe（FCC） | $9.1\times10^{-5}$ | 168,000 | 間隙 |
> | Zn | Cu（FCC） | $2.4\times10^{-5}$ | 189,000 | 空位（互擴散） |
> | Cu | Al（FCC） | $6.5\times10^{-5}$ | 136,000 | 空位（互擴散） |
> | Mg | Al（FCC） | $1.2\times10^{-4}$ | 130,000 | 空位（互擴散） |
> | Ni | Cu（FCC） | $1.9\times10^{-4}$ | 230,000 | 空位（互擴散） |

---

### 習題 5.20　C 在 α-Fe 與 γ-Fe 中，900 °C 時誰擴散較快？

**題目**：Cite the values of the diffusion coefficients for the interdiffusion of carbon in both α-iron (BCC) and γ-iron (FCC) at 900 °C. Which is larger? Explain why this is the case.

**解**：$T = 1173$ K

$$D_{\alpha} = (1.1\times10^{-6})\exp\left[-\frac{87{,}400}{(8.31)(1173)}\right] = 1.4\times10^{-10}\ \text{m}^2/\text{s}$$

$$D_{\gamma} = (2.3\times10^{-5})\exp\left[-\frac{148{,}000}{(8.31)(1173)}\right] = 5.9\times10^{-12}\ \text{m}^2/\text{s}$$

**答案**：**C 在 α-Fe（BCC）中的 $D$ 較大**，約為 γ-Fe 的 24 倍。

**原因**：
1. **BCC 結構較開放**（原子堆積因子 APF = 0.68，FCC 為 0.74），相鄰間隙位置之間的路徑較短、跳躍障礙較低，所以 $Q_d$ 較小（87.4 vs 148 kJ/mol）。
2. 雖然 FCC 的八面體間隙**較大**、能溶更多碳（Part 1 第 4.4 節），但「洞大」影響的是**溶解度**，「通道寬、障礙低」影響的才是**擴散速率**。

> 900 °C < 912 °C，此時穩定相是 α-Fe；題目是比較兩種結構的固有擴散能力。

---

### ★習題 5.21　Mg 在 Al 中，400 °C 的 $D$（作業）

**題目**：Using the data in Table 5.2, compute the value of $D$ for the diffusion of magnesium in aluminum at 400 °C.

**解**：$T = 400 + 273 = 673$ K；$D_0 = 1.2\times10^{-4}$ m²/s，$Q_d = 130{,}000$ J/mol

$$D = (1.2\times10^{-4})\exp\left[-\frac{130{,}000}{(8.31)(673)}\right] = (1.2\times10^{-4})\,e^{-23.25} = 9.6\times10^{-15}\ \text{m}^2/\text{s}$$

**答案**：$D \approx 9.6\times10^{-15}$ m²/s

> **對照例題 1**：550 °C 時 $6.7\times10^{-13}$，降到 400 °C 變成 $9.6\times10^{-15}$，**小了約 70 倍**。

---

### 習題 5.22　N 在 FCC 鐵中，950 °C 的 $D$

**題目**：Using the data in Table 5.2, compute the value of $D$ for the diffusion of nitrogen in FCC iron at 950 °C.

**解**：$T = 1223$ K；$D_0 = 9.1\times10^{-5}$ m²/s，$Q_d = 168{,}000$ J/mol

$$D = (9.1\times10^{-5})\exp\left[-\frac{168{,}000}{(8.31)(1223)}\right] = (9.1\times10^{-5})\,e^{-16.53} = 6.0\times10^{-12}\ \text{m}^2/\text{s}$$

**答案**：$6.0\times10^{-12}$ m²/s（950 °C > 912 °C，確實是 FCC ✓）

---

### 習題 5.23　Zn 在 Cu 中，何溫度 $D = 2.6\times10^{-16}$ m²/s？

**題目**：At what temperature will the diffusion coefficient for the diffusion of zinc in copper have a value of $2.6\times10^{-16}$ m²/s? Use the diffusion data in Table 5.2.

**解**（用法 B）：$D_0 = 2.4\times10^{-5}$ m²/s，$Q_d = 189{,}000$ J/mol

$$\ln\frac{D_0}{D} = \ln\frac{2.4\times10^{-5}}{2.6\times10^{-16}} = \ln(9.23\times10^{10}) = 25.25$$

$$T = \frac{189{,}000}{(8.31)(25.25)} = 901\ \text{K}\ (628\ ^\circ\text{C})$$

**答案**：約 901 K（628 °C）

---

### 習題 5.24　Ni 在 Cu 中，何溫度 $D = 4.0\times10^{-17}$ m²/s？

**題目**：At what temperature will the diffusion coefficient for the diffusion of nickel in copper have a value of $4.0\times10^{-17}$ m²/s? Use the diffusion data in Table 5.2.

**解**：$D_0 = 1.9\times10^{-4}$ m²/s，$Q_d = 230{,}000$ J/mol

$$\ln\frac{1.9\times10^{-4}}{4.0\times10^{-17}} = \ln(4.75\times10^{12}) = 29.19$$

$$T = \frac{230{,}000}{(8.31)(29.19)} = 948\ \text{K}\ (675\ ^\circ\text{C})$$

**答案**：約 948 K（675 °C）

---

### 習題 5.25　Cr 在 Ni 中，何溫度 $D = 1.2\times10^{-14}$ m²/s？

**題目**：The preexponential and activation energy for the diffusion of chromium in nickel are $1.1\times10^{-4}$ m²/s and 272,000 J/mol, respectively. At what temperature will the diffusion coefficient have a value of $1.2\times10^{-14}$ m²/s?

**解**：

$$\ln\frac{1.1\times10^{-4}}{1.2\times10^{-14}} = \ln(9.17\times10^9) = 22.94$$

$$T = \frac{272{,}000}{(8.31)(22.94)} = 1427\ \text{K}\ (1154\ ^\circ\text{C})$$

**答案**：約 1427 K（1154 °C）

---

### 習題 5.26　Cu 在 Ag 中，由 1000 K 換算到 1200 K

**題目**：The activation energy for the diffusion of copper in silver is 193,000 J/mol. Calculate the diffusion coefficient at 1200 K (927 °C), given that $D$ at 1000 K (727 °C) is $1.0\times10^{-14}$ m²/s.

**解**（用法 C，不需要 $D_0$）：

$$-\frac{Q_d}{R}\left(\frac1{T_2} - \frac1{T_1}\right) = -\frac{193{,}000}{8.31}\left(\frac1{1200} - \frac1{1000}\right) = -(23{,}225)(-1.667\times10^{-4}) = 3.871$$

$$D_2 = (1.0\times10^{-14})\,e^{3.871} = 4.8\times10^{-13}\ \text{m}^2/\text{s}$$

**答案**：$4.8\times10^{-13}$ m²/s（升溫 200 K，$D$ 增加約 48 倍）

---

### 習題 5.27　由兩溫度的 $D$ 求 $D_0$、$Q_d$（Ni 在 Fe 中）

**題目**：The diffusion coefficients for nickel in iron are given at two temperatures, as follows:

| $T$（K） | $D$（m²/s） |
|---|---|
| 1473 | $2.2\times10^{-15}$ |
| 1673 | $4.8\times10^{-14}$ |

(a) Determine the values of $D_0$ and the activation energy $Q_d$.
(b) What is the magnitude of $D$ at 1300 °C (1573 K)?

**解**（用法 D）：

**(a)**

$$Q_d = -R\,\frac{\ln D_1 - \ln D_2}{1/T_1 - 1/T_2} = -(8.31)\frac{\ln(2.2\times10^{-15}) - \ln(4.8\times10^{-14})}{\dfrac1{1473} - \dfrac1{1673}}$$

$$= -(8.31)\frac{-3.083}{8.116\times10^{-5}} = 3.16\times10^5\ \text{J/mol}$$

$$D_0 = D_1\exp\left(\frac{Q_d}{RT_1}\right) = (2.2\times10^{-15})\exp\left[\frac{315{,}700}{(8.31)(1473)}\right] = 3.5\times10^{-4}\ \text{m}^2/\text{s}$$

**(b)**

$$D = (3.5\times10^{-4})\exp\left[-\frac{315{,}700}{(8.31)(1573)}\right] = 1.1\times10^{-14}\ \text{m}^2/\text{s}$$

**答案**：$Q_d \approx 316$ kJ/mol，$D_0 \approx 3.5\times10^{-4}$ m²/s；$D(1573\ \text{K}) \approx 1.1\times10^{-14}$ m²/s

> **檢查**：1573 K 在兩已知溫度之間，$D$ 也應落在 $2.2\times10^{-15}$ 與 $4.8\times10^{-14}$ 之間 ✓

---

### 習題 5.28　C 在 Ni 中（溫度給 °C）

**題目**：The diffusion coefficients for carbon in nickel are given at two temperatures, as follows:

| $T$（°C） | $D$（m²/s） |
|---|---|
| 600 | $5.5\times10^{-14}$ |
| 700 | $3.9\times10^{-13}$ |

(a) Determine the values of $D_0$ and $Q_d$.
(b) What is the magnitude of $D$ at 850 °C?

**解**：**先換成 K**：$T_1 = 873$ K，$T_2 = 973$ K

**(a)**

$$Q_d = -(8.31)\frac{\ln(5.5\times10^{-14}) - \ln(3.9\times10^{-13})}{\dfrac1{873} - \dfrac1{973}} = -(8.31)\frac{-1.959}{1.177\times10^{-4}} = 1.38\times10^5\ \text{J/mol}$$

$$D_0 = (5.5\times10^{-14})\exp\left[\frac{138{,}300}{(8.31)(873)}\right] = 1.0\times10^{-5}\ \text{m}^2/\text{s}$$

**(b)** $T = 1123$ K

$$D = (1.0\times10^{-5})\exp\left[-\frac{138{,}300}{(8.31)(1123)}\right] = 3.8\times10^{-12}\ \text{m}^2/\text{s}$$

**答案**：$Q_d \approx 138$ kJ/mol，$D_0 \approx 1.0\times10^{-5}$ m²/s；$D(850\ ^\circ\text{C}) \approx 3.8\times10^{-12}$ m²/s

> **易錯**：直接用 °C 代 $1/T$ 會完全錯誤，因為 $1/T$ 必須是**絕對溫度的倒數**。

---

### 習題 5.29　由圖求 Au 在 Ag 中的 $Q_d$、$D_0$

**題目**：The following figure shows a plot of the logarithm (to the base 10) of the diffusion coefficient versus reciprocal of the absolute temperature for the diffusion of gold in silver. Determine values for the activation energy and preexponential.

（圖：縱軸 $10^{-15}$–$10^{-13}$ m²/s 對數刻度；橫軸 0.8–1.0（1000/K）；直線由左上到右下）

**解**（作法同例題 3）：

**步驟 1：讀圖**（取格線上的兩點，讀值較準）
- $1/T_1 = 0.9\times10^{-3}$ K⁻¹ → $\log D_1 \approx -13.58$（$D \approx 2.6\times10^{-14}$）
- $1/T_2 = 1.0\times10^{-3}$ K⁻¹ → $\log D_2 \approx -14.70$（$D \approx 2.0\times10^{-15}$）

**步驟 2**：

$$Q_d = -2.3R\frac{\log D_1 - \log D_2}{1/T_1 - 1/T_2} = -2.3(8.31)\frac{-13.58 - (-14.70)}{0.9\times10^{-3} - 1.0\times10^{-3}} = -2.3(8.31)\frac{1.12}{-1.0\times10^{-4}}$$

$$Q_d \approx 2.1\times10^5\ \text{J/mol}$$

**步驟 3**：

$$\log D_0 = -14.70 + \frac{(214{,}000)(1.0\times10^{-3})}{(2.3)(8.31)} = -3.50\ \Rightarrow\ D_0 \approx 3\times10^{-4}\ \text{m}^2/\text{s}$$

**答案**：$Q_d \approx 2.1\times10^5$ J/mol，$D_0 \approx 3\times10^{-4}$ m²/s

> **讀圖題的答案容許誤差**：$\log D$ 讀值差 0.05，$Q_d$ 會差約 5%，而 $D_0$ 因為要外插，誤差會被放大。考試寫出**讀值、斜率公式、代數過程**最重要。

---

### 習題 5.30　由圖求 V 在 Mo 中的 $Q_d$、$D_0$

**題目**：The following figure shows a plot of the logarithm (to the base 10) of the diffusion coefficient versus reciprocal of the absolute temperature for the diffusion of vanadium in molybdenum. Determine values for the activation energy and preexponential.

（圖：縱軸 $10^{-18}$–$10^{-15}$ m²/s 對數刻度；橫軸 0.49–0.56（1000/K）；直線由 0.50 延伸到約 0.555）

**解**：

**步驟 1：讀圖**
- $1/T_1 = 0.50\times10^{-3}$ K⁻¹ → $\log D_1 \approx -15.90$（$D \approx 1.26\times10^{-16}$）
- $1/T_2 = 0.54\times10^{-3}$ K⁻¹ → $\log D_2 \approx -16.88$（$D \approx 1.3\times10^{-17}$）

**步驟 2**：

$$Q_d = -2.3(8.31)\frac{-15.90 - (-16.88)}{0.50\times10^{-3} - 0.54\times10^{-3}} = -2.3(8.31)\frac{0.98}{-4\times10^{-5}} \approx 4.7\times10^5\ \text{J/mol}$$

**步驟 3**：

$$\log D_0 = -15.90 + \frac{(468{,}000)(0.50\times10^{-3})}{(2.3)(8.31)} = -3.65\ \Rightarrow\ D_0 \approx 2.2\times10^{-4}\ \text{m}^2/\text{s}$$

**答案**：$Q_d \approx 4.7\times10^5$ J/mol，$D_0 \approx 2\times10^{-4}$ m²/s

> **注意橫軸範圍很窄**（0.49–0.56），$\Delta(1/T)$ 只有 $4\times10^{-5}$，讀值的小誤差會放大成 $Q_d$ 的大誤差，務必讀格線交點附近的值。Mo 熔點高（2623 °C），$Q_d$ 大是合理的（見總整理第 8 節）。

---

### 習題 5.31　由圖求 Cu、Al 在 Si 中的活化能

**題目**：From Figure 5.12, calculate the activation energy for the diffusion of
(a) copper in silicon, and
(b) aluminum in silicon.
(c) How do these values compare?

> **版本注意**：題目寫 Figure 5.12，在你的課本中是 **Figure 5.11**（Cu、Au、Ag、Al 在 Si 中的 $\log D$–$1/T$ 圖）。

**解**：每條線取兩點，其中一點用圖上標示的 500 °C 數值（$1/T = 1/773 = 1.294\times10^{-3}$ K⁻¹），另一點在左端 $1/T = 0.6\times10^{-3}$ K⁻¹ 讀圖。

**(a) Cu 在 Si**
- $1/T = 0.6\times10^{-3}$：$\log D \approx -7.63$
- $1/T = 1.294\times10^{-3}$：$D = 7.1\times10^{-10}$ → $\log D = -9.15$

$$Q_d = -2.3(8.31)\frac{-7.63 - (-9.15)}{0.6\times10^{-3} - 1.294\times10^{-3}} = -2.3(8.31)\frac{1.52}{-6.94\times10^{-4}} \approx 4.2\times10^4\ \text{J/mol}$$

**(b) Al 在 Si**
- $1/T = 0.6\times10^{-3}$：$\log D \approx -13.39$
- $1/T = 1.294\times10^{-3}$：$D = 3.6\times10^{-26}$ → $\log D = -25.44$

$$Q_d = -2.3(8.31)\frac{-13.39 - (-25.44)}{-6.94\times10^{-4}} = -2.3(8.31)\frac{12.05}{-6.94\times10^{-4}} \approx 3.3\times10^5\ \text{J/mol}$$

**(c) 比較**：Al 的 $Q_d$ 約為 Cu 的 **8 倍**。
- 在圖上，Al 的線**陡得多**；
- Cu 在 Si 中是快速的**間隙擴散者**，$Q_d$ 很小（與簡報例題 2 的 41.5 kJ/mol 一致 ✓）；Al 在 Si 中是**取代型**，以空位機制擴散，$Q_d$ 大；
- 這解釋了為什麼 500 °C 時 Al 的 $D$ 比 Cu 小約 $10^{16}$ 倍，也就是 Al 適合當內連線的原因（4.7 節）。

---

### 習題 5.32　由穩態通量反求溫度（第一定律＋阿瑞尼斯）

**題目**：Carbon is allowed to diffuse through a steel plate 10-mm thick. The concentrations of carbon at the two faces are 0.85 and 0.40 kg C/cm³ Fe, which are maintained constant. If the preexponential and activation energy are $5.0\times10^{-7}$ m²/s and 77,000 J/mol, respectively, compute the temperature at which the diffusion flux is $6.3\times10^{-10}$ kg/m²·s.

> **⚠ 單位問題**：題目寫 kg C/**cm³** Fe。0.85 kg/cm³ = 850,000 kg/m³，**遠大於鐵本身的密度**（7870 kg/m³），物理上不可能。這是原書筆誤，應為 **kg C/m³ Fe**（0.85 kg/m³ ≈ 0.011 wt% C，合理）。以下按 kg/m³ 計算。

**解**：

**步驟 1：第一定律求 $D$**

$$D = \frac{J\,\Delta x}{\Delta C} = \frac{(6.3\times10^{-10})(10\times10^{-3})}{0.85 - 0.40} = \frac{6.3\times10^{-12}}{0.45} = 1.4\times10^{-11}\ \text{m}^2/\text{s}$$

**步驟 2：反求 $T$**

$$T = \frac{Q_d}{R\ln(D_0/D)} = \frac{77{,}000}{(8.31)\ln\dfrac{5.0\times10^{-7}}{1.4\times10^{-11}}} = \frac{77{,}000}{(8.31)(10.48)} = 884\ \text{K}\ (611\ ^\circ\text{C})$$

**答案**：約 884 K（611 °C）

> 若照字面用 kg/cm³，會得到 $D = 1.4\times10^{-17}$ m²/s、$T \approx 381$ K（108 °C）。考試若遇到類似情況，可寫出你採用的單位與理由。

---

### 習題 5.33　穩態通量的溫度換算

**題目**：The steady-state diffusion flux through a metal plate is $7.8\times10^{-8}$ kg/m²·s at a temperature of 1200 °C (1473 K) and when the concentration gradient is −500 kg/m⁴. Calculate the diffusion flux at 1000 °C (1273 K) for the same concentration gradient and assuming an activation energy for diffusion of 145,000 J/mol.

**解題思路**：梯度相同 → $J \propto D$ → $\dfrac{J_2}{J_1} = \dfrac{D_2}{D_1}$，套用法 C。

$$\frac{J_2}{J_1} = \exp\left[-\frac{145{,}000}{8.31}\left(\frac1{1273} - \frac1{1473}\right)\right] = \exp\left[-(17{,}449)(1.067\times10^{-4})\right] = e^{-1.861} = 0.156$$

$$J_2 = (7.8\times10^{-8})(0.156) = 1.2\times10^{-8}\ \text{kg/m}^2\cdot\text{s}$$

**答案**：$1.2\times10^{-8}$ kg/m²·s

> 也可以先求 $D_1 = J_1/|dC/dx| = 1.56\times10^{-10}$ m²/s，再換算 $D_2$，結果相同。

---

### 習題 5.34　γ-Fe 滲碳：4 h 達到 1000 °C、12 h 的效果

**題目**：At approximately what temperature would a specimen of γ-iron have to be carburized for 4 h to produce the same diffusion result as carburization at 1000 °C for 12 h?

**解題思路**：相同擴散結果 → $D_1t_1 = D_2t_2$（Part 3 Eq. 5.7）→ $D_2 = 3D_1$ → 用法 C 反解 $T_2$。

$$\frac{D_2}{D_1} = \frac{t_1}{t_2} = \frac{12}{4} = 3$$

$$\ln3 = -\frac{Q_d}{R}\left(\frac1{T_2} - \frac1{T_1}\right)\ \Rightarrow\ \frac1{T_2} = \frac1{T_1} - \frac{R\ln3}{Q_d} = \frac1{1273} - \frac{(8.31)(1.0986)}{148{,}000}$$

$$\frac1{T_2} = 7.855\times10^{-4} - 0.617\times10^{-4} = 7.239\times10^{-4}\ \Rightarrow\ T_2 = 1381\ \text{K}\ (1108\ ^\circ\text{C})$$

**答案**：約 1381 K（1108 °C）

---

### 習題 5.35　Mg 在 Al 中：450 °C 與 550 °C 的時間換算

**題目**：
(a) Calculate the diffusion coefficient for magnesium in aluminum at 450 °C.
(b) What time will be required at 550 °C to produce the same diffusion result (in terms of concentration at a specific point) as for 15 h at 450 °C?

**解**：

**(a)** $T = 723$ K

$$D_{450} = (1.2\times10^{-4})\exp\left[-\frac{130{,}000}{(8.31)(723)}\right] = 4.8\times10^{-14}\ \text{m}^2/\text{s}$$

**(b)** 例題 1 已算出 $D_{550} = 6.7\times10^{-13}$ m²/s。由 $Dt$ = 常數：

$$t_{550} = \frac{D_{450}t_{450}}{D_{550}} = \frac{(4.8\times10^{-14})(15\ \text{h})}{6.7\times10^{-13}} = 1.1\ \text{h}$$

**答案**：(a) $4.8\times10^{-14}$ m²/s；(b) 約 1.1 h

---

### 習題 5.36　Cu–Ni 擴散偶：深度加倍，溫度要多高？（挑戰題）

**題目**：A copper–nickel diffusion couple similar to that shown in Figure 5.1a is fashioned. After a 500-h heat treatment at 1000 °C (1273 K), the concentration of Ni is 3.0 wt% at the 1.0-mm position within the copper. At what temperature should the diffusion couple be heated to produce this same concentration (i.e., 3.0 wt% Ni) at a 2.0-mm position after 500 h? The preexponential and activation energy for the diffusion of Ni in Cu are $1.9\times10^{-4}$ m²/s and 230,000 J/mol, respectively.

**解題思路**：同濃度 → $\dfrac{x^2}{Dt}$ = 常數；時間相同 → $\dfrac{x^2}{D}$ = 常數 → $D_2 = D_1\left(\dfrac{x_2}{x_1}\right)^2 = 4D_1$。

$$\frac{D_2}{D_1} = \left(\frac{2.0}{1.0}\right)^2 = 4$$

$$\frac1{T_2} = \frac1{T_1} - \frac{R\ln4}{Q_d} = \frac1{1273} - \frac{(8.31)(1.386)}{230{,}000} = 7.855\times10^{-4} - 0.501\times10^{-4} = 7.355\times10^{-4}$$

$$T_2 = 1360\ \text{K}\ (1087\ ^\circ\text{C})$$

**答案**：約 1360 K（1087 °C）

> **本題的精髓**：不需要 erf 表、不需要知道擴散偶兩端的濃度。只要「同濃度」，就能用 $x^2/Dt$ = 常數。題目給的 $D_0$ 也用不到（只需 $Q_d$）。
>
> **合理性檢查**：$D(1273\ \text{K}) = 6.9\times10^{-14}$ m²/s，$\sqrt{Dt} = \sqrt{(6.9\times10^{-14})(1.8\times10^6)} = 0.35$ mm，與 1.0 mm 同數量級，題目情境合理 ✓

---

### 習題 5.37　A–B 擴散偶：升溫後位置在哪？

**題目**：A diffusion couple similar to that shown in Figure 5.1a is prepared using two hypothetical metals A and B. After a 20-h heat treatment at 800 °C (and subsequently cooling to room temperature) the concentration of B in A is 2.5 wt% at the 5.0-mm position within metal A. If another heat treatment is conducted on an identical diffusion couple, but at 1000 °C for 20 h, at what position will the composition be 2.5 wt% B? Assume that the preexponential and activation energy for the diffusion coefficient are $1.5\times10^{-4}$ m²/s and 125,000 J/mol, respectively.

**解**：時間相同、濃度相同 → $\dfrac{x^2}{D}$ = 常數 → $x_2 = x_1\sqrt{\dfrac{D_2}{D_1}}$

$$D_{800} = (1.5\times10^{-4})\exp\left[-\frac{125{,}000}{(8.31)(1073)}\right] = 1.22\times10^{-10}\ \text{m}^2/\text{s}$$

$$D_{1000} = (1.5\times10^{-4})\exp\left[-\frac{125{,}000}{(8.31)(1273)}\right] = 1.11\times10^{-9}\ \text{m}^2/\text{s}$$

$$x_2 = (5.0\ \text{mm})\sqrt{\frac{1.11\times10^{-9}}{1.22\times10^{-10}}} = (5.0)\sqrt{9.05} = 15\ \text{mm}$$

**答案**：約 15 mm

> **捷徑**：$\dfrac{D_2}{D_1}$ 可直接用用法 C 算（$D_0$ 消去）：$\exp\left[-\dfrac{125{,}000}{8.31}\left(\dfrac1{1273} - \dfrac1{1073}\right)\right] = 9.05$。

---

### 習題 5.39　由兩次處理時間求活化能（挑戰題）

**題目**：A diffusion couple similar to that shown in Figure 5.1a is prepared using two hypothetical metals R and S. After a 2.5-h heat treatment at 750 °C, the concentration of R is 4 at% at the 4-mm position within S. Another heat treatment is conducted on an identical diffusion couple at 900 °C, and the time required to produce this same diffusion result (viz., 4 at% R at the 4-mm position within S) is 0.4 h. If it is known that the diffusion coefficient at 750 °C is $2.6\times10^{-17}$ m²/s, determine the activation energy for the diffusion of R in S.

**解題思路**：同位置、同濃度 → $D_1t_1 = D_2t_2$ → $\dfrac{D_2}{D_1} = \dfrac{t_1}{t_2}$ → 用法 D 求 $Q_d$。

$$\frac{D_{900}}{D_{750}} = \frac{t_{750}}{t_{900}} = \frac{2.5}{0.4} = 6.25$$

$$Q_d = \frac{R\ln(D_2/D_1)}{\dfrac1{T_1} - \dfrac1{T_2}} = \frac{(8.31)\ln6.25}{\dfrac1{1023} - \dfrac1{1173}} = \frac{(8.31)(1.833)}{1.250\times10^{-4}} = 1.22\times10^5\ \text{J/mol}$$

**答案**：$Q_d \approx 122$ kJ/mol

> **多餘資訊**：$D_{750} = 2.6\times10^{-17}$ m²/s 在求 $Q_d$ 時用不到；它只有在要求 $D_0$ 時才需要（$D_0 = D_{750}\exp(Q_d/RT_1) \approx 4.4\times10^{-11}$ m²/s）。

---

### 習題 5.40　α-Fe 滲碳：600 °C 換到 900 °C

**題目**：The outer surface of a steel gear is to be hardened by increasing its carbon content; the carbon is to be supplied from an external carbon-rich atmosphere maintained at an elevated temperature. A diffusion heat treatment at 600 °C (873 K) for 100 min increases the carbon concentration to 0.75 wt% at a position 0.5 mm below the surface. Estimate the diffusion time required at 900 °C (1173 K) to achieve this same concentration also at a 0.5-mm position. Assume that the surface carbon content is the same for both heat treatments, which is maintained constant. Use the diffusion data in Table 5.2 for C diffusion in α-Fe.

**解**：同位置、同濃度 → $D_1t_1 = D_2t_2$

$$\frac{D_{600}}{D_{900}} = \exp\left[-\frac{87{,}400}{8.31}\left(\frac1{873} - \frac1{1173}\right)\right] = \exp\left[-(10{,}517)(2.930\times10^{-4})\right] = e^{-3.081} = 0.0459$$

$$t_{900} = t_{600}\cdot\frac{D_{600}}{D_{900}} = (100\ \text{min})(0.0459) = 4.6\ \text{min}$$

**答案**：約 4.6 min

> 900 °C < 912 °C，仍為 α-Fe，選用 α-Fe 數據正確 ✓

---

### 習題 5.42　Ga 預沉積：所需表面濃度

**題目**：For the predeposition heat treatment of a semiconducting device, gallium atoms are to be diffused into silicon at a temperature of 1150 °C for 2.5 h. If the required concentration of Ga at a position 2 μm below the surface is $8\times10^{23}$ atoms/m³, compute the required surface concentration of Ga. Assume the following:
(i) The surface concentration remains constant
(ii) The background concentration is $2\times10^{19}$ Ga atoms/m³
(iii) Preexponential and activation energy values are $3.74\times10^{-5}$ m²/s and 3.39 eV/atom, respectively.

**解題思路**：預沉積 → 表面濃度固定 → **erf 解**（Eq. 5.5），未知數是 $C_s$。

**步驟 1：$D$**（eV/atom → 用 $k$；$T = 1423$ K）

$$D = (3.74\times10^{-5})\exp\left[-\frac{3.39}{(8.62\times10^{-5})(1423)}\right] = 3.72\times10^{-17}\ \text{m}^2/\text{s}$$

**步驟 2：$z$**（$t = 9000$ s）

$$z = \frac{x}{2\sqrt{Dt}} = \frac{2\times10^{-6}}{2\sqrt{(3.72\times10^{-17})(9000)}} = \frac{2\times10^{-6}}{2(5.79\times10^{-7})} = 1.73$$

**步驟 3：內插 erf(1.73)**（1.7 → 0.9838；1.8 → 0.9891）

$$\text{erf}(1.73) = 0.9838 + 0.3\times(0.9891 - 0.9838) = 0.9854$$

**步驟 4：解 $C_s$**

$$\frac{C_x - C_0}{C_s - C_0} = 1 - \text{erf}(z) = 0.0146\ \Rightarrow\ C_s = C_0 + \frac{C_x - C_0}{0.0146} = 2\times10^{19} + \frac{8\times10^{23} - 2\times10^{19}}{0.0146}$$

$$C_s \approx 5.5\times10^{25}\ \text{atoms/m}^3$$

**答案**：約 $5.5\times10^{25}$ atoms/m³

> **敏感度提醒**：$1 - \text{erf}(z)$ 很小時，erf 的第四位小數差一點，答案就差幾 %（例如 erf 取 0.9853 會得到 $5.4\times10^{25}$）。這類題目答案在 ±5% 內都算正確。

---

### 習題 5.43　Sb 預沉積＋驅入：$Q_0$、$x_j$、指定濃度的位置

**題目**：Antimony atoms are to be diffused into a silicon wafer using both predeposition and drive-in heat treatments; the background concentration of Sb in this silicon material is known to be $2\times10^{20}$ atoms/m³. The predeposition treatment is to be conducted at 900 °C for 1 h; the surface concentration of Sb is to be maintained at a constant level of $8.0\times10^{25}$ atoms/m³. Drive-in diffusion will be carried out at 1200 °C for a period of 1.75 h. For the diffusion of Sb in Si, values of $Q_d$ and $D_0$ are 3.65 eV/atom and $2.14\times10^{-5}$ m²/s, respectively.
(a) Calculate the value of $Q_0$.
(b) Determine the value of $x_j$ for the drive-in diffusion treatment.
(c) Also, for the drive-in treatment, compute the position $x$ at which the concentration of Sb atoms is $5\times10^{23}$ atoms/m³.

**解**（流程同例題 5）：

**(a)** 預沉積（1173 K）：

$$D_p = (2.14\times10^{-5})\exp\left[-\frac{3.65}{(8.62\times10^{-5})(1173)}\right] = 4.50\times10^{-21}\ \text{m}^2/\text{s}$$

$$Q_0 = 2(8.0\times10^{25})\sqrt{\frac{(4.50\times10^{-21})(3600)}{\pi}} = 3.63\times10^{17}\ \text{atoms/m}^2$$

**(b)** 驅入（1473 K，$t_d = 6300$ s）：

$$D_d = (2.14\times10^{-5})\exp\left[-\frac{3.65}{(8.62\times10^{-5})(1473)}\right] = 7.02\times10^{-18}\ \text{m}^2/\text{s}$$

$$D_dt_d = (7.02\times10^{-18})(6300) = 4.42\times10^{-14}\ \text{m}^2,\qquad\sqrt{\pi D_dt_d} = 3.73\times10^{-7}\ \text{m}$$

$$x_j = \left[4(4.42\times10^{-14})\ln\frac{3.63\times10^{17}}{(2\times10^{20})(3.73\times10^{-7})}\right]^{1/2} = \left[(1.768\times10^{-13})\ln(4875)\right]^{1/2}$$

$$= \left[(1.768\times10^{-13})(8.49)\right]^{1/2} = 1.23\times10^{-6}\ \text{m} = 1.23\ \mu\text{m}$$

**(c)** 同樣由 Eq. 5.11 令 $C = 5\times10^{23}$：

$$x = \left[4D_dt_d\ln\frac{Q_0}{C\sqrt{\pi D_dt_d}}\right]^{1/2} = \left[(1.768\times10^{-13})\ln\frac{3.63\times10^{17}}{(5\times10^{23})(3.73\times10^{-7})}\right]^{1/2}$$

$$= \left[(1.768\times10^{-13})\ln(1.95)\right]^{1/2} = \left[(1.768\times10^{-13})(0.668)\right]^{1/2} = 3.4\times10^{-7}\ \text{m} = 0.34\ \mu\text{m}$$

**答案**：(a) $3.6\times10^{17}$ atoms/m²；(b) 1.23 μm；(c) 0.34 μm

> **合理性檢查**：驅入後表面濃度 $Q_0/\sqrt{\pi D_dt_d} = 9.7\times10^{23}$，比 $5\times10^{23}$ 大，所以 (c) 的位置確實存在 ✓（若指定濃度大於表面濃度，ln 內小於 1，就無解）

---

### 習題 5.44　In：由接面深度反求預沉積時間（挑戰題）

**題目**：Indium atoms are to be diffused into a silicon wafer using both predeposition and drive-in heat treatments; the background concentration of In in this silicon material is known to be $2\times10^{20}$ atoms/m³. The drive-in diffusion treatment is to be carried out at 1175 °C for a period of 2.0 h, which gives a junction depth $x_j$ of 2.35 μm. Compute the predeposition diffusion time at 925 °C if the surface concentration is maintained at a constant level of $2.5\times10^{26}$ atoms/m³. For the diffusion of In in Si, values of $Q_d$ and $D_0$ are 3.63 eV/atom and $7.85\times10^{-5}$ m²/s, respectively.

**解題思路**：**反向題**：$x_j$ → 反解 $Q_0$ → 反解 $t_p$。

**步驟 1：驅入的 $D_d$**（1448 K）

$$D_d = (7.85\times10^{-5})\exp\left[-\frac{3.63}{(8.62\times10^{-5})(1448)}\right] = 1.84\times10^{-17}\ \text{m}^2/\text{s}$$

$$D_dt_d = (1.84\times10^{-17})(7200) = 1.324\times10^{-13}\ \text{m}^2$$

**步驟 2：由 Eq. 5.13 反解 $Q_0$**

$$\frac{x_j^2}{4D_dt_d} = \ln\frac{Q_0}{C_B\sqrt{\pi D_dt_d}}\ \Rightarrow\ Q_0 = C_B\sqrt{\pi D_dt_d}\,\exp\left(\frac{x_j^2}{4D_dt_d}\right)$$

$$\frac{x_j^2}{4D_dt_d} = \frac{(2.35\times10^{-6})^2}{4(1.324\times10^{-13})} = 10.43$$

$$Q_0 = (2\times10^{20})\sqrt{\pi(1.324\times10^{-13})}\,e^{10.43} = (2\times10^{20})(6.45\times10^{-7})(3.38\times10^4) = 4.36\times10^{18}\ \text{atoms/m}^2$$

**步驟 3：預沉積的 $D_p$**（1198 K）

$$D_p = (7.85\times10^{-5})\exp\left[-\frac{3.63}{(8.62\times10^{-5})(1198)}\right] = 4.25\times10^{-20}\ \text{m}^2/\text{s}$$

**步驟 4：由 Eq. 5.12 反解 $t_p$**

$$Q_0 = 2C_s\sqrt{\frac{D_pt_p}{\pi}}\ \Rightarrow\ t_p = \frac{\pi}{D_p}\left(\frac{Q_0}{2C_s}\right)^2 = \frac{\pi}{4.25\times10^{-20}}\left(\frac{4.36\times10^{18}}{2(2.5\times10^{26})}\right)^2$$

$$t_p = \frac{\pi(8.72\times10^{-9})^2}{4.25\times10^{-20}} = 5.6\times10^3\ \text{s} \approx 1.6\ \text{h}$$

**答案**：約 5600 s（1.6 h）

> **易錯**：$e^{10.43}$ 對指數極敏感，步驟 2 的數值要多保留幾位有效數字再進位。

---

### 習題 5.D5　Al 擴散進 Si：驅入時間設計（設計題）

**題目**：One integrated circuit design calls for the diffusion of aluminum into silicon wafers; the background concentration of Al in Si is $1.75\times10^{19}$ atoms/m³. The predeposition heat treatment is to be conducted at 975 °C for 1.25 h, with a constant surface concentration of $4\times10^{26}$ Al atoms/m³. At a drive-in treatment temperature of 1050 °C, determine the diffusion time required for a junction depth of 1.75 μm. For this system, values of $Q_d$ and $D_0$ are 3.41 eV/atom and $1.38\times10^{-4}$ m²/s, respectively.

**解題思路**：$t_d$ 同時出現在 ln 的外面和裡面，**無法直接解出**，需用**試誤法**（trial and error）或**作圖法**。

**步驟 1：預沉積**（1248 K，$t_p = 4500$ s）

$$D_p = (1.38\times10^{-4})\exp\left[-\frac{3.41}{(8.62\times10^{-5})(1248)}\right] = 2.36\times10^{-18}\ \text{m}^2/\text{s}$$

$$Q_0 = 2(4\times10^{26})\sqrt{\frac{(2.36\times10^{-18})(4500)}{\pi}} = 4.65\times10^{19}\ \text{atoms/m}^2$$

**步驟 2：驅入的 $D_d$**（1323 K）

$$D_d = (1.38\times10^{-4})\exp\left[-\frac{3.41}{(8.62\times10^{-5})(1323)}\right] = 1.43\times10^{-17}\ \text{m}^2/\text{s}$$

**步驟 3：試誤** $x_j(t_d) = \left[4D_dt_d\ln\dfrac{Q_0}{C_B\sqrt{\pi D_dt_d}}\right]^{1/2}$

| $t_d$（h） | $x_j$（μm） |
|---|---|
| 0.5 | 1.28 |
| 1.0 | 1.80 |
| 1.5 | 2.18 |
| 2.0 | 2.51 |

1.75 μm 落在 0.5 與 1.0 h 之間，靠近 1.0 h；再細算得 **$t_d \approx 3400$ s（0.95 h）**。

**驗算**：$t_d = 3414$ s 時 $4D_dt_d = 1.947\times10^{-13}$ m²，ln 項 $= \ln\dfrac{4.65\times10^{19}}{(1.75\times10^{19})(3.91\times10^{-7})} = \ln(6.80\times10^6) = 15.73$，$x_j = \sqrt{(1.947\times10^{-13})(15.73)} = 1.75\times10^{-6}$ m ✓

**答案**：約 3400 s（0.95 h，約 57 min）

> **技巧**：ln 項隨 $t_d$ 變化很慢，可先**假設 ln 項為常數**估一個 $t_d$，再代回修正，通常兩三次就收斂。

---

### 習題 5.2FE（Fundamentals of Engineering 快問）

**題目**：Calculate the diffusion coefficient for copper in aluminum at 600 °C. Preexponential and activation energy values for this system are $6.5\times10^{-5}$ m²/s and 136,000 J/mol, respectively.
(A) $5.7\times10^{-2}$ m²/s　(B) $9.4\times10^{-17}$ m²/s　(C) $4.7\times10^{-13}$ m²/s　(D) $3.9\times10^{-2}$ m²/s

**解**：

$$D = (6.5\times10^{-5})\exp\left[-\frac{136{,}000}{(8.31)(873)}\right] = 4.7\times10^{-13}\ \text{m}^2/\text{s}$$

**答案：(C)**

> **選項陷阱**：(A)、(D) 這種 $10^{-2}$ 量級的答案，通常是把溫度用 °C 代入或漏了負號；(B) 則常是 $R$ 單位用錯。**固態擴散係數幾乎都落在 $10^{-10}$–$10^{-20}$ m²/s**，可用來快速排除。

---

## 8. 本節總整理

| 主題 | 核心內容 | 考試形式 |
|---|---|---|
| 擴散物種 | 間隙 ≫ 取代（$10^8$ 倍量級） | 比較、排序 |
| 阿瑞尼斯關係 | $D = D_0\exp(-Q_d/RT)$；$Q_d$ 大 → $D$ 小 | **必考計算**（★5.21） |
| 線性化 | $\log D = \log D_0 - \dfrac{Q_d}{2.3R}\cdot\dfrac1T$ | 讀圖題（5.29–5.31） |
| 用法 A：求 $D$ | 直接代入 | 5.21、5.22、5.2FE |
| 用法 B：反求 $T$ | $T = Q_d/[R\ln(D_0/D)]$ | 5.23–5.25、5.32 |
| 用法 C：兩溫度換算 | $D_2 = D_1\exp[-\frac{Q_d}{R}(\frac1{T_2} - \frac1{T_1})]$ | 5.26、5.33、簡報 p.18 |
| 用法 D：兩點求參數 | $Q_d = -R\dfrac{\ln D_1 - \ln D_2}{1/T_1 - 1/T_2}$ | 5.27、5.28、5.39 |
| 組合題 | $Dt$ = 常數、$x^2/Dt$ = 常數 ＋ 阿瑞尼斯 | 5.34–5.37、5.40 |
| 能量單位 | J/mol 用 $R$；eV/atom 用 $k$ | 半導體題 |
| 預沉積 | 表面濃度固定 → erf 解；$Q_0 = 2C_s\sqrt{D_pt_p/\pi}$ | 5.42、5.43a |
| 驅入擴散 | 總量固定 → 高斯解 Eq. 5.11 | 5.43c |
| 接面深度 | 令 $C = C_B$ → Eq. 5.13 | 5.43b、5.44、5.D5 |
| 內連線選材 | Al：$D$ 極小；Cu 需 Ta/TaN 阻障層 | 問答 |
| 短路擴散 | 差排、晶界、表面：快但截面積小 | 問答 |

**【補充：理解用】影響 $Q_d$ 的經驗規則**
- 基地**熔點愈高** → 鍵結愈強 → $Q_d$ 愈大（例如 Mo 自擴散 461 kJ/mol、Zn 自擴散 94 kJ/mol）。
- **結構愈開放**（BCC > FCC）→ 間隙擴散 $Q_d$ 較小（C 在 α-Fe 87.4 vs γ-Fe 148 kJ/mol）。

---

## 9. 易混淆名詞與觀念

| 容易搞混的一對 | 區分方式 |
|---|---|
| $D_0$ vs $D$ | $D_0$：與溫度**無關**的常數（$T \to \infty$ 的極限）；$D$：特定溫度下的擴散係數 |
| $Q_d$ vs $Q_0$ | $Q_d$：擴散**活化能**（J/mol、eV/atom）；$Q_0$：驅入擴散的雜質**總量**（atoms/m²）。符號很像，意義完全不同！ |
| $R$ vs $k$ | 每莫耳（J/mol）用 $R$ = 8.31；每原子（eV/atom）用 $k = 8.62\times10^{-5}$ |
| $\ln$ vs $\log$ | Eq. 5.9a 斜率 $-Q_d/R$；Eq. 5.9b 斜率 $-Q_d/2.3R$。讀圖題縱軸通常是 $\log_{10}$ |
| 對數刻度讀值 | 「$10^{-14}$」處代 $-14$；兩刻度正中間是 $10^{-14.5}$ |
| 斜率陡 vs 平 | 陡 → $Q_d$ 大 → 對溫度敏感 |
| 預沉積 vs 驅入擴散 | 表面**濃度**固定（erf）vs 雜質**總量**固定（高斯） |
| $D_p$ vs $D_d$ | 預沉積溫度與驅入溫度**不同**，必須分開算 |
| 背景濃度 $C_B$ vs 初始濃度 $C_0$ | 半導體題的 $C_B$ 就是 Part 3 的 $C_0$，只是名稱不同 |
| 接面深度 vs 擴散距離 | $x_j$：濃度降到 $C_B$ 的深度（明確定義）；$\sqrt{Dt}$：擴散距離的**數量級**估計 |
| 短路擴散 vs 體擴散 | 前者速率快但截面小，通常可忽略；後者是主要貢獻 |
| 溶解度大 vs 擴散快 | 碳在 γ-Fe 溶得多（洞大）；在 α-Fe 擴散快（通道開放） |

---

## 10. 考前提醒

1. **溫度一律換成 K**，尤其是 $1/T$ 的題目（5.28 給的是 °C）。
2. **先看 $Q_d$ 的單位**：J/mol → $R$；eV/atom → $k$。
3. **兩溫度題優先用用法 C**（$D_0$ 消去），計算量最少、最不容易錯。
4. **反求 $T$**：先算 $D_0/D$ 的比值再取 ln。
5. **$Q_d$ 一定是正值**；算出負的，代表分子分母順序不一致。
6. **讀圖題**：取格線上、距離遠的兩點；$D_0$ 用代回法，不要外插讀截距。
7. **組合題的判斷**：
   - 同位置、同濃度、不同溫度 → $D_1t_1 = D_2t_2$（5.34、5.39、5.40）
   - 同時間、同濃度、不同位置 → $x^2/D$ = 常數（5.36、5.37）
   - 同溫度 → $D$ 消去，只剩 $x^2/t$（Part 3 的 5.19、5.38）
8. **題目給的多餘資訊**：5.36 的 $D_0$、5.39 的 $D_{750}$ 都用不到，別被干擾。
9. **半導體題**：$D_p$、$D_d$ 分開算；$Q_0$ 的單位是 atoms/m²；$x_j$ 由 Eq. 5.11 令 $C = C_B$ 推得，不必死背 Eq. 5.13。
10. **合理性**：固態 $D$ 約在 $10^{-10}$–$10^{-20}$ m²/s；算出的溫度要在材料熔點以下；Fe 的題目要對照 912 °C 選相。
11. **作業題**（10/15 15:20 前繳交）：5.3、5.5、5.8、5.10、5.15、5.19、**5.21**。Part 1–4 已涵蓋全部七題。

---

## 附錄：本份名詞中英對照

| 中文（台灣用語） | 英文 |
|---|---|
| 擴散係數 | diffusion coefficient |
| 前指數因子 | pre-exponential factor |
| 擴散活化能 | activation energy for diffusion |
| 阿瑞尼斯方程式 | Arrhenius equation |
| 氣體常數 | gas constant |
| 波茲曼常數 | Boltzmann constant |
| 波茲曼分布 | Boltzmann distribution |
| 絕對溫度 | absolute temperature |
| 能量障壁 | energy barrier |
| 自然對數／常用對數 | natural logarithm / common logarithm |
| 斜率／截距 | slope / intercept |
| 外插 | extrapolation |
| 試誤法 | trial and error |
| 積體電路 | integrated circuit, IC |
| 單晶矽 | single-crystal silicon |
| 矽晶圓 | silicon wafer |
| 半導體 | semiconductor |
| 摻雜物 | dopant |
| 摻雜 | doping |
| 離子佈植 | ion implantation |
| 太陽能板 | solar panel |
| 預沉積 | predeposition |
| 驅入擴散 | drive-in diffusion |
| 背景濃度 | background concentration |
| 接面深度 | junction depth |
| p–n 接面 | p–n junction |
| 氧化氣氛 | oxidizing atmosphere |
| 二氧化矽 | silicon dioxide, SiO₂ |
| 氧化層 | oxide layer |
| 高斯積分 | Gaussian integral |
| 內連線 | interconnect |
| 導電度（電導率） | electrical conductivity |
| 擴散阻障層 | diffusion barrier |
| 耐腐蝕 | corrosion resistant |
| 短路擴散路徑 | short-circuit diffusion path |
| 體擴散（晶格擴散） | bulk diffusion (lattice diffusion) |
| 管道擴散 | pipe diffusion |
| 差排 | dislocation |
| 晶界 | grain boundary |
| 外表面 | external surface |
| 熔點 | melting point |
| 原子堆積因子 | atomic packing factor, APF |
| 硼 | boron, B |
| 磷 | phosphorus, P |
| 鎵 | gallium, Ga |
| 銻 | antimony, Sb |
| 銦 | indium, In |
| 鋁 | aluminum, Al |
| 銅 | copper, Cu |
| 銀 | silver, Ag |
| 金 | gold, Au |
| 鎳 | nickel, Ni |
| 鎂 | magnesium, Mg |
| 鋅 | zinc, Zn |
| 鉻 | chromium, Cr |
| 鈷 | cobalt, Co |
| 鉬 | molybdenum, Mo |
| 釩 | vanadium, V |
| 鉭／氮化鉭 | tantalum / tantalum nitride |
