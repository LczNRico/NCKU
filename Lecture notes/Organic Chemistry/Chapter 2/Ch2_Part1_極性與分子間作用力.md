# Chapter 2 · Part I：分子極性與分子間作用力
### (2-1 Polarity of Bonds and Molecules ~ 2-3 Polarity Effects on Solubilities)

---

## 2-1 鍵與分子的極性 (Polarity of Bonds and Molecules)

### 2-1A 鍵偶極矩 (Bond Dipole Moment)

當兩個原子的陰電性 (electronegativity) 不同時，共價鍵 (covalent bond) 中的電子雲會偏向陰電性較大的原子，形成**極性共價鍵 (polar covalent bond)**。鍵的極性程度從非極性共價鍵 (nonpolar covalent)，經極性共價鍵，一直到離子鍵 (ionic bond)，是一個連續的光譜：

```
非極性共價鍵  ─────────────  極性增加  ─────────────  離子鍵
   C─C                                              Na⁺Cl⁻
```

**定義：鍵偶極矩 μ (bond dipole moment)**

$$\mu = \delta \times d$$

- $\delta$：電荷分離量（以電子電荷 e 為單位）
- $d$：正負電荷中心間的距離（鍵長）
- 單位：**德拜 (debye, D)**，$1\ D = 3.34 \times 10^{-30}\ C\cdot m$

**實用換算公式**（課本常數形式，$d$ 以 Å 為單位）：

$$\mu\ (\text{in debyes}) = 4.8 \times \delta\ (\text{electron charge}) \times d\ (\text{in Å})$$

> 這個 4.8 是怎麼來的？若一個質子與一個電子（電荷 $1.60\times10^{-19}\ C$）相距 1 Å（$10^{-10}\ m$）：
> $$\mu = (1.60\times10^{-19})\times(10^{-10}) = 1.60\times10^{-29}\ C\cdot m = \frac{1.60\times10^{-29}}{3.34\times10^{-30}}\ D \approx 4.8\ D$$
> 所以「一個完整電子電荷、相距 1 Å」對應 4.8 D，這就是換算係數的物理意義。

**★ 公式推導範例（課本 Solved Problem 2-1）**

已知 C─O 單鍵鍵長 1.43 Å，μ = 0.86 D，求電荷分離量 δ。

$$0.86 = 4.8 \times \delta \times 1.43$$
$$\delta = \frac{0.86}{4.8 \times 1.43} \approx 0.125\ e$$

意義：碳原子帶約 1/8 個正電荷，氧原子帶約 1/8 個負電荷（$\overset{\delta^+}{C}-\overset{\delta^-}{O}$）。

---

### 2-1B 分子偶極矩 (Molecular Dipole Moment)

分子偶極矩是整個分子的**鍵偶極矩向量和 (vector sum)**，同時反映大小與方向。與鍵偶極矩（需靠比較估計）不同，分子偶極矩**可直接由實驗測量**。

**判斷分子偶極矩的關鍵：對稱性 (symmetry)**

| 分子 | 結構特徵 | 淨偶極矩 |
|---|---|---|
| 甲醛 formaldehyde (H₂C=O) | 一個強極性 C=O 鍵 | μ = 2.3 D |
| 二氧化碳 CO₂ | 兩個強極性 C=O 鍵，但呈直線對稱 | μ = 0（互相抵銷）|
| 氯仿 CHCl₃ | 三個 C─Cl 鍵，部分抵銷 | μ = 1.0 D |
| 氯甲烷 CH₃Cl | 一個 C─Cl 鍵 | μ = 1.9 D |
| 四氯化碳 CCl₄ | 四個 C─Cl 鍵，正四面體對稱 | μ = 0 |

> **觀念澄清**：CO₂ 的「兩個」極性鍵反而讓它變成非極性分子，這是新式 vs 舊式思維常見的陷阱——**鍵極性 ≠ 分子極性**，一定要考慮幾何形狀（分子形狀決定向量如何加總）。

**孤對電子的貢獻**

