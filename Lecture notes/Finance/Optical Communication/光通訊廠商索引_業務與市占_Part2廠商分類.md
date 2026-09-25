# 光通訊廠商索引｜Part 2：業務與市占（以廠商分類）

> 版本：2026-09-21｜收錄範圍：《資料中心光通訊技術細流與廠商地圖》第二章出現的全部廠商與機構，共 149 個條目（另有 12 家子公司或被併事業併入母公司條目，對照表見第七節末）
> 原第二章的「中科光電」因無法確認其業務，本版移除
> 業務代碼、信心等級與 Part 1 相同；本版修正事項見 Part 1 第 0 節

---

## 使用說明

### 欄位怎麼讀

| 欄位 | 意義 |
|---|---|
| **業務** | 業務代碼＋內容。代碼對應 Part 1 的層，可回查產業脈絡 |
| **份額** | 該公司在「該業務市場」中的份額或排名 |
| **信心** | **A** 具名直接數字｜**B** 區間、推算或僅有合計｜**C** 僅定性排名，不臆測數字 |

### 光通訊純度（本版新增，供投資篩選用）

| 標記 | 定義 |
|---|---|
| **核心** | 光通訊或 AI 互連是主業，股價對本產業高度敏感 |
| **重要** | 光通訊是主要成長引擎之一，但另有大型業務 |
| **相鄰** | 有供應關係，但光通訊占營收比例低 |

### 業務代碼速查

| 層 | 代碼 |
|---|---|
| A 材料 | A1 InP 基板｜A2 GaAs 基板｜A3 SOI｜A4 ABF 膜｜A5 高速 CCL｜A6 銅箔｜A7 矽晶圓 |
| B 磊晶 | B1 化合物磊晶片 |
| C 光晶片 | C1 EML｜C2 CW-DFB 與高功率 CW｜C3 VCSEL｜C4 光偵測器｜C5 調變器 |
| D 電晶片 | D1 PAM4 DSP｜D2 Driver／TIA｜D3 SerDes 與介面 IP｜D4 Retimer｜D5 AEC 晶片 |
| E 矽光與 PIC | E1 矽光代工｜E2 InP PIC｜E3 光學中介層｜E4 SiGe 代工 |
| F 被動與連接 | F1 光纖光纜｜F2 光纖連接器｜F3 CPO 可拆式連接器｜F4 FAU｜F5 被動光學｜F6 結構化佈線｜F7 熔接機 |
| G 模組 | G1 光模組｜G2 光學代工 |
| H 銅互連 | H1 AEC 整線｜H2 DAC、線纜與連接器｜H3 ALC |
| I 交換 | I1 交換晶片｜I2 交換機品牌｜I3 ODM 整機 |
| J 封裝 | J1 晶圓級先進封裝｜J2 OSAT｜J3 ABF 載板 |
| K 設備 | K1 MOCVD｜K2 MBE｜K3 前段設備｜K4 貼裝打線｜K5 光子自動化組裝測試｜K6 精密運動平台｜K7 切割研磨｜K8 製程氣體 |
| L 測試 | L1 探針卡與探針台｜L2 ATE｜L3 燒機｜L4 光通訊儀器 |
| M 前沿 | M1 CPO｜M2 Optical I/O｜M3 OCS |

### 排列方式

依上市市場分組：美股 → 台股 → 陸港股 → 日股 → 歐股 → 韓股 → 未上市與研究機構。組內先「核心、重要」逐家詳列，再以速查表列「相鄰」廠商。文末附錄一為「依業務反查公司」，附錄二為「TradingView 分類與匯入指南」。

---

## 一、美股

### Lumentum（LITE）｜核心

**定位**：200G EML 近乎獨家、CPO 高功率外部光源技術領先；模組業務為輔。2026/3 獲 NVIDIA 投資 20 億美元。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| C1 EML（100G／200G） | **200G/lane 目前唯一大量出貨者**；EML＋CW 前三大之一（三家合計約 55%） | B | FY26 Q3 營收 8.08 億美元（+90%）；200G EML 營收單季翻倍；供應缺口逾 30% 且擴大 |
| C2 CW-DFB 與高功率 CW（CPO 外部光源） | 高功率 CW 技術領先 | C | 800 mW／1 W 級；NVIDIA CPO 外部光源組裝與對準測試供應商之一 |
| C3 VCSEL | 與 Coherent 合計約 80%（整體 VCSEL 含手機，Yole 2022） | B | 資料通訊 VCSEL 份額無可靠數字 |
| C4 光偵測器 | — | C | — |
| B1 磊晶 | 自製 | — | 3 吋轉 4 吋、擴產約 40%；2026/5 下單多台 Aixtron G10-AsP |
| G1 光模組 | 非前四 | C | 2023 年收購 Cloud Light 取得模組製造能力 |
| M3 OCS | — | C | 已推出光交換產品 |
| 範圍外 | — | — | 窄線寬雷射（相干／DCI）連續 9 季成長、年增 120% |

**上游綁定**：AXT 6 年 InP 基板產能保留協議（2026/7）。

---

### Coherent（COHR）｜核心

**定位**：垂直整合最完整的光通訊公司（材料 → 雷射 → 模組），以 6 吋 InP／GaAs 產線為成本武器。FY2025 營收 58.1 億美元（+23%）。2026/3 獲 NVIDIA 投資 20 億美元。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| G1 光模組 | **2025 全球第 3**，份額低於 15% | B | 被新易盛超越；原文「約 16%、第二」已修正 |
| C1 EML／DML | EML 主要供應商之一，非前三 | C | 公司稱多數自家 EML 模組採用自製 EML；另有報導稱部分 EML 向 Lumentum 採購，兩說並存 |
| C2 CW-DFB | CW 產能第三（與 Broadcom、Sumitomo、聯亞／聯鈞合計約 74%） | A（合計） | 開發 400 mW CW；轉向 6 吋 InP |
| C3 VCSEL | 資料通訊 VCSEL 雙強之一；整體與 Lumentum 合計約 80% | B | 多座 6 吋 GaAs VCSEL 廠；累計出貨 10 億顆資料通訊 VCSEL、2.5 億顆 InP 雷射 |
| C4 光偵測器 | — | C | 自製 |
| B1 磊晶 | 自製 | — | 德州 Sherman 6 吋 InP；獲美國 CHIPS 意向書支持擴產 |
| E1 矽光（自有設計） | — | C | 1.6T 矽光模組、LRO 模組 |
| M1 CPO | 開發中 | C | OFC 2026 展示 6.4T 矽光 CPO；NVIDIA CPO 外部光源供應商之一 |
| M3 OCS | — | C | 已推出 OCS 產品 |
| F5 被動光學與部分 IC | — | C | II-VI 血統，自製被動元件 |

**上游綁定**：預付 AXT 約 2,229 萬美元換取北京產能承諾。

---

### AXT（AXTI）｜核心

**定位**：InP 基板全球第二、西方陣營擴產彈性最大者；最大風險在中國出口許可。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| A1 InP 基板 | **約 35%** | B | 兩個來源一致；產能在北京（子公司通美）；2025/12 募資約 1 億美元擴產 |
| A2 GaAs 基板 | 前三（與 Freiberger、Sumitomo） | C | — |
| 鍺基板 | — | C | 衛星太陽能為主，範圍外 |
| 上游原料 | — | — | 持股 10 家中國原料公司，垂直整合高純材料 |

**長約**：Lumentum 6 年產能保留（2026/7）；Coherent 預付款；南京 Casela 2027 年 1.73 億人民幣（預付 50%）。
**風險**：中國自 2025/2 實施 InP 出口許可，首批許可延至 2025/6 才取得。

---

### Credo（CRDO）｜核心

**定位**：AEC 的開創者與壟斷者，以自有 SerDes／DSP IP 從晶片垂直整合到成品線。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| H1 AEC 整線＋D5 AEC 晶片 | **約 80–88%** | B | OFC 2026 展示 1.6T AEC 已設計進 NVIDIA Vera Rubin NVL144 與 Kyber；JPMorgan 估 AEC 市場 2028 年約 40 億美元 |
| D4 乙太網 Retimer | — | C | 含 scale-up 用 Blue Heron |
| D4 PCIe Retimer | 新進 | C | 預計 2026 年起有量產營收 |
| D1 光學 DSP／LRO DSP | 份額有限 | C | — |
| D3 SerDes IP 授權與 chiplet | — | C | — |
| H3 ALC（microLED 主動線纜） | 尚未量產 | — | 收購 Hyperlume；30 m 內；FY2027 送樣、FY2028 起量 |
| 其他新產品線 | — | — | ZeroFlap 光學、OmniConnect gearbox |

**營收**：FY26 Q2 2.68 億美元（年增 272%；原文誤植為 Q3，已修正）。

---

### Astera Labs（ALAB）｜核心（互連）

