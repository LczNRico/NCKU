# 第 4 章　化學反應的研究（The Study of Chemical Reactions）
## Part 6：綜合挑戰題與全章總整理（Integrated Challenge Problems & Chapter Review）

---

## 目錄

**A. 綜合挑戰題詳解**
1. ★ 4-55　三丁基錫氫化物還原鹵烷
2. ★ 4-56　氯自由基與臭氧層破壞
3. ★ 4-58　以四碘甲烷進行烷類碘化

**B. 全章總整理**
4. 全章觀念架構圖
5. 公式總表
6. 必背數據
7. 題型與解法對照
8. 考試陷阱檢查清單
9. 專有名詞中英對照
10. 課本「Essential Problem-Solving Skills」與講義對應
11. 綜合自我測驗

---

# A. 綜合挑戰題詳解

> 這三題都是「**用 BDE 設計並驗證自由基連鎖機構**」的綜合題，整合了 Part 1（連鎖反應）、Part 2（BDE 計算）、Part 3（動力學）與 Part 4（自由基穩定性）。
>
> **通用解題流程**：
> 1. 找出起始劑中**最弱的鍵** → 起始步驟
> 2. 列出起始劑自由基可能攻擊的所有原子，用 BDE 算 ΔH，選**最有利**的一個
> 3. 設計兩個傳遞步驟：每一步都要**再生**一個自由基，而且相加等於淨反應
> 4. 驗證每個傳遞步驟都**放熱**或僅**輕微吸熱**（否則連鎖太慢）
> 5. 寫出終止步驟

---

## ★ 挑戰題 1（課本 *4-55）三丁基錫氫化物還原鹵烷

**題目**：三丁基錫氫化物（tributyltin hydride，Bu₃SnH）在合成上用於**還原鹵烷（alkyl halide）**，也就是以氫取代鹵素原子。自由基起始劑會促進此反應，自由基抑制劑則會減緩或阻止它。請以下列反應為例，設計反應機構。

$$
\text{溴環己烷（bromocyclohexane）} + \mathrm{Bu_3SnH} \xrightarrow{\text{微量 Br}_2,\ h\nu} \text{環己烷（cyclohexane）} + \mathrm{Bu_3SnBr}
$$

**已知 BDE（kJ/mol）**

| 鍵 | BDE | 鍵 | BDE |
|---|---|---|---|
| 環己基 C–H | 413 | Br–Br | 190 |
| 環己基 C–Br | 309 | H–Br | 366 |
| Bu₃Sn–H | **310** | Bu₃Sn–Br | **552** |

(a) 提出起始步驟與傳遞步驟。
(b) 計算各步驟的 ΔH，證明它們在能量上可行。

---

### 詳解

**Step 0　從實驗線索判斷反應類型**

| 線索 | 推論 |
|---|---|
| 自由基起始劑促進反應 | 自由基機構 |
| 自由基抑制劑減緩或阻止反應 | **連鎖**反應（抑制劑切斷連鎖） |
| 只需**微量** Br₂ ＋ 光 | Br₂ **只是起始劑**，不是反應物 |

**Step 1　起始：打斷起始劑的弱鍵**

$$
\mathrm{Br{-}Br} \xrightarrow{h\nu} 2\,\mathrm{Br\cdot}
\qquad \Delta H = +190\ \mathrm{kJ/mol}
$$

**Step 2　Br· 會攻擊哪一個原子？逐一計算**

| 可能反應 | 斷鍵 | 成鍵 | ΔH (kJ/mol) | 判斷 |
|---|---|---|---|---|
| ① Br· + Bu₃Sn–H → Bu₃Sn· + H–Br | Sn–H +310 | H–Br −366 | **−56** | ✅ 放熱，最有利 |
| ② Br· + 環己基 C–H → 環己基· + H–Br | C–H +413 | H–Br −366 | +47 | ✗ 吸熱 |
| ③ Br· + 環己基 C–Br → 環己基· + Br–Br | C–Br +309 | Br–Br −190 | +119 | ✗ 強烈吸熱 |

**結論**：Br· 奪取 Bu₃Sn–H 的氫，生成**三丁基錫自由基（tributyltin radical，Bu₃Sn·）**。這一步完成了起始，並產生真正的**連鎖載體（chain carrier）**。

$$
\mathrm{Br\cdot + Bu_3Sn{-}H \longrightarrow Bu_3Sn\cdot + H{-}Br}\qquad \Delta H = -56\ \mathrm{kJ/mol}
$$

> **關鍵觀察**：Sn–H 鍵（310）比 C–H 鍵（413）弱得多，這是 Bu₃SnH 成為優良**氫原子供給者（hydrogen-atom donor）**的原因。

**Step 3　傳遞步驟**

**傳遞 1：錫自由基奪取溴**

$$
\mathrm{Bu_3Sn\cdot + C_6H_{11}{-}Br \longrightarrow Bu_3Sn{-}Br + C_6H_{11}\cdot}
$$

$$
\Delta H = +309\ (\text{斷 C–Br}) - 552\ (\text{成 Sn–Br}) = \mathbf{-243\ kJ/mol}
$$

**傳遞 2：環己基自由基從 Bu₃SnH 奪取氫**

