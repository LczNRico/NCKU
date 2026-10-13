# 第5章 擴散（Diffusion）講義 Part 1：擴散基礎與擴散機制

> **範圍**：課本 5.1 引言、5.2 擴散機制；教授簡報 p.1–8
> **跨章連結**：第4章 空位（vacancy）濃度公式、FCC／BCC 間隙位置（interstitial site）
> **本份習題**：5.1、5.2、★5.3、5.4、★5.5、5.1FE（★ = 教授指定作業）

---

## 本章四份講義地圖

| 講義 | 內容 | 一句話重點 |
|---|---|---|
| **Part 1（本份）** | 擴散是什麼、原子怎麼動 | 空位擴散（vacancy diffusion）vs 間隙擴散（interstitial diffusion） |
| Part 2 | 菲克第一定律（Fick's first law） | 穩態（steady state）：$J = -D\,\dfrac{dC}{dx}$ |
| Part 3 | 菲克第二定律（Fick's second law） | 非穩態（nonsteady state）：誤差函數（error function）解 |
| Part 4 | 溫度效應、半導體擴散、其他路徑 | $D = D_0\exp(-Q_d/RT)$ |
| 總複習 | 全章 | 公式卡＋題型判斷流程 |

**學習目標（對應課本 Learning Objective 1）**：能說出並描述擴散的兩種原子機制，並解釋為什麼間隙擴散通常比較快。

---

## 0. 用 PSPP 看擴散：為什麼要學？

擴散幾乎出現在所有熱處理（heat treatment）中。以本章開頭的**表面硬化齒輪**（case-hardened gear）為例：

| PSPP 環節 | 齒輪表面硬化的內容 |
|---|---|
| **製程（Processing）** | 滲碳（carburizing）：在高溫、富碳氣氛中，讓碳原子由表面擴散進鋼中 |
| **結構（Structure）** | 表層碳含量提高（碳原子位於鐵晶格的間隙位置），表層產生殘留壓應力（residual compressive stress） |
| **性質（Properties）** | 表面硬度（hardness）上升 → 耐磨性（wear resistance）提高；壓應力 → 抗疲勞（fatigue）破壞能力提高 |
| **表現（Performance）** | 汽車變速箱（transmission）齒輪壽命延長 |

> **為什麼工程師要會算擴散？** 熱處理的溫度、時間、冷卻速率，常常可以用擴散數學（Part 2–4）事先預測，而不是靠試誤。

---

## 1. 擴散的定義（5.1）

### 1.1 基本定義

- **擴散（diffusion）**：藉由**原子運動**（atomic motion）造成的**質量傳輸**（mass transport）現象。
- 擴散的「方向性」：原子傾向由**高濃度區**往**低濃度區**移動，形成**淨流動**（net drift）。

### 1.2 擴散偶（diffusion couple）實驗：Cu–Ni

1. 把純銅（Cu）棒與純鎳（Ni）棒的端面緊密接合，形成**擴散偶**。
2. 在**高溫但低於兩者熔點**（melting temperature）的溫度下長時間加熱，再冷卻到室溫。
3. 化學分析結果：
   - 兩端仍是純 Cu 與純 Ni；
   - 中間出現 **Cu–Ni 合金（alloy）區**；
   - Cu 原子擴散進 Ni，Ni 原子也擴散進 Cu。

```
加熱前：  Cu Cu Cu Cu | Ni Ni Ni Ni       濃度剖面：階梯狀（在界面突變）
加熱後：  Cu Cu Cu Ni | Cu Ni Ni Ni       濃度剖面：平滑 S 形曲線（交叉）
              └─ 合金區 ─┘
```

> 簡報 p.3 的兩張濃度剖面（concentration profile）圖就是這個實驗：加熱前兩條線在界面處垂直切換；加熱後變成兩條交叉的平滑曲線。

### 1.3 互擴散 vs 自擴散

| | 互擴散（interdiffusion）／雜質擴散（impurity diffusion） | 自擴散（self-diffusion） |
|---|---|---|
| 定義 | 一種金屬的原子擴散進另一種材料中 | 純金屬中，同種原子互換位置 |
| 參與原子 | 不同種（溶質與主原子） | 同種（主原子 host atom） |
| 能否從成分變化觀察？ | **可以**（濃度隨時間、位置改變） | **不行**（成分始終均勻） |
| 簡報對應 | p.2：diffusion of atoms of one material **into** another | p.2、p.4：atomic migration **in** a pure metal |

> 簡報 p.4 的 A、B、C、D 標記原子示意圖：加熱後四個原子都換了位置，但整塊材料仍是純金屬，成分完全沒變。這正是自擴散「存在但看不出來」的原因（如何觀測請見習題 5.2）。