**定位**：AI 伺服器 PCIe retimer 的事實標準，正往 scale-up fabric 擴張。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| D4 PCIe／CXL Retimer（Aries） | **主導者**：晶片進入逾 80% AI 伺服器；與譜瑞、Analogix 合計約 86% | B | 注意「滲透率 80%」不等於「份額 80%」；Broadcom、Marvell 正回攻 |
| D4 乙太網 Retimer（Taurus）＋D5 AEC 模組（SCM） | 挑戰者 | C | 2026/2 推出 PCIe 6.0 Aries SCM |
| I1 Fabric Switch（Scorpio） | 新進 | C | PCIe 與 scale-up 交換 |
| 生態系 | — | — | NVLink Fusion、UALink 成員 |
| 範圍外 | — | — | CXL 記憶體控制器（Leo） |

---

### Fabrinet（FN）｜核心

**定位**：全球最大光學代工，不做品牌；CPO 系統組裝要角。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| G2 光學代工 | 龍頭 | C | 替 NVIDIA、Cisco、Marvell 等代工；超大規模業者分散供應鏈的美系選項 |
| M1 CPO 系統組裝 | NVIDIA 揭露的 CPO 系統組裝兩家之一（另一家為鴻海） | C | — |

---

### Applied Optoelectronics（AAOI）｜核心

**定位**：美國本土製造的光模組廠，受惠「製造回流」敘事；份額小、股價波動大。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| G1 光模組 | 二線（非 LightCounting 前十） | C | 800G；德州產能 |
| C1／C2 雷射晶片 | 自用 | C | 垂直整合 |
| 範圍外 | — | — | CATV |

---

### POET Technologies（POET）｜核心（微型股）

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| E3 光學中介層 | 新進 | C | 2025 Q3 生產訂單僅 560 萬美元；與鴻海合作 3.2T 光引擎，目標 2026 年底；現金逾 3 億美元；屬二元性押注 |

---

### Broadcom（AVGO）｜重要

**定位**：唯一同時站在交換晶片、DSP、雷射、CPO 四層的公司；乙太網 AI 網路的核心供應商。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| I1 交換晶片（Tomahawk、Jericho） | 商用乙太網交換晶片龍頭 | C | TH6 102.4T；64 個 Condor 3 nm SerDes core |
| M1 CPO 交換機（TH5-Bailly、TH6-Davisson） | **CPO 量產先行者** | C | TH5-Bailly 2025 年出貨數萬台（一說逾 5 萬台）；每 800G 約 5 W（含雷射） |
| D1 PAM4 DSP（Sian3 等） | 高階 30% 以上；整體營收或居首 | B | 來源分歧，見 Part 1 D 層 |
| C1 EML＋C2 CW-DFB | EML＋CW 前三（三家合計約 55%）；**CW-DFB 產能第一梯隊** | A（合計） | — |
| C3 VCSEL＋C4 光偵測器 | 資料通訊 VCSEL 雙強之一 | C | — |
| D4 PCIe Retimer（Vantage 5／6） | 重返市場的挑戰者 | C | — |
| D5 AEC 晶片 | 挑戰者 | C | — |
| D3 SerDes（Condor） | 自用 | — | — |
| D2 Driver／TIA | 弱 | C | 類比非其核心 |

---

### Marvell（MRVL）｜重要

**定位**：光學 DSP 份額第一、Driver／TIA 雙強之一，並透過 Celestial AI 押注光 I/O。2026/3 獲 NVIDIA 投資 20 億美元（NVLink Fusion 為合作支柱）。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| D1 PAM4 DSP（Ara 3 nm、Spica） | **高階約 60%**（另一說約 70%） | B | 業界首顆 1.6T DSP；Ara 整合高擺幅雷射驅動 |
| D2 線性 Driver／TIA | 與 MACOM 並列領先（400G+） | C | — |
| D5 AEC 晶片（Alaska A） | 挑戰者 | C | AEC＋retimer 營收預期隔年翻倍以上 |
| D4 PCIe Retimer（Gen6） | 新進 | C | 已拿下逾 10 個 socket，預計 FY2028 全面貢獻 |
| I1 交換晶片（Teralynx） | 三線 | C | — |
| M1 CPO 光引擎（6.4T） | 客戶整合中 | C | 搭配 SENKO MPC 連接器 |
| M2 Optical I/O（Photonic Fabric） | — | — | 2026/2/2 完成收購 Celestial AI（約 32.5–35 億美元）；目標 FY2029 年底年化營收 10 億美元 |
| 範圍外 | — | — | 相干 DSP 與 ZR 模組（DCI；2023 年 LightCounting 模組第 10）、客製 ASIC |

---

### Tower Semiconductor（TSEM）｜重要

**定位**：可插拔矽光晶圓代工主要供應者，同時是 TIA／Driver 用 SiGe 代工廠——兩條線同步受惠。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| E1 矽光代工（PH18 200 mm、PH45 300 mm） | 三強之一；分析師認為 1.6T 可插拔矽光晶圓領先 | C | 無機構公開份額；目標 2026/12 月出貨達 2025 Q4 五倍以上；客戶預約 2028 年前新增產能逾 70%；2027 已簽約營收 13 億美元、2028 營收模型 28 億美元；另宣布 30 億美元日本擴產 |
| E4 SiGe BiCMOS（TIA、Driver、LPO、主動銅纜） | — | C | 2025 年 SiGe 營收年增 43% |
| M1 CPO 代工（300 mm 混合鍵合＋TSV） | 新進 | C | 2025/11 推出 CPO Foundry |
| 矽光內嵌 InP 雷射平台 | — | C | IQE 多年期 InP 磊晶長約（2026/6） |
| 範圍外 | — | — | RF mobile 占 2025 年營收 23% |

---

### Semtech（SMTC）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| D2 線性 TIA／Driver | 挑戰者；200G 世代一度落後，全力押注 LPO／NPO／CPO | C | 2026/3 推出 224G/lane 線性家族 GN1838L、GN42T380（TIA）、GN42M380（MZM driver） |
| D1 PAM4 DSP／CDR | 小（屬 <10% 合計群） | B | — |
| H2 主動銅纜用線性 redriver | — | C | CopperEdge 系列 |
| 範圍外 | — | — | IoT、類比電源 |

---

### MACOM（MTSI）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| D2 Driver／TIA（PURE DRIVE 線性） | **與 Marvell 並列領先（400G+）** | C | LPO 架構已量產 |
| H2 主動銅纜用線性等化器 | 有產品，份額不明 | C | — |
| 範圍外 | — | — | 國防、工業 RF |

---

### Corning（GLW）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| F1 光纖光纜 | 全球最大光纖廠之一（與長飛各自宣稱第一，口徑不同）；全球前五合計逾 40% | C（個別） | 美國超大規模資料中心主力 |
| F2／F6 資料中心連接與佈線 | 主要玩家 | C | — |
| F3 CPO 連接器與光纖組件 | NVIDIA 揭露的 CPO 供應商之一 | C | — |
| 範圍外 | — | — | 顯示玻璃、特殊材料 |

---

### Amphenol（APH）｜重要

**定位**：高速銅互連龍頭，2026 年起再加上資料中心光纖佈線。**機櫃內 scale-up 維持被動銅的最大受惠者之一。**

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| H2 高速連接器、DAC、背板 | 全球連接器前二（與 TE） | C | — |
| H1 AEC 整線 | 次要供應商 | C | — |
| F6／F2 資料中心光纖佈線與連接 | 併入 CommScope CCS 後成為主要玩家 | C | 2026/1/12 完成，105 億美元；CCS 2026 年營收預估約 41 億美元 |

---

### GlobalFoundries（GFS）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| E1 矽光代工（Fotonix＋AMF） | **營收最大的純矽光代工**（公司與分析師說法） | C | 2025/11 併入 AMF（2026 年營收貢獻逾 7,500 萬美元）；矽光營收 10 億美元目標提前至 2028 |
| M2 Optical I/O 代工 | Lightmatter Passage 代工夥伴 | C | — |
| F3 CPO 耦合方案 | — | C | 與 SENKO 於 ECOC 2025 共同發表 |
| 晶圓代工整體 | 約 3.9%（2025，全球第五） | A | TrendForce |

---

### FormFactor（FORM）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| L1 探針卡 | 前兩大之一（前五合計約 73%） | B（合計） | 持有逾七成 MEMS 探針核心專利（單一來源） |
| L1 矽光晶圓測試（TRITON、OptoVue Pro） | 矽光測試設備五強之一（五家合計約 46.5%） | B（合計） | TRITON 與 Advantest、TEL 合作；2026 Q1 首度揭露 NVIDIA 為 10.2% 客戶 |

---

### Teradyne（TER）｜重要（原表「觀察」，本版升格）

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| L2 ATE | **約 30%**（2023；與 Advantest 合計約 80%） | B | Advantest 2025 年持續擴大份額 |
| L2 光電 ATE（Photon 100） | 新進；CPO 系統級測試主力候選 | C | 2026/3 推出，涵蓋晶圓、光引擎、CPO 模組；與 ficonTEC 合作 300 mm 雙面晶圓測試 |
| L4 光學儀器 | — | C | 持有 Quantifi Photonics；與 MultiLane 合資 MLTP |
| 範圍外 | — | — | 工業機器人 |

