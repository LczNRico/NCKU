# 第 4 章 固體中的缺陷（Imperfections in Solids）
## Part 1：點缺陷與成分表示法（§4.1–4.4）

> **本份講義範圍**：4.1 緒論、4.2 空位與自身間隙原子、4.3 固體中的雜質、4.4 成分表示法
> **對應學習目標**：Learning Objectives 1–4
> **習題來源說明**：上傳的教材 PDF 不含章末習題，第 7 節「挑戰題精選」取材自 Callister《Materials Science and Engineering: An Introduction》第 4 章章末題（Questions and Problems），題目敘述經改寫，數據沿用原題或做了調整。

---

## 0. 本章定位：PSPP 架構

| PSPP 層次 | 本份講義的對應內容 |
|---|---|
| **製程（Processing）** | 合金化（alloying）刻意加入雜質（impurity）；高溫加熱會改變空位（vacancy）數量 |
| **結構（Structure）** | 空位、自身間隙原子（self-interstitial）、取代型／間隙型固溶體（substitutional / interstitial solid solution） |
| **性質（Properties）** | 黃銅（brass，70% Cu–30% Zn）比純銅（copper）硬又強；純銀925（sterling silver）比純銀強度高 |
| **性能（Performance）** | 鋼（steel）的強度、半導體（semiconductor）元件靠精確控制的摻雜（doping）運作 |

**核心觀念**：理想的完美晶體（perfect crystal）並不存在。材料的許多性質對缺陷非常敏感，而且缺陷不一定是壞事，工程上常刻意引入特定種類、特定數量的缺陷來調整材料性質。

---

## 1. 緒論（§4.1 Introduction）

### 1.1 定義

**晶體缺陷（crystalline defect）**：晶格不規則（lattice irregularity）的區域，其中至少一個維度的尺度與原子直徑（atomic diameter）相當。

### 1.2 依維度分類

| 分類 | 維度 | 例子 | 講義位置 |
|---|---|---|---|
| **點缺陷（point defect）** | 0 維：只涉及一兩個原子位置 | 空位、自身間隙原子、雜質原子（impurity atom） | Part 1 |
| **線缺陷（linear defect）** | 1 維 | 差排（dislocation） | Part 2 |
| **面缺陷／界面缺陷（interfacial defect）** | 2 維 | 外表面（external surface）、晶界（grain boundary）、雙晶界（twin boundary）、疊差（stacking fault） | Part 2 |
| **體缺陷（bulk / volume defect）** | 3 維 | 孔隙（pore）、裂紋（crack）、夾雜物（inclusion） | Part 2 |

> 💡 **類比**：把晶體想成整齊排列的電影院座位。
> - 空座位 → 空位
> - 有人硬擠在兩排中間的走道 → 自身間隙原子
> - 某個座位坐的是外校學生 → 取代型雜質
> - 走道上坐了一個小朋友 → 間隙型雜質
> - 某一排中途多插了半排座位 → 刃差排（Part 2）

---

## 2. 空位與自身間隙原子（§4.2 Vacancies and Self-Interstitials）

### 2.1 空位（Vacancy）

**定義**：原本應該有原子佔據的晶格位置（lattice site），但原子不見了。

**為什麼所有晶體一定有空位？**
從熱力學（thermodynamics）的角度看，形成空位雖然要消耗能量（焓 enthalpy 增加），但會增加晶體的**熵（entropy，亂度）**。吉布斯自由能（Gibbs free energy）$G = H - TS$ 在某個空位濃度下達到最小，所以**在絕對零度以上，平衡狀態必定含有一定數量的空位**，不可能做出完全沒有空位的晶體。

### 2.2 平衡空位數公式

$$
\boxed{N_v = N \exp\left(-\frac{Q_v}{kT}\right)} \tag{4.1}
$$

| 符號 | 意義 | 常用單位 |
|---|---|---|
| $N_v$ | 平衡空位數（equilibrium number of vacancies） | 個/m³ |
| $N$ | 原子位置總數（total number of atomic sites） | 個/m³ |
| $Q_v$ | 空位形成能（vacancy formation energy） | eV/atom 或 J/mol |
| $T$ | 絕對溫度（absolute temperature） | K（克耳文 kelvin） |
| $k$ | 波茲曼常數（Boltzmann's constant） | $1.38\times10^{-23}$ J/atom·K 或 $8.62\times10^{-5}$ eV/atom·K |

**單位配對規則（常考陷阱）**

| $Q_v$ 的單位 | 分母用什麼 |
|---|---|
| eV/atom | $k = 8.62\times10^{-5}$ eV/atom·K |
| J/atom | $k = 1.38\times10^{-23}$ J/atom·K |
| J/mol | 氣體常數（gas constant）$R = 8.31$ J/mol·K，也就是把 $kT$ 換成 $RT$ |

> $R = k \cdot N_A$：波茲曼常數乘以亞佛加厥數（Avogadro's number）就是氣體常數，代表「每個原子」和「每莫耳原子」的差別。
> 換算：$1\ \text{eV/atom} = 96.5\ \text{kJ/mol}$。

**溫度換算**：$T(\text{K}) = T(°\text{C}) + 273$。

#### 公式的重要性質

1. **空位分率（vacancy fraction）** $N_v/N = \exp(-Q_v/kT)$，只和 $Q_v$、$T$ 有關，與材料多少無關。
2. **隨溫度呈指數（exponential）增加**：$T$ 上升 → $Q_v/kT$ 變小 → $\exp(-Q_v/kT)$ 變大。
3. **數量級**：大多數金屬在熔點（melting temperature）附近 $N_v/N \approx 10^{-4}$，也就是每一萬個晶格位置約有一個是空的。

#### 推導：線性化形式（阿瑞尼斯圖 Arrhenius plot）

式 (4.1) 兩邊取自然對數：

$$
\ln N_v = \ln N - \frac{Q_v}{k}\cdot\frac{1}{T}
$$

以 $\ln N_v$ 對 $1/T$ 作圖會得到直線：