孤對電子 (lone pair) 本身就是一種電荷分離（原子核帶部分正電，孤對電子帶部分負電），會直接貢獻到分子偶極矩，且貢獻量通常很可觀：

| 分子 | μ (D) | 孤對電子角色 |
|---|---|---|
| 氨 ammonia (NH₃) | 1.5 | N 上孤對電子強化淨偶極 |
| 水 water (H₂O) | 1.9 | O 上兩對孤對電子 |
| 丙酮 acetone | 2.9 | C=O 上孤對電子疊加 |
| 乙腈 acetonitrile | 3.9 | C≡N 上孤對電子疊加，三鍵極性本身就強 |

**★ 例題（課本 Problem 2-3(a) 已解，示範解題邏輯）**

判斷 NH₄⁺ 的偶極矩大小。

解：NH₄⁺ 雖然 N─H 鍵因為 N 帶正電而極化程度較一般 N─H 鍵更強，但四個 N─H 鍵呈**對稱正四面體排列**，向量和為零 → **μ = 0**。

---

## 2-2 分子間作用力 (Intermolecular Forces)

分子間作用力決定了物質的熔點、沸點、溶解度等物理性質。三種主要的**吸引力**：

1. 偶極-偶極作用力 (dipole–dipole forces)
2. 倫敦分散力 (London dispersion force)
3. 氫鍵 (hydrogen bond)

> 這三者都屬於**凡得瓦力 (van der Waals forces)** 的範疇（廣義上氫鍵常被視為特別強的偶極-偶極作用）。

---

### 2-2A 偶極-偶極作用力 (Dipole–Dipole Forces)

極性分子的正端與另一分子的負端相互吸引，是**淨吸引力**（因為分子會自發轉向較穩定的正-負排列）。這個吸引力必須在沸騰時被克服，因此：

$$\text{極性越強} \Rightarrow \text{偶極-偶極作用力越強} \Rightarrow \text{汽化熱越大} \Rightarrow \text{沸點越高}$$

---

### 2-2B 倫敦分散力 (London Dispersion Force)

**觀察到的矛盾**：CCl₄ 的偶極矩為零，但沸點 (77°C) 卻高於有偶極矩的 CHCl₃ (62°C)！這說明還有其他作用力存在。

**成因**：即使是非極性分子，電子雲瞬間分布也不會完全均勻，會產生**瞬時偶極 (temporary/instantaneous dipole)**。這個瞬時偶極會誘導鄰近分子產生**感應偶極 (induced dipole)**，兩者同步變化、相互吸引。

**關鍵規律：倫敦分散力正比於分子表面積接觸程度**

- 表面積越大 → 分子間接觸越多 → 倫敦力越強 → 沸點越高
- 支鏈越多 → 分子越接近球形 → 表面積越小 → 沸點越低

**★ 經典範例：C₅H₁₂ 三種異構物**

| 異構物 | 結構 | 沸點 |
|---|---|---|
| *n*-pentane（正戊烷） | 直鏈 | 36°C（表面積最大）|
| isopentane（異戊烷） | 一個支鏈 | 28°C |
| neopentane（新戊烷） | 高度支鏈（近球形） | 10°C（表面積最小）|

---

### 2-2C 氫鍵 (Hydrogen Bonding)

**定義**：氫鍵不是真正的化學鍵，而是一種**特別強的偶極-偶極吸引**，發生於：
- 氫原子鍵結在 **O 或 N**（有機化合物中不考慮 H─F）
- 該氫原子與**另一分子**上 O 或 N 的孤對電子產生吸引

**強度比較**：

| 作用力類型 | 大約能量 |
|---|---|
| 氫鍵 | ~20 kJ/mol (5 kcal/mol) |
| 一般共價鍵 (C─H, N─H, O─H) | ~400 kJ/mol (100 kcal/mol) |

氫鍵約只有共價鍵的 1/20 強度，但仍遠強於一般偶極-偶極作用或倫敦分散力。

**★ 經典對照組：乙醇 vs 二甲醚（同分異構物，分子量相同）**