---

### Keysight（KEYS）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| L4 BERT、取樣示波器（TDECQ 量測）、光元件分析 | 高速光電量測龍頭 | C | 矽光測試設備五強之一；常與 Credo 等進行 1.6T 互通展示 |
| 範圍外 | — | — | 無線與一般電子量測 |

---

### VIAVI（VIAV）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| L4 光模組測試（ONE LabPro ONE-1600 等） | 主要供應商 | C | 支援 802.3dj 200G/lane；矽光測試設備五強之一 |
| L4 光纖現場測試 | 主要供應商 | C | — |
| CPO 量產測試 | — | C | 與 Advantest、SENKO 於 ECOC 2026 展示 |

---

### Veeco（VECO）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| K1 MOCVD | 約 12%（退出 LED 後，SemiAnalysis）；2018 年 27% | B | 有 As/P 光電用機型 |
| K2 MBE | 雙強之一（與 Riber） | C | — |
| 離子束沉積（光學鍍膜） | — | C | 用於光學濾光片 |

---

### Arista（ANET）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| I2 資料中心乙太網交換機 | **第一**（Dell'Oro，連續多季） | A（排名） | 採用 Broadcom 晶片 |
| I2 乙太網交換機整體 | 13.9%（IDC 2025 Q1） | B | 含企業市場的口徑 |

---

### NVIDIA（NVDA）｜重要

> 你的研究範圍原本排除 NVIDIA，此處僅列其光通訊相關業務供對照。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| I1／I2 交換晶片與交換機（Spectrum-X、Quantum、NVLink Switch） | 乙太網交換機整體 12.5%（IDC 2025 Q1）；資料中心乙太網約 11.6%；InfiniBand 近乎獨家 | B／C | 2025 Q1 進入資料中心乙太網前五 |
| M1 CPO 交換機（Quantum-X／Spectrum-X Photonics） | 量產先行者之一 | C | TSMC COUPE＋微環調變器 |
| D3 SerDes | 自用 | — | — |
| 光模組與線纜（LinkX，委外製造） | — | B | 新增 800G 訂單中，中際旭創＋新易盛約 60%，其餘由 Coherent、Lumentum、Broadcom 分食（2025/11 報導） |
| 策略投資 | — | — | 2026/3 投資 Coherent、Lumentum、Marvell 各 20 億美元；Ayar Labs 股東 |

---

### Cisco（CSCO）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| I2 交換機 | 乙太網交換機整體約 31%（IDC 2025 Q1，含企業網路） | B | 資料中心成長落後大盤 |
| I1 交換晶片（Silicon One） | 自用與外售 | C | — |
| G1 光模組（Acacia、Luxtera） | LightCounting 前十常客（2023 年第 4） | A（排名） | 以相干模組為主 |
| E1 矽光 | 自有（Luxtera） | — | — |

---

### Celestica（CLS）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| I3 ODM 交換機 | 資料中心乙太網交換機前五（2025 Q1 起）；2025 Q3 份額增幅最大者之一 | A（排名） | Broadcom 長期製造夥伴 |

---

### Aehr Test Systems（AEHR）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| L3 矽光晶圓級燒機 | 利基龍頭 | C | 與 FormFactor、Keysight 並列矽光晶圓測試三支柱 |

---

### 美股｜相鄰廠商速查

| 公司（代號） | 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|---|
| MaxLinear（MXL） | D1 PAM4 DSP（Keystone、Rushmore） | 小（屬 <10% 合計群） | B | — |
| Synopsys（SNPS） | D3 介面 IP（224G SerDes、UCIe）、光子設計軟體 | 有線介面 IP 約 55.6%（2021，舊）；設計 IP 整體 21.9%（2023） | B／A | 2025 年併入 Ansys，取得 Lumerical 光學模擬 |
| Cadence（CDNS） | D3 SerDes、UCIe IP；矽光設計流程 | 設計 IP 整體 5.6%（2023） | A | — |
| Intel（INTC） | M2 光運算互連 chiplet | — | C | 2023 年將矽光可插拔模組事業移轉給 Jabil |
| TE Connectivity（TEL） | H2 高速連接器、DAC、I/O 籠架 | 全球連接器前二 | C | — |
| Jabil（JBL） | G2 光學代工；C5 TFLN 整合；M1 CPO 參考設計 | — | C | 承接 Intel 矽光模組；與 HyperLight、聯穎合作 TFLN；與 Marvell、SENKO 合作 CPO |
| Amkor（AMKR） | J2 OSAT；M2 封裝 | **15.2%**（2024，前十大內） | A | Lightmatter 封裝夥伴 |
| Applied Materials（AMAT） | K3 沉積、蝕刻等前段設備 | 晶圓設備前二（業界通說） | C | 非光通訊專屬 |
| Lam Research（LRCX） | K3 蝕刻、沉積 | 蝕刻龍頭（業界通說） | C | 非光通訊專屬 |
| Kulicke & Soffa（KLIC） | K4 打線、先進封裝貼裝 | 打線機龍頭（業界通說） | C | — |
| Rogers（ROG） | A5 高頻（PTFE）材料 | RF 高頻材料龍頭（業界通說） | C | 高速數位 CCL 份額小 |
| Belden（BDC） | F6 結構化佈線、光纖連接 | — | C | — |
| CommScope（COMM） | 資料中心光纖事業**已出售** | — | — | 2026/1 CCS 併入 Amphenol；剩餘業務與本產業關聯低 |
| HPE（HPE，含 Juniper） | I2 交換機 | AI 資料中心份額小 | C | Juniper 於 2025/7 併入 |
| Alphabet（GOOGL） | M3 OCS（Apollo，MEMS 架構） | 自研自用，全球最大 OCS 部署者 | C | 用於 TPU 叢集拓撲 |
| Qualcomm（QCOM，含 Alphawave） | D3 SerDes IP、連接 chiplet | 設計 IP 整體 3.1%（Alphawave，2023） | A | 2025 年宣布收購 Alphawave |
| Ralliant（RAL，含 Tektronix） | L4 示波器、PAM4 分析 | — | C | 2025 年自 Fortive 分拆 |
| Luna Innovations | L4 光反射量測、光纖感測 | 利基 | C | 上市狀態待確認 |

---

## 二、台股

### 台積電（2330／TSM）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| E1＋M1 矽光與 CPO（COUPE） | **目前 CPO 唯一量產平台** | C | 2026/4 量產；Broadcom TH6-Davisson、NVIDIA Quantum-X 皆採用；已揭露 200 Gb/s 微環調變器 |
| J1 CoWoS／SoIC | AI 加速器先進封裝龍頭 | C | — |
| 晶圓代工（DSP、交換晶片的 3 nm） | 約七成 | B | TrendForce 2025；第二名 Samsung 僅 7.2% |

---

### 聯亞光電（3081）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| B1 InP 磊晶（EML、CW、PD 用） | 台灣代工磊晶龍頭 | C | 2026 上半年營收 21.26 億台幣（+111%）、毛利率 56%；資本支出提高至 13.15 億台幣 |
| C2 CW-DFB 產能 | 與聯鈞合計為 CW-DFB 第四（四家合計約 74%） | A（合計） | TrendForce 將兩家合併計算 |
| C4 PD | — | C | — |

**上游綁定**：與 Sumitomo 簽 InP 基板長約至 2030（2026/4）。

---

### 聯鈞光電（3450）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| C2 雷射晶片、TO 封裝與光次模組 | 與聯亞合計為 CW-DFB 第四 | A（合計） | 原文列為 VCSEL 二線，缺乏依據已移除 |

---

### 波若威（3163）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| F3／F4 CPO 連接器與光纖組件 | NVIDIA 揭露的 CPO 四家供應商之一 | C | — |
| F5 被動光學（WDM 等） | — | C | — |

---

### 上詮（3363）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| F2 光纖連接器、F4 FAU、F5 被動元件 | 利基 | C | 原文列為光晶片，已修正為被動元件 |

---

### 台光電（2383）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| A5 高速 CCL | **全球高速 CCL 約 28%（2024 年中）；800G／1.6T 交換機約 50–60%** | B | 月產能 2025 年底約 550 萬張 → 2026 年底約 760 萬張；AWS Trainium 約 80%、Meta MTIA 近 100%、Google TPU 約 50%（分析師估） |

---

### 旺矽（6223）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| L1 探針卡 | 前五之一（前五合計約 73%） | B（合計） | — |
| L1 探針台（含光電探測） | — | C | — |

---

### 致茂（2360）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| L2 CPO 測試（光引擎、系統級） | CPO 測試四道插入點的相關廠之一 | C | 主業為電源與電子量測 |

---

