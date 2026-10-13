# 第5章 擴散（Diffusion）講義 Part 2：菲克第一定律與穩態擴散

> **範圍**：課本 5.3 菲克第一定律（Fick's first law）；教授簡報 p.9–12
> **跨章連結**：第4章 Eq. 4.9（wt% 換算成 kg/m³）；Part 4 的 $D = D_0\exp(-Q_d/RT)$
> **本份例題**：課本 Example 5.1、簡報防護手套（CPC）例題＋突破時間延伸
> **本份習題**：5.6、5.7、★5.8、5.9、★5.10、5.11、5.D1、5.D2（★ = 教授指定作業）

---

## 本份在全章的位置

| 講義 | 內容 | 一句話重點 |
|---|---|---|
| Part 1 | 擴散是什麼、原子怎麼動 | 空位擴散 vs 間隙擴散 |
| **Part 2（本份）** | **菲克第一定律（Fick's first law）** | **穩態（steady state）：$J = -D\,\dfrac{dC}{dx}$** |
| Part 3 | 菲克第二定律（Fick's second law） | 非穩態：誤差函數（error function）解 |
| Part 4 | 溫度效應、半導體擴散、其他路徑 | $D = D_0\exp(-Q_d/RT)$ |
| 總複習 | 全章 | 公式卡＋題型判斷流程 |

**學習目標（對應課本 Learning Objective 2、3）**：
1. 區分穩態（steady-state）與非穩態（nonsteady-state）擴散；
2. 寫出菲克第一定律並說明每個參數的意義，知道它適用於**穩態**擴散。

---

## 0. 用 PSPP 看穩態擴散：鈀膜純化氫氣

| PSPP 環節 | 鈀（palladium, Pd）膜純化氫氣（hydrogen） |
|---|---|
| **製程（Processing）** | 薄鈀片一側通入不純的氫氣（混有 N₂、O₂、水蒸氣），另一側維持較低的氫氣壓力 |
| **結構（Structure）** | 氫原子體積極小，可在 Pd 晶格的**間隙位置**（interstitial site）中擴散；其他氣體分子幾乎無法進入 |
| **性質（Properties）** | 氫在 Pd 中的擴散係數大、溶解度高 → 透過量（flux）大且**選擇性**（selectivity）高 |
| **表現（Performance）** | 出口端得到高純度氫氣，應用於半導體製程、燃料電池（fuel cell） |

> 這是課本給的穩態擴散實例，也是習題 5.8 的情境；5.D1、5.D2 則是把「選擇性」量化的設計題。

---

## 1. 擴散通量（diffusion flux）

### 1.1 定義（Eq. 5.1）

**擴散通量** $J$：單位時間內，**垂直**穿過單位截面積的質量（或原子數）。

$$J = \frac{M}{At}$$

| 符號 | 意義 | SI 單位 |
|---|---|---|
| $J$ | 擴散通量 | kg/m²·s 或 atoms/m²·s |
| $M$ | 擴散通過的質量（或原子數） | kg（或 atoms） |
| $A$ | 擴散所穿過的截面積 | m² |
| $t$ | 經過的擴散時間 | s |

> **比喻**：$J$ 就像「每秒、每平方公尺的門口通過多少人」。門愈寬（$A$）、時間愈長（$t$），通過總人數 $M$ 愈多，但「通量」是把這兩者除掉後的**強度**。

### 1.2 實驗量測（簡報 p.9 補充，課本未寫）

1. 用截面積為 $A$ 的**薄片**（thin sheet）或**薄膜**（membrane）；
2. 在薄片兩側施加**濃度梯度**（concentration gradient）；
3. 量測一段時間內穿過薄片的擴散物種質量 $M$。

把 $M$ 對時間 $t$ 作圖，得到直線，通量就是**斜率**除以面積：

$$J = \frac{M}{At} = \frac{1}{A}\frac{dM}{dt}$$

```
 M（累積擴散質量）
 │            ／
 │         ／      斜率 = dM/dt = J·A
 │      ／
 │   ／
 │／
 └──────────────── t
```

> **為什麼是直線？** 穩態時 $J$ 不隨時間改變，所以 $M$ 隨 $t$ 等速增加。若 $M$–$t$ 圖是彎的（一開始較平），代表還沒進入穩態（見第 3.3 節）。

---

## 2. 穩態擴散與濃度剖面

### 2.1 穩態擴散（steady-state diffusion）

**定義**：擴散通量**不隨時間改變**的擴散狀態。

以薄金屬板為例（課本 Figure 5.3a）：

- 板兩側的氣體壓力 $p_A > p_B$，且**保持固定**；
- 一開始氣體原子進入板中、慢慢建立分布；
- 一段時間後達到：**從高壓側進入的量 ＝ 從低壓側離開的量**，板內**沒有淨累積**（no net accumulation）。

> **比喻**：一條水管兩端水壓固定，打開後經過短暫的「灌水期」，管內每一點的流量都相同且穩定，這就是穩態。

### 2.2 濃度剖面與濃度梯度

| 名詞 | 定義 |
|---|---|
| **濃度剖面**（concentration profile） | 濃度 $C$ 對位置 $x$ 作圖得到的曲線 |
| **濃度梯度**（concentration gradient） | 濃度剖面上某一點的**斜率** $dC/dx$ |

若濃度剖面為**直線**（課本 Figure 5.3b），梯度處處相同（Eq. 5.3）：

$$\frac{dC}{dx} = \frac{\Delta C}{\Delta x} = \frac{C_A - C_B}{x_A - x_B}$$

> **注意**：分子、分母要**同一個順序**相減（都是 A − B，或都是 B − A）。簡報 p.10 寫成 $\dfrac{C_2 - C_1}{x_2 - x_1}$，兩種寫法結果相同。

### 2.3 濃度的單位

