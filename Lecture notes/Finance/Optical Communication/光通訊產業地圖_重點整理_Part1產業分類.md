# 光通訊產業地圖｜重點整理 Part 1：以產業分類

> 版本：2026-09-21｜底稿：《資料中心光通訊技術細流與廠商地圖》第二章
> 本版做了三件事：① 把第二章壓縮成重點；② 補上 2025–2026 年各環節市占數據；③ 修正原文錯誤與過時資訊（見第 0 節）
> 搭配文件：《Part 2：廠商索引——業務與市占》（同一套業務代碼，可交叉查詢）

---

## 圖例與業務代碼

### 份額信心等級

| 等級 | 定義 | 使用方式 |
|---|---|---|
| **A** | 具名機構或公司揭露的直接數字 | 可直接引用，注意時點 |
| **B** | 多來源區間、由公開數字推算、或只有「前 N 大合計」 | 看方向與量級，不要當精確值 |
| **C** | 只有定性排名，找不到可靠數字 | 以 龍頭／前二／前三／二線／利基／新進 標示，**不臆測數字** |

### 業務代碼（Part 1、Part 2 共用）

| 層 | 代碼 |
|---|---|
| A 材料 | A1 InP 基板｜A2 GaAs 基板｜A3 SOI 晶圓｜A4 ABF 絕緣膜｜A5 高速 CCL｜A6 低稜銅箔｜A7 矽晶圓 |
| B 磊晶 | B1 化合物半導體磊晶片（InP／GaAs） |
| C 光晶片 | C1 EML｜C2 CW-DFB 與高功率 CW（含 CPO 外部光源）｜C3 VCSEL｜C4 光偵測器｜C5 調變器（TFLN 等） |
| D 電晶片 | D1 PAM4 DSP｜D2 Driver／TIA｜D3 SerDes 與介面 IP｜D4 Retimer（乙太網／PCIe）｜D5 AEC 晶片 |
| E 矽光與 PIC | E1 矽光代工｜E2 InP PIC｜E3 光學中介層｜E4 SiGe BiCMOS 代工（TIA／Driver 用） |
| F 被動與連接 | F1 光纖光纜｜F2 MPO／光纖連接器｜F3 CPO 可拆式光連接器｜F4 光纖陣列 FAU｜F5 被動光學元件｜F6 結構化佈線｜F7 光纖熔接機 |
| G 模組 | G1 光模組（品牌）｜G2 光學代工 |
| H 銅互連 | H1 AEC 整線｜H2 DAC、高速線纜與連接器｜H3 ALC（LED 主動線纜） |
| I 交換 | I1 交換晶片｜I2 交換機品牌｜I3 ODM 整機 |
| J 封裝 | J1 晶圓級先進封裝（CoWoS／SoIC／COUPE）｜J2 OSAT｜J3 ABF 載板 |
| K 設備 | K1 MOCVD｜K2 MBE｜K3 前段晶圓設備｜K4 高精度貼裝與打線｜K5 光子自動化組裝測試｜K6 精密運動平台｜K7 切割研磨｜K8 製程氣體 |
| L 測試 | L1 探針卡與探針台｜L2 ATE（含光電 ATE）｜L3 晶圓級燒機｜L4 光通訊量測儀器 |
| M 前沿 | M1 CPO 光引擎與交換機｜M2 Optical I/O｜M3 OCS 光交換 |

---

## 第 0 節　本版修正：原文錯誤與已過時的資訊

**這一節請優先閱讀。** 以下項目若沿用原文，會導致判斷錯誤。