$$
\mathrm{C_6H_{11}\cdot + H{-}SnBu_3 \longrightarrow C_6H_{11}{-}H + Bu_3Sn\cdot}
$$

$$
\Delta H = +310\ (\text{斷 Sn–H}) - 413\ (\text{成 C–H}) = \mathbf{-103\ kJ/mol}
$$

Bu₃Sn· 再生，回到傳遞 1 → **連鎖成立**。

```
          ┌────────────────────────────────────────────────┐
          ▼                                                │
  Bu₃Sn· + C₆H₁₁Br ──(−243)──► Bu₃SnBr + C₆H₁₁·            │
                                            │              │
                                            ▼              │
                    C₆H₁₁· + Bu₃SnH ──(−103)──► C₆H₁₂ + Bu₃Sn·
```

**Step 4　驗證：傳遞步驟相加 ＝ 淨反應**

$$
\begin{aligned}
&\mathrm{Bu_3Sn\cdot + C_6H_{11}Br \to Bu_3SnBr + C_6H_{11}\cdot} && -243\\
&\mathrm{C_6H_{11}\cdot + Bu_3SnH \to C_6H_{12} + Bu_3Sn\cdot} && -103\\ \hline
&\mathrm{C_6H_{11}Br + Bu_3SnH \to C_6H_{12} + Bu_3SnBr} && \mathbf{-346\ kJ/mol}
\end{aligned}
$$

**交叉驗算**（直接用淨反應計算）：
斷：C–Br 309 ＋ Sn–H 310 ＝ 619；成：C–H 413 ＋ Sn–Br 552 ＝ 965
ΔH ＝ 619 − 965 ＝ **−346 kJ/mol** ✓

**Step 5　終止步驟（例）**

$$
\begin{aligned}
&\mathrm{2\,Bu_3Sn\cdot \to Bu_3Sn{-}SnBu_3}\quad(\text{六丁基二錫 hexabutylditin})\\
&\mathrm{2\,C_6H_{11}\cdot \to C_6H_{11}{-}C_6H_{11}}\quad(\text{聯環己基 bicyclohexyl})\\
&\mathrm{Bu_3Sn\cdot + C_6H_{11}\cdot \to Bu_3Sn{-}C_6H_{11}}
\end{aligned}
$$

---

### 為什麼 Br₂ 只是起始劑，不參與傳遞？

有人可能會提出另一種傳遞：環己基自由基與 Br₂ 反應。但 Br₂ 只有**微量**，環己基自由基遇到大量 Bu₃SnH 的機率遠大於遇到 Br₂，而且傳遞 2 強烈放熱（−103），速率很快。

### 本題的驅動力分析

| 鍵 | 變化 | 意義 |
|---|---|---|
| Sn–Br | 生成 552 | **極強**，是最大驅動力 |
| C–H | 生成 413 | 強 |
| C–Br | 斷裂 309 | 弱 |
| Sn–H | 斷裂 310 | 弱 |

錫對鹵素有極強的親和力（Sn–Br 552），而 Sn–H 又很弱，所以兩個傳遞步驟都強烈放熱。

### 常見錯誤

| 錯誤 | 為何錯 |
|---|---|
| 讓 Br· 直接奪取 C–Br 的溴 | ΔH ＝ +119，太吸熱 |
| 讓 Br· 奪取環己烷的 C–H | 會生成溴化產物，不是還原；而且 ΔH ＝ +47 |
| 傳遞步驟中出現 H· | H· 能量太高，應避免（Part 2） |
| 把 Br· 寫成連鎖載體 | Br· 只在起始時出現一次，真正的連鎖載體是 Bu₃Sn· 與 C₆H₁₁· |

> **延伸（第 10 章以後）**：Bu₃SnH / AIBN（偶氮二異丁腈，azobisisobutyronitrile，一種常用的自由基起始劑）是有機合成中經典的**自由基脫鹵（radical dehalogenation）**試劑組合。由於有機錫化合物有毒，現代合成中常改用三(三甲基矽基)矽烷（tris(trimethylsilyl)silane，TTMSS）等替代品。

---

## ★ 挑戰題 2（課本 *4-56）氯自由基與臭氧層破壞

**題目**：健康的平流層（stratosphere）含有低濃度的臭氧（ozone, O₃），能經由下列循環吸收有害的紫外線（ultraviolet, UV）輻射：

$$
\mathrm{O_3 \xrightarrow{h\nu} O_2 + O}\qquad
\mathrm{O_2 + O \to O_3 + \text{熱}}
$$

氟氯碳化物（chlorofluorocarbon, CFC）冷媒，例如氟利昂 12（Freon 12，CF₂Cl₂），在低層大氣中很穩定，但到了平流層會吸收高能紫外線而產生氯自由基：

$$
\mathrm{CF_2Cl_2 \xrightarrow{h\nu} \cdot CF_2Cl + Cl\cdot}
$$

少量氯自由基似乎就能**大幅**降低臭氧濃度。下列反應除了需要光的那一個之外，都是**放熱**的，而且速率常數都很大：