### 1.4 氣體、液體 vs 固體（簡報 p.2）

| 狀態 | 擴散方式 |
|---|---|
| 氣體、液體 | 隨機的布朗運動（Brownian motion） |
| **固體** | **空位擴散**與**間隙擴散**（本份重點） |

---

## 2. 原子要「跳一步」需要什麼？

從原子尺度看，擴散就是原子**從一個晶格位置（lattice site）逐步跳到另一個位置**。固體中的原子其實一直在振動、頻繁換位。要完成一次跳躍，**兩個條件缺一不可**：

1. **旁邊要有空的位置**（empty adjacent site）；
2. **原子要有足夠的能量**：足以打斷與鄰近原子的鍵結（bond），並撐開周圍原子造成**晶格畸變**（lattice distortion）。這份能量來自**振動能**（vibrational energy）。

**溫度的角色**：在某一溫度下，只有一小部分原子的振動能夠大，可以跳躍；**溫度愈高，這個比例愈大**。這就是 Part 4 中 $D$ 隨溫度呈指數上升的根本原因。

> **比喻**：在擠滿人的電影院換座位。條件 1 是「旁邊要有空位」，條件 2 是「你要有力氣擠過前排膝蓋」。

---

## 3. 兩種擴散機制（5.2）

### 3.1 空位擴散（vacancy diffusion）

**機制**：原子從正常晶格位置跳到**相鄰的空位**，兩者互換位置。

```
時間 →
 ● ● ○ ●        ● ○ ● ●        ○ ● ● ●
 原子往右跳      再一個原子往右跳   ……
 空位往左移      空位繼續往左移
```

**重點**：

- **原子往一個方向擴散 ＝ 空位往相反方向移動**。
- 需要有空位存在，所以擴散程度取決於**空位數目**。高溫時金屬中可有相當濃度的空位（第4章 4.2 節）。
- 適用對象：**主原子（自擴散）**與**取代型雜質原子**（substitutional impurity atom，互擴散）。後者的雜質原子必須「取代」主原子的晶格位置。

#### 📌 簡報 p.5 的提問：「diffusion rate depends on number of vacancies & activation energy to exchange —— **By which equation?**」

這題要串起兩條式子（考試可能出成問答題）：

**(1) 空位數目：第4章空位平衡濃度公式**

$$N_v = N\exp\left(-\frac{Q_v}{kT}\right)$$

- $N_v$：空位數目（每 m³）；$N$：原子位置總數（每 m³）
- $Q_v$：空位形成能（vacancy formation energy）；$k$：波茲曼常數（Boltzmann constant）= $8.62\times10^{-5}$ eV/atom·K

**(2) 交換所需的活化能：本章 Eq. 5.8（Part 4 詳述）**

$$D = D_0\exp\left(-\frac{Q_d}{RT}\right)$$

- $Q_d$：擴散活化能（activation energy for diffusion）

> 簡報旁註「（沒有 T 改變）」：這裡討論的是**固定溫度下**，速率由空位數與活化能決定。若溫度改變，這兩項都會跟著變。

**【補充：理解用，超出課本】** 對空位機制而言，原子要跳，必須「先有空位」**而且**「能跳過去」，因此活化能可概略拆成兩項：

$$Q_d^{\text{(空位)}} \approx Q_v^{\text{(空位形成)}} + Q_m^{\text{(遷移, migration)}}$$

間隙擴散的間隙位置本來就幾乎都是空的，不需要先「製造」空位，所以

$$Q_d^{\text{(間隙)}} \approx Q_m$$

這就是 Table 5.2 中 Fe 在 α-Fe 自擴散的 $Q_d$（251 kJ/mol）遠大於 C 在 α-Fe 間隙擴散的 $Q_d$（87.4 kJ/mol）的主要原因。

### 3.2 間隙擴散（interstitial diffusion）

**機制**：原子從一個**間隙位置**（interstitial position）跳到**相鄰的空間隙位置**。

- 適用對象：**原子夠小、塞得進間隙**的雜質，如**氫（H）、碳（C）、氮（N）、氧（O）**。
- 主原子或取代型雜質原子**很少**形成間隙原子，通常**不以**此機制擴散。
- 間隙擴散只會發生在**互擴散**，不會是自擴散。

### 3.3 兩種機制比較表

