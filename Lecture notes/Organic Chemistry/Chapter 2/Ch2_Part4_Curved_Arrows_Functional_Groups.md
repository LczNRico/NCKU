# Chapter 2 · Part IV：曲箭頭表示法 ＋ 官能基分類總覽
### (2-14 The Curved-Arrow Formalism ~ 2-17 Functional Groups with Nitrogen)

> 這是本章最後一份講義。2-14 節份量雖小，卻是貫穿整個有機化學（尤其是反應機構 mechanism）最基本的語言，務必練熟。2-15~2-17 節則是為後續章節鋪路的官能基總覽，建議整理成速查表，考前快速複習用。

---

## 2-14 曲箭頭表示法 (The Curved-Arrow Formalism)

### 核心規則

**曲箭頭 (curved arrow)** 用來表示**一對電子**從電子提供者（親核基/Lewis 鹼）流向電子接受者（親電子基/Lewis 酸）的移動路徑。

> **鐵則：每一支箭頭只能代表「一對」電子的移動，箭頭尾端必須從「電子對」出發，箭頭前端必須指向電子最終所在的位置。**

**箭頭的起點只有兩種可能：**
1. 一對孤對電子 (lone pair)
2. 一個鍵（σ 鍵或 π 鍵）上的電子對

**箭頭的終點只有兩種可能：**
1. 形成一個新的鍵（連向另一個原子）
2. 變成某原子上的孤對電子（鍵斷裂後電子留在某一端）

### ★ 標準範例（課本內文，甲氧基負離子 + 氯甲烷）

$$\ce{CH3-\overset{\displaystyle ..}{\underset{\displaystyle ..}{O}}{}^- \; + \; H-\underset{H}{\overset{H}{C}}-Cl \;\; \longrightarrow \;\; CH3-O-\underset{H}{\overset{H}{C}}-H \; + \; :\overset{..}{\underset{..}{Cl}}{}^-}$$

這個反應需要**兩支箭頭**：

- **箭頭 ①**：從 $\ce{CH3O-}$ 氧上的一對孤對電子出發，指向碳，形成新的 C─O 鍵（這是**親核基/Lewis 鹼**提供電子的動作）
- **箭頭 ②**：從原本 C─Cl 的鍵結電子對出發，指向 Cl 原子，變成 Cl⁻ 上的孤對電子（鍵斷裂，電子留在陰電性較大的氯上）

$$\underbrace{\ce{CH3O-}}_{\text{親核基（電子提供者）}} \qquad \underbrace{\ce{CH3Cl}}_{\text{親電子基（電子接受者）}}$$

### 曲箭頭 vs 共振箭頭：顏色與意義的區別（易混淆考點）

| 箭頭類型 | 用途 | 電子是否真的移動 |
|---|---|---|
| 曲箭頭（本節，慣例印為紅色）| 表示**反應中**電子對的實際流動 | 是，代表真實的鍵形成/斷裂 |
| 共振箭頭（1-9 節提過，慣例印為綠色）| 表示同一分子在**不同共振式**之間，電子分布方式的想像轉換 | 否，電子並沒有真的「流動」，只是我們用箭頭幫助理解電子雲的離域方式；分子實際上是所有共振式的**混成體 (hybrid)**，而非在幾個結構間跳動 |

> **常見誤解**：共振箭頭常被誤以為代表分子「在兩個結構間震盪」，但課本明確強調共振結構只是**同一個真實分子的不同描述角度**，電子雲其實是靜止離域分布的，不會像鐘擺一樣來回擺動。這點在 Part III（2-12 共振效應）已提過，這裡用曲箭頭的語言再次強化。

---

### ★★★ 例題 1（Problem 2-23，完整四步驟分析範例）

**題目**：以下反應中，(1) 畫出反應物與產物的路易斯結構，(2) 判斷誰是親電子基（酸）、誰是親核基（鹼），(3) 用曲箭頭表示電子對的移動，並畫出產物的共振式（若有）。

**(a)** 乙醛與 HCl 反應：

$$\ce{CH3-CH=O + HCl -> [CH3-CH=\overset{+}{O}H \longleftrightarrow CH3-\overset{+}{C}H-\overset{..}{O}H] + Cl-}$$

**詳解：**

**判斷酸鹼**：此反應是質子從 HCl 轉移到乙醛的羰基氧上，因此屬於 **Brønsted–Lowry 酸鹼反應**：
- HCl：**酸**（質子提供者）
- 乙醛的羰基氧（C=O 上的孤對電子）：**鹼**（質子接受者）