- 斜率 $= -\dfrac{Q_v}{k}$ → 可由實驗數據求出 $Q_v$
- 截距 $= \ln N$

#### 推導：兩溫度比值法（不需知道 $N$）

在 $T_1$、$T_2$ 分別寫出式 (4.1)，相除後 $N$ 消去：

$$
\frac{N_{v2}}{N_{v1}} = \exp\left[-\frac{Q_v}{k}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)\right]
\quad\Longleftrightarrow\quad
\ln\frac{N_{v2}}{N_{v1}} = -\frac{Q_v}{k}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)
$$

這個形式在第 5 章擴散（diffusion）也會一再出現，務必熟練。

### 2.3 單位體積原子數

要用式 (4.1)，必須先算出 $N$：

$$
\boxed{N = \frac{N_A\,\rho}{A}} \tag{4.2}
$$

**推導（因次分析 dimensional analysis）**：

$$
\underbrace{\frac{\text{atoms}}{\text{mol}}}_{N_A}\times
\underbrace{\frac{\text{g}}{\text{cm}^3}}_{\rho}\times
\underbrace{\frac{\text{mol}}{\text{g}}}_{1/A}
=\frac{\text{atoms}}{\text{cm}^3}
$$

- $\rho$：密度（density），g/cm³
- $A$：原子量（atomic weight），g/mol
- **要轉成 m⁻³ 必須乘 $10^6$**（$1\ \text{m}^3 = 10^6\ \text{cm}^3$），這是最常見的計算錯誤。

> 對純金屬來說，每個原子佔一個晶格位置，所以「原子數」等於「原子位置數」。

### 2.4 課本例題 4.1 詳解：銅在 1000 °C 的平衡空位數

**題目**：求銅（Cu）在 1000 °C 時每立方公尺的平衡空位數。已知 $Q_v = 0.9$ eV/atom，$A_\text{Cu} = 63.5$ g/mol，1000 °C 時的 $\rho = 8.4$ g/cm³。

**Step 1　求 $N$**

$$
N_\text{Cu} = \frac{(6.022\times10^{23})(8.4\ \text{g/cm}^3)(10^6\ \text{cm}^3/\text{m}^3)}{63.5\ \text{g/mol}} = 8.0\times10^{28}\ \text{atoms/m}^3
$$

**Step 2　算指數項**（$T = 1000 + 273 = 1273$ K）

$$
\frac{Q_v}{kT} = \frac{0.9}{(8.62\times10^{-5})(1273)} = \frac{0.9}{0.1097} = 8.20
$$

$$
\exp(-8.20) = 2.74\times10^{-4}
$$

**Step 3　求 $N_v$**

$$
N_v = (8.0\times10^{28})(2.74\times10^{-4}) = \boxed{2.2\times10^{25}\ \text{vacancies/m}^3}
$$

**解題提醒**
- 題目特別給「1000 °C 的密度」，因為熱膨脹（thermal expansion）會讓高溫密度較小，要用對應溫度的數據。
- 空位分率 $2.74\times10^{-4}$ 與「熔點附近約 $10^{-4}$」的經驗值吻合（銅熔點 1085 °C），可以用來檢查答案合不合理。

### 2.5 自身間隙原子（Self-Interstitial）

**定義**：晶體本身的原子被擠進**間隙位置（interstitial site）**，也就是正常情況下不會有原子佔據的小空隙。

**為什麼濃度遠低於空位？**
金屬原子比間隙空間大很多，擠進去會對周圍晶格造成**很大的晶格畸變（lattice distortion）**，形成能遠高於空位，所以生成機率很低。

| 比較項目 | 空位（vacancy） | 自身間隙原子（self-interstitial） |
|---|---|---|
| 結構 | 晶格位置少一個原子 | 間隙多一個**同種**原子 |
| 晶格畸變 | 小 | 大 |
| 形成能 | 較低 | 高 |
| 平衡濃度 | 較高（熔點附近約 $10^{-4}$） | 極低 |

---

## 3. 固體中的雜質（§4.3 Impurities in Solids）

### 3.1 基本名詞

| 名詞 | 定義 |
|---|---|
| **合金（alloy）** | 由兩種以上元素組成的金屬物質，刻意加入雜質原子以得到特定性質（通常是提高機械強度 mechanical strength 或抗腐蝕性 corrosion resistance） |
| **溶劑（solvent）** | 含量最多的元素或化合物，又稱**主原子（host atom）** |
| **溶質（solute）** | 含量較少的元素或化合物 |
| **固溶體（solid solution）** | 加入溶質後，**原有晶體結構維持不變、沒有形成新結構**，且成分均勻（homogeneous），雜質原子隨機且均勻分散 |
| **第二相（second phase）** | 溶質過量或條件不符時生成的新相，留待第 9 章討論 |

**純度的極限**：即使純化到 99.9999%，每 m³ 仍有約 $10^{22}$～$10^{23}$ 個雜質原子。

**實例：純銀925（sterling silver，92.5% Ag–7.5% Cu）**
純銀抗腐蝕但太軟，加入銅後機械強度明顯提升，抗腐蝕性卻幾乎不受影響。

> 💡 **類比**：固溶體就像糖水。糖（溶質）溶進水（溶劑）後，水還是水、成分均勻；糖加太多溶不掉就會析出結晶，相當於形成第二相。

### 3.2 兩種固溶體

| | 取代型固溶體（substitutional solid solution） | 間隙型固溶體（interstitial solid solution） |
|---|---|---|
| 溶質位置 | 取代主原子的晶格位置 | 填入主原子之間的間隙（interstice） |
| 溶質大小 | 與主原子相近（半徑差 < 15%） | 遠小於主原子 |
| 最大溶解度 | 可達**完全互溶（complete solubility）** | 通常 < 10% |
| 典型例子 | Cu–Ni（完全互溶） | Fe–C（碳最多約 2 wt%） |

### 3.3 休謨–羅瑟里法則（Hume–Rothery Rules）

判斷取代型固溶體**溶解度（solubility）高低**的四條經驗法則：