$$
\begin{aligned}
&\text{(i)}\quad \mathrm{Cl{-}O{-}O{-}Cl \xrightarrow{h\nu} O_2 + 2\,Cl\cdot}\\
&\text{(ii)}\quad \mathrm{Cl{-}O\cdot + O \to O_2 + Cl\cdot}\\
&\text{(iii)}\quad \mathrm{Cl\cdot + O_3 \to Cl{-}O\cdot + O_2}\\
&\text{(iv)}\quad \mathrm{2\,Cl{-}O\cdot \to Cl{-}O{-}O{-}Cl}
\end{aligned}
$$

請提出**兩個**機構，解釋少量氯自由基如何破壞大量臭氧分子。當氯原子濃度**非常低**時，哪一個機構較可能？

---

### 詳解

**Step 0　認識物種**

| 物種 | 中文 | 英文 | 性質 |
|---|---|---|---|
| Cl· | 氯原子（氯自由基） | chlorine atom | 自由基 |
| ClO· | 一氧化氯自由基 | chlorine monoxide radical | 自由基 |
| ClOOCl | 過氧化氯（一氧化氯二聚體） | chlorine peroxide（ClO dimer） | 穩定分子，O–O 鍵弱 |
| O | 氧原子 | oxygen atom | 高活性（本身也是自由基，有兩個未成對電子） |

**起始**：CF₂Cl₂ 的 C–Cl 鍵比 C–F 鍵弱得多，所以紫外線打斷的是 **C–Cl** 鍵，產生 Cl·。

---

**機構 A（Cl／ClO 循環，搭配氧原子）**

$$
\begin{aligned}
\text{傳遞 1 (iii)：}\quad & \mathrm{Cl\cdot + O_3 \longrightarrow ClO\cdot + O_2}\\
\text{傳遞 2 (ii)：}\quad & \mathrm{ClO\cdot + O \longrightarrow O_2 + Cl\cdot}\\ \hline
\text{淨反應：}\quad & \mathbf{O_3 + O \longrightarrow 2\,O_2}
\end{aligned}
$$

- Cl· 在第二步**再生**，所以是**催化劑（catalyst）**。
- 淨反應把臭氧，以及原本會與 O₂ 重新結合成臭氧的氧原子，一起轉變成 O₂。
- 兩個步驟都是「**一個自由基 ＋ 一個分子（或原子）**」。

---

**機構 B（ClO 二聚體循環）**

$$
\begin{aligned}
\text{傳遞 1 (iii) × 2：}\quad & \mathrm{2\,Cl\cdot + 2\,O_3 \longrightarrow 2\,ClO\cdot + 2\,O_2}\\
\text{傳遞 2 (iv)：}\quad & \mathrm{2\,ClO\cdot \longrightarrow ClOOCl}\\
\text{傳遞 3 (i)：}\quad & \mathrm{ClOOCl \xrightarrow{h\nu} O_2 + 2\,Cl\cdot}\\ \hline
\text{淨反應：}\quad & \mathbf{2\,O_3 \longrightarrow 3\,O_2}
\end{aligned}
$$

- 兩個 Cl· 在最後一步**再生**，同樣是催化循環。
- 這個機構**不需要氧原子**。

**檢查物種是否抵消**：左邊 2Cl·、2ClO·、ClOOCl；右邊 2ClO·、ClOOCl、2Cl· → 全部抵消 ✓

---

**兩個機構的比較**

| | 機構 A | 機構 B |
|---|---|---|
| 步驟 | (iii) → (ii) | 2×(iii) → (iv) → (i) |
| 淨反應 | O₃ + O → 2O₂ | 2O₃ → 3O₂ |
| 需要氧原子？ | 是 | 否 |
| 需要光？ | 否（光只用於產生 O 原子） | 是（ClOOCl 光解） |
| 關鍵步驟 | 自由基 + 分子（或原子） | **自由基 + 自由基**（2 ClO·） |

---

**哪一個機構在 [Cl·] 很低時較可能？**

**答案：機構 A。**

**理由**（呼應 Part 1 第 5-3 節）：

機構 B 的步驟 (iv) 需要**兩個 ClO· 自由基相撞**：

$$
\text{速率(iv)} = k_4[\mathrm{ClO\cdot}]^2
$$

機構 A 的步驟 (ii) 則是 ClO· 與氧原子相撞：

$$
\text{速率(ii)} = k_2[\mathrm{ClO\cdot}][\mathrm{O}]
$$

兩者比值：

$$
\frac{\text{速率(iv)}}{\text{速率(ii)}} = \frac{k_4}{k_2}\cdot\frac{[\mathrm{ClO\cdot}]}{[\mathrm{O}]}
$$

- 當氯濃度極低時，[ClO·] 也極低。
- 速率(iv) 與 [ClO·] 的**平方**成正比，濃度下降時會以平方倍數**急劇**變慢。
- 速率(ii) 只與 [ClO·] 的**一次方**成正比，而氧原子由 O₃ 光解持續產生。

→ 兩個 ClO· 相遇的機會遠小於 ClO· 遇到氧原子的機會，所以**機構 A 較可能**。

> **觀念連結**：這與「終止步驟在反應初期很少發生」的道理完全相同：**自由基 + 自由基**的步驟速率與自由基濃度的**平方**成正比，在自由基稀少時很難發生。

---

### 延伸：一個 Cl· 能破壞多少臭氧？