| # | 原文寫法 | 修正後 | 依據 |
|---|---|---|---|
| 1 | 光模組：Coherent 約 16%、全球第二 | **2025 年排名：中際旭創第 1、新易盛首度升至第 2 並超越 Coherent、Coherent 第 3、光迅穩居第 4**；第 5–8 名份額接近、競爭最激烈；Molex 排名上升 | LightCounting 2026/5 年度供應商排名（原文引用的第三方轉述與 LightCounting 本身說法矛盾，以原始機構為準） |
| 2 | Credo「FY26 Q3」營收 2.68 億美元 | 應為 **FY26 Q2**（約 2025/8–10 月季，年增 272%） | LightCounting 2025/12 季度追蹤 |
| 3 | 味之素（4967.T） | **2802.T**（4967 是小林製藥） | 代號誤植 |
| 4 | Soitec（SLOIF.PA） | **SOI.PA**（SLOIF 是美國 OTC 代號） | 代號格式錯誤 |
| 5 | CommScope 列為結構化佈線廠 | 其資料中心光纖佈線所屬的 CCS 事業已於 **2026/1/12 併入 Amphenol**（105 億美元；CCS 2026 年營收預估約 41 億美元） | Amphenol 公告 |
| 6 | 「中科光電」列為中國 InP 磊晶廠 | 無法確認其 InP 磊晶業務，**本版移除** | 查無可靠資料 |
| 7 | 華工正源、聯鈞列為 VCSEL 二線 | 找不到兩者自製資料通訊 VCSEL 晶片的依據，**移除 VCSEL 項**；華工正源歸為模組廠，聯鈞改列雷射晶片與 TO 封裝 | 查無可靠資料 |
| 8 | Coherent 列為 GaAs 基板供應商 | Coherent 擁有 6 吋 GaAs **VCSEL 晶圓廠**（元件製造），是否自行長晶生產 GaAs 基板**未獲證實**，改列元件層 | Coherent 年報 |
| 9 | Taiyo Nippon Sanso 只列「特殊氣體」 | 同時也是 **MOCVD 設備商**（Nomura 產業地圖將其與 Aixtron、Veeco 並列為磊晶設備） | Nomura |
| 10 | Molex 只列於銅互連 | Molex 亦是**光模組廠**，2025 年在 LightCounting 前十中排名上升（供應 Amazon 400G／800G） | LightCounting 2026/5 |
| 11 | 台股代號加 .TW | 上市／上櫃別容易標錯，本版台股一律只寫四位代號 | — |

**公司狀態更新**（原文未錯，但需知道）：新光電氣 Shinko 已於 2025 年私有化下市；Juniper 已於 2025/7 併入 HPE；Alphawave 於 2025 年宣布由 Qualcomm 收購；Intel 的矽光可插拔模組事業已於 2023 年移轉給 Jabil；Tektronix 已隨 Fortive 精密技術部門於 2025 年分拆為 Ralliant（RAL）；Celestial AI 已於 2026/2/2 完成併入 Marvell。

---

## 第 1 節　一頁總覽：13 層的集中度、供需與定價權

| 層 | 集中度 | 2026 供需 | 定價權 | 一句話判斷 |
|---|---|---|---|---|
| **A 材料** | 極高：InP 前三 80–90%；SOI 單一龍頭 60–70% 以上 | **最緊** | 高 | 整條鏈最上游的硬瓶頸，長約與預付款已成常態 |
| **B 磊晶** | 中高 | 緊 | 中高 | 「內製 vs 外購」決定誰受惠於缺貨 |
| **C 光晶片** | 高：EML＋CW 前三約 55% | **最緊（200G EML）** | **最高之一** | 200G EML 目前近乎單一供應商 |
| **D 電晶片** | 極高：高階 DSP 雙寡占逾 90% | 平衡 | **最高之一** | 利潤池最深；LPO/CPO 是對 DSP 的長期威脅 |
| **E 矽光代工** | 高：三強主導，無公開份額 | 緊（產能預約至 2028） | 高 | CPO 的價值往這裡集中 |
| **F 被動與連接** | 中：光纖前五逾 40% | 偏緊 | 中（CPO 連接器例外） | CPO 使每台交換機光纖數暴增，連接器價值上升 |
| **G 光模組** | 中：前二約 38% | 需求強 | **低～中** | 份額最高的環節，卻不是利潤最高的環節 |
| **H 銅互連** | AEC 極高：單一龍頭 80–88% | 強 | AEC 高、線材低 | 機櫃內仍是銅，但 1.6T 後光的成本逼近 |
| **I 交換** | 晶片極高、整機中 | 強 | 晶片高 | AI 叢集轉向乙太網，ODM 白牌份額上升 |
| **J 封裝** | 極高：COUPE 為 CPO 唯一量產平台 | 緊 | 高 | CPO 把「光模組組裝」變成「晶圓廠＋封裝廠」的事 |
| **K 設備** | 高 | **緊：MOCVD 交期 10–12 個月** | 高 | 擴產的時間常數由設備決定 |
| **L 測試** | 高：ATE 雙寡占約 80% | **CPO 測試成新瓶頸** | 高 | 每顆 PIC 全檢逾 100 秒，決定 CPO 產出上限 |
| **M 前沿** | 早期 | 導入期 | 未定 | 交換機 CPO 已量產；加速器 CPO 約 2027–2028 |