| 比較項目 | 空位擴散（vacancy diffusion） | 間隙擴散（interstitial diffusion） |
|---|---|---|
| 擴散的原子 | 主原子、取代型雜質原子 | 小的雜質原子（H, C, N, O） |
| 跳去哪裡 | 相鄰的**空位** | 相鄰的**空間隙位置** |
| 需要什麼缺陷 | 必須有空位（點缺陷 point defect） | 不需要空位 |
| 可用位置多寡 | 少（空位分率約 $10^{-4}$） | 多（間隙位置大多是空的） |
| 活化能 $Q_d$ | 大（含空位形成能） | 小（只需遷移能） |
| 擴散速率 | 慢 | **快** |
| 自擴散／互擴散 | 兩者皆可 | 只有互擴散 |
| 典型例子 | Fe 在 Fe、Cu 在 Ni、Zn 在 Cu | C 在 Fe（滲碳）、N 在 Fe（氮化）、H 在 Pd |
| 伴隨現象 | 空位反向移動 | 主晶格原子不動 |

### 3.4 為什麼間隙擴散通常比較快？（必考）

**課本給的兩個理由**：

1. **間隙原子較小 → 較易移動**（more mobile）：跳躍時造成的晶格畸變小，能量障礙低。
2. **空的間隙位置遠多於空位**：每次嘗試跳躍時，旁邊有空位置可跳的**機率高得多**。

**第三個角度（活化能觀點）**：如 3.1 補充所述，間隙擴散不需要「先形成空位」，$Q_d$ 較小，而 $D$ 對 $Q_d$ 呈**指數**敏感。

**定量感受**（例題 2、例題 3 詳算）：

| 比較 | 數量級 |
|---|---|
| 高溫金屬中空位分率 | 約 $10^{-4}$ |
| 稀薄碳在 γ-Fe 中，空著的八面體間隙位置分率 | 約 0.96 |
| 500 °C 下 $D_{\text{C in α-Fe}}$ / $D_{\text{Fe in α-Fe}}$ | 約 $4.5\times10^{8}$ 倍 |

> 簡報 p.15 的結論 $D_{\text{interstitial}} \gg D_{\text{substitutional}}$ 也是同一件事（Part 4 會再看那張圖）。

---

## 4. 前置複習：FCC 與 BCC 的間隙位置（第4章 4.3 節）

> 習題 5.4、5.5 需要這部分。原子半徑與晶格常數關係沿用你第3章整理的結果：FCC $a = 2\sqrt2R$，BCC $a = 4R/\sqrt3$。

### 4.1 兩種間隙位置

- **八面體位置**（octahedral site）：被 6 個原子圍成正八面體（或近似八面體）的空隙。
- **四面體位置**（tetrahedral site）：被 4 個原子圍成四面體的空隙。

### 4.2 FCC 的間隙位置

| | 八面體位置（octahedral） | 四面體位置（tetrahedral） |
|---|---|---|
| 座標 | 體心 $\frac12\frac12\frac12$；12 個邊中點，如 $\frac12 00$、$0\frac12 1$ | $\frac14\frac14\frac14$ 型（8 個，在晶胞內部） |
| 每晶胞數目 | $1 + 12\times\frac14 = 4$（＝原子數） | 8（＝原子數 ×2） |
| 可容納球半徑 $r$ | $0.414R$ | $0.225R$ |

**推導（八面體，取體心）**：體心到最近原子（面心 $\frac12\frac12 0$）距離 $= \dfrac a2$

$$r = \frac a2 - R = \frac{2\sqrt2R}{2} - R = (\sqrt2 - 1)R = 0.414R$$

**推導（四面體，取 $\frac14\frac14\frac14$）**：到角落原子 $000$ 的距離 $= \dfrac{\sqrt3}{4}a$

$$r = \frac{\sqrt3}{4}(2\sqrt2R) - R = \left(\frac{\sqrt6}{2} - 1\right)R = 0.225R$$

### 4.3 BCC 的間隙位置

| | 八面體位置（octahedral） | 四面體位置（tetrahedral） |
|---|---|---|
| 座標 | 面心 $\frac12\frac12 0$ 型、邊中點 $\frac12 00$ 型 | 面上 $\frac12\frac14 0$ 型，如題目的 $1\frac12\frac14$ |
| 每晶胞數目 | $6\times\frac12 + 12\times\frac14 = 6$ | $6\text{面}\times4\times\frac12 = 12$ |
| 可容納球半徑 $r$ | $0.155R$（扭曲八面體） | $0.291R$ |

**推導（八面體，取面心 $\frac12\frac12 0$）**：最近的是上下兩個體心原子，距離 $\dfrac a2$

$$r = \frac a2 - R = \frac{2R}{\sqrt3} - R = 0.155R$$