$$\text{CH}_3\text{CH}_2\text{OH}\ (\text{bp } 78°C) \quad \text{vs} \quad \text{CH}_3\text{OCH}_3\ (\text{bp } -25°C)$$

兩者質量相同，但乙醇有 O─H 可形成分子間氫鍵，二甲醚沒有 O─H（氧上直接接兩個碳），沸點相差超過 100°C！

**N─H 氫鍵強度隨數量遞增（C₃H₉N 同分異構物）**

| 化合物 | N─H 數量 | 沸點 |
|---|---|---|
| trimethylamine 三甲胺 | 0 | 3.5°C（無氫鍵）|
| ethylmethylamine 乙甲胺 | 1 | 37°C |
| propylamine 丙胺 | 2 | 49°C |

**O─H 氫鍵 比 N─H 氫鍵強**（因為 O 的陰電性 > N，O─H 鍵極化程度更大）

---

### FOCUS 專欄：沸點預測三步驟法（考試核心技巧）

比較兩個化合物的沸點時，依序檢查：

1. **氫鍵**（有 O─H / N─H 的化合物優先判斷，且 O─H 效果 > N─H；氫鍵基團數量越多沸點越高）
2. **分子量與表面積**（同類型比較時，分子量越大、支鏈越少 → 沸點越高）
3. **偶極矩**（若前兩者相近，看分子極性強弱）

**★★ 例題詳解（課本 Solved Problem 2-2，經典綜合題）**

將下列化合物依沸點由低到高排序：neopentane、hexane、2,3-dimethylbutane、pentan-1-ol、2-methylbutan-2-ol

**解題過程：**

**Step 1** 先抓氫鍵基團：pentan-1-ol 與 2-methylbutan-2-ol 都有 ─OH，應為**最高沸點**兩者。
其中 pentan-1-ol 是直鏈醇，2-methylbutan-2-ol 是高支鏈的三級醇（表面積小），故：
$$\text{2-methylbutan-2-ol} < \text{pentan-1-ol}$$

**Step 2** 剩下三個不含氫鍵基團的烷類，比較分子量與支鏈：
- neopentane：分子量最小 + 高度支鏈（球形）→ 表面積最小 → **最低沸點**
- hexane：直鏈，表面積最大
- 2,3-dimethylbutane：比 hexane 多一點支鏈 → 表面積略小

$$\text{neopentane} < \text{2,3-dimethylbutane} < \text{hexane}$$

**最終排序：**

$$\underbrace{\text{neopentane}}_{10°C} < \underbrace{\text{2,3-dimethylbutane}}_{58°C} < \underbrace{\text{hexane}}_{69°C} < \underbrace{\text{2-methylbutan-2-ol}}_{102°C} < \underbrace{\text{pentan-1-ol}}_{138°C}$$

---

## 2-3 極性對溶解度的影響 (Polarity Effects on Solubilities)

### 核心原則：Like Dissolves Like（相似互溶）

> 極性物質溶於極性溶劑，非極性物質溶於非極性溶劑。

**四種情境分析（用 NaCl / 水 / 石蠟 / 汽油 為例）：**

| 情境 | 範例 | 結果 | 原因 |
|---|---|---|---|
| ① 極性溶質＋極性溶劑 | NaCl + H₂O | ✅ 溶解 | 水分子**溶合 (solvation)**（此處稱**水合 hydration**）離子，釋放能量克服晶格能 (lattice energy)；且熵增加 |
| ② 極性溶質＋非極性溶劑 | NaCl + 汽油 | ❌ 不溶 | 非極性分子無法有效溶合離子，晶格能無法被克服 |
| ③ 非極性溶質＋非極性溶劑 | 石蠟 + 汽油 | ✅ 溶解 | 弱凡得瓦力易被溶劑的凡得瓦力取代；熵大幅增加 |
| ④ 非極性溶質＋極性溶劑 | 石蠟 + 水 | ❌ 不溶 | 見下方「疏水效應」說明 |

**★ 情境④ 疏水效應 (hydrophobic effect) 的熵解釋（易混淆重點）**