---

## 第 2 節　各層重點

### A　基板與晶圓材料

**A1 InP 基板｜三家寡占，整條鏈最硬的瓶頸**

| 廠商 | 份額 | 信心 | 說明 |
|---|---|---|---|
| Sumitomo Electric | 30–60% | B | 三個來源差距極大（約 30%／40%／60%），口徑不一；可確定為第一大 |
| AXT | 約 35% | B | 兩個來源一致；產能主要在北京（子公司通美） |
| JX Advanced Metals | 約 10% | B | 單一來源；計畫最高投資 1,200 億日圓，產能擴至 FY2025 的 7–10 倍 |
| 中國廠（雲南鍺業、廣東先導、鼎泰） | 合計 <10% | B | 產量比龍頭少一個數量級 |

- 前三大合計 80–90%，技術壁壘在多晶合成與單晶生長，業界單晶良率普遍僅 15–25%。
- 2026 年 3/4 吋月需求約 70–80 萬片，全球月供給約 40 萬片（Substack 產業分析，非官方）。
- 中國自 2025/2 起對 InP 實施出口許可制，AXT 首批許可延至 2025/6 才取得，積壓訂單明顯增加。**這是 AXT 最大的單一風險，也是日系供應商議價力的來源。**
- 長約化：AXT–Lumentum 6 年產能保留（2026/7）、AXT–Coherent 預付款約 2,229 萬美元、AXT–南京 Casela 2027 年約 1.73 億人民幣、聯亞–Sumitomo 長約至 2030。

**A3 SOI 晶圓｜單一龍頭，光子級近乎獨家**

- Soitec 占整體 SOI 市場 60–70% 以上【B】；全球約八成 SOI 產能使用其 Smart Cut 技術，信越、環球晶皆為授權方。
- **光子級 SOI**：Soitec 是 TSMC、GlobalFoundries、Tower 三家唯一已驗證的量產供應商【C，有人稱 95% 以上但來源品質不高】；相關營收接近 1 億歐元規模。CPO 每單位的矽光晶圓用量約為可插拔的數倍。

**A4 ABF 絕緣膜**：味之素近乎獨佔【C，業界普遍描述，本次未找到具名最新數字】。

**A5 高速 CCL｜台光電一家獨大**

| 廠商 | 份額 | 信心 |
|---|---|---|
| 台光電 | 全球高速 CCL 約 28%（2024 年中）；800G／1.6T 交換機約 50–60% | B |
| 台燿、聯茂、Panasonic、生益 | 前五大高頻高速 CCL 合計逾 45% | B |

- 客戶集中度的另一面：台光電在 AWS Trainium 約 80%、Meta MTIA 近 100%、Google TPU 約 50%（分析師估）。
- 補充：ABF 載板用核心材料由 Resonac 占逾 90%（非原第二章廠商，列供參考）。

**A6 低稜銅箔、A7 矽晶圓**：三井金屬、古河、長春（銅箔）；信越、SUMCO（矽晶圓）——皆 C 級，屬相鄰產業。

---

### B　磊晶

- **分水嶺**：Lumentum、Coherent、Sumitomo、Broadcom 自製磊晶；其餘雷射廠向 IQE、聯亞、全新、英特磊採購。缺貨時，外購陣營受限更嚴重。
- 份額：無可靠數字【C】。Mordor 估 InP 晶圓市場（含基板與磊晶）前五大（Sumitomo、AXT、Freiberger、JX、全新）2024 年合計約 70%【B】，但此口徑混合了基板與磊晶。
- 景氣溫度計：聯亞 2026 上半年營收年增 111%、毛利率 56%；英特磊 2025 年 InP 磊晶營收年增 97%；IQE 與 Tower 於 2026/6 簽多年期 InP 磊晶長約。

---

### C　光晶片

**C1 EML ＋ C2 CW-DFB｜2026 年合計月產能約 5,070 萬顆，較前一年翻倍（TrendForce 2026/6）**