**推導（四面體，取 $\frac12\frac14 0$）**：到角落 $000$ 與體心 $\frac12\frac12\frac12$ 距離皆為 $\sqrt{\frac14+\frac1{16}}\,a = \dfrac{\sqrt5}{4}a$

$$r = \frac{\sqrt5}{4}\cdot\frac{4R}{\sqrt3} - R = \left(\sqrt{\tfrac53} - 1\right)R = 0.291R$$

### 4.4 代入鐵（$R_{\text{Fe}} = 0.124$ nm）與碳（$r_{\text{C}} = 0.071$ nm）

| 間隙位置 | 可容納半徑 | 與碳原子比較 |
|---|---|---|
| FCC（γ-Fe）八面體 | 0.0513 nm | 最大，但仍小於碳 → 碳進入需撐開晶格 |
| FCC（γ-Fe）四面體 | 0.0279 nm | 太小 |
| BCC（α-Fe）八面體 | 0.0192 nm | 很小 |
| BCC（α-Fe）四面體 | 0.0361 nm | 比 BCC 八面體大，但遠小於碳 |

> **反直覺重點**：BCC 的原子堆積因子（APF = 0.68）比 FCC（0.74）低，「總空隙」較多，但空隙分散成許多**小洞**；FCC 的總空隙較少，卻集中成**較大的八面體洞**。所以：
> - 碳在 **γ-Fe（FCC）溶解度較大**（洞大，塞得進去）；
> - 碳在 **α-Fe（BCC）擴散較快**（結構較開放，跳躍路徑短、障礙低）。這是 Part 4 習題 5.20 的伏筆。

### 4.5 晶向的求法（解 5.4、5.5 用）

1. 方向向量 ＝ **終點座標 − 起點座標**；
2. 乘上公倍數消去分數，化成最小整數 $[uvw]$，負號寫在數字上方（如 $\bar1$）；
3. **晶向族**（family of directions）$\langle uvw\rangle$ 包含所有指數排列與正負號組合（例如 $\langle110\rangle$ 在立方晶系共 12 個方向）。

---

## 5. 擴散在材料製程中的應用（簡報 p.7–8）

### 5.1 表面硬化（case hardening）：間隙擴散的實例

- **做法**：讓碳原子（或氮原子）擴散進鋼的外層，**只硬化表面**。
- **為什麼有效**：碳原子在鐵中是**間隙原子**，碳含量增加使鋼（steel）變硬。
- **效果**：
  1. 提升齒輪的**耐磨性**（wear resistance）；
  2. 表層產生的**殘留壓應力**提升**抗疲勞破壞**（resistance to fatigue failure）能力。
- 齒輪剖面中，深色外圈就是硬化層（case）。

### 5.2 半導體摻雜（doping）

- **摻雜**：把**極少量**的雜質原子（例如磷，P）擴散進半導體矽（silicon, Si）中。
- **流程**：
  1. 在矽表面沉積富含 P 的薄層；
  2. 熱處理，把 P「驅入」（drive in）矽中；
  3. 得到 P 摻雜的半導體區域。
- **機制觀點**：P、B 等摻雜原子與 Si 大小相近，屬於**取代型**雜質，主要以空位機制擴散，因此需要約 900–1200 °C 的高溫。
- 定量計算（預沉積 predeposition、驅入擴散 drive-in diffusion）放在 Part 4。

---

## 6. 例題講解

### 例題 1（課本 Concept Check 5.1）擴散係數排序

**題目**：將下列系統的擴散係數（diffusion coefficient）由大到小排序，並說明理由。Fe 與 Cr 都是 BCC，原子半徑 Fe、Cr、N 分別為 0.124、0.125、0.065 nm。

- N 在 Fe 中，700 °C
- Cr 在 Fe 中，700 °C
- N 在 Fe 中，900 °C
- Cr 在 Fe 中，900 °C

**解題思路**：先判斷**機制**（決定數量級），再比較**溫度**（同機制內微調）。

**步驟 1：判斷機制**
- N（0.065 nm）遠小於 Fe（0.124 nm）→ **間隙擴散** → 快。
- Cr（0.125 nm）與 Fe 幾乎一樣大 → 形成取代型固溶體（substitutional solid solution）→ **空位擴散** → 慢。

**步驟 2：比較溫度**：同一系統中，溫度愈高 $D$ 愈大。

**答案**：

$$D_{\text{N},900} > D_{\text{N},700} > D_{\text{Cr},900} > D_{\text{Cr},700}$$

**數量級驗證**（用 Table 5.2 預覽；Cr 的資料表中沒有，以大小相近的 Fe 自擴散代替）：