- Cl· 是**催化劑**，每次循環都會再生。
- 估計一個 Cl· 在被移除前可以破壞約 **10⁵ 個** O₃ 分子。
- 最終終止方式：Cl· 轉變成較不活潑的「**儲存分子（reservoir species）**」，例如：

$$
\mathrm{Cl\cdot + CH_4 \to HCl + \cdot CH_3}\qquad
\mathrm{ClO\cdot + NO_2 \to ClONO_2}\ (\text{硝酸氯 chlorine nitrate})
$$

### 延伸：真實世界的南極臭氧洞

- 在**一般平流層**中，氧原子較多，**機構 A** 為主。
- 在**南極臭氧洞（Antarctic ozone hole）**中，冬季的**極地平流層雲（polar stratospheric clouds）**表面會把儲存分子（HCl、ClONO₂）轉化為活性氯，使 **[ClO·] 變得非常高**；而低層平流層中氧原子很少。因此在南極春季，**機構 B（ClO 二聚體循環）**反而是主要途徑。
- 這正呼應本題的結論：機構的選擇取決於**濃度**，而[ClO·] 高時二級步驟 (iv) 就變得重要。
- 1995 年諾貝爾化學獎頒給 Crutzen、Molina 與 Rowland，表彰他們對大氣臭氧化學的研究。1987 年的**蒙特婁議定書（Montreal Protocol）**限制了 CFC 的使用，臭氧洞如今已逐漸改善（課本章首圖片）。

---

## ★ 挑戰題 3（課本 *4-58）以四碘甲烷進行烷類碘化

**題目**：以碘（I₂）碘化烷類通常是不利的反應（參見 Problem 4-17）。在自由基起始劑（例如過氧化氫）存在下，四碘甲烷（tetraiodomethane，CI₄）可作為碘化反應的碘源。為下列反應提出一個機構（其傳遞步驟須為**輕微放熱**），並計算各步驟的 ΔH。

$$
\text{環戊烷（cyclopentane）} + \mathrm{CI_4} \xrightarrow{\mathrm{H_2O_2},\ \Delta} \text{碘環戊烷（iodocyclopentane）} + \mathrm{HCI_3}
$$

（HCI₃ ＝ 三碘甲烷，triiodomethane，俗名碘仿 iodoform）

**已知 BDE（kJ/mol）**

| 鍵 | BDE | 鍵 | BDE |
|---|---|---|---|
| I₃C–I | **188** | HO–I | 234 |
| I₃C–H | **418** | HO–OH | 213 |
| 環戊基 C–H | 413 | 環戊基 C–I | 238 |

（另需 Table 4-2 的 HO–H ＝ 497）

---

### 詳解

**Step 0　先理解為何 I₂ 不行（回顧 Part 2 例題 8、Part 2 挑戰題 4-41(a)）**

以 I₂ 碘化環戊烷：

| 步驟 | ΔH (kJ/mol) |
|---|---|
| I· + C₅H₁₀ → HI + C₅H₉· | 413 − 298 ＝ **+115**（強烈吸熱） |
| C₅H₉· + I₂ → C₅H₉I + I· | 149 − 238 ＝ −89 |
| 淨反應 | **+26**（吸熱） |

問題的根源在於 **H–I 鍵太弱（298）**，I· 無法有效奪取氫。

**解決思路**：換一個奪氫者，讓它奪氫後形成**強的 X–H 鍵**；同時它的「碘供給分子」要有**弱的 X–I 鍵**。CI₄ 正好符合：
- ·CI₃ 奪氫後形成 **I₃C–H（418）**，很強 ✓
- CI₄ 的 **I₃C–I（188）**很弱，容易把 I 轉移出去 ✓

---

**Step 1　起始：打斷 H₂O₂ 最弱的 O–O 鍵**

$$
\mathrm{HO{-}OH} \xrightarrow{\Delta} 2\,\mathrm{HO\cdot}\qquad \Delta H = +213\ \mathrm{kJ/mol}
$$

**Step 2　HO· 如何啟動連鎖？（兩條路徑都可行）**

| 路徑 | 反應 | 斷鍵 | 成鍵 | ΔH |
|---|---|---|---|---|
| ① | HO· + C₅H₁₀ → H₂O + C₅H₉· | C–H +413 | HO–H −497 | **−84** |
| ② | HO· + CI₄ → HO–I + ·CI₃ | I₃C–I +188 | HO–I −234 | **−46** |

兩條路徑都放熱，而且各自產生其中一種連鎖載體（C₅H₉· 或 ·CI₃），都能啟動連鎖。

**Step 3　傳遞步驟**

**傳遞 1：三碘甲基自由基奪取環戊烷的氫**

$$
\mathrm{\cdot CI_3 + C_5H_{10} \longrightarrow HCI_3 + C_5H_9\cdot}
$$

$$
\Delta H = +413\ (\text{斷 C–H}) - 418\ (\text{成 I}_3\text{C–H}) = \mathbf{-5\ kJ/mol}
$$

**傳遞 2：環戊基自由基從 CI₄ 奪取碘**

$$
\mathrm{C_5H_9\cdot + I{-}CI_3 \longrightarrow C_5H_9{-}I + \cdot CI_3}
$$

$$
\Delta H = +188\ (\text{斷 I}_3\text{C–I}) - 238\ (\text{成 C–I}) = \mathbf{-50\ kJ/mol}
$$