| 環節 | 前幾大 | 份額 | 信心 |
|---|---|---|---|
| EML＋CW-DFB 合計 | Broadcom、Lumentum、Sumitomo | 三家合計約 55% | A |
| CW-DFB 產能 | Broadcom、Sumitomo 領先，其次 Coherent、聯亞／聯鈞 | 四家合計約 74% | A |
| **200G/lane EML** | **Lumentum** | 目前唯一大量出貨者 | B |
| 高功率 CW（CPO 外部光源） | Lumentum 技術領先 | — | C |

- Lumentum 自承供應缺口從 30% 以上再擴大；InP 雷射晶圓良率 15–50%。
- 高功率 CW 輸出功率從 2025 年 400 mW 進展到 2026 年 800 mW／1 W 級。

**C3 VCSEL**：整體 VCSEL 市場（含手機 3D 感測）Lumentum＋Coherent 約 80%【B，Yole 2022，舊資料且口徑不同】；資料通訊 VCSEL 以 Broadcom、Coherent 為主【C】；Coherent 累計出貨 10 億顆資料通訊 VCSEL。

**C5 TFLN 調變器**：HyperLight（IP）＋ 聯穎光電（代工）＋ Jabil（整合）；光庫科技為中國代表。無份額數據【C】。

**中國光晶片進度**：25G 以上高速光晶片國產化率仍低於 15%；CW 相對成熟（源杰、仕佳）；光迅是中國唯一自製 25G EML 者；長光華芯自 2023 年供應 56G PAM4 EML；200G/lane EML 距量產尚遠。

---

### D　電晶片

| 環節 | 主要廠商 | 份額 | 信心 |
|---|---|---|---|
| **D1 高階 PAM4 DSP（400G+）** | Marvell | 約 60% | B |
| | Broadcom | 30% 以上 | B |
| | 兩家合計 | **逾 90%** | B |
| | Credo、Semtech、MaxLinear、絡達 | 合計 <10% | B |
| **D2 Driver／TIA** | Marvell、MACOM 並列領先；Semtech 押注線性 224G | — | C |
| **D3 介面 IP** | Synopsys 占有線介面 IP 約 55.6%（2021，舊） | — | B |
| | 設計 IP 整體（2023）：Synopsys 21.9%、Cadence 5.6%、Alphawave 3.1% | — | A |
| **D4 PCIe Retimer** | Astera＋譜瑞＋Analogix 合計約 86%；Astera 晶片進入逾 80% 的 AI 伺服器 | — | B |
| **D5 AEC 晶片與整線** | Credo | 約 80–88% | B |

- **DSP 份額的分歧要記住**：另有報告稱 Broadcom 整體 PAM4 DSP 營收居首。合理解釋是 Broadcom 在 100G／400G 存量與內部自用較多，Marvell 則在 800G／1.6T 新設計案領先。估值時區分「存量營收」與「新增設計案」。
- 追兵：絡達 2026 Q1 出貨成長數倍，已進入全球前十大模組廠；Broadcom 以 Vantage 5/6 重返 PCIe retimer；Marvell PCIe Gen6 retimer 預計 2027 量產。

---

### E　矽光代工與 PIC 平台

**沒有任何機構公開矽光代工份額【C】**，三強各自宣稱領先，說法本身就互相矛盾：

| 廠商 | 宣稱的「領先」 | 客觀事實 |
|---|---|---|
| TSMC | CPO 的事實標準 | COUPE 為 Broadcom TH6-Davisson、NVIDIA Quantum-X 共同採用，2026/4 量產 |
| GlobalFoundries | 營收最大的純矽光代工 | 2025/11 併入 AMF；矽光營收破 10 億美元目標從 2030 提前到 2028 |
| Tower | 可插拔 1.6T 矽光晶圓領先 | 目標 2026/12 前矽光月出貨達 2025 Q4 的 5 倍以上；客戶以預付款預約 2028 年前新增產能逾 70%；另宣布 30 億美元日本擴產（含 10 億美元政府補助） |

- **被低估的第二條線**：Tower 的 SiGe BiCMOS 是光模組 TIA／Driver 的主要代工製程之一，2025 年 SiGe 營收成長 43%（E4）。矽光與 SiGe 的需求幾乎同步，但矽光毛利較高。
- POET（光學中介層）屬微型股、二元性押注。
- InP PIC 主要用於相干光（Nokia／Infinera），資料中心內部少用。