**曲箭頭步驟**：
- **箭頭 ①**：從乙醛羰基氧的一對孤對電子出發，指向 HCl 的氫，形成新的 O─H 鍵
- **箭頭 ②**：從原本的 H─Cl 鍵結電子對出發，指向 Cl，形成 Cl⁻

**產物的共振式**：質子化後的乙醛陽離子，正電荷可以在氧與碳之間離域：

$$\ce{CH3-CH=\overset{+}{O}H} \quad \longleftrightarrow \quad \ce{CH3-\overset{+}{C}H-OH}$$

左式（正電荷在氧上）因為**所有原子都滿足八隅體**，是**主要（major）貢獻者**；右式（正電荷在碳上）氧滿足八隅體但碳只有 6 個電子，是**次要（minor）貢獻者**，但仍有貢獻（這也解釋了羰基碳為何帶有親電子性，後續章節的親核加成反應會用到這個概念）。

**(b)** 乙醛與甲氧基負離子反應：

$$\ce{CH3-CH=O + CH3O- -> CH3-CH(O-)(OCH3)}$$

**詳解：**

這裡**沒有質子轉移**，而是 $\ce{CH3O-}$ 的氧直接對乙醛的羰基碳形成新的 C─O 鍵，因此**不是 Brønsted–Lowry 酸鹼反應**，但仍是廣義的 **Lewis 酸鹼反應**：
- $\ce{CH3O-}$（帶負電，孤對電子豐富）：**親核基（Lewis 鹼）**
- 乙醛的羰基碳（因為 C=O 極化，碳帶部分正電）：**親電子基（Lewis 酸）**

**曲箭頭步驟**：
- **箭頭 ①**：從 $\ce{CH3O-}$ 氧上的孤對電子出發，指向乙醛的羰基碳，形成新的 C─O 鍵
- **箭頭 ②**：從原本 C=O 的 π 鍵電子對出發，指向氧，變成氧上的孤對電子（負電荷）

> **這一組 (a)(b) 對照的重點**：**同一個分子（乙醛）在 (a) 中扮演鹼，在 (b) 中扮演酸**——這正好呼應 2-5 節「兩性物質」的概念。乙醛能接受質子（因為羰基氧有孤對電子），也能被親核基攻擊（因為羰基碳帶部分正電）。**判斷一個反應是 Brønsted–Lowry 型還是純 Lewis 型，關鍵就是看「有沒有質子被轉移」。**

---

### ★★ 例題 2（Problem 2-51(c)，酸鹼反應曲箭頭練習）

**題目**：$\ce{CH3-CH=O + HCl -> CH3-\overset{+}{C}H-OH + Cl-}$（乙醛質子化，另一種畫法角度）

**詳解**：此題與例題 1(a) 本質相同，但要求你直接標出電子的移動並畫出正確的 Lewis 結構、含孤對電子。答題重點在於：

1. 先確認乙醛的羰基氧上有**兩對**孤對電子，畫圖時務必畫出
2. 曲箭頭必須從其中**一對**孤對電子的正中央出發（不能從氧原子本身出發，要精確指向電子對）
3. 箭頭終點指向 H，且必須是形成新鍵的位置（氫原子核）
4. 第二支箭頭從 H─Cl 鍵的正中央出發，指向 Cl 原子核

> **繪圖細節提醒**：許多人畫曲箭頭時容易「偷懶」從原子畫起而非從電子對畫起，這在嚴格閱卷標準下會被扣分。務必養成先畫出所有孤對電子、再從電子對精確出發畫箭頭的習慣。

---

## 2-15 碳氫化合物 (Hydrocarbons)

碳氫化合物只由 C 和 H 組成，因此**幾乎都是非極性或弱極性**，屬於疏水性 (hydrophobic)。

### 2-15A 烷 (Alkanes)：只含單鍵

| 碳數 | 名稱 | 碳數 | 名稱 |
|---|---|---|---|
| 1 | methane 甲烷 | 6 | hexane 己烷 |
| 2 | ethane 乙烷 | 7 | heptane 庚烷 |
| 3 | propane 丙烷 | 8 | octane 辛烷 |
| 4 | butane 丁烷 | 9 | nonane 壬烷 |
| 5 | pentane 戊烷 | 10 | decane 癸烷 |

**環烷 (cycloalkanes)**：成環的烷類，如 cyclopentane（環戊烷）、cyclohexane（環己烷）。

**烷基 (alkyl group, R)**：烷類移除一個氫原子後形成的取代基，例如 ethyl group（乙基, $\ce{-C2H5}$）。當我們不關心特定結構、只想表示「某個不重要的烷基」時，統一用符號 **R** 代表。