### 日月光投控（3711，含矽品 SPIL）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| J2 OSAT | **44.6%**（2024，前十大內；營收 185.4 億美元） | A | — |
| M1 CPO 封裝 | 矽品為 NVIDIA CPO 封裝廠 | C | — |
| M2 Optical I/O 封裝 | Lightmatter 夥伴 | C | — |

---

### 智邦（2345）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| I3 白牌交換機 ODM | 2025 Q3 資料中心乙太網交換機份額增幅最大者之一 | A（排名） | — |

---

### 全新光電（2455）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| B1 化合物磊晶（GaAs 為主，跨入 InP） | InP 晶圓前五之一（Mordor，混合基板與磊晶口徑） | B | 主業為 RF GaAs HBT 磊晶 |

---

### 英特磊（4971）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| B1 InP 磊晶（MBE） | 利基 | C | 2025 年 InP 磊晶營收年增 97%，成本壓力同步上升 |
| K2 MBE | 自用製程能力 | — | 原文 K 層列入，實為自有製程而非設備銷售 |

---

### 台股｜相鄰廠商速查

| 公司（代號） | 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|---|
| 聯茂（6213） | A5 高速 CCL | 前五之一（合計逾 45%） | B（合計） | — |
| 欣興（3037） | J3 ABF 載板 | **第一梯隊**（前五合計約 72%） | B（合計） | — |
| 南電（8046） | J3 ABF 載板 | 第二梯隊 | B（合計） | — |
| 景碩（3189） | J3 ABF 載板 | 第三層 | B（合計） | — |
| 緯穎（6669） | I3 伺服器與機櫃 ODM；M2 光互連參考設計 | — | C | 與 Ayar Labs 合作 1,024 加速器光互連機架 |
| 廣達（2382） | I3 伺服器與交換機 ODM | — | C | — |
| 鴻海（2317） | M1 CPO 系統組裝；I3 | NVIDIA 揭露的 CPO 系統組裝兩家之一 | C | 與 POET 合作 3.2T 光引擎 |
| 台達電（2308） | I3 交換機 ODM（子公司台達網通） | — | C | 主業為電源與散熱 |
| 貿聯-KY（3665） | H1／H2 AEC、DAC 線纜組裝 | 二線 | C | 線纜組裝，非光通訊本業 |
| 譜瑞-KY（4966） | D4 PCIe Retimer | 與 Astera、Analogix 合計約 86% | B（合計） | 主業為顯示介面 IC |
| 聯發科（2454，含絡達） | D1 PAM4 DSP＋TIA（絡達） | 新進（屬 <10% 合計群） | B | 2026 Q1 出貨成長數倍，進入前十大模組廠；NVLink Fusion 成員 |
| 聯電（2303，含聯穎光電） | C5 TFLN 代工（聯穎） | 新進 | C | 為 HyperLight 代工，Jabil 整合 |

---

## 三、陸股與港股

### 中際旭創（300308.SZ）｜核心

**定位**：全球光模組第一，連續多年排名居首，1.6T 放量的最大受惠者。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| G1 光模組 | **全球第 1，約 23%**（2025） | B | 2025 年營收 53 億美元；2026 Q1 營收 195 億人民幣（+192%）、淨利 57 億（+262%）、毛利率 46%；另估 800G 約 35–40%、1.6T 約 50–70% |
| E1 矽光（自研設計） | 自稱 800G 矽光模組約 50% | C（公司說法） | 自研矽光晶片良率 95%（未經第三方驗證）；與 Tower 深度合作，新平台使每模組雷射數減半 |
| C5 TFLN 模組 | — | C | 已展示 TFLN MZM 的 1.6T 2×LR4 |
| C1 EML 自研 | 追趕中 | C | — |

**風險**：2024 年海外營收占 86.8%，主要為北美；2026/7 有報導指其被列入美國國防部清單，地緣風險升高（據報導，細節待確認）。

---

### 新易盛（300502.SZ）｜核心

**定位**：2025 年首度升至全球第 2，超越 Coherent；Amazon 核心供應商，LPO 先行者。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| G1 光模組 | **全球第 2，約 15%**（2025） | B | 2025 年營收 35 億美元（+189%）、淨利年增 236%；已通過 NVIDIA 等美國大廠認證 |
| LPO／LRO 模組 | 先行者 | C | 800G LPO 功耗約降 50%，獲 Meta、Amazon 訂單；1.6T LRO 已有訂單 |
| VCSEL 方案 1.6T | — | C | 1.6T 2VR4 |

---

### 光迅科技（002281.SZ）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| G1 光模組 | **全球第 4**（2025，排名穩固） | A（排名） | 2024 年第 6 → 2025 年第 4 |
| C1 EML 自製 | 中國唯一自製 25G EML 者 | C | 高階（100G+）仍依賴外購 |
| C4 PD | — | C | — |

---

### 天孚通信（300394.SZ）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| F3／F4 CPO 連接器與光纖組件 | NVIDIA 揭露的 CPO 四家供應商之一 | C | 2023 年即為 NVIDIA 供應鏈中營收成長的少數廠商 |
| F5 被動光學與光學封裝 | — | C | 原文列為光晶片，已修正 |

---

### 太辰光（300570.SZ）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| F2 MPO 連接器、F4 FAU | — | C | — |

---

### 源杰科技（688498.SH）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| C2 CW-DFB（矽光光源） | 中國主力 | C | CW 技術成熟、供應相對寬鬆 |
| C1 EML | 開發中 | C | — |

---

### 仕佳光子（688313.SH）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| C2 CW-DFB；F5 PLC／AWG 晶片 | 中國主力之一 | C | — |

---

### 光庫科技（300620.SZ）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| C5 鈮酸鋰調變器（含 TFLN） | 中國代表 | C | — |
| F5 被動元件（隔離器等） | — | C | — |

---

### 騰景科技（688195.SH）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| F5 精密光學元件、濾光片 | — | C | — |

---

### 羅博特科（300757.SZ）｜核心（光通訊價值全部來自子公司 ficonTEC）

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| K5 光子自動化組裝與測試（ficonTEC，德國，100% 持股） | 自稱在 CPO Insertion 2、3 具獨供地位 | C（公司說法） | 2025 年起取得雙面晶圓測試與晶粒測試量產訂單；Insertion 3 機台數最多、Insertion 4 單價最高（後者在 NPI）；2026/6 公告與 NVIDIA 合作開發 CPO 製造測試方案 |
| 範圍外 | — | — | 本業為太陽能自動化設備 |

---

### 華工科技（000988.SZ，含華工正源）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| G1 光模組（華工正源） | 全球前十（2024 年第 8） | A（排名） | 原文列 VCSEL 二線，缺依據已移除 |
| C1／C2 光晶片（雲嶺光電，據報導為旗下公司） | 新進 | C | 隸屬關係待確認 |

---

### 劍橋科技（603083.SH）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| G1 光模組 | 二線 | C | 2025 年初報導仍未大量供應主要雲端業者 800G／1.6T |

---

### 長飛光纖（601869.SH／6869.HK）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| F1 預製棒、光纖、光纜 | 全球最大之一（自稱第一，與 Corning 口徑不同） | C | — |

---

### 亨通光電（600487.SH）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| F1 光纖光纜 | 前幾大 | C | — |
| G1 矽光模組（亨通洛克利） | 二線 | C | 依公開資訊，細節待確認 |

---

### ASMPT（0522.HK）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| K4 高精度貼裝（AMICRA NANO、AMICRA NOVA、MEGA） | 光子與 CPO 貼裝主要供應商 | C | 次微米級 CPO 組裝 |

---

### 陸港股｜相鄰廠商速查

| 公司（代號） | 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|---|
| 中天科技（600522.SH） | F1 光纖光纜 | 前幾大 | C | — |
| 長光華芯（688048.SH） | C1 EML | 新進（2023 年起供應 56G PAM4 EML） | C | 主業為高功率工業雷射 |
| 雲南鍺業（002428.SZ） | A1 InP 基板 | 中國廠合計 <10% | B（合計） | 產量比龍頭少一個數量級 |
| 三安光電（600703.SH） | B1／C2／C4 化合物代工與光晶片 | 利基 | C | 主業為 LED |
| 瀾起科技（688008.SH） | D4 PCIe Retimer | 二線 | C | 主業為 DDR 記憶體介面，非光通訊本業 |
| 生益科技（600183.SH） | A5 CCL | 高頻高速 CCL 前五之一（合計逾 45%） | B（合計） | — |
| 立訊精密（002475.SZ） | H2 DAC、高速線纜、連接器；G1 光模組 | 光模組為新進 | C | — |
| 中微公司（688012.SH） | K1 MOCVD | 23%（Gartner 2018，主要為 LED） | B | InP 光電用 MOCVD 影響小 |
| 中芯國際（0981.HK／688981.SH） | E1 矽光代工 | 利基（中國客戶） | C | — |

---

## 四、日股