| 法則 | 內容 | 違反時的後果 |
|---|---|---|
| **1. 原子尺寸因素（atomic size factor）** | 原子半徑（atomic radius）差距 < ±15% | 晶格畸變太大，形成新相 |
| **2. 晶體結構（crystal structure）** | 兩金屬晶體結構必須相同 | 無法大量互溶 |
| **3. 電負度因素（electronegativity factor）** | 電負度差距要小 | 一個太正電性、一個太負電性時，傾向形成**金屬間化合物（intermetallic compound）** |
| **4. 價數（valences）** | 其他條件相同時，金屬較容易溶解**價數較高**的金屬 | 溶解低價金屬的量較少 |

**計算原子尺寸差**：

$$
\Delta r\% = \frac{r_\text{solute} - r_\text{host}}{r_\text{host}}\times 100\%
$$

**完全互溶的標準例子：Cu–Ni**

| 條件 | Cu | Ni | 判斷 |
|---|---|---|---|
| 原子半徑 | 0.128 nm | 0.125 nm | 差 2.3% ✓ |
| 晶體結構 | FCC | FCC | 相同 ✓ |
| 電負度 | 1.9 | 1.8 | 接近 ✓ |
| 常見價數 | +1（有時 +2） | +2 | 接近 ✓ |

四條全部符合，所以 Cu 與 Ni 在所有比例下都能完全互溶。

> ⚠️ **注意**：四條法則是**完全互溶的必要條件**，不是充分條件，只能用來預測溶解度「可能高」或「一定有限」。

### 3.4 間隙位置（Interstitial Sites）：四面體與八面體

FCC 與 BCC 中都有兩種間隙位置，以**配位數（coordination number）**區分，也就是間隙周圍最近鄰主原子的數目：

- **四面體間隙（tetrahedral site）**：配位數 4，周圍 4 個原子中心連成正四面體（tetrahedron）
- **八面體間隙（octahedral site）**：配位數 6，周圍 6 個原子中心連成八面體（octahedron）

#### 位置與數量總表（對照課本 Figure 4.3）

| 結構 | 間隙類型 | 代表座標（point coordinates） | 每個單位晶格（unit cell）的數量 |
|---|---|---|---|
| FCC | 八面體 | $\tfrac12\tfrac12\tfrac12$（體心）、$0\,\tfrac12\,1$（稜中點） | 4（1 體心 + 12 稜 × ¼） |
| FCC | 四面體 | $\tfrac14\tfrac34\tfrac14$ | 8（全部在晶格內部） |
| BCC | 八面體 | $\tfrac12\,1\,\tfrac12$（面心）、$\tfrac12\,1\,0$（稜中點） | 6（6 面 × ½ + 12 稜 × ¼） |
| BCC | 四面體 | $1\,\tfrac12\,\tfrac14$（面上） | 12（每面 4 個 × 6 面 × ½） |

#### 推導：間隙半徑 $r$ 與主原子半徑 $R$ 的關係

**共同原則**：間隙原子「剛好塞得進去、不造成晶格應變（lattice strain）」時，它剛好碰到最近的主原子，所以

$$
\text{間隙中心到最近主原子中心的距離} = R + r
$$

先準備好第 3 章的晶格常數（lattice parameter）關係：FCC 為 $a = 2\sqrt2\,R$，BCC 為 $a = \dfrac{4R}{\sqrt3}$。

---

**① BCC 八面體間隙（課本例題 4.2）**

取稜中點 $\tfrac12\,0\,0$。最近的主原子是這條稜兩端的角落原子，距離各為 $a/2$。

$$
2R + 2r = a = \frac{4R}{\sqrt3}
\;\Rightarrow\;
r = \left(\frac{2}{\sqrt3}-1\right)R = \boxed{0.155\,R}
$$

> 補充：這個八面體是**扭曲的（distorted）**。沿稜方向的 2 個原子距離 $a/2$，另外 4 個（相鄰晶格的體心原子）距離 $a/\sqrt2$ 較遠，所以限制尺寸的只有那 2 個原子。

---

**② FCC 八面體間隙**

取體心 $\tfrac12\tfrac12\tfrac12$。最近的主原子是 6 個面心原子，距離都是 $a/2$。

$$
R + r = \frac a2 = \frac{2\sqrt2\,R}{2} = \sqrt2\,R
\;\Rightarrow\;
r = (\sqrt2 - 1)R = \boxed{0.414\,R}
$$

（取稜中點 $0\,\tfrac12\,1$ 也一樣：沿稜兩端角落原子距離 $a/2$，結果相同。）

---

**③ FCC 四面體間隙**

取 $\tfrac14\tfrac14\tfrac14$。最近的主原子是角落 $000$ 與三個面心 $\tfrac12\tfrac12 0$、$\tfrac12 0\tfrac12$、$0\tfrac12\tfrac12$。以 $000$ 為例，距離為體對角線的 ¼：

$$
d = \sqrt{\left(\tfrac a4\right)^2\times3} = \frac{\sqrt3\,a}{4}
$$

$$
R + r = \frac{\sqrt3}{4}(2\sqrt2\,R) = \frac{\sqrt6}{2}R = 1.225\,R
\;\Rightarrow\;
r = \boxed{0.225\,R}
$$

---

**④ BCC 四面體間隙**

取 $0\,\tfrac12\,\tfrac14$（等價於 $1\,\tfrac12\,\tfrac14$）。最近的 4 個主原子是兩個角落原子 $000$、$010$，以及兩個體心原子 $\tfrac12\tfrac12\tfrac12$ 和 $-\tfrac12\tfrac12\tfrac12$。

到 $000$：$\;d = a\sqrt{0^2 + (\tfrac12)^2 + (\tfrac14)^2} = \dfrac{\sqrt5}{4}a$

到 $\tfrac12\tfrac12\tfrac12$：$\;d = a\sqrt{(\tfrac12)^2 + 0^2 + (\tfrac14)^2} = \dfrac{\sqrt5}{4}a$（相同，確認是正確的最近鄰）