擴散題目中濃度常用**單位體積固體中擴散物種的質量**：kg/m³ 或 g/cm³。

| 換算 | 結果 |
|---|---|
| 1 g/cm³ | $= 10^3$ kg/m³ |
| 1 cm | $= 10^{-2}$ m |
| 1 cm²/s | $= 10^{-4}$ m²/s |
| 1 g/cm²·s | $= 10$ kg/m²·s |

如果題目給 **wt%**，要先用第4章 **Eq. 4.9** 換算（見第 5 節）。

---

## 3. 菲克第一定律（Fick's first law）

### 3.1 定律內容（Eq. 5.2）

穩態、單一方向（$x$ 方向）擴散時，通量與濃度梯度成正比：

$$\boxed{J = -D\,\frac{dC}{dx}}$$

| 符號 | 意義 | 單位 |
|---|---|---|
| $D$ | **擴散係數**（diffusion coefficient） | m²/s |
| $dC/dx$ | 濃度梯度 | kg/m⁴ |
| 負號 | 擴散方向是**順著濃度下降**的方向（由高濃度往低濃度） | — |

**單位驗證**：$\dfrac{\text{m}^2}{\text{s}}\times\dfrac{\text{kg/m}^3}{\text{m}} = \dfrac{\text{kg}}{\text{m}^2\cdot\text{s}}$ ✓

### 3.2 負號的意義

```
 C
 │╲
 │  ╲          dC/dx < 0（濃度沿 +x 下降）
 │    ╲        J = −D·(負) = 正 → 原子往 +x 方向流
 │      ╲
 └──────────── x
   高濃度 → 低濃度
```

**解題口訣**：$J$ 的大小 $= D\times\left|\dfrac{\Delta C}{\Delta x}\right|$，方向永遠是**從高濃度往低濃度**。計算時只要確認結果為正（若定義高濃度往低濃度為正方向），不必死背正負號。

### 3.3 為什麼穩態時濃度剖面是直線？（推導）

課本直接「假設」剖面為線性。其實這可以從**質量守恆**（conservation of mass）推出來：

**步驟 1**：在板中取一薄層，厚度 $dx$、面積 $A$。

```
      J(x) →  ┌──────┐  → J(x+dx)
              │ 薄層 │
              └──────┘
              x     x+dx
```

**步驟 2**：薄層內擴散物種的累積速率 ＝ 流入 − 流出：

$$\frac{\partial (C\,A\,dx)}{\partial t} = J(x)A - J(x+dx)A$$

$$\Rightarrow\quad \frac{\partial C}{\partial t} = -\frac{\partial J}{\partial x}$$

**步驟 3**：穩態 → 濃度不隨時間改變，$\dfrac{\partial C}{\partial t} = 0$，所以 $\dfrac{dJ}{dx} = 0$，**$J$ 在板內每一處都相同**。

**步驟 4**：代入菲克第一定律，且 $D$ 為常數：

$$\frac{d}{dx}\left(-D\frac{dC}{dx}\right) = 0 \;\Rightarrow\; \frac{d^2C}{dx^2} = 0 \;\Rightarrow\; C = ax + b$$

**結論**：$D$ 與濃度無關時，穩態濃度剖面**必為直線**。

> **伏筆**：步驟 2 的式子 $\dfrac{\partial C}{\partial t} = -\dfrac{\partial J}{\partial x}$，把 $J = -D\dfrac{\partial C}{\partial x}$ 代進去，就得到 **Part 3 的菲克第二定律** $\dfrac{\partial C}{\partial t} = D\dfrac{\partial^2 C}{\partial x^2}$。第一定律＋質量守恆＝第二定律。

### 3.4【補充：理解用，超出課本】從原子跳躍推導菲克第一定律

把 Part 1 的「原子跳一步」接到巨觀的 $J$：

**設定**：兩個相鄰原子面 1、2，間距 $\lambda$（一次跳躍的距離）；每單位面積上可擴散原子數分別為 $n_1$、$n_2$；每個原子每秒跳躍 $\Gamma$ 次（跳躍頻率 jump frequency）。在立方晶格中有 6 個跳躍方向，往 $+x$ 的機率為 $\frac16$。

$$J_{1\to2} = \frac16\Gamma n_1,\qquad J_{2\to1} = \frac16\Gamma n_2$$

$$J = \frac16\Gamma(n_1 - n_2)$$

又 $n = C\lambda$，且 $C_2 - C_1 = \lambda\dfrac{dC}{dx}$，所以 $n_1 - n_2 = -\lambda^2\dfrac{dC}{dx}$：

$$J = -\left(\frac16\Gamma\lambda^2\right)\frac{dC}{dx}\quad\Rightarrow\quad D = \frac16\Gamma\lambda^2$$

**意義**：
- **負號的來源**：每個原子跳往左右的機率相同，但高濃度那側「人多」，所以淨流動往低濃度走。擴散**不需要原子「知道」濃度梯度**，純粹是統計結果。
- **$D$ 的物理意義**：跳得愈頻繁（$\Gamma$ 大）、每步愈遠（$\lambda$ 大），$D$ 愈大。$\Gamma$ 隨溫度呈指數上升，就是 Part 4 中 $D = D_0\exp(-Q_d/RT)$ 的來源。

---

## 4. 驅動力（driving force）

- **驅動力**：迫使某反應或過程發生的「推力」。
- **依菲克第一定律進行的擴散，其驅動力是濃度梯度** $dC/dx$。
- 其他驅動力：相變（phase transformation）的驅動力（第9、10章）。

> **進階觀念**：嚴格來說，擴散真正的驅動力是**化學位能梯度**（chemical potential gradient）。在絕大多數情況下兩者方向一致，所以入門課本以濃度梯度描述。少數情況（如某些合金的「上坡擴散」uphill diffusion）原子會往高濃度方向擴散，這是因為化學位能與濃度方向不一致。考試寫「濃度梯度」即可。