### Sumitomo Electric（5802.T）｜重要

**定位**：唯一同時站在「InP 基板第一、EML／CW 前三、光纖大廠」三個位置的公司。

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| A1 InP 基板 | **第一，30–60%** | B | 三個來源差距大；近年優先供應美系客戶，實質停供第三方磊晶廠；有報導稱 2026 年 6 吋產能擴 40%（單一來源） |
| A2 GaAs 基板 | 前三 | C | — |
| C1 EML＋C2 CW-DFB | EML＋CW 前三（三家合計約 55%）；CW-DFB 產能第一梯隊 | A（合計） | 日系晶圓廠產能已全數被鎖定、報價偏高 |
| B1 磊晶 | 自製 | — | — |
| C4 光偵測器 | — | C | — |
| M1 CPO 外部光源 | NVIDIA 揭露的 CPO 外部光源組裝與對準測試供應商之一 | C | — |
| F1 光纖光纜、F2 連接器、F7 熔接機 | 前幾大 | C | — |

---

### JX Advanced Metals（5016.T）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| A1 InP 基板 | **第三，約 10%** | B | 單一來源；最高 1,200 億日圓多年投資，產能擴至 FY2025 的 7–10 倍；2026/6 宣布漲價 |

---

### Fujikura（5803.T）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| F1 光纖光纜（高密度資料中心光纜） | 前幾大 | C | 旗下美國 AFL |
| F7 熔接機 | 日系寡占之一 | C | — |

---

### Furukawa Electric（5801.T）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| F1 光纖光纜 | 前幾大 | C | 旗下美國 OFS |
| A6 銅箔 | — | C | — |
| F7 熔接機 | — | C | — |

---

### Advantest（6857.T）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| L2 ATE | **約 50%**（2023），2025 年持續擴大 | B | 與 Teradyne 合計約 80% |
| L2 CPO 量產測試 | — | C | V93000＋FormFactor Triton；2026/9 與 SENKO、VIAVI 展示 CPO 量產測試環境；以 40 UPH 計，單一測試流程月產逾 2.8 萬顆，對可拆式連接器耐用度的要求遠高於傳統 FAU |

---

### Anritsu（6754.T）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| L4 BERT（MP1900A）、OSA | 主要供應商 | C | 模組產線常用 |

---

### Santec（6777.T）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| L4 可調雷射、掃頻量測 | 利基龍頭 | C | 矽光晶圓測試常用 |
| K6 主動對準（PICAlign，與 Aerotech、SENKO） | — | C | 2026/1 發表，每個 CPO 模組可能需 100 次以上主動對準 |

---

### 日股｜相鄰廠商速查

| 公司（代號） | 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|---|
| Mitsubishi Electric（6503.T） | C1 EML、C2 CW | 主要供應商之一（非前三） | C | — |
| Yokogawa（6841.T） | L4 光譜分析儀 | 業界主流 | C | 2025/3 推出產線用 AQ6361 |
| Disco（6146.T） | K7 切割研磨 | 業界通說約七成以上 | C | MEMS 探針加工設備亦由其寡占 |
| Taiyo Nippon Sanso（4091.T） | K8 製程氣體；**K1 MOCVD 設備** | 日系選項 | C | 原文漏列 MOCVD，已補 |
| 味之素（**2802.T**） | A4 ABF 絕緣膜 | 近乎獨佔 | C | 原文代號 4967.T 誤植，已修正 |
| Panasonic（6752.T） | A5 高速 CCL（Megtron 7／8） | 前五之一；M8 級規格標竿 | B（合計） | Megtron 8 的 Df 約 0.0015 |
| 三井金屬（5706.T） | A6 低稜銅箔（HVLP） | 業界通說領先 | C | — |
| 信越化學（4063.T） | A7 矽晶圓；A3 SOI（Smart Cut 授權） | 矽晶圓龍頭（業界通說） | C | 財報幾乎未提光子 |
| SUMCO（3436.T） | A7 矽晶圓；A3 SOI | 矽晶圓前二（業界通說） | C | — |
| Ibiden（4062.T） | J3 ABF 載板 | **第一梯隊** | B（合計） | — |
| 新光電氣 Shinko（原 6967.T） | J3 ABF 載板 | 第二梯隊 | B（合計） | 2025 年私有化下市 |
| Tokyo Electron（8035.T） | K3 前段設備 | 塗佈顯影龍頭（業界通說） | C | FormFactor TRITON 合作方 |

---

## 五、歐股

### Aixtron（AIXA.DE）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| K1 MOCVD（整體） | **約 40%**（LED 退潮後，SemiAnalysis）；2018 年 46% | B | 2025 年營收 5.57 億歐元 |
| K1 As/P 光電 MOCVD（G10-AsP） | 主導 | C | Lumentum 2026/5 多筆訂單；交期 10–12 個月，是 InP 擴產的硬性時間常數 |
| 範圍外：GaN MOCVD | 70–78% | B | 功率元件用 |

---

### Soitec（SOI.PA；美國 OTC：SLOIF）｜重要

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| A3 SOI 晶圓（整體） | **60–70% 以上**；約八成 SOI 產能使用其 Smart Cut 技術 | B | 原文代號已修正 |
| A3 光子級 SOI | TSMC、GF、Tower 三家唯一已驗證的量產供應商 | C | 相關營收接近 1 億歐元；環球晶仍在送樣（另一說已退出） |

---

### IQE（IQE.L）｜核心

| 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|
| B1 化合物磊晶（InP／GaAs） | 全球最大獨立磊晶廠 | C | 2026/6 與 Tower 簽多年期 InP 磊晶長約（200G 與 400G/lane 調變器）；**風險**：日系基板廠已實質停供第三方磊晶廠 |

---

### 歐股｜相鄰廠商速查

| 公司（代號） | 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|---|
| Nokia（NOKIA.HE／NOK，含 Infinera） | E2 InP PIC、相干模組 | 相干光主要玩家 | C | 資料中心內部少用；主要在 DCI |
| Prysmian（PRY.MI） | F1 光纖光纜 | 前幾大 | C | — |
| ASML（ASML） | K3 曝光機 | 曝光設備龍頭 | C | 矽光多用 DUV 即可 |
| Besi（BESI.AS） | K4 高精度貼裝、混合鍵合 | 前幾大 | C | — |
| AT&S（ATS.VI） | J3 ABF 載板 | 第二梯隊 | B（合計） | — |
| Riber（ALRIB.PA） | K2 MBE | 雙強之一（與 Veeco） | C | — |
| Huber+Suhner（HUBN.SW，含 Polatis） | M3 OCS（壓電光束偏轉）；F2 光纖連接 | 利基 | C | — |
| Volex（VLX.L） | H2 高速線纜組裝 | — | C | — |

---

## 六、韓股

| 公司（代號） | 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|---|
| Samsung Electronics（005930.KS） | E1 矽光代工 | 落後 | C | 目標 2029 年才提供整套 CPO 服務 |
| | 晶圓代工整體 | 7.2%（2025，第二） | A | TrendForce |

---

## 七、未上市公司、子公司與研究機構

| 公司 | 身分 | 業務 | 份額 | 信心 | 說明 |
|---|---|---|---|---|---|
| **Molex** | Koch 集團私有 | G1 光模組；H2 連接器、DAC、AEC 組裝 | 光模組為 LightCounting 前十，2025 年排名上升 | A（排名） | 供應 Amazon 400G／800G；原文漏列光模組業務 |
| **SENKO** | 私有 | F3 CPO 可拆式連接器（MPC、SEAT、SAM-T）；F2 MPO Plus、SN-MT | CPO 連接器領先者之一 | C | Marvell 光引擎採用；NVIDIA CPO 供應商；與 GF、Advantest、VIAVI、Aerotech、Santec 皆有合作 |
| **US Conec** | 私有 | F2 MTP® 連接器、MT 插芯；MDC、MXC | MPO 連接器龍頭級 | C | — |
| **HyperLight** | 私有 | C5 TFLN 光子積體電路 | 技術領先 | C | 聯穎代工、Jabil 整合 |
| **Ayar Labs** | 私有 | M2 TeraPHY 光 I/O chiplet（8 Tbps、UCIe） | 最接近量產 | C | 2026/3 E 輪 5 億美元、估值 37.5 億；NVIDIA、AMD 投資；與緯穎合作機架級參考設計 |
| **Lightmatter** | 私有 | M2 Passage（M1000 114 Tbps；L200／L200X） | — | C | 透過 GF、日月光、Amkor 整合 |
| **EXFO** | 2021 年私有化 | L4 OSA、可調雷射、PIC 測試 | 主要供應商 | C | 矽光測試設備五強之一 |
| **華為** | 未上市 | G1 光模組（多為自用） | 2024 年全球第 4；2025 年未進前四 | A（排名） | 已發表 1.6T 單波矽光模組 |
| 海信寬帶 | 海信集團旗下，未單獨上市 | G1 光模組 | 2024 年全球第 7 | A（排名） | — |
| Source Photonics 索爾思 | 未上市 | G1 光模組 | 2024 年全球第 10 | A（排名） | — |
| 雲嶺光電 | 未上市（據報導為華工科技旗下） | C1／C2 光晶片 | 新進 | C | 待確認 |
| Freiberger Compound Materials | 私有（德國） | A2 GaAs 基板；A1 InP（少量） | GaAs 前三 | C | Mordor 列為 InP 前五 |
| Isola | 私有 | A5 高速 CCL（Tachyon） | — | C | — |
| 長春集團 | 私有 | A6 銅箔 | — | C | — |
| Panduit | 私有 | F6 結構化佈線 | — | C | — |
| Physik Instrumente（PI） | 私有（德國） | K6 奈米定位、六軸平台 | — | C | — |
| Aerotech | 私有 | K6 精密運動控制 | — | C | PICAlign 合作方 |
| Palomar Technologies | 私有 | K4 光子貼裝 | 利基 | C | — |
| Calient | 私有 | M3 MEMS OCS | 利基 | C | — |
| Avicena | 私有 | M2 microLED 光互連 | 早期 | C | — |
| Xscape Photonics | 私有 | 多波長光源 | 早期 | C | — |
| SCINTIL | 私有（法國） | III-V 異質整合矽光 | 早期 | C | — |
| Salience Labs | 私有（英國） | 光交換晶片 | 早期 | C | — |
| CompoundTek | 私有（新加坡） | E1 矽光代工 | 利基 | C | — |
| imec | 研究機構（比利時） | E1 矽光平台與多專案晶圓 | 不適用 | — | — |
| AIM Photonics | 美國產學聯盟 | E1 矽光平台 | 不適用 | — | — |

