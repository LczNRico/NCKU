# 第 4 章　化學反應的研究（The Study of Chemical Reactions）
## Part 1：自由基鹵化與連鎖反應（Free-Radical Halogenation & Chain Reactions）
### 範圍：課本 4-1 ～ 4-3

---

## 目錄

1. 研究一個反應的三個面向
2. 甲烷的氯化反應與實驗事實
3. 自由基（free radical）的結構與表示法
4. 連鎖反應（chain reaction）：起始、傳遞、終止
5. 公式與原理推導
   - 5-1 光子能量與斷鍵所需波長
   - 5-2 量子產率與鏈長
   - 5-3 為何終止步驟在反應初期很少發生
   - 5-4 淨反應 = 傳遞步驟的總和
6. 例題詳解（課文 Problem）
7. 比較與整理表
8. 自我練習（附提示）
9. 章末挑戰題精選詳解（4-44、4-48、4-51）

---

## 1. 研究一個反應的三個面向

寫出「反應物 → 產物」的全反應式（overall equation）只是第一步。要真正理解一個反應，需要回答三個問題：

| 面向 | 英文 | 回答的問題 | 本章對應章節 |
|---|---|---|---|
| **反應機構** | mechanism | 哪些鍵斷裂、哪些鍵生成？順序為何？有哪些中間體？ | 4-2、4-3 |
| **熱力學** | thermodynamics | 平衡時偏向反應物還是產物？（產物是否比較穩定） | 4-4～4-7 |
| **動力學** | kinetics | 反應多快？改變條件（濃度、溫度）時速率如何改變？ | 4-8～4-11 |

> **觀念重點**：熱力學決定反應「能不能」往右進行（平衡位置），動力學決定反應「多快」進行。熱力學有利的反應不一定真的會發生。例如甲烷與氯氣混合後，若保持低溫、避光，反應就不會發生，雖然其平衡常數高達 $1.1\times10^{19}$。

**為什麼從烷類（alkane）開始？**
- 烷類的結構與性質在前幾章已學過。
- 自由基鹵化（free-radical halogenation）可以在氣相（gas phase）進行，不需要溶劑（solvent），因此不受溶劑效應干擾，機構相對單純。
- 實驗室中很少以烷類作為合成起始物，因為烷類太不活潑。但它非常適合作為學習「研究反應的工具」的範例。

> 補充：實驗室中較常見的是離子反應（ionic reaction），將在第 6、7 章介紹。自由基反應則在自然界（大氣化學、生物體內氧化）非常普遍。

---

## 2. 甲烷的氯化反應（Chlorination of Methane）

### 2-1 反應式

$$
\mathrm{CH_4 + Cl_2 \xrightarrow{\;h\nu\ \text{或}\ \Delta\;} CH_3Cl + HCl}
$$

- 甲烷（methane）＋ 氯（chlorine）→ 氯甲烷（chloromethane，俗名 methyl chloride）＋ 氯化氫（hydrogen chloride）
- 這是一個**取代反應（substitution reaction）**：Cl 原子取代了 CH₄ 上的一個 H 原子，被取代下來的 H 則成為副產物（by-product）HCl 的一部分。氯**不是加成（addition）**到甲烷上。
- 符號說明：$h\nu$ 代表光（light），$\Delta$ 代表加熱（heat）。

### 2-2 反應會繼續進行：多氯化產物

每一步都需要光或熱：

$$
\mathrm{CH_4 \xrightarrow{Cl_2} CH_3Cl \xrightarrow{Cl_2} CH_2Cl_2 \xrightarrow{Cl_2} CHCl_3 \xrightarrow{Cl_2} CCl_4}
$$

| 化學式 | 中文名稱 | 英文名稱 |
|---|---|---|
| CH₃Cl | 氯甲烷 | chloromethane（methyl chloride） |
| CH₂Cl₂ | 二氯甲烷 | dichloromethane（methylene chloride） |
| CHCl₃ | 三氯甲烷（氯仿） | trichloromethane（chloroform） |
| CCl₄ | 四氯化碳（四氯甲烷） | carbon tetrachloride（tetrachloromethane） |

產物組成取決於加入的氯量以及反應條件，因此通常得到**混合物（mixture）**。

### 2-3 三項關鍵實驗事實 → 機構必須能解釋它們

| # | 實驗事實 | 推論 |
|---|---|---|
| 1 | 室溫、無光時**不反應**；照光或加熱後才開始 | 需要外加能量來**起始（initiate）**反應 |
| 2 | 最有效的光是**藍光**，而藍光會被 Cl₂ 強烈吸收（CH₄ 不吸收） | 被光「活化」的是 **Cl₂ 分子**，不是 CH₄ |
| 3 | **量子產率（quantum yield）很高**：每吸收一個光子（photon）可生成數百個產物分子 | 一次吸光就能引發**許多次**反應 → 必定是**連鎖反應（chain reaction）** |

> **解題技巧**：看到「量子產率 ≫ 1」，就要想到連鎖反應。若每個光子只能促成一次反應，量子產率最多為 1。

---

## 3. 自由基（Free Radical）

### 3-1 定義