---

### F　被動光學、光纖與連接器

- **F1 光纖**：全球前五大合計逾 40%【B】；Corning、長飛、Prysmian、Fujikura、Sumitomo、亨通、中天、Furukawa 為主要玩家，個別份額口徑不一【C】。Corning 與長飛都自稱第一，比較時注意口徑（光纖、光纜、預製棒不同）。
- **F6 結構化佈線**：CommScope 的 CCS 事業已併入 Amphenol（見第 0 節）。**Amphenol 因此同時握有銅互連與資料中心光纖佈線兩條線。**
- **F3 CPO 可拆式連接器、F4 FAU**：NVIDIA 揭露其 CPO 連接器與光纖組件供應商為 Corning、SENKO、波若威、天孚；Marvell 光引擎採用 SENKO MPC。無份額數據【C】。一台 102.4T CPO 交換機約需 1,152 根光纖，這是價值上升的物理原因。
- **F5 被動元件**：天孚、騰景、波若威、上詮、光庫【C】。

---

### G　光模組

**2025 年排名（LightCounting，2026/5）與推算份額**

| 排名 | 公司 | 2025 營收 | 推算份額 | 信心 |
|---|---|---|---|---|
| 1 | 中際旭創 | 53 億美元 | 約 23% | B |
| 2 | **新易盛** | 35 億美元 | 約 15% | B |
| 3 | Coherent | 未拆分揭露 | 低於 15% | B |
| 4 | 光迅 | — | — | C |
| 5–8 | 份額接近，競爭最激烈；Molex 排名上升 | — | — | C |

- 推算方式：營收 ÷ LightCounting 估計的 2025 年光模組及相關產品市場（逾 230 億美元，年增 50%）。其中乙太網路光模組約 170 億美元（年增 60%），占整體約 75%。
- 中際旭創另有估計：800G 約 35–40%、1.6T 約 50–70%【B】。
- Fabrinet：最大光學代工，非品牌商【C】。
- **價值判斷**：前二名合計約 38%，是份額最集中的公司群，但 DSP 與 EML 的利潤率結構性更高。**模組份額 ≠ 價值鏈主導權。**

---

### H　銅互連

- **H1 AEC**：Credo 約 80–88%【B】；JPMorgan 估 AEC 市場 2028 年約 40 億美元。Marvell、Astera、Broadcom 為第二、三供應商。
- **關鍵事實**：Rubin 世代的機櫃內 scale-up（Kyber 背板、Rubin Ultra 中板）仍是被動銅。受惠者是 H2（線材與連接器：Amphenol、立訊等），不是 AEC。AEC 的戰場在機櫃之間。
- 800G 時 AEC 對光仍有成本優勢；1.6T 時訊號調理複雜度使成本逼近光模組；3.2T 之後光幾乎是預設。

---

### I　交換晶片與整機

| 口徑 | 廠商與份額 | 信心 |
|---|---|---|
| 乙太網交換機（整體，IDC 2025 Q1） | Cisco 約 31%、Arista 13.9%、NVIDIA 12.5%、ODM 合計約 12% | B |
| 資料中心乙太網交換機（Dell'Oro） | Arista 連續多季第一；Celestica、NVIDIA 於 2025 Q1 進入前五；智邦、Celestica、NVIDIA 為 2025 Q3 份額增幅最大者 | A（定性排名） |
| 商用交換晶片 | Broadcom 龍頭 | C |
| InfiniBand | NVIDIA 近乎獨家 | C |

- 2025 Q3 資料中心乙太網交換機單季營收逾 80 億美元，三年內翻倍。AI 叢集兩年前逾八成用 InfiniBand，乙太網正快速反攻。

---

### J　先進封裝

| 環節 | 廠商與份額 | 信心 |
|---|---|---|
| J1 CoWoS／SoIC／COUPE | TSMC；COUPE 為目前 CPO 唯一量產平台 | C |
| J2 OSAT（2024，前十大內份額） | 日月光 44.6%、Amkor 15.2%、長電約 10% | A |
| J3 ABF 載板 | 前五大約 72%；欣興、Ibiden 為第一梯隊；AT&S、南電、新光、Semco 第二梯隊；景碩、京瓷、凸版次之 | B |