---

## 5. 前置工具：wt% 換算成 kg/m³（第4章 Eq. 4.9）

二元合金中元素 1 的 wt% 為 $C_1$、元素 2 為 $C_2$（$C_1 + C_2 = 100$），密度分別為 $\rho_1$、$\rho_2$（g/cm³）：

$$C_1'' = \left(\frac{C_1}{\dfrac{C_1}{\rho_1} + \dfrac{C_2}{\rho_2}}\right)\times10^3\quad(\text{kg/m}^3)$$

**推導**（以 100 g 合金計）：
- 元素 1 質量 $= C_1$ g；
- 合金體積 $= \dfrac{C_1}{\rho_1} + \dfrac{C_2}{\rho_2}$ cm³（假設體積可加成）；
- 所以 $C_1'' = \dfrac{C_1}{\text{體積}}$ g/cm³，乘 $10^3$ 得 kg/m³。

**稀薄溶液快速近似**：當 $C_1 \ll 1$ wt% 時，分母 $\approx \dfrac{100}{\rho_2}$：

$$C_1'' \approx C_1\times\rho_2\times10\quad(\text{kg/m}^3)$$

例如鐵中 0.01 wt% C ≈ $0.01\times7.87\times10 = 0.787$ kg/m³。

**常用密度**：Fe 7.87、C（石墨 graphite）2.25、N 1.25 g/cm³（N 的值在稀薄時幾乎不影響結果）。

---

## 6. 例題講解

### 例題 1（課本 Example Problem 5.1）鐵板的碳通量

**題目**：700 °C 下，鐵板一側接觸**滲碳**（carburizing，富碳）氣氛，另一側接觸**脫碳**（decarburizing，貧碳）氣氛。達到穩態後，距滲碳面 5 mm 與 10 mm 處的碳濃度分別為 1.2 與 0.8 kg/m³。已知 $D = 3\times10^{-11}$ m²/s，求通過鐵板的碳擴散通量。

**解**：

設 $A$：$x_A = 5\times10^{-3}$ m，$C_A = 1.2$ kg/m³；$B$：$x_B = 10^{-2}$ m，$C_B = 0.8$ kg/m³

$$J = -D\frac{C_A - C_B}{x_A - x_B} = -(3\times10^{-11})\frac{1.2 - 0.8}{5\times10^{-3} - 10^{-2}}$$

$$= -(3\times10^{-11})\frac{0.4}{-5\times10^{-3}} = 2.4\times10^{-9}\ \text{kg/m}^2\cdot\text{s}$$

**觀察**：
- 結果為正，代表碳由滲碳面往脫碳面（$+x$）流動。
- 題目只給板內**兩點**的濃度，不需要知道板的總厚度；穩態下剖面是直線，任兩點的斜率都一樣。

---

### 例題 2（教授簡報 p.11–12）化學防護手套（chemical protective clothing, CPC）

**題目**：二氯甲烷（methylene chloride, CH₂Cl₂）是油漆去除劑（paint remover）的常見成分，具刺激性且可經皮膚吸收。評估廚房常見的丁基橡膠（butyl rubber）手套（厚 0.04 cm）能否作為防護手套。已知：

| 數據 | 數值 |
|---|---|
| $D$（二氯甲烷在丁基橡膠中） | $110\times10^{-8}$ cm²/s |
| 手套外側（接觸油漆去除劑）濃度 $C_1$ | 0.44 g/cm³ |
| 手套內側（接觸皮膚）濃度 $C_2$ | 0.02 g/cm³ |
| 厚度 $x_2 - x_1$ | 0.04 cm |
| 150 lb 成人的最大容許通量 | $3.5\times10^{-7}$ g/cm²·s |

**解**（假設線性濃度梯度）：

$$J = -D\frac{C_2 - C_1}{x_2 - x_1} = -(110\times10^{-8}\ \text{cm}^2/\text{s})\frac{(0.02 - 0.44)\ \text{g/cm}^3}{0.04\ \text{cm}}$$

$$= 1.16\times10^{-5}\ \text{g/cm}^2\cdot\text{s}$$

**判斷**：

$$\frac{1.16\times10^{-5}}{3.5\times10^{-7}} \approx 33$$

**超過容許通量約 30 倍，這種手套不安全。**

**本題重點**：
- 單位全程使用 **cgs 制**（cm、g、s），只要一致就不必換成 SI。換成 SI 則為 $J = 1.16\times10^{-4}$ kg/m²·s。
- 擴散不只發生在金屬，**高分子**（polymer）中也一樣適用菲克定律。

#### 延伸 A：要多厚才安全？

$J \propto \dfrac{1}{\Delta x}$，令 $J = 3.5\times10^{-7}$：

$$\Delta x = \frac{D\,\Delta C}{J} = \frac{(110\times10^{-8})(0.42)}{3.5\times10^{-7}} = 1.32\ \text{cm}$$

要 1.3 公分厚的橡膠手套，完全不實用，所以應改用**擴散係數更小**的材料（例如專用的氟橡膠或多層複合手套），這就是「選材」的思維。

#### 延伸 B：突破時間（breakthrough time）

簡報 p.12 的投影片殘留了 $t_b = \dfrac{\ell^2}{6D}$ 的式子（原版投影片的延伸題）。

- **突破時間** $t_b$：從戴上手套開始，到有害物質「穿透」手套、開始出現在內側所需的時間。這段期間尚未達到穩態（屬於非穩態，Part 3 的範疇）。
- 量級來源：擴散距離與時間的關係 $\ell^2 \sim Dt$（Part 3 會看到 $x^2/Dt$ = 常數），係數 $\frac16$ 來自薄膜滲透的時間延遲（time lag）分析。