許多人誤以為非極性物質不溶於水是因為「能量不利」，但課本強調真正主因是**熵 (entropy)** 不利：

- 若非極性分子要溶入水中，水分子必須在其周圍形成一個「空腔 (cavity)」
- 空腔邊緣的水分子因鄰居變少，會形成更緊密、類似冰的氫鍵網格結構
- 這種**有序化**造成不利的**熵下降 (unfavorable decrease in entropy)**

> 這與情境①中「熵增加」是相反的驅動力方向，做題時要能分辨是「能量」還是「熵」在主導。

---

### 親水性與疏水性 (Hydrophilic vs. Hydrophobic)

| 名詞 | 英文字義 | 定義 |
|---|---|---|
| 親水性 hydrophilic | "water-loving" | 極性物質，易溶於水 |
| 疏水性 hydrophobic | "water-hating" | 非極性物質，不易溶於水 |

**應用實例（課本 Application: Biochemistry）**：
- 維生素 A、D：非極性 → 儲存於脂肪組織 → 可能過量中毒
- 大部分維生素：帶電荷基團 → 水溶性 → 迅速排出、較不易中毒

---

### FOCUS 專欄：氫鍵與水溶解度的定量規律

**經驗法則（Problem-Solving Hint，非常實用）：**

> 一個能形成氫鍵的極性官能基，大約可以「帶」4 個碳原子進入水中一起溶解。含 3 個碳以下、且有氫鍵基團的化合物，通常與水完全互溶 (miscible)。

**★ 數據佐證（課本 FOCUS 表格）**

| 化合物 | 官能基數量 | 溶解度 (g/100 mL H₂O) |
|---|---|---|
| hexane 己烷 | 0 | 0.001（不溶）|
| hexan-1-ol 己醇 | 1 個 OH | 0.59 |
| hexane-1,6-diol 己二醇 | 2 個 OH | 50 |
| hexan-1-amine 己胺 | 1 個 NH₂ | 1.2 |
| hexane-1,6-diamine 己二胺 | 2 個 NH₂ | 49 |

**兩條規律整理：**
1. 碳數固定時，氫鍵基團數量越多 → 溶解度越高
2. 氫鍵基團數量固定時，碳數越多 → 溶解度越低（疏水的烷基部分拖累）

> **補充**：鹵素原子 (halogen) 雖然陰電性高，但在有機化合物中**不參與氫鍵**，因此不會提升水溶性。

---

## Part I 重點回顧總表

| 主題 | 關鍵公式/概念 | 判斷順序 |
|---|---|---|
| 鍵偶極矩 | $\mu = 4.8 \times \delta \times d$ | — |
| 分子偶極矩 | 鍵偶極矩的向量和（含孤對電子）| 先看幾何對稱性 |
| 沸點預測 | 氫鍵 > 分子量/表面積 > 偶極矩 | 三步驟法 |
| 溶解度預測 | Like dissolves like | 氫鍵基團數 vs 碳數比例 |
| 疏水效應本質 | 熵驅動（非純能量）| — |

---

## 例題演練區（供你自行挑戰，附簡答）

**Problem 2-2**：N─F 鍵極性比 N─H 強，但 NF₃ 的偶極矩 (0.2 D) 卻遠小於 NH₃ (1.5 D)，為什麼？

> 提示：畫出兩者的孤對電子方向與 N─X 鍵偶極方向，比較它們是同向疊加還是反向部分抵銷。

**Problem 2-4**：1,2-dichloroethene 有順反異構物，一個 μ = 2.4 D，一個 μ = 0，畫出兩者並解釋。

**Problem 2-6(b)**：CH₃(CH₂)₆CH₃ 與 CH₃(CH₂)₅CH₂OH，哪個沸點較高？

---

若這份 Part I 的深度、格式、詳解程度符合你的需求，我接著製作 **Part II（2-4 ~ 2-13 酸鹼理論，含 pKa 推導與四步驟判斷法）**。這部分會是整章的核心重點，公式推導與例題會更完整。