**為什麼烷類「不活潑」？** 因為烷類**沒有官能基 (functional group)**——分子中沒有反應活性特別高的部位，因此除了燃燒外幾乎不參與其他反應。這也是為什麼許多化合物的烷基部分常被直接省略、用 R 表示，因為它通常不參與反應。

### 2-15B 烯 (Alkenes)：含碳碳雙鍵，字尾 -ene

$$\ce{CH2=CH2}\ (\text{ethene}) \qquad \ce{CH2=CH-CH3}\ (\text{propene})$$

碳碳雙鍵**不能自由旋轉**，因此許多烯類存在**順反異構 (cis-trans isomerism)**：

$$\underset{\text{cis-but-2-ene}}{\ce{H3C-CH=CH-CH3}\ (\text{同側})} \qquad \underset{\text{trans-but-2-ene}}{\ce{H3C-CH=CH-CH3}\ (\text{異側})}$$

**環烯烴 (cycloalkenes)**：除非環很大，否則環烯烴的雙鍵幾乎都是 *cis* 型（因為 *trans* 型在小環中會產生過大的環張力）。

### 2-15C 炔 (Alkynes)：含碳碳三鍵，字尾 -yne

$$\ce{H-C#C-H}\ (\text{ethyne, 俗名 acetylene})$$

三鍵是直線形，因此**炔類沒有順反異構**。由於三鍵需要四個原子共線，**環炔 (cycloalkynes) 非常少見**，除非環夠大（通常需 8 個碳以上）。

### 2-15D 芳香烴 (Aromatic Hydrocarbons / Arenes)

以苯環 (benzene ring) 為基礎的化合物，結構上雖然形似三個雙鍵的環烯，但性質（穩定性、反應性）與一般烯類**完全不同**（詳細原因將在 Ch.16 說明）。

- **苯基 (phenyl group, Ph)**：苯環作為取代基時的名稱，類似 R 代表烷基，**Ar** 代表通用的芳香基 (aryl group)

---

## 2-16 含氧官能基 (Functional Groups with Oxygen)

### 2-16A 醇 (Alcohol)：官能基 ─OH，通式 R─OH

含 ─OH 基（hydroxy group），因為能形成氫鍵，是**親水性 (hydrophilic)** 官能基。字尾 **-ol**。

$$\ce{CH3OH}\ (\text{甲醇, methanol}) \qquad \ce{CH3CH2OH}\ (\text{乙醇, ethanol}) \qquad \ce{(CH3)2CHOH}\ (\text{異丙醇, isopropyl alcohol})$$

### 2-16B 醚 (Ether)：官能基 ─O─，通式 R─O─R′

氧夾在兩個烷基之間。**沒有 O─H**，所以醚類**分子間不能自行形成氫鍵**，但可以**接受**來自其他氫鍵提供者（如醇、水）的氫鍵。

$$\ce{CH3CH2-O-CH2CH3}\ (\text{diethyl ether, 乙醚})$$

### 2-16C 醛與酮 (Aldehydes and Ketones)：共同官能基為羰基 (carbonyl group, C=O)

| 官能基 | 通式 | 字尾 |
|---|---|---|
| 酮 (ketone) | 羰基兩側都接**烷基** | -one |
| 醛 (aldehyde) | 羰基一側接**烷基**、另一側接 **H** | -al 或 -aldehyde |

$$\ce{CH3-CO-CH3}\ (\text{acetone, 丙酮}) \qquad \ce{CH3-CHO}\ (\text{acetaldehyde, 乙醛})$$

羰基極性強，能與氫鍵提供者形成氫鍵，因此小分子（4 個碳以下）的醛酮通常能與水互溶。

### 2-16D 羧酸 (Carboxylic Acid)：官能基為羧基 (carboxyl group, ─COOH)

羧基是羰基 + 羥基的組合，但性質與兩者單獨存在時**大不相同**（見 Part III 共振效應：羧酸根的共振穩定化）。

$$\ce{R-COOH} \qquad \ce{CH3COOH}\ (\text{acetic acid, 乙酸, pKa ≈ 5})$$

字尾 **-oic acid**。羧酸強極性、易溶於水，pKa 約 5 左右（弱酸，但比一般醇酸得多）。

### 2-16E 羧酸衍生物 (Carboxylic Acid Derivatives)

羰基連接不同的拉電子原子/基團，可視為羧酸經化學修飾後的產物：

| 衍生物 | 官能基通式 | 中文 | 範例 |
|---|---|---|---|
| 醯氯 (acid chloride) | R─COCl | 醯氯 | $\ce{CH3COCl}$ (acetyl chloride) |
| 酯 (ester) | R─COOR′ | 酯 | $\ce{CH3COOCH2CH3}$ (ethyl acetate) |
| 醯胺 (amide) | R─CONH₂ | 醯胺 | $\ce{CH3CONH2}$ (acetamide) |

> 這三者都可以透過酸性或鹼性水解 (hydrolysis) 反應轉換回羧酸，這個關係會在後續章節（酸衍生物章節）詳細展開。

---

## 2-17 含氮官能基 (Functional Groups with Nitrogen)

### 2-17A 胺 (Amine)：氨的烷基化衍生物

$$\ce{R-NH2}\ (\text{一級胺}) \qquad \ce{R2NH}\ (\text{二級胺}) \qquad \ce{R3N}\ (\text{三級胺})$$

胺類具鹼性（因為氮上有孤對電子，可自由接受質子），天然存在的胺常被稱為**生物鹼 (alkaloid)**（如菸鹼 nicotine）。

$$K_b(\ce{RNH2}) \approx 10^{-4} \quad (\text{p}K_b \approx 4,\ \text{一般強度的鹼})$$

### 2-17B 醯胺 (Amide)：呼應 Part III 共振效應

$$\ce{R-CO-NH2}\ (\text{或 } \ce{R-CO-NHR'}, \ce{R-CO-NR'2})$$

如 Part III（2-12 節）詳細說明，醯胺氮上的孤對電子因與羰基共振而被鎖定，鹼性遠低於一般胺（$\text{p}K_b \approx 14$，比胺弱 10 個數量級以上）。

醯胺也因為強烈的分子間氫鍵（$\ce{N-H\cdots O=C}$），有很高的熔點與沸點——這正是**蛋白質 (protein)** 二級結構（如 $\alpha$-螺旋 alpha helix）能夠靠氫鍵維持穩定的化學基礎。

### 2-17C 腈 (Nitrile)：官能基為氰基 (cyano group, ─C≡N)

$$\ce{R-C#N}$$

C≡N 三鍵極性強（sp 混成），小分子腈類可溶於水，乙腈 (acetonitrile) 甚至能與水完全互溶。

---

# ★★★ 官能基總覽速查表（考前總複習用）

| 官能基中文 | 英文 | 通式 | 字尾/特徵 | 範例 |
|---|---|---|---|---|
| 烷 | alkane | R─H（僅單鍵）| -ane | hexane |
| 烯 | alkene | C=C | -ene | propene |
| 炔 | alkyne | C≡C | -yne | propyne |
| 芳香烴 | aromatic hydrocarbon (arene) | 苯環 | benzene 衍生 | ethylbenzene |
| 醇 | alcohol | R─OH | -ol | ethanol |
| 醚 | ether | R─O─R′ | "ether" | diethyl ether |
| 酮 | ketone | R─CO─R′ | -one | acetone |
| 醛 | aldehyde | R─CHO | -al | acetaldehyde |
| 羧酸 | carboxylic acid | R─COOH | -oic acid | acetic acid |
| 醯氯 | acid chloride | R─COCl | -oyl chloride | acetyl chloride |
| 酯 | ester | R─COOR′ | -oate | ethyl acetate |
| 醯胺 | amide | R─CONH₂ | -amide | acetamide |
| 胺 | amine | R─NH₂ | "amine" | methylamine |
| 腈 | nitrile | R─C≡N | -nitrile | acetonitrile |

**極性 / 氫鍵能力速查（呼應 Part I）：**

| 官能基 | 能否自我氫鍵 | 能否接受氫鍵 | 親水/疏水 |
|---|---|---|---|
| 烷、烯、炔、芳香烴 | 否 | 否 | 疏水 |
| 醇、羧酸、胺（一/二級）、醯胺 | 是（有 O─H 或 N─H）| 是 | 親水（視碳鏈長短）|
| 醚、酮、醛、酯、腈、三級胺 | 否（無 O─H/N─H）| 是（有孤對電子/極性鍵）| 部分親水（視碳鏈長短）|

---

### ★ 例題 3（Problem 2-27 類型，官能基辨識綜合練習）

**題目**：圈出下列結構中的官能基，並判斷該化合物屬於哪一類（或哪幾類）。

**(a)** $\ce{CH2=CH-CH2-COOCH3}$

**詳解**：
- 含 C=C 雙鍵 → **烯 (alkene)**
- 含 ─COO─ 結構（羰基 + 單鍵氧接烷基）→ **酯 (ester)**

此化合物**同時屬於烯類與酯類**（一個分子可以同時含有多個官能基，這在後續章節命名法會頻繁遇到）。

**(d)** $\ce{CH3CONH2}$

**詳解**：
- 羰基直接連接 $\ce{NH2}$ → **醯胺 (amide)**（不要誤判為「羧酸 + 胺」的混合物，醯胺是獨立的官能基類別，性質與兩者都不同）

**(k)** 維生素 E 結構（複雜天然物，含苯并哌喃環系統與長碳鏈）

**詳解**：
- 環上的 ─OH → **酚型醇 (phenolic alcohol)**
- 環中的氧橋 → **環醚 (cyclic ether)**
- 長碳鏈部分 → **烷基側鏈**，不構成官能基，只是疏水尾巴

> **官能基辨識答題技巧**：複雜天然物結構題不需要害怕，**逐一掃描分子上每個非碳氫的原子（O, N, 鹵素等）**，判斷該原子周圍的鍵結型態符合上表中哪一種官能基通式，再一一標記即可，不需要理解整個分子的功能。

---

# Part IV 重點回顧總表

| 主題 | 核心規則 |
|---|---|
| 曲箭頭 | 起點＝電子對（孤對或鍵），終點＝新鍵或孤對；一支箭頭＝一對電子 |
| 判斷反應類型 | 有質子轉移 → Brønsted–Lowry；無質子轉移但有新鍵形成 → 純 Lewis |
| 碳氫化合物 | 無官能基 → 疏水、不活潑；烯/炔差異在雙鍵可否形成順反異構 |
| 含氧官能基 | 醇/羧酸有 O─H 可自我氫鍵；醚/酮/醛/酯無 O─H 但可接受氫鍵 |
| 含氮官能基 | 胺鹼性正常；醯胺因共振鹼性大減（呼應 Part III）|

---

## 自我練習區（附提示）

**Problem 2-24**：判斷 $\ce{CH3CH2CH2CH2CH2CH2CH3}$（多重支鏈的碳氫化合物，含環、雙鍵、三鍵等綜合結構）分別屬於哪些碳氫化合物分類。
> 提示：一個分子可能同時符合多個分類（如「環烯」同時是 cycloalkane 家族與 alkene 家族），仔細檢查是否成環、是否有多重鍵。

**Problem 2-26(h)(i)**：判斷含五員環、六員環氧雜環（呋喃 furan、四氫呋喃 THF 型結構）的官能基分類。
> 提示：環醚 (cyclic ether) 的判斷依據跟開鏈醚相同，只看氧是否連接兩個碳、且沒有 O─H。

**Problem 2-52**：$\ce{NH4+}$、$\ce{CH3CH2Br}$、$\ce{BH3}$ 分別作為親電子基，與強親核基乙氧基負離子 ($\ce{Na+\ ^-OCH2CH3}$) 反應時，畫出曲箭頭。
> 提示：先判斷每個親電子基「缺電子」的原因分別是什麼（$\ce{NH4+}$ 是帶正電、$\ce{CH3CH2Br}$ 是良好離去基、$\ce{BH3}$ 是價電子不足八隅體），再據此決定箭頭終點。

---

# 全章（Part I ~ IV）總複習心智圖

```
Chapter 2 全章架構
│
├─ Part I：分子的物理性質（2-1~2-3）
│   └─ 極性 → 分子間作用力 → 沸點/溶解度預測
│
├─ Part II：酸鹼理論基礎（2-4~2-8）
│   └─ Arrhenius → Brønsted-Lowry → Ka/Kb 推導 → 平衡方向 → 拉平效應
│
├─ Part III：酸性強弱五因素（2-9~2-13）
│   └─ 陰電性/大小 → 誘導 → 混成 → 共振（最重要）→ Lewis酸鹼
│
└─ Part IV：反應語言與官能基分類（2-14~2-17）
    └─ 曲箭頭表示法 → 碳氫化合物 → 含氧官能基 → 含氮官能基
```

**四份講義的邏輯串聯**：Part I 的分子極性觀念，是 Part II/III 判斷酸鹼強度與共軛鹼穩定度的基礎；Part III 建立的「共振/誘導/混成」分析工具，會在後續每一章反覆使用；Part IV 的曲箭頭表示法，則是從 Chapter 3 開始描述所有有機反應機構的標準語言。

---

至此 Chapter 2 全部四份講義已完成。若你在複習過程中對特定觀念或例題有疑問，或需要額外的練習題詳解，都可以隨時提出。