$$t_b = \frac{\ell^2}{6D} = \frac{(0.04\ \text{cm})^2}{6\times110\times10^{-8}\ \text{cm}^2/\text{s}} = 242\ \text{s} \approx 4\ \text{min}$$

**結論**：戴上手套約 4 分鐘後二氯甲烷就會穿透，之後以約 33 倍容許值的通量持續滲入。

> **觀念連結**：$t_b \propto \ell^2$，手套厚度加倍，突破時間變成 4 倍；但穩態通量只減半。

---

## 7. 章末習題詳解

### 習題 5.6　穩態的概念

**題目**：Briefly explain the concept of steady state as it applies to diffusion.

**詳解**：穩態擴散指**擴散通量不隨時間改變**的狀態。此時材料中任一位置的濃度也不隨時間改變；進入材料的擴散物種量等於離開的量，材料內**沒有淨累積或淨消耗**。若 $D$ 為常數，穩態的濃度剖面為直線。

---

### 習題 5.7　驅動力

**題目**：
(a) Briefly explain the concept of a driving force.
(b) What is the driving force for steady-state diffusion?

**詳解**：

**(a)** 驅動力是**迫使某個反應或過程發生**的因素。系統會朝降低某種能量（自由能 free energy）的方向自發進行，這個能量差或梯度就是驅動力。

**(b)** 穩態擴散的驅動力是**濃度梯度** $dC/dx$。

---

### ★習題 5.8　鈀膜純化氫氣（作業）

**題目**：The purification of hydrogen gas by diffusion through a palladium sheet was discussed in Section 5.3. Compute the number of kilograms of hydrogen that pass per hour through a 6-mm thick sheet of palladium having an area of 0.25 m² at 600 °C. Assume a diffusion coefficient of $1.7\times10^{-8}$ m²/s, that the respective concentrations at the high- and low-pressure sides of the plate are 2.0 and 0.4 kg of hydrogen per cubic meter of palladium, and that steady-state conditions have been attained.

**解題思路**：穩態 → 菲克第一定律求 $J$ → $M = JAt$。

**已知**：$D = 1.7\times10^{-8}$ m²/s；$C_A = 2.0$、$C_B = 0.4$ kg/m³；$\Delta x = 6\times10^{-3}$ m；$A = 0.25$ m²；$t = 1$ h $= 3600$ s

**步驟 1：求通量**

$$J = D\frac{C_A - C_B}{\Delta x} = (1.7\times10^{-8})\frac{2.0 - 0.4}{6\times10^{-3}} = 4.53\times10^{-6}\ \text{kg/m}^2\cdot\text{s}$$

**步驟 2：求每小時通過的質量**（合併 Eq. 5.1 與 5.2）

$$M = JAt = (4.53\times10^{-6})(0.25)(3600) = 4.1\times10^{-3}\ \text{kg/h}$$

**答案**：每小時約 $4.1\times10^{-3}$ kg（約 4.1 g）的氫氣通過。

> **易錯**：時間要換成**秒**；最後答案的「每小時」是題目要求的單位，不是 $J$ 的單位。

---

### 習題 5.9　穩態氮擴散：濃度在哪個深度？

**題目**：A sheet of steel 2.5-mm thick has nitrogen atmospheres on both sides at 900 °C and is permitted to achieve a steady-state diffusion condition. The diffusion coefficient for nitrogen in steel at this temperature is $1.85\times10^{-10}$ m²/s, and the diffusion flux is found to be $1.0\times10^{-7}$ kg/m²·s. Also, it is known that the concentration of nitrogen in the steel at the high-pressure surface is 2 kg/m³. How far into the sheet from this high-pressure side will the concentration be 0.5 kg/m³? Assume a linear concentration profile.

**解題思路**：已知 $J$、$D$、$C_A$、$C_B$，反求距離。

令高壓面 $x_A = 0$，$C_A = 2$ kg/m³；欲求 $C_B = 0.5$ kg/m³ 處的 $x_B$。

$$J = -D\frac{C_A - C_B}{x_A - x_B}\quad\Rightarrow\quad x_B = x_A + D\frac{C_A - C_B}{J}$$

$$x_B = 0 + (1.85\times10^{-10})\frac{2 - 0.5}{1.0\times10^{-7}} = 2.78\times10^{-3}\ \text{m} = 2.78\ \text{mm}$$

**答案**：$x_B \approx 2.8$ mm（這是照公式代數得到的答案）。

> **⚠ 物理合理性檢查（本題的陷阱，考試可加分）**：算出來的 2.78 mm **大於板厚 2.5 mm**。這表示依題目數據，濃度 0.5 kg/m³ 的位置**不在鋼板內**。驗算低壓面（$x = 2.5$ mm）的濃度：
>
> $$C = 2 - \frac{J\,x}{D} = 2 - \frac{(1.0\times10^{-7})(2.5\times10^{-3})}{1.85\times10^{-10}} = 2 - 1.35 = 0.65\ \text{kg/m}^3$$
>
> 板內最低濃度只到 0.65 kg/m³。題目數據本身不完全自洽，作答時寫出公式結果 2.78 mm，並註明「超過板厚，0.5 kg/m³ 不會出現在板內」即可。**算出距離或時間後，永遠要和題目給的幾何尺寸比一下。**

---

### ★習題 5.10　由實驗數據求擴散係數（作業）

**題目**：A sheet of BCC iron 2-mm thick was exposed to a carburizing gas atmosphere on one side and a decarburizing atmosphere on the other side at 675 °C. After reaching steady state, the iron was quickly cooled to room temperature. The carbon concentrations at the two surfaces of the sheet were determined to be 0.015 and 0.0068 wt%, respectively. Compute the diffusion coefficient if the diffusion flux is $7.36\times10^{-9}$ kg/m²·s. *Hint*: Use Equation 4.9 to convert the concentrations from weight percent to kilograms of carbon per cubic meter of iron.