**併入母公司的子公司對照**：矽品 → 日月光投控｜ficonTEC → 羅博特科｜聯穎光電 → 聯電｜絡達 → 聯發科｜華工正源 → 華工科技｜Celestial AI → Marvell｜Polatis → Huber+Suhner｜Alphawave → Qualcomm｜Juniper → HPE｜Tektronix → Ralliant｜Infinera → Nokia｜CommScope CCS → Amphenol

---

## 附錄一　依業務反查公司

> 粗體為該業務的龍頭或份額最高者（依本文件數據）；括號內為份額或排名。

| 業務 | 公司 |
|---|---|
| A1 InP 基板 | **Sumitomo（第一，30–60%）**、AXT（約 35%）、JX（約 10%）、雲南鍺業（中國合計 <10%）、Freiberger |
| A2 GaAs 基板 | AXT、Sumitomo、Freiberger |
| A3 SOI | **Soitec（60–70%+；光子級唯一量產）**、信越、SUMCO |
| A4 ABF 膜 | **味之素（近乎獨佔）** |
| A5 高速 CCL | **台光電（約 28%；交換機 50–60%）**、Panasonic、聯茂、生益、Isola、Rogers |
| A6 銅箔 | 三井金屬、古河電工、長春 |
| A7 矽晶圓 | 信越、SUMCO |
| B1 磊晶 | IQE、聯亞、全新、英特磊、三安；自製：Lumentum、Coherent、Sumitomo、Broadcom |
| C1 EML | **Lumentum（200G 唯一量產）**、Broadcom、Sumitomo、Coherent、Mitsubishi、光迅（25G）、長光華芯、中際旭創（自研） |
| C2 CW-DFB 與高功率 CW | **Broadcom、Sumitomo（產能第一梯隊）**、Coherent、聯亞／聯鈞、Lumentum（高功率領先）、源杰、仕佳、三安 |
| C3 VCSEL | **Broadcom、Coherent（資料通訊雙強）**、Lumentum |
| C4 光偵測器 | Coherent、Lumentum、Broadcom、Sumitomo、聯亞、光迅 |
| C5 調變器（TFLN） | HyperLight、聯穎（代工）、光庫、Jabil（整合） |
| D1 PAM4 DSP | **Marvell（高階約 60%）**、Broadcom（30%+）、Credo、Semtech、MaxLinear、絡達 |
| D2 Driver／TIA | **Marvell、MACOM（並列）**、Semtech、Broadcom |
| D3 SerDes／介面 IP | **Synopsys（有線介面約 55.6%）**、Cadence、Alphawave（Qualcomm）、Credo |
| D4 Retimer | **Astera（PCIe 主導）**、譜瑞、Broadcom、Marvell、Credo、瀾起 |
| D5 AEC 晶片 | **Credo（80–88%）**、Marvell、Astera、Broadcom |
| E1 矽光代工 | TSMC（CPO 唯一量產）、GlobalFoundries（純矽光營收最大）、Tower（可插拔 1.6T 領先）、Intel、Samsung、中芯、CompoundTek、imec、AIM |
| E2 InP PIC | Nokia（Infinera）、Lumentum、Coherent |
| E3 光學中介層 | POET、Lightmatter |
| E4 SiGe 代工 | Tower |
| F1 光纖光纜 | Corning、長飛、Prysmian、Fujikura、Sumitomo、Furukawa、亨通、中天（前五合計逾 40%） |
| F2 光纖連接器 | US Conec、SENKO、Corning、Sumitomo、太辰光、上詮、Huber+Suhner |
| F3 CPO 可拆式連接器 | SENKO、Corning、波若威、天孚、US Conec |
| F4 FAU | 太辰光、SENKO、波若威、天孚、上詮 |
| F5 被動光學 | 天孚、騰景、波若威、上詮、光庫、仕佳、Coherent |
| F6 結構化佈線 | **Amphenol（含原 CommScope CCS）**、Corning、Panduit、Belden |
| F7 熔接機 | Fujikura、Sumitomo、Furukawa |
| G1 光模組 | **中際旭創（第 1，約 23%）**、新易盛（第 2，約 15%）、Coherent（第 3）、光迅（第 4）、Molex、華為、Cisco、海信、華工正源、索爾思、Lumentum、AAOI、劍橋、亨通、立訊 |
| G2 光學代工 | **Fabrinet**、Jabil |
| H1 AEC 整線 | **Credo（80–88%）**、Amphenol、Molex、貿聯 |
| H2 DAC、線纜、連接器 | Amphenol、TE、Molex、立訊、貿聯、Volex；redriver：Semtech、MACOM |
| H3 ALC | Credo（未量產） |
| I1 交換晶片 | **Broadcom（商用龍頭）**、NVIDIA、Marvell、Cisco |
| I2 交換機品牌 | **Arista（資料中心第一）**、Cisco（整體約 31%）、NVIDIA（12.5%）、HPE |
| I3 ODM | Celestica、智邦、廣達、緯穎、鴻海、台達電 |
| J1 晶圓級先進封裝 | **TSMC** |
| J2 OSAT | **日月光（44.6%）**、Amkor（15.2%） |
| J3 ABF 載板 | **欣興、Ibiden（第一梯隊）**、AT&S、南電、新光、景碩 |
| K1 MOCVD | **Aixtron（約 40%；As/P 主導）**、Veeco（約 12%）、中微、Taiyo Nippon Sanso |
| K2 MBE | Veeco、Riber |
| K3 前段設備 | AMAT、Lam、TEL、ASML |
| K4 貼裝打線 | ASMPT、Besi、K&S、Palomar |
| K5 光子自動化組裝測試 | **ficonTEC（羅博特科）** |
| K6 精密運動平台 | Aerotech、PI、Santec |
| K7 切割研磨 | **Disco（約七成以上，通說）** |
| K8 製程氣體 | Taiyo Nippon Sanso |
| L1 探針卡與探針台 | FormFactor、旺矽（前五合計約 73%） |
| L2 ATE | **Advantest（約 50%）**、Teradyne（約 30%）、致茂 |
| L3 燒機 | Aehr |
| L4 光通訊儀器 | Keysight、VIAVI、Anritsu、EXFO、Yokogawa、Santec、Ralliant（Tektronix）、Luna、Teradyne（Quantifi） |
| M1 CPO | **Broadcom（量產先行）**、NVIDIA、Marvell、Coherent；製造：TSMC、矽品、鴻海、Fabrinet |
| M2 Optical I/O | Ayar Labs、Lightmatter、Marvell（Celestial AI）、Intel、Avicena |
| M3 OCS | **Google（自研最大部署）**、Lumentum、Coherent、Calient、Polatis |

---

## 附錄二　TradingView 分類與匯入指南

> 用途：把本索引的上市公司匯入 TradingView，達成三個目的——① 知道這家公司主要做什麼；② 知道它的競爭對手；③ 從各組的漲跌讀出光通訊各細分產業的變化。
> 搭配檔案：`tradingview_optical_full_120.txt`（完整版）、`tradingview_optical_lite_24.txt`（免費方案精簡版）

### 1　分類原則

本附錄與正文的視角不同，這是分類的起點：