- **自由基（free radical，或簡稱 radical）**：具有**未成對電子（unpaired electron）**的物種。
- 這個未成對電子稱為**奇數電子（odd electron）**或**自由基電子（radical electron）**，結構式中以一個單點「·」表示。
- 自由基是**缺電子（electron-deficient）**的物種，因為它的價殼層沒有滿足**八隅體（octet）**。因此它傾向與其他原子的一個電子配對形成鍵。
- 自由基屬於**反應中間體（reactive intermediate）**：壽命極短、濃度永遠很低，因為它一生成就立刻反應掉。

### 3-2 常見自由基的路易斯結構（Lewis structure）

| 名稱 | 英文 | 簡式 | 中心原子價電子數 |
|---|---|---|---|
| 氯原子（氯自由基） | chlorine atom | Cl· | 7 |
| 溴原子 | bromine atom | Br· | 7 |
| 羥自由基 | hydroxyl radical | HO· | O 周圍 7 |
| 甲基自由基 | methyl radical | ·CH₃ | C 周圍 7 |
| 乙基自由基 | ethyl radical | CH₃CH₂· | C 周圍 7 |

以甲基自由基為例：

```
      H
      |
  H — C ·        C：3 個 C–H 鍵（6 個電子）＋ 1 個奇數電子 ＝ 7 個價電子
      |
      H
```

### 3-3 箭頭的畫法：全箭頭 vs. 半箭頭

| 箭頭 | 英文 | 代表意義 | 用在 |
|---|---|---|---|
| 彎曲全箭頭 ↷（雙鉤） | curved arrow | **一對電子**的移動 | 離子反應、異裂（heterolytic cleavage） |
| 魚鉤半箭頭 ⇀（單鉤） | fishhook (half-) arrow | **單一電子**的移動 | 自由基反應、均裂（homolytic cleavage） |

Cl–Cl 的均裂：鍵上的兩個電子**各往一邊走一個**，所以要畫**兩支**半箭頭，從鍵的中央分別指向兩個 Cl 原子。

```
        ⇀   ⇀
   Cl ——— Cl   ──hν──►   Cl·  +  ·Cl
  （鍵中兩個電子各分給一個 Cl）
```

> **常見錯誤**：只畫一支半箭頭，或在自由基反應中使用全箭頭。每形成或斷裂一個「由兩個單電子組成」的鍵，都需要兩支半箭頭。

---

## 4. 自由基連鎖反應（Free-Radical Chain Reaction）

連鎖反應由三類步驟組成：

| 步驟 | 英文 | 定義 | 自由基數目變化 |
|---|---|---|---|
| **起始步驟** | initiation step | 產生反應中間體（自由基） | **增加**（0 → 2） |
| **傳遞步驟** | propagation step | 一個自由基與穩定分子反應，生成產物以及**另一個自由基**，使反應延續 | **不變**（1 → 1） |
| **終止步驟** | termination step | 消耗自由基但**不產生新的自由基**，使反應減慢或停止 | **減少**（2 → 0 或 1 → 0） |

> 課本的 PROBLEM-SOLVING HINT：起始步驟通常產生新的自由基；傳遞步驟通常是「自由基 + 反應物 → 產物 + 另一個自由基」；終止步驟通常使自由基數目減少。用「自由基數目的變化」判斷步驟類型最可靠。

### 4-1 起始步驟（Initiation）：產生自由基

$$
\mathrm{Cl{-}Cl} + h\nu \longrightarrow 2\,\mathrm{Cl\cdot}
\qquad (\text{需 } 242\ \mathrm{kJ/mol} = 58\ \mathrm{kcal/mol})
$$

- 藍光的能量約 250 kJ/einstein（1 einstein ＝ 1 莫耳光子，mole of photons），恰好足以打斷 Cl–Cl 鍵（推導見 5-1 節）。
- 為什麼不是打斷 C–H 鍵？因為 CH₄ 不吸收藍光，而且 C–H 鍵（439 kJ/mol）遠比 Cl–Cl 鍵（242 kJ/mol）強。

### 4-2 傳遞步驟（Propagation）：生成產物並再生自由基

**第一傳遞步驟**：氯原子**奪取（abstract）**甲烷的一個氫原子

```
       H                            H
       |                            |
   H — C — H  +  ·Cl   ───►     H — C ·   +   H — Cl
       |                            |
       H                            H
    甲烷                        甲基自由基      氯化氫
  (methane)                  (methyl radical)
```

電子流向（半箭頭）：C–H 鍵的兩個電子中，一個留在 C 上（成為甲基自由基的奇數電子），另一個與 Cl· 的奇數電子配對形成 H–Cl 鍵。

**第二傳遞步驟**：甲基自由基與 Cl₂ 反應

```
       H                                  H
       |                                  |
   H — C ·  +  Cl — Cl    ───►        H — C — Cl   +   ·Cl
       |                                  |
       H                                  H
  甲基自由基      氯分子                氯甲烷          氯原子
```

電子流向：·CH₃ 的奇數電子與 Cl–Cl 鍵中的一個電子配對形成 C–Cl 鍵；Cl–Cl 鍵的另一個電子留給另一個 Cl，形成新的 Cl·。

**關鍵**：第二步產生的 Cl· 又回到第一步，與另一分子 CH₄ 反應。如此循環，直到反應物用完或自由基被消耗為止。