$$
R + r = \frac{\sqrt5}{4}\cdot\frac{4R}{\sqrt3} = \sqrt{\frac53}\,R = 1.291\,R
\;\Rightarrow\;
r = \boxed{0.291\,R}
$$

---

#### 間隙半徑總整理

| | 八面體 | 四面體 |
|---|---|---|
| **FCC**（APF 0.74） | **0.414 R** | 0.225 R |
| **BCC**（APF 0.68） | 0.155 R | **0.291 R** |

> ⚠️ **反直覺重點**：BCC 的原子堆積因子（atomic packing factor, APF）比較小，總空隙較多，但空隙被分散成很多小間隙，所以**最大間隙（0.291R）反而比 FCC 的最大間隙（0.414R）小**。這就是碳在 FCC 鐵中溶解度遠大於 BCC 鐵的原因（見 7.3 題）。
> 「空隙（void）」指整體未被佔據的空間，「間隙（interstice）」指特定的間隙位置，兩者要分清楚。

### 3.5 實例：碳在鐵中的間隙型固溶體

- 碳原子半徑 0.071 nm，鐵原子半徑 0.124 nm
- 碳原子**仍然比間隙大**，所以會造成晶格應變，最大溶解度只有約 2%
- 間隙原子一定要**遠小於**主原子才能形成間隙型固溶體；常見的間隙型溶質有 H、C、N、O

### 3.6 觀念題（Concept Check 4.1、4.2）

**Q1：三種以上元素能形成固溶體嗎？**
可以。只要各溶質元素都和溶劑符合形成固溶體的條件（例如取代型要符合 Hume–Rothery 法則，間隙型要夠小），加入後原晶體結構維持不變，就是多元固溶體（multicomponent solid solution），例如 Au–Ag–Cu 系統。

**Q2：為什麼取代型可以完全互溶，間隙型卻不行？**
- **取代型**：溶質直接取代主原子位置。若兩元素尺寸、結構、電負度、價數都相近，溶質可以逐步取代到 100%，晶體結構仍不變，所以能完全互溶。
- **間隙型**：溶質必須遠小於主原子，而且即使很小也通常比間隙大，每塞一個都會產生晶格應變。應變隨濃度累積，晶格很快就撐不住，所以溶解度一定有限（通常 < 10%）。另外，若把溶劑全部換掉，就不再有「主原子提供間隙」這個前提。

---

## 4. 成分表示法（§4.4 Specification of Composition）

> 「成分（composition）」與「濃度（concentration）」在本書中同義。

### 4.1 兩種基本表示法

**重量百分率（weight percent, wt%）**：以質量（mass）為基準

$$
C_1 = \frac{m_1}{m_1 + m_2}\times100 \tag{4.3a}
$$

多元合金則是 $C_1 = \dfrac{m_1}{m_1+m_2+\cdots+m_n}\times100$（4.3b）。

**原子百分率（atom percent, at%）**：以莫耳數（number of moles）或原子數為基準

$$
n_{m1} = \frac{m_1'}{A_1} \tag{4.4}
$$

$$
C_1' = \frac{n_{m1}}{n_{m1}+n_{m2}}\times100 \tag{4.5a}
$$

- $m_1'$：以**公克（gram）**為單位的質量
- 上標撇號（′）同時用來表示 at% 與「以公克計的質量」，是符號上的小陷阱
- 因為 1 莫耳任何物質的原子數都相同，用原子數或莫耳數計算都可以

### 4.2 推導：wt% → at%（式 4.6a，課本例題 4.3）

**Step 1**　設合金總質量為 $M'$（公克），由 wt% 定義：

$$
m_1' = \frac{C_1 M'}{100},\qquad m_2' = \frac{C_2 M'}{100}
$$

**Step 2**　代入 at% 定義（4.5a）與莫耳數（4.4）：