| 視角 | 單位 | 一家公司出現幾次 | 回答的問題 |
|---|---|---|---|
| 正文與附錄一 | 業務 | 多次（Broadcom 出現在 7 個業務） | 「這個業務有誰在做？」 |
| **附錄二** | **公司整體** | **只出現一次** | 「這家公司是什麼？跟誰比？股價反映什麼？」 |

四條原則：

1. **一家公司只放一組，依整體營收最大的業務決定**，不依最有話題的細項業務。
2. **同組＝整體層級的直接對手**。組內互相比較才有意義（對應目的②）。
3. **各組依產業鏈由上游往下游排列**。看到某組異動時，可以沿鏈條往上下游追（對應目的③）。
4. **組內依光通訊純度排序**（● 核心 → ◐ 重要 → ○ 相鄰）。純度越高，股價越能反映該細分產業；純度低的公司只當背景。

---

### 2　分組總表（24 組、120 檔）

組代碼前綴：**上**＝上游材料｜**中**＝晶片、元件與製造｜**下**＝模組、線纜與系統｜**設**＝設備｜**測**＝測試｜**參**＝參照組（整體業務不以本產業為主）

| 組 | 成員（依純度排序） | 這組的漲跌主要反映 | 組內主要競爭 |
|---|---|---|---|
| **上1 化合物半導體：基板、磊晶與代工** | ●AXT ●聯亞 ●IQE ◐英特磊 ◐全新 ○雲南鍺業 ○三安光電 | InP／GaAs 供需、漲價、中國出口許可 | 基板：AXT vs 雲南鍺業｜磊晶：聯亞 vs IQE vs 英特磊 vs 全新 |
| **上2 矽晶圓與半導體材料** | ◐Soitec ◐JX Advanced Metals ○信越 ○SUMCO | 半導體材料整體景氣，光通訊訊號弱 | 信越 vs SUMCO；Soitec 為 SOI 龍頭 |
| **上3 PCB 與電子材料** | ◐台光電 ○聯茂 ○生益 ○三井金屬 ○Rogers | AI 伺服器與交換機的 PCB 材料升級 | 台光電 vs 聯茂 vs 生益 |
| **中1 光晶片與光元件** | ●Lumentum ●源杰 ●仕佳 ●聯鈞 ●光庫 ●POET ○長光華芯 | 雷射晶片供需（EML／CW 缺口與報價） | Lumentum vs 源杰 vs 仕佳 vs 聯鈞；跨組對手：Coherent（下1）、Broadcom（中4） |
| **中2 光被動元件與光纖連接** | ●天孚 ●太辰光 ●騰景 ●波若威 ●上詮 | 光纖連接數量與 CPO 進度 | 組內互為對手；跨組：Corning（下2） |
| **中3 高速互連晶片** | ●Credo ●Astera ◐Semtech ◐MACOM ○MaxLinear ○譜瑞 ○瀾起 | 銅 vs 光、DSP vs 線性架構；scale-up 互連需求 | Credo vs Astera；Semtech vs MACOM；跨組：Marvell、Broadcom |
| **中4 網通與客製晶片平台** | ◐Broadcom ◐Marvell | AI 客製 ASIC 與網通晶片（光 DSP 只是一部分） | 兩家互為主要對手 |
| **中5 晶圓代工** | ◐Tower ◐GlobalFoundries ◐台積電 ○聯電 ○中芯 | Tower、GF 對矽光較敏感；台積電反映整體 AI 邏輯晶片 | 矽光：台積電 vs GF vs Tower |
| **中6 封裝測試代工** | ◐日月光 ○Amkor | AI 晶片封裝量 | 兩家互為對手 |
| **中7 IC 載板** | ○欣興 ○Ibiden ○南電 ○景碩 ○AT&S | ABF 載板供需 | 組內互為對手 |
| **下1 光模組與光學製造** | ●中際旭創 ●新易盛 ●Coherent ●光迅 ●Fabrinet ●AAOI ●劍橋科技 ◐華工科技 | 800G／1.6T 出貨與份額；雲端資本支出最直接的反映 | 前三名份額爭奪；Fabrinet 為代工，與品牌商既合作也替代 |
| **下2 光纖光纜與電線電纜** | ◐Corning ◐長飛 ◐Fujikura ◐亨通 ◐Furukawa ◐Sumitomo Electric ○中天 ○Prysmian | 光纖需求（資料中心＋電信），也受電力電纜與汽車影響 | 組內互為對手 |
| **下3 連接器與線纜組裝** | ◐Amphenol ○TE ○貿聯 ○Belden ○Huber+Suhner ○Volex | 機櫃內銅互連與佈線需求 | Amphenol vs TE；貿聯 vs Volex |
| **下4 資料中心網通設備** | ◐Arista ◐智邦 ◐Celestica ◐Cisco ○Nokia | AI 叢集乙太網交換機需求；品牌與白牌份額消長 | 品牌 Arista vs Cisco；白牌 智邦 vs Celestica；兩陣營互相替代 |
| **下5 雲端硬體：ODM、EMS 與電源** | ○鴻海 ○廣達 ○緯穎 ○HPE ○Jabil ○立訊 ○台達電 | AI 伺服器出貨與雲端資本支出 | 鴻海 vs 廣達 vs 緯穎 |
| **設1 化合物與光子製程設備** | ●羅博特科 ◐Aixtron ◐Veeco ○Riber | 化合物擴產週期（MOCVD 訂單）與 CPO 組裝測試設備 | Aixtron vs Veeco（MOCVD）；Veeco vs Riber（MBE） |
| **設2 前段晶圓設備** | ○ASML ○AMAT ○Lam ○TEL ○中微 | 半導體前段資本支出，光通訊訊號弱 | AMAT vs Lam vs TEL |
| **設3 後段封裝設備** | ◐ASMPT ○Besi ○K&S ○Disco | 先進封裝與 CPO 貼裝投資 | ASMPT vs Besi vs K&S |
| **測1 半導體測試** | ◐Teradyne ◐Advantest ◐FormFactor ◐旺矽 ◐Aehr ◐致茂 | 測試產能投資與 CPO 測試訂單 | Advantest vs Teradyne；FormFactor vs 旺矽 |
| **測2 量測儀器** | ◐VIAVI ◐Keysight ◐Anritsu ◐Santec ○Ralliant | 光模組研發與產線測試需求 | Keysight vs VIAVI vs Anritsu |
| **參1 AI 運算與綜合半導體** | ◐NVIDIA ○Intel ○Qualcomm ○聯發科 ○Samsung | AI 大環境與半導體整體情緒 | — |
| **參2 EDA 與矽智財** | ○Synopsys ○Cadence | 晶片設計投入 | 兩家互為對手 |
| **參3 雲端需求端** | ○Alphabet | 資本支出指引＝整條鏈的需求源頭 | 建議自行加入 MSFT、AMZN、META、ORCL |
| **參4 綜合企業** | ○Mitsubishi Electric ○Panasonic ○Yokogawa ○Taiyo Nippon Sanso ○味之素 | 股價幾乎不反映光通訊，可直接刪除 | — |

**未納入匯入檔**：新光電氣（已下市）、Luna（上市狀態待確認）、CommScope（相關業務已出售），以及第七節的 26 家未上市公司與研究機構。

---

### 3　依整體業務，容易放錯的公司

原則 1 會讓一些公司落在「直覺以外」的組別。這張表就是目的①的答案：

| 公司 | 直覺會放在 | 本附錄放在 | 原因（整體業務） |
|---|---|---|---|
| **Sumitomo Electric** | InP 基板、光晶片 | 下2 電線電纜 | 汽車線束與電線電纜是營收主體，InP 與雷射只占小部分。**InP 緊缺要看 AXT，不是 Sumitomo** |
| **Coherent** | 光晶片 | 下1 光模組 | 資料通訊光模組是最大營收來源，雷射多為自用 |
| **Lumentum** | 光模組 | 中1 光晶片 | 營收主體是雷射與光元件 |
| **Broadcom、Marvell** | 光 DSP | 中4 平台 | 股價主要由 AI 客製 ASIC 驅動；Broadcom 另有大型軟體業務 |
| **台積電** | 矽光／CPO | 中5 晶圓代工 | COUPE 占營收極小，股價反映整體 AI 邏輯晶片 |
| **Soitec** | 矽光材料 | 上2 | 營收以手機 RF-SOI 為主，光子級 SOI 約 1 億歐元規模 |
| **JX Advanced Metals** | InP 基板 | 上2 | 整體以濺鍍靶材等半導體材料為主 |
| **全新、IQE** | 光通訊磊晶 | 上1（純度標為重要／核心） | 手機 RF 磊晶仍占大宗，股價常隨手機週期波動 |
| **羅博特科** | 太陽能設備 | 設1 | 整體為自動化設備商，但市場定價主要來自子公司 ficonTEC 的 CPO 組裝測試 |
| **華工科技** | 光模組 | 下1（純度標為重要） | 整體業務分散（雷射設備、汽車感測器、光模組），光模組是最大成長引擎 |
| **Celestica** | EMS 代工 | 下4 網通設備 | 通訊（交換機）是最大終端市場 |
| **HPE** | 網通設備 | 下5 雲端硬體 | 伺服器仍是最大業務，網通（含 Juniper）次之 |
| **台達電** | 交換機 ODM | 下5 | 主業為電源與散熱，交換機只是子公司台達網通 |
| **Yokogawa** | 光學儀器 | 參4 | 主業為工業自動化 |
| **味之素** | ABF 材料 | 參4 | 主業為食品，股價幾乎不反映 ABF |