**解題思路**：wt% → kg/m³（Eq. 4.9）→ 菲克第一定律反求 $D$。

**已知**：$\rho_{\text{C}} = 2.25$ g/cm³（石墨），$\rho_{\text{Fe}} = 7.87$ g/cm³；$\Delta x = 2\times10^{-3}$ m

**步驟 1：換算滲碳面濃度**（0.015 wt% C，99.985 wt% Fe）

$$C_{\text{C}}'' = \frac{0.015}{\dfrac{0.015}{2.25} + \dfrac{99.985}{7.87}}\times10^3 = \frac{0.015}{0.00667 + 12.7046}\times10^3 = 1.18\ \text{kg/m}^3$$

**步驟 2：換算脫碳面濃度**（0.0068 wt% C，99.9932 wt% Fe）

$$C_{\text{C}}'' = \frac{0.0068}{\dfrac{0.0068}{2.25} + \dfrac{99.9932}{7.87}}\times10^3 = \frac{0.0068}{0.00302 + 12.7056}\times10^3 = 0.535\ \text{kg/m}^3$$

（快速近似驗證：$0.015\times78.7 = 1.18$ ✓，$0.0068\times78.7 = 0.535$ ✓）

**步驟 3：反求 $D$**

$$D = \frac{J\,\Delta x}{C_A - C_B} = \frac{(7.36\times10^{-9})(2\times10^{-3})}{1.18 - 0.535} = \frac{1.472\times10^{-11}}{0.645} = 2.3\times10^{-11}\ \text{m}^2/\text{s}$$

**答案**：$D \approx 2.3\times10^{-11}$ m²/s

> **合理性檢查（跨 Part 4）**：用 Table 5.2 中 C 在 α-Fe 的數據（$D_0 = 1.1\times10^{-6}$ m²/s，$Q_d = 87{,}400$ J/mol）計算 675 °C（948 K）：
> $$D = (1.1\times10^{-6})\exp\left[-\frac{87{,}400}{(8.31)(948)}\right] = 1.7\times10^{-11}\ \text{m}^2/\text{s}$$
> 與實驗值同一數量級 ✓。675 °C < 912 °C，所以題目說 BCC 鐵（α-Fe）是合理的。

> **為什麼要「快速冷卻」？** 冷卻慢的話，降溫過程中碳會繼續擴散，量到的就不是 675 °C 時的分布。快速冷卻把高溫狀態「凍結」下來。

---

### 習題 5.11　氮氣透過鐵膜：溶解度＋擴散（挑戰題）

**題目**：When α-iron is subjected to an atmosphere of nitrogen gas, the concentration of nitrogen in the iron, $C_{\text{N}}$ (in weight percent), is a function of hydrogen pressure, $p_{\text{N}_2}$ (in MPa), and absolute temperature ($T$) according to

$$C_{\text{N}} = 4.90\times10^{-3}\sqrt{p_{\text{N}_2}}\exp\left(-\frac{37{,}600\ \text{J/mol}}{RT}\right)\quad(5.14)$$

Furthermore, the values of $D_0$ and $Q_d$ for this diffusion system are $5.0\times10^{-7}$ m²/s and 77,000 J/mol, respectively. Consider a thin iron membrane 1.5-mm thick at 300 °C. Compute the diffusion flux through this membrane if the nitrogen pressure on one side of the membrane is 0.10 MPa (0.99 atm) and on the other side is 5.0 MPa (49.3 atm).

> 題目中的 "hydrogen pressure" 是原書筆誤，應為**氮氣壓力**（nitrogen pressure）$p_{\text{N}_2}$。

**新觀念：西韋特定律（Sieverts' law）**

**雙原子氣體**（diatomic gas，如 H₂、N₂、O₂）溶進金屬時會**解離成原子**：

$$\text{N}_2(g) \rightleftharpoons 2\,\text{N}(\text{溶於金屬})$$

平衡常數 $K = \dfrac{C_{\text{N}}^2}{p_{\text{N}_2}}$ → $C_{\text{N}} \propto \sqrt{p_{\text{N}_2}}$，這就是 Eq. 5.14 中**根號**的來源。指數項則表示溶解度（solubility）隨溫度變化（溶解是吸熱 endothermic 時，溫度愈高溶得愈多）。

**解題思路**：Eq. 5.14 求兩側表面濃度（wt%）→ Eq. 4.9 換成 kg/m³ → Eq. 5.8 求 $D$ → 菲克第一定律求 $J$。

$T = 300 + 273 = 573$ K

**步驟 1：兩側表面的氮濃度**

$$\exp\left(-\frac{37{,}600}{(8.31)(573)}\right) = \exp(-7.896) = 3.72\times10^{-4}$$

$$C_{\text{N}}(0.10\ \text{MPa}) = (4.90\times10^{-3})\sqrt{0.10}\,(3.72\times10^{-4}) = 5.77\times10^{-7}\ \text{wt\%}$$

$$C_{\text{N}}(5.0\ \text{MPa}) = (4.90\times10^{-3})\sqrt{5.0}\,(3.72\times10^{-4}) = 4.08\times10^{-6}\ \text{wt\%}$$

**步驟 2：換算成 kg/m³**（極稀薄，用近似 $C'' \approx C\times\rho_{\text{Fe}}\times10$）

$$C''(0.10\ \text{MPa}) = (5.77\times10^{-7})(78.7) = 4.54\times10^{-5}\ \text{kg/m}^3$$

$$C''(5.0\ \text{MPa}) = (4.08\times10^{-6})(78.7) = 3.21\times10^{-4}\ \text{kg/m}^3$$