·CI₃ 再生 → 回到傳遞 1 → **連鎖成立**。

```
          ┌──────────────────────────────────────────────┐
          ▼                                              │
   ·CI₃ + C₅H₁₀ ──(−5)──► HCI₃ + C₅H₉·                   │
                                  │                      │
                                  ▼                      │
                  C₅H₉· + CI₄ ──(−50)──► C₅H₉I + ·CI₃ ───┘
```

**Step 4　驗證淨反應**

$$
\begin{aligned}
&\mathrm{\cdot CI_3 + C_5H_{10} \to HCI_3 + C_5H_9\cdot} && -5\\
&\mathrm{C_5H_9\cdot + CI_4 \to C_5H_9I + \cdot CI_3} && -50\\ \hline
&\mathrm{C_5H_{10} + CI_4 \to C_5H_9I + HCI_3} && \mathbf{-55\ kJ/mol}
\end{aligned}
$$

**交叉驗算**：斷 413 ＋ 188 ＝ 601；成 238 ＋ 418 ＝ 656；ΔH ＝ **−55 kJ/mol** ✓

**Step 5　終止步驟（例）**

$$
\begin{aligned}
&\mathrm{2\,\cdot CI_3 \to I_3C{-}CI_3}\quad(\text{六碘乙烷 hexaiodoethane})\\
&\mathrm{C_5H_9\cdot + \cdot CI_3 \to C_5H_9{-}CI_3}\\
&\mathrm{2\,C_5H_9\cdot \to C_5H_9{-}C_5H_9}\quad(\text{聯環戊基 bicyclopentyl})
\end{aligned}
$$

---

### 碘源的比較：I₂ vs. CI₄

| | I₂ | CI₄ |
|---|---|---|
| 奪氫者 | I· | ·CI₃ |
| 奪氫後形成的鍵 | H–I（**298**，弱） | I₃C–H（**418**，強） |
| 奪氫步驟 ΔH | **+115** | **−5** |
| 提供 I 的鍵 | I–I（149） | I₃C–I（188） |
| 轉移 I 步驟 ΔH | −89 | −50 |
| 淨 ΔH | **+26**（不利） | **−55**（有利） |

**核心概念**：CI₄ 把「奪氫」與「給碘」這兩個角色，分配給**強 C–H 鍵的生成者**（·CI₃）與**弱 C–I 鍵的提供者**（CI₄），巧妙避開了 H–I 鍵太弱的問題。

### 為何題目要求「輕微放熱」的傳遞步驟？

- 自由基連鎖要持續，每個傳遞步驟都必須**快**（Part 5 第 1-2 節、Part 4 第 1 節）。
- 兩個傳遞步驟分別為 −5 與 −50 kJ/mol，都放熱 → Eₐ 低 → 連鎖快速進行。
- 傳遞 1 只是**輕微**放熱，所以它會是**速率決定步驟**。依哈蒙假說，它的過渡狀態大約位於「中間」，因此對 1°、2°、3° 氫會有一定的選擇性。

---

# B. 全章總整理

## 4. 全章觀念架構圖

```
                      研究一個化學反應
                             │
       ┌─────────────────────┼─────────────────────┐
       ▼                     ▼                     ▼
  反應機構               熱力學                 動力學
 (mechanism)       (thermodynamics)          (kinetics)
       │                     │                     │
 ・連鎖反應            ・K、ΔG°=−RT ln K       ・速率定律
   起始／傳遞／終止    ・ΔG=ΔH−TΔS             ・阿瑞尼斯 k=Ae^(−Eₐ/RT)
 ・半箭頭、均裂        ・BDE 計算 ΔH           ・過渡狀態、位能圖
 ・實驗證據            ・狀態函數              ・速率決定步驟
       │                     │                     │
       └──────────┬──────────┴──────────┬──────────┘
                  ▼                     ▼
          鹵化的選擇性             反應中間體
       ・1°/2°/3° 氫的反應性     ・碳陽離子（+，6e，sp²）
       ・自由基穩定性            ・自由基（0，7e，sp²）
       ・哈蒙假說                ・碳陰離子（−，8e，sp³）
       ・Cl（中等）vs Br（高）   ・碳烯（0，6e，sp²）
                  │                     │
                  └──────────┬──────────┘
                             ▼
                    應用：自由基抑制劑
                  （BHA、維生素 C/E、I₂）
```

---

## 5. 公式總表