| 系統 | $D$（m²/s） |
|---|---|
| N 在 α-Fe，900 °C | $1.9\times10^{-10}$ |
| N 在 α-Fe，700 °C | $3.7\times10^{-11}$ |
| Fe 在 α-Fe，900 °C（代 Cr） | $1.8\times10^{-15}$ |
| Fe 在 α-Fe，700 °C（代 Cr） | $9.2\times10^{-18}$ |

> **觀念**：**機制差異**的影響（約 $10^4$–$10^7$ 倍）遠大於 **200 °C 溫差**的影響（間隙擴散約 5 倍）。排序時「機制優先，溫度其次」。注意 900 °C 仍低於鐵的相變溫度 912 °C，所以仍是 BCC。

---

### 例題 2：空位 vs 間隙位置，哪個「空位置」多？（量化理由 2）

**題目**：
(a) 銅在 1000 °C 時空位形成能 $Q_v = 0.9$ eV/atom，求空位分率 $N_v/N$。
(b) 含 0.8 wt% C 的 γ-Fe 中，八面體間隙位置有多少比例是空的？（原子量 C = 12.01，Fe = 55.85 g/mol）
(c) 比較兩者，說明對擴散速率的意義。

**解**：

**(a)** 第4章公式：

$$\frac{N_v}{N} = \exp\left(-\frac{Q_v}{kT}\right) = \exp\left[-\frac{0.9}{(8.62\times10^{-5})(1273)}\right] = \exp(-8.20) = 2.7\times10^{-4}$$

每約 3600 個原子位置才有 1 個空位。

**(b)** 先把 wt% 換成原子比（以 100 g 合金計）：

$$n_{\text{C}} = \frac{0.8}{12.01} = 0.0666\ \text{mol},\qquad n_{\text{Fe}} = \frac{99.2}{55.85} = 1.776\ \text{mol}$$

FCC 每晶胞的八面體位置數 ＝ 原子數（4 = 4），所以八面體位置總數 ＝ Fe 原子數：

$$\text{被占比例} = \frac{n_{\text{C}}}{n_{\text{Fe}}} = \frac{0.0666}{1.776} = 0.0375 \;\Rightarrow\; \text{空的比例} \approx 0.96$$

**(c)** 空間隙位置的比例（約 0.96）是空位分率（約 $2.7\times10^{-4}$）的約 3500 倍。

**意義**：間隙原子幾乎「隨時都有地方可以跳」，空位機制的原子則要「等空位剛好來到身旁」，這就是課本理由 2 的定量版本。（Cu 與 Fe 是不同金屬，此處為**數量級示意**；金屬在高溫下的空位分率大多落在 $10^{-5}$–$10^{-3}$。）

---

### 例題 3：自擴散 vs 間隙擴散的速率差（預覽 Part 4 公式）

**題目**：利用 Table 5.2，計算 500 °C 時 (a) Fe 在 α-Fe 中的自擴散係數、(b) C 在 α-Fe 中的擴散係數，並求兩者比值。

| 系統 | $D_0$（m²/s） | $Q_d$（J/mol） |
|---|---|---|
| Fe 在 α-Fe | $2.8\times10^{-4}$ | 251,000 |
| C 在 α-Fe | $1.1\times10^{-6}$ | 87,400 |

**解**：$T = 500 + 273 = 773$ K，$RT = 8.31\times773 = 6424$ J/mol

**(a)**
$$D_{\text{Fe}} = (2.8\times10^{-4})\exp\left(-\frac{251{,}000}{6424}\right) = (2.8\times10^{-4})\,e^{-39.07} = 3.0\times10^{-21}\ \text{m}^2/\text{s}$$

**(b)**
$$D_{\text{C}} = (1.1\times10^{-6})\exp\left(-\frac{87{,}400}{6424}\right) = (1.1\times10^{-6})\,e^{-13.61} = 1.4\times10^{-12}\ \text{m}^2/\text{s}$$

**比值**：
$$\frac{D_{\text{C}}}{D_{\text{Fe}}} = \frac{1.4\times10^{-12}}{3.0\times10^{-21}} \approx 4.5\times10^{8}$$

與課本 5.5 節引用的數值一致。

**觀察**：$D_0$ 其實是 Fe 比較大（大約 250 倍），但 $Q_d$ 差了 164 kJ/mol，透過指數放大後完全逆轉。**活化能才是決定性因素。**

---

## 7. 章末習題詳解

### 習題 5.1　自擴散與互擴散的差別

**題目**：Briefly explain the difference between self-diffusion and interdiffusion.

**詳解**：