- 注意 J2 的 44.6% 是「前十大營收加總」內的占比，不是全市場。

---

### K　製造設備

| 環節 | 廠商與份額 | 信心 |
|---|---|---|
| K1 MOCVD | Aixtron 46%、Veeco 27%、中微 23%（Gartner 2018，舊）；LED 退潮後 Aixtron 約 40%、Veeco 約 12% | B |
| K1 InP／GaAs 光電用 As/P MOCVD | Aixtron 主導（G10-AsP，Lumentum 2026/5 多筆訂單）；Taiyo Nippon Sanso 為日系選項 | C |
| K4 高精度貼裝 | ASMPT（AMICRA）、Besi、K&S、Palomar | C |
| K5 光子自動化組裝測試 | ficonTEC（羅博特科子公司）自稱在 CPO Insertion 2/3 具獨供地位 | C（公司說法） |
| K7 切割研磨 | Disco 業界通說約七成以上 | C |

- MOCVD 交期 10–12 個月，是 InP 產能擴張的硬性時間常數。

---

### L　測試

| 環節 | 廠商與份額 | 信心 |
|---|---|---|
| L2 ATE | Advantest 約 50%、Teradyne 約 30%（2023），合計約 80%；Advantest 2025 年持續擴大份額 | B |
| L1 探針卡 | 前五（Technoprobe、FormFactor、MJC、JEM、旺矽）合計約 73% | B |
| 矽光測試設備 | Keysight、FormFactor、VIAVI、EXFO、Teradyne 合計約 46.5% | B |
| L4 光通訊儀器 | Keysight、VIAVI、Anritsu、EXFO、Yokogawa 為主 | C |

- **CPO 測試四道插入點**：Insertion 3（光引擎模組）機台數量最多；Insertion 4（系統級）單價最高、目前在 NPI 階段。每顆 PIC 全檢平均逾 100 秒（TrendForce）。
- 新產品：Teradyne Photon 100（2026/3）；FormFactor TRITON（與 Advantest、TEL 合作）；FormFactor 2026 Q1 首度揭露 NVIDIA 為 10% 以上客戶。

---

### M　前沿：CPO、Optical I/O、光交換

| 環節 | 狀態 |
|---|---|
| M1 CPO 交換機 | Broadcom TH5-Bailly 已量產、TH6-Davisson 102.4T 出貨中；NVIDIA Quantum-X Photonics 2026 年初上市、Spectrum-X Photonics 2026 年量產；Marvell 6.4T 光引擎客戶整合中 |
| M2 Optical I/O | Ayar Labs 最接近量產（UCIe 標準、客戶改動最少）；Lightmatter 架構較激進；Celestial AI 已併入 Marvell |
| M3 OCS | Google 自研自用（最大部署者）；Lumentum、Coherent、Calient、Polatis 為商用供應商 |

- 加速器端 CPO：NVIDIA 路線圖將 NVLink 8 CPO 放在 2028 年 Feynman 世代；Lumentum 預期 scale-up CPO 首批出貨約在 2027 年底。

---

## 第 3 節　五個最值得追蹤的份額變化訊號

| # | 訊號 | 為什麼重要 | 看哪裡 |
|---|---|---|---|
| 1 | **200G EML 第二供應商何時量產** | 打破 Lumentum 近乎獨家的時點，決定其定價權持續多久 | Broadcom、Coherent、Mitsubishi 的 200G EML 出貨公告 |
| 2 | **InP 基板長約與出口許可** | 最上游硬瓶頸，決定 2027 年雷射供給上限 | AXT 的 8-K、JX 擴產進度、中國出口許可動態 |
| 3 | **光模組前二易位後的格局** | 新易盛超越 Coherent 是否持續；1.6T 份額分配 | LightCounting 年度排名、兩家季報 |
| 4 | **高階 DSP 份額與 LPO／LRO 滲透率** | 線性架構每上升一點，DSP 的可服務市場就少一點 | Marvell／Broadcom 光通訊營收、Semtech／MACOM 線性 IC 營收 |
| 5 | **CPO 測試 Insertion 3／4 設備訂單** | CPO 放量的真正速度由測試產能決定 | ficonTEC（羅博特科公告）、Teradyne、FormFactor、Advantest |