| 主題 | 公式 | 出處 |
|---|---|---|
| 光子能量 | $E_{\text{mol}}(\mathrm{kJ/mol}) = 1.196\times10^5/\lambda(\mathrm{nm})$ | Part 1 |
| 量子產率 | $\Phi$ ＝ 產物分子數 ／ 吸收光子數 ≈ 2 × 鏈長 | Part 1 |
| 平衡常數 | $K_{eq} = \dfrac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}$ | Part 2 |
| 自由能與 K | $\Delta G^\circ = -RT\ln K = -2.303RT\log K$ | Part 2 |
| 自由能的組成 | $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$ | Part 2 |
| 轉折溫度 | $T^* = \Delta H/\Delta S$ | Part 2 |
| 轉化率（A ⇌ B） | $x = K/(1+K)$ | Part 2 |
| 由 BDE 求反應熱 | $\Delta H^\circ = \Sigma\mathrm{BDE}_{\text{斷}} - \Sigma\mathrm{BDE}_{\text{成}}$ | Part 2 |
| 速率定律 | 速率 ＝ $k_r[\mathrm{A}]^a[\mathrm{B}]^b$ | Part 3 |
| 反應級數 | $a = \log(\text{速率比})/\log(\text{濃度比})$ | Part 3 |
| 阿瑞尼斯方程式 | $k = Ae^{-E_a/RT}$ | Part 3 |
| 兩溫度形式 | $\ln(k_2/k_1) = (E_a/R)(1/T_1 - 1/T_2)$ | Part 3 |
| 催化加速倍數 | $k_{\text{cat}}/k = e^{\Delta E_a/RT}$ | Part 3 |
| 正逆活化能 | $E_a(\text{逆}) = E_a(\text{正}) - \Delta H^\circ$ | Part 3 |
| 產物比例 | 比例$_i = n_i r_i / \Sigma n_j r_j$ | Part 4 |
| 選擇性與 Eₐ | $r_{2^\circ}/r_{1^\circ} = e^{\Delta E_a/RT}$ | Part 4 |
| 形式電荷 | $\mathrm{FC} = V - N - B/2$ | Part 5 |

---

## 6. 必背數據

### 6-1 常數（25 °C）

| 量 | 數值 |
|---|---|
| R | 8.314 J/(K·mol) |
| RT | 2.48 kJ/mol |
| 2.303 RT | **5.71 kJ/mol**（ΔG° 或 Eₐ 每變化此值，K 或 k 變化 10 倍） |

### 6-2 關鍵 BDE（kJ/mol）

| 類別 | 數值 |
|---|---|
| X–X | F–F 154、Cl–Cl 240、Br–Br 190、I–I 149 |
| H–X | H–F 570、H–Cl 432、H–Br 366、H–I 298 |
| C–H | 甲基 439 > 1° 423 > 2° 413 > 3° 403 > 苄基 376 > 烯丙基 372 |
| 其他 | HO–H 497、HO–OH 213、H–H 436 |

### 6-3 甲烷鹵化

| X | 傳遞 1 ΔH | 傳遞 1 Eₐ | 傳遞 2 ΔH | 淨 ΔH |
|---|---|---|---|---|
| F | −131 | 5 | −327 | −458 |
| Cl | +7 | 17 | −110 | −103 |
| Br | +73 | 75（79） | −112 | −39 |
| I | +141 | 140 | −92 | +49 |

### 6-4 選擇性（每個 H 的相對反應性）

| | 1° | 2° | 3° |
|---|---|---|---|
| 氯化（25 °C） | 1 | 4.5 | 5.5 |
| 溴化（125 °C） | 1 | 97 | 約 1600（文獻近似值） |

---

## 7. 題型與解法對照

| 題型 | 解題關鍵 | 範例 |
|---|---|---|
| 寫自由基連鎖機構 | 四步驟：弱鍵均裂 → 奪最弱的 H 生成最穩定自由基 → 與 X₂ 反應並再生自由基 → 終止 | 4-44、4-51、4-55、4-58 |
| 用實驗證據否定機構 | 對照：需光／熱、有效波長被誰吸收、量子產率 | 4-3 |
| 由 K 求 ΔG° 或反之 | $\Delta G^\circ = -5.71\log K$（25 °C） | 4-5、4-6 |
| ΔS 正負判斷 | 數分子數（氣體）變化 | 4-8 |
| 由 BDE 算 ΔH | 表格法：斷（＋）、成（−）；選結構最接近的 BDE | 4-41 |
| 由 BDE 選擇最合理步驟 | 列出所有可能的攻擊，比較 ΔH | 4-51、4-54、4-55 |
| 由實驗數據求速率定律 | 比值法；零級 → 不在速率決定步驟（及其之前） | 4-34、4-39 |
| 畫或判讀位能圖 | 峰 ＝ TS、谷 ＝ 中間體、最高峰 ＝ 速率決定 | 4-35、4-37 |
| 預測產物比例 | 氫數 × 相對反應性 | 4-21、4-49 |
| 判斷鹵化是否適合合成 | 氯化：H 全等價才適合；溴化：有唯一最弱 C–H | 4-43、4-47 |
| 哈蒙假說應用 | 吸熱 → 類產物；放熱 → 類反應物 | 4-23、4-35、4-50、4-57 |
| 中間體穩定性排序 | 缺電子：3° > 2° > 1°；富電子：相反；共振優先 | 4-29、4-30 |
| 畫共振式 | 奇數電子（或電荷）經由相鄰 π 鍵移動，出現在 1,3-位 | 4-31、4-45 |
| 烯丙位重排 | 共振自由基兩端都可反應 → 兩種產物 | 4-46、4-47(f) |
| 碳烯生成 | 強鹼去質子化 → α-消去 | 4-52 |
| 兩自由基步驟 vs. 自由基＋分子步驟 | 前者速率 ∝ [R·]²，自由基稀少時不利 | 4-56 |

---

## 8. 考試陷阱檢查清單

### 機構