```
          ┌──────────────────────────────────────┐
          ▼                                      │
   Cl· + CH₄ ──► ·CH₃ + HCl                      │
                  │                              │
                  ▼                              │
          ·CH₃ + Cl₂ ──► CH₃Cl + Cl· ────────────┘
                                （連鎖延續，continues the chain）
```

> **傳遞步驟的特徵（對應課本 KEY MECHANISM 4-1 的 QUESTION）**：
> 1. 反應物中有一個自由基，產物中也有一個自由基（自由基數目守恆）。
> 2. 一個步驟消耗的自由基，恰好是另一個步驟產生的，兩步形成循環。
> 3. 所有傳遞步驟相加 ＝ 淨反應（overall reaction）。

### 4-3 終止步驟（Termination）：消滅自由基

任何兩個自由基的結合（combination），或自由基與器壁（wall）、雜質（contaminant）的反應，都是終止步驟：

| 終止反應 | 產物 | 說明 |
|---|---|---|
| ·CH₃ + ·Cl → CH₃Cl | 氯甲烷 | 雖然生成產物，但消耗了兩個自由基，連鎖因此中斷 |
| Cl· + ·Cl → Cl₂ | 氯分子 | 起始步驟的逆反應 |
| ·CH₃ + ·CH₃ → CH₃–CH₃ | 乙烷（ethane） | 可解釋產物中出現少量乙烷 |
| ·CH₃ + 器壁 → CH₃–器壁 | — | 自由基被器壁吸附 |
| Cl· + 器壁 → Cl–器壁 | — | 同上 |

> **觀念釐清**：·CH₃ + ·Cl → CH₃Cl 雖然也生成產物，但它貢獻的產量**極小**。絕大多數 CH₃Cl 是由第二傳遞步驟生成的。

### 4-4 應用：自由基抑制劑（Free-Radical Inhibitor）

某些食品、添加物、營養補充品含有能與自由基反應、使連鎖終止的化合物，稱為**抗氧化劑（antioxidant）**，可防止食品被空氣氧化（air-oxidation）。詳細機構在 Part 5（4-15 節）介紹。

---

## 5. 公式與原理推導

### 5-1 光子能量與斷鍵所需的最長波長

單一光子的能量：

$$
E = h\nu = \frac{hc}{\lambda}
$$

- $h$ ＝ 普朗克常數（Planck's constant）＝ $6.626\times10^{-34}\ \mathrm{J\cdot s}$
- $c$ ＝ 光速（speed of light）＝ $2.998\times10^{8}\ \mathrm{m/s}$
- $\nu$ ＝ 頻率（frequency）；$\lambda$ ＝ 波長（wavelength）

**1 莫耳光子（1 einstein）的能量**：乘上亞佛加厥數（Avogadro's number）$N_A = 6.022\times10^{23}\ \mathrm{mol^{-1}}$：

$$
E_{\text{mol}} = \frac{N_A\,h\,c}{\lambda}
$$

先算常數項：

$$
N_A h c = (6.022\times10^{23})(6.626\times10^{-34})(2.998\times10^{8})
= 0.1196\ \mathrm{J\cdot m/mol}
$$

$$
\boxed{E_{\text{mol}}\ (\mathrm{kJ/mol}) = \frac{1.196\times10^{5}}{\lambda\ (\mathrm{nm})}}
$$

**(a) 藍光（λ ≈ 480 nm）的能量**

$$
E = \frac{1.196\times10^{5}}{480} \approx 249\ \mathrm{kJ/mol}
$$

與課本「約 250 kJ/einstein」相符，略大於 Cl–Cl 的 BDE（242 kJ/mol），所以藍光恰好能打斷 Cl–Cl 鍵。

**(b) 打斷 Cl–Cl 鍵的最長波長**

$$
\lambda_{\max} = \frac{1.196\times10^{5}}{242} \approx 494\ \mathrm{nm}\quad(\text{藍綠光})
$$

波長越短，能量越大。所以**波長 ≤ 494 nm** 的光才能打斷 Cl–Cl 鍵。

**(c) 延伸比較**

| 鍵 | BDE (kJ/mol) | 最長可用波長 λ_max | 光區 |
|---|---|---|---|
| I–I | 149 | ≈ 803 nm | 近紅外／紅光 |
| Br–Br | 190 | ≈ 629 nm | 橙紅光 |
| Cl–Cl | 242 | ≈ 494 nm | 藍綠光 |
| CH₃–H | 439 | ≈ 272 nm | 紫外光（UV） |

> **意義**：可見光就能打斷 X–X 鍵，卻不足以打斷 C–H 鍵。這就是起始步驟必然是 X₂ 均裂，而不是 CH₄ 斷裂的原因之一（另一個原因是 CH₄ 根本不吸收可見光）。

---

### 5-2 量子產率（Quantum Yield）與鏈長（Chain Length）

$$
\Phi\ (\text{量子產率}) = \frac{\text{生成的產物分子數}}{\text{吸收的光子數}}
$$

- 若沒有連鎖（每吸收一個光子只發生一次反應），$\Phi \le 1$。
- 一個光子使一個 Cl₂ 均裂，產生 **2 個** Cl·，各自啟動一條鏈。若每條鏈平均循環 $n$ 次（每次循環生成 1 個 CH₃Cl），則：