- **自擴散**（self-diffusion）：發生在**純金屬**中，所有交換位置的原子都是**同一種**主原子。由於成分不變，**無法**藉由成分變化觀察。
- **互擴散**（interdiffusion，又稱雜質擴散 impurity diffusion）：**一種金屬的原子擴散進另一種金屬**中。原子由高濃度區淨流向低濃度區，**可以**從濃度隨時間、位置的變化觀察到（如 Cu–Ni 擴散偶）。

---

### 習題 5.2　如何監測自擴散？

**題目**：Self-diffusion involves the motion of atoms that are all of the same type; therefore, it is not subject to observation by compositional changes, as with interdiffusion. Suggest one way in which self-diffusion may be monitored.

**詳解**：使用**放射性同位素示蹤劑**（radioactive isotope tracer）。

1. 在純金屬試片表面鍍上一薄層**該金屬的放射性同位素**（例如純鐵表面鍍 ⁵⁹Fe）；
2. 在指定溫度下加熱一段時間；
3. 把試片逐層切削，量測每一層的**放射性強度**，得到同位素濃度隨深度的分布。

**為什麼可行**：同位素（isotope）的**化學性質與擴散行為幾乎相同**，所以它的移動代表了主原子的自擴散；但同位素帶有可偵測的放射性（或質量差異，也可用二次離子質譜 SIMS 量測穩定同位素），能被「看見」。

---

### ★習題 5.3　比較間隙與空位機制（作業）

**題目**：
(a) Compare interstitial and vacancy atomic mechanisms for diffusion.
(b) Cite two reasons why interstitial diffusion is normally more rapid than vacancy diffusion.

**詳解**：

**(a)**

- **空位擴散**：主原子或取代型雜質原子，從正常晶格位置跳到**相鄰的空位**。過程中原子與空位互換，原子往一方移動時，空位往反方向移動。此機制**需要空位存在**，可同時造成自擴散與互擴散。
- **間隙擴散**：體積小的雜質原子（H、C、N、O 等），從一個間隙位置跳到**相鄰的空間隙位置**。此機制**不需要空位**，只發生在互擴散。

**(b)** 兩個理由：

1. **間隙原子較小，因此移動性較高**：跳躍時需撐開的晶格畸變小，所需能量低。
2. **空的間隙位置比空位多得多**：間隙原子周圍幾乎總有可跳的位置，跳躍成功的機率遠高於必須等待空位出現的空位機制。

**加分補充**（可寫在答案末一句）：空位機制的活化能包含空位形成能，間隙機制不需要，因此 $Q_d$ 較小，$D$ 大上許多數量級（例如 500 °C 時 C 在 α-Fe 中的 $D$ 比 Fe 自擴散大約 $10^8$ 倍以上）。

---

### 習題 5.4　碳在 FCC 鐵中的擴散方向

**題目**：Carbon diffuses in iron via an interstitial mechanism—for FCC iron from one octahedral site to an adjacent one. In Section 4.3 (Figure 4.3a), we note that two general sets of point coordinates for this site are $0\frac12 1$ and $\frac12\frac12\frac12$. Specify the family of crystallographic directions in which this diffusion of carbon in FCC iron takes place.

**詳解**：

**步驟 1：確認兩位置相鄰。** $\frac12\frac12\frac12$ 是體心，$0\frac12 1$ 是邊中點，兩者都是 FCC 的八面體位置。距離為

$$\sqrt{\left(\tfrac12\right)^2 + 0^2 + \left(\tfrac12\right)^2}\,a = \frac{\sqrt2}{2}a = 0.707a$$

體心到 12 個邊中點都是這個距離；下一層的八面體位置（相鄰晶胞的體心）距離為 $a$，較遠。所以 $0.707a$ 是**最近鄰**的八面體位置，兩者確實相鄰。

**步驟 2：求方向向量**（終點 − 起點），起點 $\frac12\frac12\frac12$，終點 $0\frac12 1$：

$$\left(0 - \tfrac12,\ \tfrac12 - \tfrac12,\ 1 - \tfrac12\right) = \left(-\tfrac12,\ 0,\ \tfrac12\right)$$

**步驟 3：乘 2 化整數**：$[\bar1\,0\,1]$

**答案**：碳在 FCC 鐵中沿 **$\langle110\rangle$ 晶向族**擴散。

> **延伸觀念**：FCC 的八面體位置本身排成另一套 FCC 排列（只是平移了 $\frac12 00$），所以它們的最近鄰方向和 FCC 原子一樣都是 $\langle110\rangle$，每個八面體位置有 12 個最近鄰八面體位置可跳。

---

### ★習題 5.5　碳在 BCC 鐵中的擴散方向（作業）