- [ ] 自由基反應用**半箭頭**，每個電子一支
- [ ] 反應位置畫出**所有**鍵與取代基，不要用線角式
- [ ] 傳遞步驟相加要等於淨反應，自由基全部抵消
- [ ] 避免寫出 **H·** 等高能量自由基
- [ ] 起始劑自由基（HO·、Br·）通常**不是**連鎖載體

### 熱力學

- [ ] 放熱／吸熱看 **ΔH**；放能／吸能看 **ΔG**
- [ ] ΔG° 用 J 還是 kJ？R ＝ 8.314 **J**
- [ ] K 的表示式中係數要變成**次方**
- [ ] BDE 要選**對應碳級數**的數值（CH₃–H 439 ≠ (CH₃)₃C–H 403）
- [ ] 淨反應 ΔH **不加**起始步驟
- [ ] 高溫時 ΔG ≈ ΔH 的近似可能失效

### 動力學

- [ ] 速率定律**不能**由係數推出
- [ ] 第二步的 Eₐ 從**中間體**量起，不是從反應物
- [ ] 速率決定步驟看**最高的過渡狀態**，不只看哪個 Eₐ 大
- [ ] 催化劑**不改變** K、ΔH、ΔG
- [ ] 吸熱步驟的 Eₐ ≥ ΔH

### 選擇性

- [ ] 等價氫要**合併**計算（如 2-甲基丁烷的兩個 C1 甲基）
- [ ] 「產物 %」要除以**氫數**才是每個 H 的反應性
- [ ] 氯化的主產物不一定是最穩定自由基的產物（統計因素，例如異丁烷 62% 為 1° 產物）
- [ ] 同位素題：**含 D 的產物**來自**奪取 H**
- [ ] 溫度越高，選擇性越低

### 中間體

- [ ] 碳陰離子穩定性順序與碳陽離子**相反**
- [ ] 共振穩定的碳陰離子是 **sp²**，不是 sp³
- [ ] 碳烯的孤對電子在 **sp²** 軌域，p 軌域是**空的**
- [ ] 自由基與碳陽離子都算**缺電子**

---

## 9. 專有名詞中英對照

| 中文 | 英文 | 中文 | 英文 |
|---|---|---|---|
| 反應機構 | mechanism | 熱力學 | thermodynamics |
| 動力學 | kinetics | 鹵化 | halogenation |
| 取代反應 | substitution reaction | 自由基 | (free) radical |
| 奇數電子 | odd electron | 反應中間體 | reactive intermediate |
| 連鎖反應 | chain reaction | 起始步驟 | initiation step |
| 傳遞步驟 | propagation step | 終止步驟 | termination step |
| 量子產率 | quantum yield | 半箭頭（魚鉤箭頭） | fishhook (half-) arrow |
| 均裂 | homolytic cleavage | 異裂 | heterolytic cleavage |
| 平衡常數 | equilibrium constant | 吉布斯自由能 | Gibbs free energy |
| 標準狀態 | standard state | 放能 | exergonic |
| 吸能 | endergonic | 焓 | enthalpy |
| 熵 | entropy | 放熱 | exothermic |
| 吸熱 | endothermic | 反應熱 | heat of reaction |
| 鍵解離焓 | bond-dissociation enthalpy (BDE) | 狀態函數 | state function |
| 速率定律 | rate law / rate equation | 速率常數 | rate constant |
| 反應級數 | (kinetic) order | 阿瑞尼斯方程式 | Arrhenius equation |
| 活化能 | activation energy | 頻率因子 | frequency factor |
| 過渡狀態 | transition state | 活化錯合物 | activated complex |
| 反應位能圖 | reaction-energy diagram | 反應座標 | reaction coordinate |
| 催化劑 | catalyst | 酵素 | enzyme |
| 速率決定步驟 | rate-determining (rate-limiting) step | 選擇性 | selectivity |
| 一級／二級／三級氫 | primary / secondary / tertiary hydrogen | 哈蒙假說 | Hammond's postulate |
| 動力學同位素效應 | kinetic isotope effect | 自由基抑制劑 | radical inhibitor |
| 抗氧化劑 | antioxidant | 醌 | quinone |
| 碳陽離子 | carbocation | 碳陰離子 | carbanion |
| 碳烯 | carbene | 亞甲基 | methylene |
| 親電子基 | electrophile | 親核基 | nucleophile |
| 誘導效應 | inductive effect | 超共軛 | hyperconjugation |
| 共振穩定 | resonance stabilization | 非定域化 | delocalization |
| 烯丙基 | allylic / allyl | 苄基 | benzylic / benzyl |
| 烯丙位重排 | allylic rearrangement | α-消去 | α-elimination |
| 烯醇離子 | enolate ion | 類碳烯 | carbenoid |

---

## 10. 課本「Essential Problem-Solving Skills」與講義對應