$$
\Phi \approx 2n
$$

- $n$ 稱為**鏈長（chain length）**：一個起始自由基在被終止前平均進行了多少次傳遞循環。

實驗測得 Φ 可達數百甚至數千，因此鏈長很長。這正是支持連鎖機構的關鍵證據。

---

### 5-3 為何終止步驟在反應初期很少發生？（速率比較）

設自由基濃度為 $[\mathrm{R\cdot}]$，反應物（如 CH₄）濃度為 $[\mathrm{M}]$。

- 傳遞步驟速率（自由基 + 分子）：$\ r_p = k_p[\mathrm{R\cdot}][\mathrm{M}]$
- 終止步驟速率（自由基 + 自由基）：$\ r_t = k_t[\mathrm{R\cdot}]^2$

兩者比值：

$$
\frac{r_t}{r_p} = \frac{k_t}{k_p}\cdot\frac{[\mathrm{R\cdot}]}{[\mathrm{M}]}
$$

- 反應進行中，$[\mathrm{R\cdot}]$ 極低（自由基一生成就被消耗），$[\mathrm{M}]$ 相對很大，所以 $\dfrac{[\mathrm{R\cdot}]}{[\mathrm{M}]} \ll 1$，終止相對罕見，連鎖得以延續。
- 反應**接近尾聲**時，$[\mathrm{M}]$ 大幅下降，比值變大，自由基彼此相遇（或撞上器壁）的機率上升，連鎖迅速停止。

> 這個推導從定量角度說明了課本的敘述：自由基較容易遇到彼此，而不是遇到反應物，只會發生在反應物所剩不多時。

---

### 5-4 淨反應 ＝ 傳遞步驟的總和

$$
\begin{aligned}
\text{(1)}\quad & \mathrm{Cl\cdot} + \mathrm{CH_4} \longrightarrow \mathrm{\cdot CH_3} + \mathrm{HCl}\\
\text{(2)}\quad & \mathrm{\cdot CH_3} + \mathrm{Cl_2} \longrightarrow \mathrm{CH_3Cl} + \mathrm{Cl\cdot}\\ \hline
\text{淨反應}\quad & \mathrm{CH_4} + \mathrm{Cl_2} \longrightarrow \mathrm{CH_3Cl} + \mathrm{HCl}
\end{aligned}
$$

Cl· 與 ·CH₃ 在兩式左右兩邊各出現一次，**互相抵消**，所以它們是中間體（intermediate），不會出現在淨反應中。

> **檢查機構是否合理的方法**：把你寫的傳遞步驟相加，必須恰好得到淨反應；所有自由基都要能抵消。起始步驟和終止步驟**不列入**這個加總。

---

## 6. 例題詳解（課文 Problem）

### 例題 1（Problem 4-1）自由基的路易斯結構

**題目**：畫出下列自由基的路易斯結構。
(a) 乙基自由基（ethyl radical）CH₃–·CH₂　(b) 三級丁基自由基（*tert*-butyl radical）(CH₃)₃C·
(c) 異丙基自由基（isopropyl radical，2-propyl radical）　(d) 碘原子（iodine atom）

**詳解**：

```
(a)    H   H                (b)        CH₃
       |   |                           |
   H — C — C ·                  H₃C — C ·
       |   |                           |
       H   H                           CH₃

(c)    H       H            (d)    ‥
       |       |                  : I ·
   H — C — C — C — H               ‥
       |   ·   |              （7 個價電子：3 對孤對電子 + 1 個奇數電子）
       H   H   H
     （中央碳帶有一個 H 與奇數電子）
```

**要點**：帶奇數電子的碳只有 3 個鍵，外加 1 個未成對電子，價殼層共 7 個電子。

---

### 例題 2（Problem 4-2）多氯化產物與產物比例的控制

**題目**：
(a) 寫出由氯甲烷生成二氯甲烷（CH₂Cl₂）的傳遞步驟。
(b) 解釋為什麼自由基鹵化通常得到產物混合物。
(c) 工廠如何控制甲烷與氯的比例，以提高 CCl₄ 的產量？提高 CH₃Cl 的產量？

**詳解**：

**(a)** 機構與甲烷相同，只是被奪取氫的分子換成 CH₃Cl：

$$
\begin{aligned}
&\mathrm{Cl\cdot + H{-}CH_2Cl \longrightarrow \cdot CH_2Cl + HCl}\\
&\mathrm{\cdot CH_2Cl + Cl{-}Cl \longrightarrow CH_2Cl_2 + Cl\cdot}
\end{aligned}
$$

（·CH₂Cl 稱為氯甲基自由基，chloromethyl radical）

**(b)** 產物 CH₃Cl 仍然具有 C–H 鍵，而且其 C–H 鍵的反應性與 CH₄ 相當（甚至略高）。Cl· 無法「辨認」哪個是原料、哪個是產物，只要撞上帶有 C–H 的分子就可能奪取氫。隨著 CH₃Cl 濃度增加，它和 CH₄ 會競爭 Cl·，因此產生 CH₂Cl₂、CHCl₃、CCl₄ 的混合物。