**題目**：Carbon diffuses in iron via an interstitial mechanism—for BCC iron from one tetrahedral site to an adjacent one. In Section 4.3 (Figure 4.3b) we note that a general set of point coordinates for this site are $1\frac12\frac14$. Specify the family of crystallographic directions in which this diffusion of carbon in BCC iron takes place.

**詳解**：

**步驟 1：找出 $1\frac12\frac14$ 附近的四面體位置。** BCC 四面體位置的座標規則是：一個座標為 0 或 1（在某個面上），一個為 $\frac12$，一個為 $\frac14$ 或 $\frac34$。

起點 $1\frac12\frac14$ 位於 $x = 1$ 的面上，候選鄰居與距離如下：

| 候選位置 | 向量（終點 − 起點） | 距離 |
|---|---|---|
| $1\,\frac14\,\frac12$（同一面） | $(0,\ -\frac14,\ \frac14)$ | $\frac{\sqrt2}{4}a = 0.354a$ |
| $1\,\frac34\,\frac12$（同一面） | $(0,\ \frac14,\ \frac14)$ | $0.354a$ |
| $\frac34\,\frac12\,0$（$z = 0$ 面） | $(-\frac14,\ 0,\ -\frac14)$ | $0.354a$ |
| $1\,\frac12\,\frac34$（同一面） | $(0,\ 0,\ \frac12)$ | $0.5a$（較遠，非最近鄰） |

最近鄰距離為 $0.354a$。

**步驟 2：取其中一組化成整數**，例如 $1\frac12\frac14 \rightarrow 1\frac14\frac12$：

$$\left(0,\ -\tfrac14,\ \tfrac14\right)\times4 = [0\,\bar1\,1]$$

其他最近鄰方向如 $[011]$、$[\bar1 0\bar1]$，也都屬於同一族。

**答案**：碳在 BCC 鐵中沿 **$\langle110\rangle$ 晶向族**擴散。

> **易錯提醒**：
> 1. 不要把 $1\frac12\frac14 \rightarrow 1\frac12\frac34$（$[001]$，即 $\langle100\rangle$）當答案。那個距離是 $0.5a$，不是「相鄰」位置。
> 2. **事實補充**：實際上 α-Fe 中的碳原子主要占據**八面體**位置（會使晶格沿單一方向伸長），本題依課本設定以四面體位置作答即可。

---

### 習題 5.1FE（Fundamentals of Engineering 快問）

**題目**：Atoms of which of the following elements will diffuse most rapidly in iron?
(A) Mo　(B) C　(C) Cr　(D) W

**答案：(B) C**

**理由**：C 原子很小，在鐵中以**間隙擴散**進行；Mo、Cr、W 的原子大小都接近 Fe，形成取代型固溶體，只能以較慢的**空位擴散**進行。

---

## 8. 本節總整理

| 主題 | 核心內容 | 考試形式 |
|---|---|---|
| 擴散定義 | 以原子運動造成的質量傳輸，由高濃度往低濃度淨流動 | 名詞解釋 |
| 擴散偶 | Cu–Ni 接合，低於熔點加熱，界面形成合金區 | 看圖說明濃度剖面 |
| 互擴散 vs 自擴散 | 異種 vs 同種原子；可否由成分觀察 | 問答（5.1）、應用（5.2） |
| 跳躍兩條件 | ① 鄰近有空位置 ② 足夠振動能（斷鍵＋晶格畸變） | 問答 |
| 空位擴散 | 原子與空位互換；空位反向移動；需空位；主原子與取代型雜質 | 比較題（5.3a） |
| 間隙擴散 | 小原子（H, C, N, O）在間隙間跳；不需空位 | 比較題（5.3a） |
| 間隙較快的理由 | ① 原子小、易移動 ② 空間隙位置多（＋$Q_d$ 小） | **必考**（5.3b） |
| 空位數公式 | $N_v = N\exp(-Q_v/kT)$（第4章） | 簡報 p.5 提問 |
| 間隙位置 | FCC 八面體 $0.414R$；BCC 四面體 $0.291R$、八面體 $0.155R$ | 計算／判斷 |
| 擴散方向 | FCC 八面體→八面體、BCC 四面體→四面體，皆為 $\langle110\rangle$ | 晶向題（5.4、5.5） |
| 應用 | 表面硬化（間隙擴散）、半導體摻雜（取代型、空位機制） | PSPP 說明 |

---

## 9. 易混淆名詞