---

### 4　用分組判讀產業變化（目的③）

| 看到的現象 | 最可能的解讀 | 例子 |
|---|---|---|
| **全部分組同漲同跌**（連參照組一起動） | 大環境：AI 資本支出預期、利率、大盤 | 雲端大廠上修資本支出 → 全鏈上漲 |
| **只有一組異動** | 該細分產業的事件 | 上1 單獨大漲 → InP 基板漲價或出口許可消息 |
| **組內分歧** | 份額移轉或個別公司事件 | 下1 新易盛漲、Coherent 跌 → 1.6T 份額變化 |
| **上游組持續強於下游組** | 市場認為利潤流向瓶頸環節 | 中1 光晶片強於下1 光模組 → 雷射缺貨、模組廠成本壓力 |
| **技術路線成對比較** | 市場在押注哪條路線 | Semtech／MACOM（線性）強於 Marvell（DSP）→ LPO 預期升溫；中2＋台積電強於下1 → CPO 預期升溫 |
| **純度低的動、純度高的不動** | 多半與光通訊無關 | Sumitomo 大漲而 AXT 不動 → 可能是汽車或電纜消息 |

三個操作提醒：

- **股價反映的是預期，不是基本面本身**。任何訊號都要再用新聞、月營收或財報確認。
- **跨時區**：美股收盤後才輪到亞洲開盤，美股的消息通常在隔天台股、陸股、日股反映。
- **比較同組公司時用百分比**：TradingView 的「比較」功能可把同組股票以百分比疊加，避開幣別與股價水準的差異。

---

### 5　TradingView 實作

#### 5.1 方案限制（決定你用哪個檔案）

| 項目 | 免費 Basic | 付費（Essential 以上） |
|---|---|---|
| 清單數量 | 1 | 不限 |
| 每個清單的檔數 | **30** | 1,000 |
| 旗標顏色 | 1 | 7 |

- **付費方案**：匯入完整版 `tradingview_optical_full_120.txt`（1 個清單、24 個區段）。可用旗標標純度（例如紅＝核心、橙＝重要），並在每檔的私人筆記貼上正文的「定位」一句話，就完成目的①。
- **免費方案**：匯入精簡版 `tradingview_optical_lite_24.txt`（6 個區段、24 檔；就算區段也計入上限，合計 30 仍不超過）。旗標只有一色，建議只標核心。

#### 5.2 匯入步驟

1. 點清單名稱 → 選「匯入清單」（英文介面為 Import list 或 Upload list）→ 選 .txt 檔。
2. 檔案格式：`交易所:代號`，以逗號分隔；以 `###` 開頭的項目是區段分隔。
3. 若匯入後沒有出現區段：代號仍會匯入，改用「新增區段」手動建立再拖曳。
4. 若個別代號沒有資料：用搜尋框輸入公司名重新加入。

#### 5.3 交易所前綴對照

| 市場 | 前綴 | 例 |
|---|---|---|
| 美股 | NASDAQ／NYSE | NASDAQ:LITE、NYSE:COHR |
| 台股上市／上櫃 | TWSE／TPEX | TWSE:2383、TPEX:3081 |
| 上海／深圳 | SSE／SZSE | SSE:688498、SZSE:300308 |
| 香港 | HKEX | HKEX:522 |
| 東京 | TSE | TSE:5802 |
| 韓國 | KRX | KRX:005930 |
| 德國 Xetra | XETR | XETR:AIXA |
| 巴黎、阿姆斯特丹 | EURONEXT | EURONEXT:SOI |
| 倫敦 | LSE | LSE:IQE |
| 瑞士 | SIX | SIX:HUBN |
| 米蘭 | MIL | MIL:PRY |
| 維也納 | VIE | VIE:ATS |

- **已確認為上櫃（TPEX）**：聯亞 3081、波若威 3163、上詮 3363、英特磊 4971、旺矽 6223；其餘台股為上市（TWSE）。
- **譜瑞 4966 的上市櫃別未能確認**：檔案先用 TPEX:4966，若沒有資料改成 TWSE:4966。
- ASML、Nokia 採美國掛牌（NASDAQ:ASML、NYSE:NOK），方便以美元比較。

#### 5.4 完整版代號（依組）

| 組 | 代號 |
|---|---|
| 上1 | NASDAQ:AXTI、TPEX:3081、LSE:IQE、TPEX:4971、TWSE:2455、SZSE:002428、SSE:600703 |
| 上2 | EURONEXT:SOI、TSE:5016、TSE:4063、TSE:3436 |
| 上3 | TWSE:2383、TWSE:6213、SSE:600183、TSE:5706、NYSE:ROG |
| 中1 | NASDAQ:LITE、SSE:688498、SSE:688313、TWSE:3450、SZSE:300620、NASDAQ:POET、SSE:688048 |
| 中2 | SZSE:300394、SZSE:300570、SSE:688195、TPEX:3163、TPEX:3363 |
| 中3 | NASDAQ:CRDO、NASDAQ:ALAB、NASDAQ:SMTC、NASDAQ:MTSI、NASDAQ:MXL、TPEX:4966、SSE:688008 |
| 中4 | NASDAQ:AVGO、NASDAQ:MRVL |
| 中5 | NASDAQ:TSEM、NASDAQ:GFS、TWSE:2330、TWSE:2303、SSE:688981 |
| 中6 | TWSE:3711、NASDAQ:AMKR |
| 中7 | TWSE:3037、TSE:4062、TWSE:8046、TWSE:3189、VIE:ATS |
| 下1 | SZSE:300308、SZSE:300502、NYSE:COHR、SZSE:002281、NYSE:FN、NASDAQ:AAOI、SSE:603083、SZSE:000988 |
| 下2 | NYSE:GLW、SSE:601869、TSE:5803、SSE:600487、TSE:5801、TSE:5802、SSE:600522、MIL:PRY |
| 下3 | NYSE:APH、NYSE:TEL、TWSE:3665、NYSE:BDC、SIX:HUBN、LSE:VLX |
| 下4 | NYSE:ANET、TWSE:2345、NYSE:CLS、NASDAQ:CSCO、NYSE:NOK |
| 下5 | TWSE:2317、TWSE:2382、TWSE:6669、NYSE:HPE、NYSE:JBL、SZSE:002475、TWSE:2308 |
| 設1 | SZSE:300757、XETR:AIXA、NASDAQ:VECO、EURONEXT:ALRIB |
| 設2 | NASDAQ:ASML、NASDAQ:AMAT、NASDAQ:LRCX、TSE:8035、SSE:688012 |
| 設3 | HKEX:522、EURONEXT:BESI、NASDAQ:KLIC、TSE:6146 |
| 測1 | NASDAQ:TER、TSE:6857、NASDAQ:FORM、TPEX:6223、NASDAQ:AEHR、TWSE:2360 |
| 測2 | NASDAQ:VIAV、NYSE:KEYS、TSE:6754、TSE:6777、NYSE:RAL |
| 參1 | NASDAQ:NVDA、NASDAQ:INTC、NASDAQ:QCOM、TWSE:2454、KRX:005930 |
| 參2 | NASDAQ:SNPS、NASDAQ:CDNS |
| 參3 | NASDAQ:GOOGL |
| 參4 | TSE:6503、TSE:6752、TSE:6841、TSE:4091、TSE:2802 |

#### 5.5 精簡版（免費方案，24 檔）

選法：每個光通訊細分產業挑純度最高、流動性最好的代表，再加兩檔大盤參照。

| 區段 | 成員 | 代表的細分產業 |
|---|---|---|
| 上游材料 | AXT、聯亞、台光電 | InP 基板、InP 磊晶、高速 CCL |
| 光與電晶片 | Lumentum、源杰、Credo、Astera、Marvell、Tower | 雷射、中國 CW、AEC、Retimer、DSP、矽光代工 |
| 光被動與連接 | 天孚、波若威、Corning、Amphenol | 被動元件與 CPO 連接、光纖、銅與佈線 |
| 光模組與網通 | 中際旭創、新易盛、Coherent、Fabrinet、Arista | 光模組份額、光學代工、交換機 |
| 設備與測試 | Aixtron、羅博特科、Teradyne、FormFactor | MOCVD、CPO 組裝測試、ATE、矽光晶圓測試 |
| 大盤參照 | NVIDIA、台積電 | 美國與台灣 AI 大環境 |