**(c)**
- **要 CH₃Cl**：使用**大量過量的甲烷**（CH₄ : Cl₂ ≫ 1）。這樣 Cl· 撞到的幾乎都是 CH₄，而不是少量的 CH₃Cl。未反應的 CH₄ 可以回收再用。
- **要 CCl₄**：使用**過量的氯**，並延長反應時間，讓所有 C–H 都被取代。

---

### 例題 3（Problem 4-3）以實驗證據否定錯誤機構

**題目**：以下兩個甲烷氯化機構都是錯的，請用實驗證據說明。

(a)
$$
\mathrm{Cl_2} + h\nu \to \mathrm{Cl_2^*}\ (\text{「活化」的 Cl}_2)\qquad
\mathrm{Cl_2^* + CH_4 \to HCl + CH_3Cl}
$$

(b)
$$
\mathrm{CH_4} + h\nu \to \mathrm{\cdot CH_3 + H\cdot}\qquad
\mathrm{\cdot CH_3 + Cl_2 \to CH_3Cl + Cl\cdot}\qquad
\mathrm{Cl\cdot + H\cdot \to HCl}
$$

**詳解**：

**(a)** 每吸收 1 個光子只產生 1 個 Cl₂*，每個 Cl₂* 只生成 1 個 CH₃Cl，所以量子產率 Φ ≤ 1。這與實驗觀察到的**高量子產率**（每個光子生成數百個產物）矛盾。此機構**不是連鎖反應**。

**(b)** 有兩個問題：
1. 起始步驟要求 **CH₄ 吸收光**，但實驗顯示最有效的是藍光，而藍光只被 **Cl₂** 吸收，CH₄ 不吸收。何況藍光能量（約 250 kJ/mol）也不足以打斷 C–H 鍵（439 kJ/mol）。
2. 最後一步 Cl· + H· → HCl 是兩個自由基的結合，屬於**終止步驟**。每個光子只換到 1 個 CH₃Cl，同樣無法解釋高量子產率。

> **解題心法**：遇到「用實驗證據駁斥機構」的題目，逐條對照三項實驗事實：①需光／熱 ②有效波長被誰吸收 ③量子產率。

---

### 例題 4（Problem 4-4）己烷與環己烷的氯化

**題目**：己烷（hexane）的自由基氯化反應得到的 1-氯己烷（1-chlorohexane）產率很差，但環己烷（cyclohexane）可以高產率轉變為氯環己烷（chlorocyclohexane）。
(a) 如何解釋這個差異？
(b) 合成氯環己烷時，環己烷與氯的比例應如何選擇？

**詳解**：

**(a)** 關鍵在於分子中「**等價氫（equivalent hydrogen）**」的種類。

- **己烷** CH₃CH₂CH₂CH₂CH₂CH₃ 有三種不等價的氫：C1（及 C6）、C2（及 C5）、C3（及 C4）。單氯化可得 **1-、2-、3-氯己烷三種異構物（isomer）**。而且二級氫比一級氫更容易被奪取，所以 1-氯己烷反而是少量產物。
- **環己烷** 的 12 個氫**完全等價**。不論奪取哪一個，都得到**同一種**產物：氯環己烷。

**(b)** 使用**大量過量的環己烷**（環己烷 : Cl₂ ≫ 1），以抑制二氯化（dichlorination）。未反應的環己烷可蒸餾回收。

> **延伸原則**：自由基鹵化只有在「分子中的氫全部等價」或「某一種氫的反應性遠高於其他氫」時，才適合用於合成。後者會在 Part 4（溴化的高選擇性）中討論。

---

## 7. 比較與整理表

### 表 7-1　連鎖反應三步驟速查

| | 起始 | 傳遞 | 終止 |
|---|---|---|---|
| 英文 | initiation | propagation | termination |
| 典型形式 | X₂ → 2X· | X· + R–H → R· + HX；R· + X₂ → R–X + X· | R· + X· → R–X；X· + X· → X₂；R· + R· → R–R |
| 自由基數目 | 0 → 2 | 1 → 1 | 2 → 0 |
| 需要光／熱？ | 是 | 否 | 否 |
| 對產量的貢獻 | 無（只負責起頭） | **主要** | 極少 |
| 是否列入淨反應加總 | 否 | **是** | 否 |

### 表 7-2　起始劑（initiator）的共通特徵

| 起始劑 | 易斷裂的鍵 | BDE (kJ/mol) |
|---|---|---|
| Cl₂ | Cl–Cl | 240～242 |
| Br₂ | Br–Br | 190 |
| 過氧化氫（hydrogen peroxide）HOOH | HO–OH | 213 |
| 一般過氧化物（peroxide）ROOR | RO–OR | 約 150～210 |

共通點：**弱鍵（weak bond）**，所以容易以光或熱進行均裂。

### 表 7-3　甲烷氯化：實驗事實 ↔ 機構解釋

| 實驗事實 | 機構如何解釋 |
|---|---|
| 無光無熱不反應 | 必須先打斷 Cl–Cl 鍵，產生 Cl· |
| 藍光最有效 | 藍光被 Cl₂ 吸收，能量約 250 kJ/mol，剛好足以打斷 Cl–Cl（242 kJ/mol） |
| 高量子產率 | 傳遞步驟循環再生 Cl·，一次起始可生成數百個產物 |
| 產物為多氯化混合物 | CH₃Cl 本身也有 C–H 鍵，可繼續被 Cl· 奪氫 |
| 產物中有少量乙烷 | 終止步驟 ·CH₃ + ·CH₃ → C₂H₆ |