| # | 課本技能 | 對應講義 | 對應章末題 |
|---|---|---|---|
| 1 | 提出烷類自由基鹵化的詳細機構 | Part 1、Part 4 §6、Part 6 | 4-44、46、48、51、55、56、58 |
| 2 | 依中間體穩定性與鹵化選擇性預測主產物 | Part 4 | 4-43、47、48、49 |
| 3 | 畫位能圖，標出 TS、Eₐ、中間體與速率決定步驟 | Part 3 | 4-35、36、37、38 |
| 4 | 用 BDE 計算各步驟與淨反應的 ΔH | Part 2、Part 6 | 4-41、51、54、55、56、58 |
| 5 | 由 K 計算 ΔG，並由 ΔG 算平衡位置 | Part 2 | 4-53、58 |
| 6 | 由速率定律判斷反應級數 | Part 3 | 4-34、39 |
| 7 | 用哈蒙假說判斷 TS 類反應物或類產物，並解釋對選擇性的影響 | Part 4 | 4-50、57 |
| 8 | 畫出並描述碳陽離子、碳陰離子、自由基、碳烯的結構與穩定因素；判斷親電性或親核性 | Part 5 | 4-40、42、45、46、47、52 |

---

## 11. 綜合自我測驗

**第 1 題**　下列關於甲烷氯化的敘述，何者**錯誤**？
(A) 第一傳遞步驟是速率決定步驟
(B) 淨反應 ΔH° 等於兩個傳遞步驟 ΔH° 之和
(C) 加入催化劑可使 K 值增大
(D) 反應的量子產率遠大於 1

**第 2 題**　某反應在 300 K 時 k ＝ 2.0 × 10⁻⁴ s⁻¹，Eₐ ＝ 80 kJ/mol。求 320 K 時的 k。

**第 3 題**　預測 2,2,4-三甲基戊烷（異辛烷）以 Br₂/hν 溴化的主產物。

**第 4 題**　某步驟 ΔH° ＝ +60 kJ/mol，正反應 Eₐ ＝ 75 kJ/mol。
(a) 逆反應的 Eₐ？
(b) 過渡狀態類似反應物還是產物？

**第 5 題**　用 BDE 判斷：HO· 與丙烷反應時，奪取 1° H 與 2° H 的 ΔH 各為何？預測羥自由基的選擇性高或低？

**第 6 題**　將下列物種依**穩定性**遞減排列：
(a) CH₃CH₂⁺　(b) (CH₃)₃C⁺　(c) CH₂=CH–CH₂⁺　(d) CH₃⁺

**第 7 題**　為何 Bu₃SnH 可以還原鹵烷，但 H₂ 卻無法以相同的自由基連鎖機構進行？（提示：H–H 436 kJ/mol）

<details>
<summary>綜合自我測驗參考答案（點開）</summary>

**第 1 題**：**(C)**。催化劑只降低 Eₐ，不改變 K。

**第 2 題**：
$\ln(k_2/k_1) = \dfrac{80000}{8.314}\left(\dfrac{1}{300} - \dfrac{1}{320}\right) = 9622 \times 2.083\times10^{-4} = 2.00$
$k_2 = 2.0\times10^{-4} \times e^{2.00} = 2.0\times10^{-4}\times7.39 \approx$ **1.5 × 10⁻³ s⁻¹**

**第 3 題**：(CH₃)₃C–CH₂–CH(CH₃)₂ 唯一的 3° H 在 C4 → 主產物 **2-溴-2,4,4-三甲基戊烷（2-bromo-2,4,4-trimethylpentane）**（重新編號後溴碳為 C2）。

**第 4 題**：(a) 75 − 60 ＝ **15 kJ/mol**；(b) 吸熱 → **類似產物**。

**第 5 題**：1° H：423 − 497 ＝ **−74**；2° H：413 − 497 ＝ **−84** kJ/mol。兩者都強烈放熱 → 過渡狀態類似反應物 → **選擇性低**（類似氟化）。

**第 6 題**：**(b) > (c) > (a) > (d)**。(b) 為 3°；(c) 為烯丙基陽離子，雖為 1°，但有共振穩定，一般認為與 2° 碳陽離子相當，高於 (a) 的簡單 1°；(d) 為甲基，最不穩定。〔註：(b) 與 (c) 的相對順序依資料來源略有不同，氣相中 3° 較穩定。〕

**第 7 題**：若以 H₂ 取代 Bu₃SnH，傳遞 2 變成 R· + H–H → R–H + H·，ΔH ＝ 436 − 413 ＝ **+23 kJ/mol**（吸熱），而且會生成**高能量的 H·**；H· + R–Br → H–Br + R·（ΔH ＝ 309 − 366 ＝ −57）雖然放熱，但連鎖中的吸熱步驟與高能 H· 使連鎖難以有效進行。Bu₃SnH 的 Sn–H 只有 310 kJ/mol，而且 Sn–Br 高達 552 kJ/mol，兩個傳遞步驟都強烈放熱，所以適合。
</details>

---

## 全章最終提醒

1. **三個面向缺一不可**：機構（怎麼發生）、熱力學（會不會發生）、動力學（多快發生）。
2. **BDE 是本章最有力的工具**：可以計算反應熱、判斷機構是否合理、比較自由基穩定性、解釋抑制劑的作用。
3. **哈蒙假說是連結熱力學與動力學的橋梁**：由 ΔH 推斷過渡狀態的位置，進而解釋選擇性與同位素效應。
4. **中間體的穩定性判斷原則**：缺電子的物種喜歡推電子基，富電子的物種喜歡拉電子基，共振對所有物種都有利。
5. 本章的工具（機構、位能圖、哈蒙假說、中間體穩定性）會在第 6 章以後的離子反應（S_N1、S_N2、E1、E2）中持續使用。