| 容易搞混的一對 | 區分方式 |
|---|---|
| 互擴散（interdiffusion）vs 雜質擴散（impurity diffusion） | **同義詞**，不是兩種東西 |
| 自擴散（self-diffusion）vs 互擴散 | 看擴散的原子是否與基地相同；自擴散無法由成分變化觀察 |
| 間隙原子（interstitial atom）vs 自間隙原子（self-interstitial） | 前者是外來的小雜質（如 C）；後者是主原子自己擠進間隙，在金屬中能量極高、很少見 |
| 間隙位置（interstitial site）vs 空位（vacancy） | 間隙位置**本來就不是**晶格位置；空位是**晶格位置上少了原子** |
| 原子擴散方向 vs 空位移動方向 | 空位機制中兩者**相反** |
| 取代型固溶體（substitutional）vs 間隙型固溶體（interstitial solid solution） | 前者溶質大小接近主原子 → 空位擴散；後者溶質遠小於主原子 → 間隙擴散 |
| APF 低 vs 間隙「大」 | BCC 的 APF 較低，但單一間隙**較小**；FCC 的八面體間隙**較大** |
| 八面體 vs 四面體位置大小 | FCC：八面體 > 四面體；**BCC：四面體 > 八面體**（容易背反） |
| 擴散係數 $D$ vs 擴散通量 $J$ | $D$ 是材料＋溫度的性質（m²/s）；$J$ 是實際流量（kg/m²·s），還與濃度梯度有關（Part 2） |

---

## 10. 考前提醒

1. **「為什麼間隙擴散比較快」的兩個理由要能直接默寫**，英文關鍵字：*smaller → more mobile*、*more empty interstitial positions than vacancies*。
2. **判斷機制先看原子大小**：H、C、N、O 在金屬中 → 間隙；其他金屬原子 → 空位。排序題「機制優先，溫度其次」。
3. **晶向題四步驟**：確認相鄰（算距離）→ 終點減起點 → 化整數 → 寫成 $\langle\ \rangle$ 族。記得檢查是不是**最近鄰**。
4. **跨章公式要帶上考場**：$N_v = N\exp(-Q_v/kT)$ 用**波茲曼常數** $k$（eV/atom·K）；$D = D_0\exp(-Q_d/RT)$ 用**氣體常數** $R$（J/mol·K）。單位要配對。
5. **溫度要換成 K**：例題 2、3 都需要 $+273$。
6. 鐵的相變溫度 **912 °C**：以下為 BCC（α-Fe），以上為 FCC（γ-Fe）。題目給溫度時，先判斷是哪一相再查表。

---

## 附錄：本份名詞中英對照

| 中文（台灣用語） | 英文 |
|---|---|
| 擴散 | diffusion |
| 質量傳輸 | mass transport |
| 擴散偶 | diffusion couple |
| 互擴散／雜質擴散 | interdiffusion / impurity diffusion |
| 自擴散 | self-diffusion |
| 濃度剖面 | concentration profile |
| 布朗運動 | Brownian motion |
| 晶格位置 | lattice site |
| 晶格畸變 | lattice distortion |
| 振動能 | vibrational energy |
| 空位 | vacancy |
| 空位擴散 | vacancy diffusion |
| 空位形成能 | vacancy formation energy |
| 遷移能 | migration energy |
| 間隙位置 | interstitial site / interstitial position |
| 間隙擴散 | interstitial diffusion |
| 間隙原子／自間隙原子 | interstitial atom / self-interstitial |
| 主原子 | host atom |
| 取代型雜質原子 | substitutional impurity atom |
| 取代型固溶體 | substitutional solid solution |
| 間隙型固溶體 | interstitial solid solution |
| 點缺陷 | point defect |
| 八面體位置 | octahedral site |
| 四面體位置 | tetrahedral site |
| 面心立方 | face-centered cubic, FCC |
| 體心立方 | body-centered cubic, BCC |
| 原子堆積因子 | atomic packing factor, APF |
| 晶向族 | family of directions |
| 擴散係數 | diffusion coefficient |
| 擴散活化能 | activation energy for diffusion |
| 波茲曼常數 | Boltzmann constant |
| 氣體常數 | gas constant |
| 熱處理 | heat treatment |
| 表面硬化 | case hardening |
| 滲碳 | carburizing |
| 鋼 | steel |
| 硬度 | hardness |
| 耐磨性 | wear resistance |
| 殘留壓應力 | residual compressive stress |
| 疲勞 | fatigue |
| 摻雜 | doping |
| 半導體 | semiconductor |
| 矽 | silicon |
| 同位素 | isotope |
| 放射性同位素示蹤劑 | radioactive isotope tracer |
| 二次離子質譜 | secondary ion mass spectrometry, SIMS |
| 相變 | phase transformation |