---

## 8. 自我練習（附提示）

**練習 1**　判斷下列各步驟屬於起始、傳遞或終止：
(a) Br· + CH₃CH₃ → CH₃CH₂· + HBr
(b) HO–OH → 2 HO·
(c) CH₃CH₂· + Br· → CH₃CH₂Br
(d) CH₃CH₂· + Br₂ → CH₃CH₂Br + Br·

> 💡 提示：數一數反應前後的自由基數目。

**練習 2**　寫出乙烷（ethane）自由基氯化生成氯乙烷（chloroethane）的完整機構（起始、兩個傳遞步驟、至少三個終止步驟），並驗證傳遞步驟相加等於淨反應。

> 💡 提示：把甲烷機構中的 ·CH₃ 換成 CH₃CH₂·（ethyl radical）。終止步驟中別忘了 CH₃CH₂· + ·CH₂CH₃ → 丁烷（butane）。

**練習 3**　I–I 的 BDE 為 149 kJ/mol。計算能使 I₂ 均裂的光的最長波長。

> 💡 提示：$\lambda(\mathrm{nm}) = 1.196\times10^5 / E(\mathrm{kJ/mol})$。

**練習 4**　某光化學氯化反應中，吸收 $1.0\times10^{-6}$ mol 光子，生成 $4.0\times10^{-3}$ mol CH₃Cl。計算量子產率及平均鏈長。

> 💡 提示：每個光子產生 2 個 Cl·，所以 Φ ≈ 2n。

**練習 5**　新戊烷（neopentane，C(CH₃)₄）與環戊烷（cyclopentane），哪一個適合以自由基氯化製備單氯化物？說明理由。

> 💡 提示：數一數各分子有幾種等價氫。

<details>
<summary>練習參考答案（點開）</summary>

1. (a) 傳遞　(b) 起始　(c) 終止　(d) 傳遞
2. 起始：Cl₂ → 2Cl·；傳遞：Cl· + CH₃CH₃ → CH₃CH₂· + HCl，CH₃CH₂· + Cl₂ → CH₃CH₂Cl + Cl·；終止：CH₃CH₂· + Cl· → CH₃CH₂Cl，2Cl· → Cl₂，2CH₃CH₂· → CH₃CH₂CH₂CH₃。傳遞兩式相加得 CH₃CH₃ + Cl₂ → CH₃CH₂Cl + HCl。
3. λ = 1.196×10⁵ / 149 ≈ 803 nm。
4. Φ = 4.0×10⁻³ / 1.0×10⁻⁶ = 4000；n ≈ Φ/2 = 2000。
5. 兩者都適合。新戊烷的 12 個 H 全為等價的一級氫，只得到 1-氯-2,2-二甲基丙烷（1-chloro-2,2-dimethylpropane）；環戊烷的 10 個 H 全部等價，只得到氯環戊烷（chlorocyclopentane）。實際操作都需使用過量烷類。
</details>

---

## 9. 章末挑戰題精選詳解

> 以下 ΔH° 計算會用到 BDE 表（Table 4-2）。BDE 計算的正式推導在 Part 2，這裡先直接套用規則：**斷鍵取正值、成鍵取負值**。

---

### ★ 挑戰題 1（課本 4-44）環丁烷的光氯化機構

**題目**：寫出環丁烷（cyclobutane）與氯在光照下生成氯環丁烷（chlorocyclobutane）的機構，並標示起始步驟與傳遞步驟。

$$
\text{環丁烷} + \mathrm{Cl_2} \xrightarrow{h\nu} \text{氯環丁烷} + \mathrm{HCl}
$$

**詳解**：

依課本的**四步驟解題策略**：

**Step 1　起始步驟：打斷起始劑的弱鍵**

$$
\mathrm{Cl{-}Cl} \xrightarrow{h\nu} 2\,\mathrm{Cl\cdot}
$$

**Step 2　第一傳遞步驟：起始劑自由基與原料反應（奪氫）**

環丁烷的 8 個 H 全部等價，而且都是二級氫（secondary hydrogen）。畫出反應位置的完整鍵結：

```
      H   H                         H   H
      |   |                         |   |
  H — C — C — H                 H — C — C — H
      |   |       + ·Cl  ───►       |   |        +  H–Cl
  H — C — C — H                 H — C — C ·
      |   |                         |   |
      H   H                         H   H
     環丁烷                     環丁基自由基（cyclobutyl radical）
```

**Step 3　第二傳遞步驟：原料自由基與另一分子 Cl₂ 反應，生成產物並再生 Cl·**

$$
\text{環丁基自由基} + \mathrm{Cl{-}Cl} \longrightarrow \text{氯環丁烷} + \mathrm{Cl\cdot}
$$

（Cl· 回到 Step 2 繼續連鎖）

**Step 4　終止步驟（舉例）**