（用完整 Eq. 4.9、$\rho_{\text{N}} = 1.25$ g/cm³ 算，結果相同到三位有效數字。）

**步驟 3：300 °C 時的擴散係數**

$$D = (5.0\times10^{-7})\exp\left[-\frac{77{,}000}{(8.31)(573)}\right] = (5.0\times10^{-7})\,e^{-16.17} = 4.74\times10^{-14}\ \text{m}^2/\text{s}$$

**步驟 4：擴散通量**

$$J = D\frac{\Delta C}{\Delta x} = (4.74\times10^{-14})\frac{3.21\times10^{-4} - 4.54\times10^{-5}}{1.5\times10^{-3}}$$

$$= (4.74\times10^{-14})\frac{2.75\times10^{-4}}{1.5\times10^{-3}} = 8.7\times10^{-15}\ \text{kg/m}^2\cdot\text{s}$$

**答案**：$J \approx 8.7\times10^{-15}$ kg/m²·s

> **觀念整理**：氣體穿透金屬膜的通量受**兩個熱活化過程**控制：
> $$J \propto D\times C_s \propto \exp\left(-\frac{Q_d}{RT}\right)\times\exp\left(-\frac{Q_s}{RT}\right) = \exp\left(-\frac{Q_d + Q_s}{RT}\right)$$
> 兩個活化能相加，這是 5.D1、5.D2 的解題核心。

---

### 習題 5.D1　能否用金屬薄片純化氫氣？（設計題・挑戰）

**題目**：It is desired to enrich the partial pressure of hydrogen in a hydrogen–nitrogen gas mixture for which the partial pressures of both gases are 0.1013 MPa (1 atm). It has been proposed to accomplish this by passing both gases through a thin sheet of some metal at an elevated temperature; inasmuch as hydrogen diffuses through the plate at a higher rate than does nitrogen, the partial pressure of hydrogen will be higher on the exit side of the sheet. The design calls for partial pressures of 0.051 MPa (0.5 atm) and 0.01013 MPa (0.1 atm), respectively, for hydrogen and nitrogen. The concentrations of hydrogen and nitrogen ($C_{\text{H}}$ and $C_{\text{N}}$, in mol/m³) in this metal are functions of gas partial pressures ($p_{\text{H}_2}$ and $p_{\text{N}_2}$, in MPa) and absolute temperature and are given by the following expressions:

$$C_{\text{H}} = 2.5\times10^3\sqrt{p_{\text{H}_2}}\exp\left(-\frac{27{,}800\ \text{J/mol}}{RT}\right)\quad(5.16a)$$

$$C_{\text{N}} = 2.75\times10^3\sqrt{p_{\text{N}_2}}\exp\left(-\frac{37{,}600\ \text{J/mol}}{RT}\right)\quad(5.16b)$$

Furthermore, the diffusion coefficients for the diffusion of these gases in this metal are functions of the absolute temperature, as follows:

$$D_{\text{H}}(\text{m}^2/\text{s}) = 1.4\times10^{-7}\exp\left(-\frac{13{,}400\ \text{J/mol}}{RT}\right)\quad(5.17a)$$

$$D_{\text{N}}(\text{m}^2/\text{s}) = 3.0\times10^{-7}\exp\left(-\frac{76{,}150\ \text{J/mol}}{RT}\right)\quad(5.17b)$$

Is it possible to purify hydrogen gas in this manner? If so, specify a temperature at which the process may be carried out, and also the thickness of metal sheet that would be required. If this procedure is not possible, then state the reason(s) why.

**解題思路**：

1. 出口氣體的組成由**兩種氣體穿過薄片的通量比**決定：$\dfrac{J_{\text{H}}}{J_{\text{N}}} = \dfrac{p_{\text{H}_2,\text{出口}}}{p_{\text{N}_2,\text{出口}}} = \dfrac{0.051}{0.01013} = 5.03$
2. 兩者通過同一片薄片，**厚度 $\Delta x$ 在比值中消去**；
3. 寫出比值，只剩溫度 $T$ 是未知數。

**步驟 1：寫出通量比**

$$\frac{J_{\text{H}}}{J_{\text{N}}} = \frac{D_{\text{H}}\left(C_{\text{H,入}} - C_{\text{H,出}}\right)/\Delta x}{D_{\text{N}}\left(C_{\text{N,入}} - C_{\text{N,出}}\right)/\Delta x}$$

代入 Eq. 5.16、5.17：

$$\frac{J_{\text{H}}}{J_{\text{N}}} = \underbrace{\frac{(1.4\times10^{-7})(2.5\times10^3)}{(3.0\times10^{-7})(2.75\times10^3)}}_{=\,0.4242}\cdot\underbrace{\frac{\sqrt{0.1013} - \sqrt{0.051}}{\sqrt{0.1013} - \sqrt{0.01013}}}_{=\,\frac{0.3183 - 0.2258}{0.3183 - 0.1006}\,=\,0.4248}\cdot\exp\left[\frac{(76{,}150 + 37{,}600) - (13{,}400 + 27{,}800)}{RT}\right]$$

$$= 0.1802\,\exp\left(\frac{72{,}550}{RT}\right)$$

**步驟 2：令比值 = 5.03，解 $T$**

$$\exp\left(\frac{72{,}550}{RT}\right) = \frac{5.03}{0.1802} = 27.9$$

$$\frac{72{,}550}{(8.31)T} = \ln 27.9 = 3.33\quad\Rightarrow\quad T = \frac{72{,}550}{(8.31)(3.33)} \approx 2620\ \text{K}\ (\approx 2350\ ^\circ\text{C})$$

**結論**：要剛好得到設計規格的出口組成，溫度需約 **2620 K（2350 °C）**，**高於幾乎所有常用金屬的熔點**（如 Fe 1538 °C、Ni 1455 °C、Pd 1555 °C）。固態薄片在此溫度會熔化，所以**依設計規格，此方法不可行**。厚度在比值中消去，與可行性無關。