$$
C_1' = \frac{\dfrac{m_1'}{A_1}}{\dfrac{m_1'}{A_1}+\dfrac{m_2'}{A_2}}\times100
= \frac{\dfrac{C_1M'}{100A_1}}{\dfrac{C_1M'}{100A_1}+\dfrac{C_2M'}{100A_2}}\times100
$$

**Step 3**　$M'/100$ 消去，分子分母同乘 $A_1A_2$：

$$
\boxed{C_1' = \frac{C_1A_2}{C_1A_2 + C_2A_1}\times100} \tag{4.6a}
$$

同理，$C_2' = \dfrac{C_2A_1}{C_1A_2+C_2A_1}\times100$（4.6b）。

> 🔑 **記憶法**：wt% 換 at% 要「**除以原子量**」（質量 → 莫耳數），所以分子是 $C_1/A_1$，交叉相乘後變成 $C_1A_2$。

### 4.3 推導：at% → wt%（式 4.7a）

原子數正比於 $C_1'$，質量等於莫耳數乘原子量，所以 $m_1 \propto C_1'A_1$：

$$
\boxed{C_1 = \frac{C_1'A_1}{C_1'A_1 + C_2'A_2}\times100} \tag{4.7a}
$$

> 🔑 **記憶法**：at% 換 wt% 要「**乘以原子量**」（莫耳數 → 質量）。

二元合金的檢查：$C_1 + C_2 = 100$、$C_1' + C_2' = 100$（4.8a、4.8b）。

### 4.4 推導：wt% → 單位體積質量（式 4.9a）

第 5 章擴散計算會用到 kg/m³ 的濃度，記為 $C_1''$（雙撇號）。

**推導**：取 100 g 合金，其中元素 1 有 $C_1$ 公克、元素 2 有 $C_2$ 公克。
**假設合金總體積等於各元素體積相加**：

$$
V = \frac{C_1}{\rho_1} + \frac{C_2}{\rho_2}\quad(\text{cm}^3)
$$

$$
C_1'' = \frac{C_1\ (\text{g})}{V\ (\text{cm}^3)}\times\underbrace{10^3}_{\text{g/cm}^3\to\text{kg/m}^3}
$$

$$
\boxed{C_1'' = \left(\frac{C_1}{\dfrac{C_1}{\rho_1}+\dfrac{C_2}{\rho_2}}\right)\times10^3} \tag{4.9a}
$$

（$\rho$ 用 g/cm³，結果是 kg/m³。換算因子：$1\ \text{g/cm}^3 = 10^{-3}\ \text{kg}/10^{-6}\ \text{m}^3 = 10^3\ \text{kg/m}^3$。）

### 4.5 推導：合金平均密度與平均原子量

**平均密度（average density）**：同樣取 100 g 合金，

$$
\rho_\text{ave} = \frac{\text{總質量}}{\text{總體積}} = \boxed{\frac{100}{\dfrac{C_1}{\rho_1}+\dfrac{C_2}{\rho_2}}} \tag{4.10a}
$$

若已知的是 at%：

$$
\rho_\text{ave} = \frac{C_1'A_1 + C_2'A_2}{\dfrac{C_1'A_1}{\rho_1}+\dfrac{C_2'A_2}{\rho_2}} \tag{4.10b}
$$

**平均原子量（average atomic weight）**：

$$
A_\text{ave} = \frac{\text{總質量}}{\text{總莫耳數}} = \boxed{\frac{100}{\dfrac{C_1}{A_1}+\dfrac{C_2}{A_2}}} \tag{4.11a}
\qquad
A_\text{ave} = \frac{C_1'A_1 + C_2'A_2}{100} \tag{4.11b}
$$

> ⚠️ 式 4.9～4.11 基於「體積可加性」的假設，實際合金不完全成立。但對**稀薄溶液（dilute solution）**及固溶體範圍內的成分，誤差不大。

### 4.6 延伸公式：合金中某元素每 cm³ 的原子數

這個公式課本正文沒寫，但章末題常考，自己推一次：

$$
N_1 = \frac{N_A\,C_1''}{A_1}\ (\text{單位換成 g/cm}^3)
= \frac{N_A\,C_1}{\dfrac{C_1A_1}{\rho_1}+\dfrac{C_2A_1}{\rho_2}}\quad(\text{atoms/cm}^3)
$$

**推導**：元素 1 在每 cm³ 合金中的質量為 $\dfrac{C_1}{C_1/\rho_1 + C_2/\rho_2}$（g/cm³），除以 $A_1$ 得到莫耳數，再乘 $N_A$ 得到原子數，整理後即為上式。

### 4.7 課本例題 4.4 詳解：Al–Cu 合金 wt% → at%

**題目**：97 wt% Al–3 wt% Cu 合金，求各元素 at%。（$A_\text{Al} = 26.98$，$A_\text{Cu} = 63.55$ g/mol）

$$
C_\text{Al}' = \frac{(97)(63.55)}{(97)(63.55)+(3)(26.98)}\times100 = \frac{6164.4}{6164.4 + 80.9}\times100 = \boxed{98.7\ \text{at\%}}
$$

$$
C_\text{Cu}' = \frac{(3)(26.98)}{6245.3}\times100 = \boxed{1.30\ \text{at\%}}
$$

**觀察**：Cu 的原子量是 Al 的 2.36 倍，所以 3 wt% 的 Cu 只佔 1.3 at%。**較重的元素，at% 會小於 wt%**，可以用來檢查答案方向對不對。

---

## 5. 公式總表（Part 1）

| 編號 | 公式 | 用途 |
|---|---|---|
| 4.1 | $N_v = N\exp(-Q_v/kT)$ | 平衡空位數 |
| — | $\ln\dfrac{N_{v2}}{N_{v1}} = -\dfrac{Q_v}{k}\left(\dfrac1{T_2}-\dfrac1{T_1}\right)$ | 兩溫度比值法（自行推導） |
| 4.2 | $N = N_A\rho/A$ | 單位體積原子數 |
| 4.3a | $C_1 = \dfrac{m_1}{m_1+m_2}\times100$ | wt% |
| 4.5a | $C_1' = \dfrac{n_{m1}}{n_{m1}+n_{m2}}\times100$ | at% |
| 4.6a | $C_1' = \dfrac{C_1A_2}{C_1A_2+C_2A_1}\times100$ | wt% → at% |
| 4.7a | $C_1 = \dfrac{C_1'A_1}{C_1'A_1+C_2'A_2}\times100$ | at% → wt% |
| 4.9a | $C_1'' = \dfrac{C_1}{C_1/\rho_1+C_2/\rho_2}\times10^3$ | wt% → kg/m³ |
| 4.10a | $\rho_\text{ave} = \dfrac{100}{C_1/\rho_1+C_2/\rho_2}$ | 合金平均密度 |
| 4.11a | $A_\text{ave} = \dfrac{100}{C_1/A_1+C_2/A_2}$ | 合金平均原子量 |
| — | $N_1 = \dfrac{N_A C_1}{C_1A_1/\rho_1 + C_2A_1/\rho_2}$ | 合金中元素 1 的原子數/cm³（自行推導） |
| — | $n = \dfrac{\rho\,a^3 N_A}{A}$ | 由密度判斷每單位晶格原子數（第 3 章，7.6 題用到） |

---

## 6. 易混淆名詞與常見錯誤

| 容易混淆的項目 | 區別 |
|---|---|
| 空位（vacancy） vs 自身間隙原子（self-interstitial） | 前者少一個原子，後者在間隙多一個**同種**原子 |
| 自身間隙原子 vs 間隙型雜質原子（interstitial impurity atom） | 前者是主原子本身，後者是外來的小原子 |
| 空隙（void） vs 間隙（interstice / interstitial site） | 前者是整體未佔據的空間，後者是可容納原子的特定位置 |
| 溶質（solute） vs 溶劑（solvent） | 看含量多寡，含量最多的是溶劑 |
| 固溶體（solid solution） vs 金屬間化合物（intermetallic compound） | 前者保持主晶體結構、成分可變；後者形成新結構、有特定化學計量 |
| wt% vs at% | 質量基準 vs 莫耳（原子數）基準；重元素的 at% < wt% |
| $k$ vs $R$ | 每原子 vs 每莫耳；$R = kN_A$ |

**常見計算錯誤清單**
1. 溫度忘記轉成 K
2. $Q_v$ 單位和 $k$、$R$ 沒有配對
3. $N$ 的單位 cm⁻³ 沒有乘 $10^6$ 轉成 m⁻³
4. wt% ↔ at% 公式中 $A_1$、$A_2$ 位置交叉放錯
5. 以為 BCC 間隙比 FCC 大（因為 APF 較小），結果判斷錯誤

---

## 7. 挑戰題精選（附詳解）

> 題目取材自 Callister《Materials Science and Engineering: An Introduction》第 4 章章末題，敘述經改寫。

### 7.1　由空位數反推空位形成能

**題目**：銀（Ag）在 800 °C 時的平衡空位數為 $3.6\times10^{23}$ m⁻³。已知銀的原子量 107.9 g/mol，800 °C 時密度 9.5 g/cm³，求銀的空位形成能 $Q_v$（eV/atom）。

**解**

**Step 1　求 $N$**

$$
N = \frac{(6.022\times10^{23})(9.5)(10^6)}{107.9} = 5.30\times10^{28}\ \text{atoms/m}^3
$$

**Step 2　把式 (4.1) 改寫成求 $Q_v$ 的形式**

$$
\frac{N_v}{N} = \exp\left(-\frac{Q_v}{kT}\right)
\;\Rightarrow\;
Q_v = kT\ln\frac{N}{N_v}
$$

**Step 3　代入**（$T = 1073$ K）

$$
\frac{N}{N_v} = \frac{5.30\times10^{28}}{3.6\times10^{23}} = 1.47\times10^5,
\qquad \ln(1.47\times10^5) = 11.90
$$

$$
Q_v = (8.62\times10^{-5})(1073)(11.90) = \boxed{1.10\ \text{eV/atom}}
$$

**檢查**：金屬的 $Q_v$ 通常在 0.5～2 eV 之間，答案合理。

---

### 7.2　兩溫度下的空位分率

**題目**：某假想金屬在 900 °C 的平衡空位數為 $2.3\times10^{25}$ m⁻³。其密度為 7.40 g/cm³、原子量 85.5 g/mol，求 700 °C 時的空位分率 $N_v/N$。（假設密度不隨溫度改變）

**解**

**Step 1　求 $N$**

$$
N = \frac{(6.022\times10^{23})(7.40)(10^6)}{85.5} = 5.21\times10^{28}\ \text{m}^{-3}
$$

**Step 2　900 °C（1173 K）時的空位分率，並求 $Q_v$**

$$
\left(\frac{N_v}{N}\right)_{1173} = \frac{2.3\times10^{25}}{5.21\times10^{28}} = 4.41\times10^{-4}
$$

$$
Q_v = -kT\ln\left(\frac{N_v}{N}\right) = -(8.62\times10^{-5})(1173)\ln(4.41\times10^{-4})
= (0.1011)(7.726) = 0.781\ \text{eV/atom}
$$

**Step 3　700 °C（973 K）時的空位分率**

$$
\frac{Q_v}{kT} = \frac{0.781}{(8.62\times10^{-5})(973)} = \frac{0.781}{0.08387} = 9.31
$$

$$
\left(\frac{N_v}{N}\right)_{973} = \exp(-9.31) = \boxed{9.0\times10^{-5}}
$$

**另解（比值法，不需求 $Q_v$ 以外的量）**：

$$
\ln\frac{f_{973}}{f_{1173}} = -\frac{Q_v}{k}\left(\frac1{973}-\frac1{1173}\right)
= -\frac{0.781}{8.62\times10^{-5}}(1.752\times10^{-4}) = -1.588
$$

$$
f_{973} = (4.41\times10^{-4})\,e^{-1.588} = (4.41\times10^{-4})(0.204) = 9.0\times10^{-5}
$$

**結論**：溫度只降了 200 °C，空位分率就降到約 1/5，體現了**指數型溫度依賴性**。

---

### 7.3　碳在 α-鐵與 γ-鐵中的間隙溶解度

**題目**：
(a) 鐵在 912 °C 以下是 BCC 的 α-鐵，又稱肥粒鐵（ferrite），$R = 0.124$ nm；912 °C 以上是 FCC 的 γ-鐵，又稱沃斯田鐵（austenite），$R \approx 0.129$ nm。計算兩者最大間隙位置可容納的原子半徑。
(b) 碳原子半徑 0.071 nm。解釋為何碳在 γ-鐵中的最大溶解度（約 2.14 wt%）遠大於在 α-鐵中（約 0.022 wt%）。

**解**

**(a)**

| 結構 | 間隙 | $r/R$ | $r$（nm） |
|---|---|---|---|
| α-Fe（BCC） | 八面體 | 0.155 | 0.019 |
| α-Fe（BCC） | 四面體（最大） | 0.291 | 0.036 |
| γ-Fe（FCC） | 八面體（最大） | 0.414 | **0.053** |
| γ-Fe（FCC） | 四面體 | 0.225 | 0.029 |

**(b)**
- 碳原子（0.071 nm）比兩種結構中的所有間隙都大，一定會造成晶格應變。
- γ-鐵的八面體間隙（0.053 nm）與碳的尺寸差距最小，應變較小，所以可以容納較多碳。
- α-鐵的最大間隙只有 0.036 nm，碳塞進去造成的應變大得多，所以溶解度極低。
- **PSPP 連結**：這個差異就是鋼熱處理（heat treatment）的基礎。先加熱到沃斯田鐵區讓碳溶進去，再快速冷卻，碳來不及排出，就形成麻田散鐵（martensite），第 10 章會詳細介紹。

> 🔍 **進階補充**：實際上碳在 α-鐵中位於**八面體**間隙（0.155R），而不是較大的四面體間隙（0.291R）。原因是 BCC 八面體是扭曲的，只有 2 個原子靠得近，碳只需把這 2 個原子往外推；四面體則要同時推 4 個原子，總應變能反而較大。這超出課本範圍，理解即可。

---

### 7.4　用休謨–羅瑟里法則判斷固溶類型

**題目**：以銅（Cu）為溶劑，根據下表判斷各元素與銅形成的固溶體類型：(a) 完全互溶的取代型，(b) 部分互溶的取代型，(c) 間隙型。

| 元素 | 原子半徑（nm） | 晶體結構 | 電負度 | 價數 |
|---|---|---|---|---|
| **Cu** | 0.1278 | FCC | 1.9 | +2 |
| C | 0.071 | | | |
| H | 0.046 | | | |
| O | 0.060 | | | |
| Ag | 0.1445 | FCC | 1.9 | +1 |
| Al | 0.1431 | FCC | 1.5 | +3 |
| Co | 0.1253 | HCP | 1.8 | +2 |
| Cr | 0.1249 | BCC | 1.6 | +3 |
| Fe | 0.1241 | BCC | 1.8 | +2 |
| Ni | 0.1246 | FCC | 1.8 | +2 |
| Pd | 0.1376 | FCC | 2.2 | +2 |
| Pt | 0.1387 | FCC | 2.2 | +2 |
| Zn | 0.1332 | HCP | 1.6 | +2 |

**解**：先算原子尺寸差 $\Delta r\% = \dfrac{r - 0.1278}{0.1278}\times100\%$，再逐條檢查。

| 元素 | Δr% | 結構同 FCC？ | 電負度差 | 價數 | 判斷 |
|---|---|---|---|---|---|
| C、H、O | −44 ～ −64% | — | — | — | **(c) 間隙型**：遠小於 Cu |
| Ni | −2.5% | ✓ | 0.1 | 相同 | **(a) 完全互溶** |
| Pd | +7.7% | ✓ | 0.3 | 相同 | **(a) 完全互溶** |
| Pt | +8.5% | ✓ | 0.3 | 相同 | **(a) 完全互溶** |
| Ag | +13.1% | ✓ | 0 | +1（較低） | **(b) 部分**：尺寸差接近 15%，價數較低 |
| Al | +12.0% | ✓ | 0.4 | +3 | **(b) 部分**：尺寸差偏大、電負度差較大 |
| Co | −2.0% | ✗（HCP） | 0.1 | 相同 | **(b) 部分**：結構不同 |
| Cr | −2.3% | ✗（BCC） | 0.3 | +3 | **(b) 部分**：結構不同 |
| Fe | −2.9% | ✗（BCC） | 0.1 | 相同 | **(b) 部分**：結構不同 |
| Zn | +4.2% | ✗（HCP） | 0.3 | 相同 | **(b) 部分**：結構不同 |

**答**：(a) Ni、Pd、Pt；(b) Ag、Al、Co、Cr、Fe、Zn；(c) C、H、O。

**解題關鍵**：判斷順序是「尺寸 → 結構 → 電負度 → 價數」。只要**晶體結構不同**，就不可能完全互溶。Zn 就是例子，它與 Cu 形成的黃銅（brass）只是部分互溶。

---

### 7.5　三元合金的 at% 計算

**題目**：某合金由 44.5 lb 銀（Ag）、83.7 lb 金（Au）、5.3 lb 銅（Cu）組成，求各元素的原子百分率。（$A_\text{Ag}=107.87$，$A_\text{Au}=196.97$，$A_\text{Cu}=63.55$）

**解**：質量用 lb（磅）沒關係，at% 是比值，單位會消去，直接以「lb-mol」計算即可。

**Step 1　各元素莫耳數**

$$
n_\text{Ag} = \frac{44.5}{107.87} = 0.4125,\quad
n_\text{Au} = \frac{83.7}{196.97} = 0.4249,\quad
n_\text{Cu} = \frac{5.3}{63.55} = 0.0834
$$

$$
n_\text{total} = 0.9209
$$

**Step 2　用式 4.5b**

$$
C_\text{Ag}' = \frac{0.4125}{0.9209}\times100 = \boxed{44.8\ \text{at\%}},\quad
C_\text{Au}' = \boxed{46.1\ \text{at\%}},\quad
C_\text{Cu}' = \boxed{9.1\ \text{at\%}}
$$

**檢查**：總和 = 100 ✓。Cu 的質量只佔 4%，at% 卻有 9.1%，因為 Cu 原子最輕。

**陷阱**：多元合金**不能**直接套二元公式 4.6a，要回到定義，先算各元素莫耳數。

---

### 7.6　反推 wt%：給定溶質原子密度

**題目**：金（Au）與銀（Ag）形成取代型固溶體。要讓合金中每 cm³ 含 $5.5\times10^{21}$ 個 Au 原子，需要加入多少 wt% 的 Au？（$\rho_\text{Au}=19.32$、$\rho_\text{Ag}=10.49$ g/cm³，$A_\text{Au}=196.97$ g/mol）

**解**

**Step 1　寫出 $N_\text{Au}$ 的表達式**（4.6 節的延伸公式），並令 $C_\text{Ag} = 100 - C_\text{Au}$：

$$
N_\text{Au} = \frac{N_A\,C_\text{Au}}{\dfrac{C_\text{Au}A_\text{Au}}{\rho_\text{Au}}+\dfrac{A_\text{Au}(100-C_\text{Au})}{\rho_\text{Ag}}}
$$

**Step 2　對 $C_\text{Au}$ 求解**：兩邊取倒數，乘開後整理，得到

$$
C_\text{Au} = \frac{100}{1 + \dfrac{N_A\,\rho_\text{Ag}}{N_\text{Au}\,A_\text{Au}} - \dfrac{\rho_\text{Ag}}{\rho_\text{Au}}}
$$

（推導：$\dfrac{N_A C}{N_\text{Au}} = \dfrac{CA}{\rho_\text{Au}} + \dfrac{A(100-C)}{\rho_\text{Ag}}$，兩邊同除以 $\dfrac{AC}{\rho_\text{Ag}}$，得 $\dfrac{N_A\rho_\text{Ag}}{N_\text{Au}A} = \dfrac{\rho_\text{Ag}}{\rho_\text{Au}} + \dfrac{100}{C} - 1$，移項即得。）

**Step 3　代入數值**

$$
\frac{N_A\rho_\text{Ag}}{N_\text{Au}A_\text{Au}} = \frac{(6.022\times10^{23})(10.49)}{(5.5\times10^{21})(196.97)} = 5.831,
\qquad
\frac{\rho_\text{Ag}}{\rho_\text{Au}} = 0.543
$$

$$
C_\text{Au} = \frac{100}{1 + 5.831 - 0.543} = \frac{100}{6.288} = \boxed{15.9\ \text{wt\%}}
$$

**驗算**：
- $\rho_\text{ave} = \dfrac{100}{15.9/19.32 + 84.1/10.49} = \dfrac{100}{8.840} = 11.31$ g/cm³
- 每 cm³ 中 Au 的質量 $= 0.159\times11.31 = 1.799$ g
- 原子數 $= \dfrac{1.799}{196.97}\times6.022\times10^{23} = 5.5\times10^{21}$ ✓

---

### 7.7　由密度判斷合金的晶體結構

**題目**：某假想合金含 12.5 wt% 金屬 A 與 87.5 wt% 金屬 B。A、B 的密度分別為 4.27、6.35 g/cm³，原子量分別為 61.4、125.7 g/mol。已知此合金為立方晶系，晶格常數 $a = 0.395$ nm，判斷它是簡單立方（simple cubic, SC）、FCC 還是 BCC。

**解題策略**：由第 3 章的 $\rho = \dfrac{nA}{V_C N_A}$ 反推每單位晶格原子數 $n$。SC → 1，BCC → 2，FCC → 4。合金要使用**平均密度**與**平均原子量**。

**Step 1　平均密度（4.10a）**

$$
\rho_\text{ave} = \frac{100}{\dfrac{12.5}{4.27}+\dfrac{87.5}{6.35}} = \frac{100}{2.927+13.780} = 5.99\ \text{g/cm}^3
$$

**Step 2　平均原子量（4.11a）**

$$
A_\text{ave} = \frac{100}{\dfrac{12.5}{61.4}+\dfrac{87.5}{125.7}} = \frac{100}{0.2036+0.6961} = 111.1\ \text{g/mol}
$$

**Step 3　求 $n$**（$a = 0.395\times10^{-7}$ cm，$a^3 = 6.163\times10^{-23}$ cm³）

$$
n = \frac{\rho_\text{ave}\,a^3 N_A}{A_\text{ave}} = \frac{(5.99)(6.163\times10^{-23})(6.022\times10^{23})}{111.1} = \frac{222.1}{111.1} = 2.00
$$

**答**：$n = 2$，為 **BCC** 結構。

**重點**：這題串起第 3 章（密度公式）與第 4 章（合金平均值），是段考綜合題的典型出法。

---

### 7.8　含碳單位晶格的比例

**題目**：某 BCC 鐵–碳合金含 0.10 wt% C（假設碳全部固溶於 α-鐵的間隙中），求含有碳原子的單位晶格佔全部單位晶格的比例。（$A_\text{C}=12.01$，$A_\text{Fe}=55.85$ g/mol）

**解題策略**：算出「碳原子數 / 單位晶格數」，而單位晶格數 = 鐵原子數 / 2（BCC 每個單位晶格 2 個原子）。

**Step 1　以 100 g 合金為基準**

$$
n_\text{C} = \frac{0.10}{12.01} = 8.33\times10^{-3}\ \text{mol},\qquad
n_\text{Fe} = \frac{99.90}{55.85} = 1.789\ \text{mol}
$$

**Step 2　單位晶格數**

$$
n_\text{cells} = \frac{n_\text{Fe}}{2} = 0.8944\ \text{mol of cells}
$$

**Step 3　比例**（假設每個含碳單位晶格只有 1 個碳原子）

$$
\text{fraction} = \frac{n_\text{C}}{n_\text{cells}} = \frac{8.33\times10^{-3}}{0.8944} = \boxed{9.3\times10^{-3}}
$$

也就是大約每 107 個單位晶格才有 1 個含碳。

**討論**：
- 以原子數計，C 只佔約 0.46 at%，非常稀薄。
- 0.10 wt% 其實超過 α-鐵的最大溶解度（0.022 wt%）。實際上多出的碳會形成 Fe₃C（雪明碳鐵 cementite），這題為練習計算而假設全部固溶，第 9 章會學到相圖（phase diagram）的正確處理方式。

---

## 8. 章節總複習表

| 主題 | 必背重點 | 必會計算 |
|---|---|---|
| 缺陷分類 | 點、線、面、體依維度分類 | — |
| 空位 | 熱力學必然存在（熵）；熔點附近約 $10^{-4}$ | $N_v$、$Q_v$、兩溫度比值 |
| 自身間隙原子 | 畸變大 → 濃度遠低於空位 | — |
| 固溶體 | 取代型 vs 間隙型；結構不變、成分均勻 | — |
| Hume–Rothery | 尺寸 < 15%、結構同、電負度近、價數 | 判斷溶解度 |
| 間隙位置 | FCC：oct 0.414R、tet 0.225R；BCC：oct 0.155R、tet 0.291R | 幾何推導 |
| 成分 | wt%、at%、kg/m³ | 互換、多元合金、平均 ρ 與 A、原子數/cm³ |

---

## 9. 考前提醒

1. **公式推導**：4.6a（wt%→at%）與四種間隙半徑的推導很可能直接考，要能從定義獨立推出來。
2. **單位檢查**：每題最後確認單位（m⁻³ vs cm⁻³、eV vs J、°C vs K）。
3. **合理性檢查**：
   - 空位分率應 < $10^{-3}$
   - $Q_v$ 約 0.5～2 eV
   - 重元素的 at% < wt%
   - 求出的 $n$ 應接近 1、2、4 這類整數
4. **綜合題**：第 3 章晶體結構（APF、$a$ 與 $R$ 的關係、密度公式）是本章計算的基礎，考前一起複習。
5. **觀念題**：「為什麼一定有空位？」「為什麼間隙型不能完全互溶？」「BCC 的 APF 比較小，間隙卻比較小？」這類題目要能用 2～3 句話講清楚。