$$
\begin{aligned}
&\mathrm{Cl\cdot + Cl\cdot \to Cl_2}\\
&\text{環丁基}\cdot + \mathrm{Cl\cdot} \to \text{氯環丁烷}\\
&2\ \text{環丁基}\cdot \to \text{聯環丁基（bicyclobutyl，C}_8\text{H}_{14}\text{）}
\end{aligned}
$$

**能量檢驗**（以 Table 4-2 的二級碳數值近似）：

| 步驟 | 斷鍵 | 成鍵 | ΔH° |
|---|---|---|---|
| 傳遞 1 | 2° C–H ＋413 | H–Cl −432 | **−19 kJ/mol** |
| 傳遞 2 | Cl–Cl ＋240 | 2° C–Cl −356 | **−116 kJ/mol** |
| 淨反應 | | | **−135 kJ/mol** |

兩個傳遞步驟都放熱，所以連鎖能快速進行。

> ⚠️ **常見錯誤**：用線角式（line-angle formula）畫反應位置，容易把自由基畫在錯誤的碳上或弄丟氫。課本特別提醒：**反應位置的碳要把所有鍵與取代基畫出來**。

---

### ★ 挑戰題 2（課本 4-48）1 : 1 的甲烷與氯為何仍得混合物？

**題目**：將恰好 1 mol 甲烷與 1 mol 氯混合並照光。產物中含有相當量的二、三、四氯甲烷，以及未反應的甲烷。
(a) 解釋為什麼化學計量相等的反應物也會得到混合物，並提出由氯甲烷生成這些化合物的機構。
(b) 若要使甲烷高轉化率地變成 CH₃Cl，應如何進行？若要變成 CCl₄ 呢？

**詳解**：

**(a) 為什麼會有混合物？**

1. 反應剛開始時，Cl· 只遇得到 CH₄，所以主要生成 CH₃Cl。
2. 隨著反應進行，[CH₃Cl] 逐漸上升，[CH₄] 逐漸下降。CH₃Cl 也有 C–H 鍵，而且 Cl 取代基使相鄰的 C–H 鍵略弱、自由基略穩定，所以 CH₃Cl 的 C–H 反應性**不低於** CH₄。
3. 因此 Cl₂ 會被 CH₃Cl（以及後來的 CH₂Cl₂、CHCl₃）「分走」。Cl₂ 用完時，還有部分 CH₄ 沒反應到，而一些分子卻已被多次氯化。

**統計直覺**：這是「**連續競爭反應（consecutive competitive reaction）**」。只要產物與原料的反應性相近，1 : 1 的配料必然得到分佈很廣的混合物。

**機構**（每一種產物都是同一套傳遞步驟重複進行）：

起始：
$$
\mathrm{Cl_2} \xrightarrow{h\nu} 2\,\mathrm{Cl\cdot}
$$

生成 CH₂Cl₂：
$$
\begin{aligned}
&\mathrm{Cl\cdot + CH_3Cl \to \cdot CH_2Cl + HCl}\\
&\mathrm{\cdot CH_2Cl + Cl_2 \to CH_2Cl_2 + Cl\cdot}
\end{aligned}
$$

生成 CHCl₃：
$$
\begin{aligned}
&\mathrm{Cl\cdot + CH_2Cl_2 \to \cdot CHCl_2 + HCl}\\
&\mathrm{\cdot CHCl_2 + Cl_2 \to CHCl_3 + Cl\cdot}
\end{aligned}
$$

生成 CCl₄：
$$
\begin{aligned}
&\mathrm{Cl\cdot + CHCl_3 \to \cdot CCl_3 + HCl}\\
&\mathrm{\cdot CCl_3 + Cl_2 \to CCl_4 + Cl\cdot}
\end{aligned}
$$

| 中間體 | 中文 | 英文 |
|---|---|---|
| ·CH₂Cl | 氯甲基自由基 | chloromethyl radical |
| ·CHCl₂ | 二氯甲基自由基 | dichloromethyl radical |
| ·CCl₃ | 三氯甲基自由基 | trichloromethyl radical |

**(b) 控制條件**

| 目標產物 | 做法 | 原理 |
|---|---|---|
| **CH₃Cl** | **CH₄ 大量過量**（例如 CH₄ : Cl₂ ≈ 10 : 1），控制低轉化率，未反應的 CH₄ 回收循環使用 | 讓 [CH₄] ≫ [CH₃Cl]，Cl· 幾乎只撞到 CH₄ |
| **CCl₄** | **Cl₂ 大量過量**（莫耳比 > 4 : 1），延長照光時間 | 讓每一個 C–H 最終都被取代，連鎖一路推到底 |

> **考點提醒**：「1 : 1 反應物就會得到 1 : 1 產物」是錯誤直覺。產物分佈由**競爭反應速率**決定，而不是由化學計量決定。

---

### ★ 挑戰題 3（課本 4-51）以過氧化氫為起始劑的環戊烷氯化

**題目**：過氧化物（peroxide）常用作自由基反應的起始劑，因為 O–O 鍵容易均裂。例如 H–O–O–H 中 O–O 鍵的 BDE 只有 213 kJ/mol（51 kcal/mol）。提出過氧化氫（hydrogen peroxide）起始的環戊烷（cyclopentane）氯化機構。已知 HO–Cl 的 BDE 為 210 kJ/mol（50 kcal/mol）。