> **思考延伸（理解用）**：比值 $0.1802\exp(72{,}550/RT)$ **隨溫度降低而增大**（例如 773 K 時約 $1.4\times10^4$）。也就是說，在一般溫度下氫的選擇性**遠超過**規格，出口氣體會比 0.5 : 0.1 更純。這題的標準答案以「剛好達到規格」作為設計條件；若題目改問「出口氫氣比例**至少**為 5 倍」，則任何可操作溫度都可行。作答時把**你採用的條件**寫清楚，就是完整的設計答案。

---

### 習題 5.D2　能否用金屬薄片純化氣體 A？（設計題・挑戰）

**題目**：A gas mixture is found to contain two diatomic A and B species (A₂ and B₂), the partial pressures of both of which are 0.1013 MPa (1 atm). This mixture is to be enriched in the partial pressure of the A species by passing both gases through a thin sheet of some metal at an elevated temperature. The resulting enriched mixture is to have a partial pressure of 0.051 MPa (0.5 atm) for gas A and 0.0203 MPa (0.2 atm) for gas B. The concentrations of A and B ($C_{\text{A}}$ and $C_{\text{B}}$, in mol/m³) are functions of gas partial pressures ($p_{\text{A}_2}$ and $p_{\text{B}_2}$, in MPa) and absolute temperature according to the following expressions:

$$C_{\text{A}} = 1.5\times10^3\sqrt{p_{\text{A}_2}}\exp\left(-\frac{20{,}000\ \text{J/mol}}{RT}\right)\quad(5.18a)$$

$$C_{\text{B}} = 2.0\times10^3\sqrt{p_{\text{B}_2}}\exp\left(-\frac{27{,}000\ \text{J/mol}}{RT}\right)\quad(5.18b)$$

Furthermore, the diffusion coefficients for the diffusion of these gases in the metal are functions of the absolute temperature, as follows:

$$D_{\text{A}}(\text{m}^2/\text{s}) = 5.0\times10^{-7}\exp\left(-\frac{13{,}000\ \text{J/mol}}{RT}\right)\quad(5.19a)$$

$$D_{\text{B}}(\text{m}^2/\text{s}) = 3.0\times10^{-6}\exp\left(-\frac{21{,}000\ \text{J/mol}}{RT}\right)\quad(5.19b)$$

Is it possible to purify gas A in this manner? If so, specify a temperature at which the process may be carried out, and also the thickness of metal sheet that would be required. If this procedure is not possible, then state the reason(s) why.

**解題思路**：與 5.D1 完全相同。目標比值：

$$\frac{J_{\text{A}}}{J_{\text{B}}} = \frac{0.051}{0.0203} = 2.51$$

**步驟 1：寫出通量比**

$$\frac{J_{\text{A}}}{J_{\text{B}}} = \underbrace{\frac{(5.0\times10^{-7})(1.5\times10^3)}{(3.0\times10^{-6})(2.0\times10^3)}}_{=\,0.125}\cdot\underbrace{\frac{\sqrt{0.1013} - \sqrt{0.051}}{\sqrt{0.1013} - \sqrt{0.0203}}}_{=\,\frac{0.3183 - 0.2258}{0.3183 - 0.1425}\,=\,0.5259}\cdot\exp\left[\frac{(21{,}000 + 27{,}000) - (13{,}000 + 20{,}000)}{RT}\right]$$

$$= 0.06573\,\exp\left(\frac{15{,}000}{RT}\right)$$

**步驟 2：令比值 = 2.51，解 $T$**

$$\exp\left(\frac{15{,}000}{RT}\right) = \frac{2.51}{0.06573} = 38.2\quad\Rightarrow\quad\frac{15{,}000}{(8.31)T} = \ln 38.2 = 3.643$$

$$T = \frac{15{,}000}{(8.31)(3.643)} \approx 495\ \text{K}\ (\approx 222\ ^\circ\text{C})$$

**結論**：

- **可行**。約 **495 K（222 °C）** 是很容易達到、且遠低於一般金屬熔點的溫度。
- **厚度**：$\Delta x$ 在通量比中**消去**，所以出口組成與厚度無關，**組成條件無法決定厚度**。厚度依其他工程需求選擇：愈薄通量愈大（產量高），但需足以承受兩側壓差的**機械強度**（mechanical strength）。答題時要明確說出這一點。

> **5.D1 vs 5.D2 對照**：
>
> | | 5.D1（H₂/N₂） | 5.D2（A₂/B₂） |
> |---|---|---|
> | 指數項差 | 72,550 J/mol | 15,000 J/mol |
> | 前置因子乘積 | 0.1802 | 0.06573 |
> | 所需溫度 | ≈ 2620 K | ≈ 495 K |
> | 結論 | 高於金屬熔點 → **不可行** | 合理溫度 → **可行** |
>
> 兩題都是：**比值隨溫度降低而增加，「剛好達到規格」的溫度是否落在固態可操作範圍**決定可行性。

---

## 8. 本節總整理

| 主題 | 核心內容 | 考試形式 |
|---|---|---|
| 擴散通量 | $J = M/At = \dfrac1A\dfrac{dM}{dt}$；kg/m²·s | 計算（5.8 的 $M = JAt$） |
| 實驗量測 | $M$ 對 $t$ 作圖，斜率 $/A$ ＝ $J$ | 看圖說明（簡報 p.9） |
| 穩態 | $J$ 不隨時間變，無淨累積 | 名詞解釋（5.6） |
| 濃度剖面／梯度 | $C$ 對 $x$ 的曲線／其斜率 | 名詞解釋 |
| 線性剖面 | 質量守恆＋穩態 → $d^2C/dx^2 = 0$ | 推導 |
| 菲克第一定律 | $J = -D\,dC/dx$；負號 ＝ 由高往低 | **必考計算** |
| 驅動力 | 穩態擴散的驅動力是濃度梯度 | 問答（5.7） |
| wt% → kg/m³ | Eq. 4.9；稀薄時 $C'' \approx C\times\rho_{\text{Fe}}\times10$ | 計算（5.10、5.11） |
| 西韋特定律 | 雙原子氣體 $C \propto \sqrt{p}$ | 計算（5.11、5.D1、5.D2） |
| 穿透通量的溫度效應 | $J \propto \exp[-(Q_d + Q_s)/RT]$ | 設計題 |
| 應用 | Pd 純化 H₂、防護手套、氣體分離膜 | 情境題 |

---

## 9. 易混淆名詞

| 容易搞混的一對 | 區分方式 |
|---|---|
| 擴散通量 $J$ vs 擴散係數 $D$ | $J$ 是**實際流量**（kg/m²·s），與梯度有關；$D$ 是**材料＋溫度的性質**（m²/s），與梯度無關 |
| 穩態（steady state）vs 平衡（equilibrium） | 穩態：仍有**持續的淨流動**，只是不隨時間變；平衡：**沒有淨流動**（濃度處處均勻，$J = 0$） |
| 穩態 vs 非穩態 | 穩態：$J$、$C(x)$ 不隨 $t$ 變，用第一定律；非穩態：會累積或消耗，用第二定律（Part 3） |
| 濃度剖面 vs 濃度梯度 | 剖面是**整條曲線**；梯度是曲線上**某一點的斜率** |
| 濃度單位 wt% vs kg/m³ | 菲克定律要用**單位體積的量**（kg/m³、g/cm³、mol/m³、atoms/m³），wt% 必須先換算 |
| $M$ vs $J$ | $M$ 是總量（kg）；$J$ 是除以面積與時間後的強度 |
| 滲碳（carburizing）vs 脫碳（decarburizing） | 前者使碳**進入**鋼（富碳氣氛）；後者使碳**離開**鋼（貧碳或富氧氣氛） |
| 擴散係數 $D$ vs 溶解度 $C_s$ | 氣體穿透金屬時兩者都重要：$D$ 決定「跑多快」，$C_s$ 決定「進去多少」 |
| $R$ vs $k$ | $R = 8.31$ J/mol·K（課本）或 8.314（簡報）；$k = 8.62\times10^{-5}$ eV/atom·K |

---

## 10. 考前提醒

1. **判斷穩態的關鍵字**：*steady state*、*constant concentrations on both surfaces*、*flux does not change with time*、*linear concentration profile*。看到這些就用 $J = -D\,\Delta C/\Delta x$。
2. **單位一致最重要**：cgs（cm、g）或 SI（m、kg）擇一用到底。mm 一定要換成 m（或 cm）。
3. **wt% 不能直接代入菲克定律**，先用 Eq. 4.9 換算。鐵中稀薄溶質可用 $C\times78.7$ kg/m³ 快速換算或驗算。
4. **求總質量** $M = JAt$，時間單位要用秒。
5. **算完要做合理性檢查**：距離是否超過板厚（5.9）、$D$ 是否與 Table 5.2 同數量級（5.10）。
6. **設計題（5.D1、5.D2）的三個步驟**：寫通量比 → 厚度消去 → 解溫度並和熔點比較。厚度「由組成條件無法決定」要明確寫出。
7. **雙原子氣體溶解度有根號**：$C \propto \sqrt{p}$，代入的是 $\sqrt{p}$ 的差，不是 $p$ 的差。
8. 簡報用 $R = 8.314$，課本用 $8.31$，兩者差異在第三位有效數字之後，考試照題目給的值代入。

---

## 附錄：本份名詞中英對照

| 中文（台灣用語） | 英文 |
|---|---|
| 菲克第一定律 | Fick's first law |
| 菲克第二定律 | Fick's second law |
| 擴散通量 | diffusion flux |
| 擴散係數 | diffusion coefficient |
| 穩態擴散 | steady-state diffusion |
| 非穩態擴散 | nonsteady-state diffusion |
| 平衡 | equilibrium |
| 濃度剖面 | concentration profile |
| 濃度梯度 | concentration gradient |
| 驅動力 | driving force |
| 化學位能梯度 | chemical potential gradient |
| 上坡擴散 | uphill diffusion |
| 自由能 | free energy |
| 質量守恆 | conservation of mass |
| 跳躍頻率 | jump frequency |
| 薄片／薄膜 | thin sheet / membrane |
| 截面積 | cross-sectional area |
| 鈀 | palladium |
| 氫氣 | hydrogen gas |
| 燃料電池 | fuel cell |
| 選擇性 | selectivity |
| 滲碳 | carburizing |
| 脫碳 | decarburizing |
| 間隙位置 | interstitial site |
| 石墨 | graphite |
| 密度 | density |
| 重量百分比 | weight percent, wt% |
| 二氯甲烷 | methylene chloride (dichloromethane) |
| 油漆去除劑 | paint remover |
| 丁基橡膠 | butyl rubber |
| 化學防護衣 | chemical protective clothing, CPC |
| 高分子 | polymer |
| 突破時間 | breakthrough time |
| 時間延遲 | time lag |
| 西韋特定律 | Sieverts' law |
| 雙原子氣體 | diatomic gas |
| 分壓 | partial pressure |
| 溶解度 | solubility |
| 吸熱 | endothermic |
| 熔點 | melting point |
| 機械強度 | mechanical strength |
| 前指數因子 | pre-exponential factor |
| 活化能 | activation energy |
| 相變 | phase transformation |
| 氣體常數 | gas constant |
| 波茲曼常數 | Boltzmann constant |