**所需 BDE（kJ/mol）**：HO–OH 213；HO–H 497；HO–Cl 210；Cl–Cl 240；H–Cl 432；2° C–H 413；2° C–Cl 356

**詳解**：

**Step 1　起始：打斷最弱的鍵（O–O）**

$$
\mathrm{HO{-}OH} \xrightarrow{\Delta\ \text{或}\ h\nu} 2\,\mathrm{HO\cdot}
\qquad \Delta H^\circ = +213\ \mathrm{kJ/mol}
$$

**Step 2　HO· 如何轉換成連鎖所需的自由基？**

HO· 本身並不是傳遞步驟中的自由基，它必須先把連鎖「交棒」出去。有兩條可能路徑，逐一計算 ΔH°：

**路徑 (i)：HO· 奪取環戊烷的氫**

$$
\mathrm{HO\cdot + C_5H_{10} \to H_2O + C_5H_9\cdot}
$$

$$
\Delta H^\circ = (+413) + (-497) = \mathbf{-84\ kJ/mol}\quad(\text{強烈放熱})
$$

**路徑 (ii)：HO· 攻擊 Cl₂**

$$
\mathrm{HO\cdot + Cl{-}Cl \to HO{-}Cl + Cl\cdot}
$$

$$
\Delta H^\circ = (+240) + (-210) = \mathbf{+30\ kJ/mol}\quad(\text{吸熱})
$$

**結論**：路徑 (i) 在能量上遠較有利。因為 O–H 鍵非常強（497 kJ/mol），HO· 是極佳的奪氫者，所以 HO· 主要以**奪取環戊烷的 H** 來起始連鎖。路徑 (ii) 也可能少量發生，最終同樣產生連鎖所需的 Cl·。

**Step 3　傳遞步驟**

環戊基自由基（cyclopentyl radical）C₅H₉· 已經生成，接著進入與前面相同的循環：

$$
\begin{aligned}
\text{傳遞 1:}\quad & \mathrm{C_5H_9\cdot + Cl{-}Cl \to C_5H_9Cl + Cl\cdot}
&& \Delta H^\circ = +240 - 356 = \mathbf{-116\ kJ/mol}\\
\text{傳遞 2:}\quad & \mathrm{Cl\cdot + C_5H_{10} \to HCl + C_5H_9\cdot}
&& \Delta H^\circ = +413 - 432 = \mathbf{-19\ kJ/mol}
\end{aligned}
$$

（C₅H₉Cl ＝ 氯環戊烷，chlorocyclopentane）

**加總驗證**：

$$
\mathrm{C_5H_{10} + Cl_2 \to C_5H_9Cl + HCl}
\qquad \Delta H^\circ = -116 + (-19) = \mathbf{-135\ kJ/mol}
$$

**Step 4　終止步驟（舉例）**

$$
\begin{aligned}
&\mathrm{C_5H_9\cdot + Cl\cdot \to C_5H_9Cl}\\
&\mathrm{2\,Cl\cdot \to Cl_2}\\
&\mathrm{2\,C_5H_9\cdot \to C_5H_9{-}C_5H_9}\quad(\text{聯環戊基，bicyclopentyl})\\
&\mathrm{HO\cdot + Cl\cdot \to HOCl}
\end{aligned}
$$

**本題重點整理**

| 觀念 | 本題體現 |
|---|---|
| 起始劑要有**弱鍵** | O–O 鍵 213 kJ/mol，加熱即可均裂 |
| 起始劑自由基不一定直接參與傳遞 | HO· 只負責起頭，之後的循環由 Cl· 與 C₅H₉· 接手 |
| 用 BDE 判斷哪條路徑較合理 | 生成強 O–H 鍵（−84）遠優於生成弱 O–Cl 鍵（+30） |
| 起始劑只需**少量** | 連鎖一旦啟動，每個起始自由基可轉化許多分子 |

> ⚠️ **常見錯誤**：把 HO· 寫進傳遞循環，例如「HO· + C₅H₁₀ → … → 再生 HO·」。實際上沒有任何步驟會再生 HO·，所以 HO· 只屬於起始階段。

---

## 本部分重點回顧

1. 研究反應需掌握三個面向：**反應機構（mechanism）、熱力學（thermodynamics）、動力學（kinetics）**。
2. 甲烷氯化是**自由基連鎖取代反應**，三項實驗證據（需光熱、藍光最佳、高量子產率）共同支持這個機構。
3. 連鎖反應 ＝ **起始**（自由基數 +2）＋ **傳遞**（自由基數守恆，循環再生）＋ **終止**（自由基數減少）。
4. 淨反應 ＝ **傳遞步驟相加**，自由基中間體互相抵消。
5. 自由基鹵化易得混合物。控制反應物比例（過量烷類或過量鹵素）可以調整主產物；分子中氫全部等價時，最適合用於合成。
6. 起始劑的共同特徵是含有**弱鍵**（X–X、O–O），可用光或熱均裂。

> **下一部分預告（Part 2）**：平衡常數與吉布斯自由能（ΔG° = −RT ln K）、焓與熵（ΔG = ΔH − TΔS）、鍵解離焓與反應熱的計算。
