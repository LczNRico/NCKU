# Focus 1 氣體的性質（The Properties of Gases）
# 1B 氣體動力論模型（The Kinetic Model）

> **範圍**：上課簡報 p.32–62；課本 Atkins' Physical Chemistry Topic 1B（p.11–17）及章末 Exercises / Problems（p.29）、Integrated activities（p.31）
> **標示說明**：未特別標示者以簡報為主；**📘 課本補充** 表示簡報未提、取自課本的內容；**⚠️** 表示勘誤或易錯處
> **本節兩大推導**：(1) 由動量變化推出 $pV = \frac{1}{3}nMv_\text{rms}^2$；(2) 由波茲曼分布推出馬克士威–波茲曼速率分布。兩者都是考試重點。

---

## 學習重點

1. 能說出氣體動力論的三個基本假設，並評論其限制。
2. 能**逐步推導** $pV = \frac{1}{3}nMv_\text{rms}^2$，並由此說明溫度的分子意義。
3. 能**逐步推導**馬克士威–波茲曼速率分布（Maxwell–Boltzmann distribution of speeds），並解釋 $T$、$M$ 對分布曲線的影響。
4. 能推導並比較三種特徵速率：最可能速率 $v_\text{mp}$、平均速率 $v_\text{mean}$、方均根速率 $v_\text{rms}$。
5. 能推導碰撞頻率（collision frequency）$z$ 與平均自由徑（mean free path）$\lambda$，並說明它們與 $T$、$p$、分子大小的關係。

---

## 1B.1 模型本身（The Model）

### 一、氣體動力論的基本假設

**氣體動力論（kinetic theory of gases）**，又稱**氣體分子動力論（kinetic-molecular theory, KMT）**，假設氣體的能量**只來自分子的動能（kinetic energy）**。它基於三個假設（簡報 p.32）：

1. 氣體由質量為 $m$ 的分子組成，分子做**永不停止的隨機運動（ceaseless random motion）**，並遵守**古典力學（classical mechanics）**。
2. 分子的大小可忽略：分子直徑遠小於分子在兩次碰撞間的平均移動距離，分子可視為**質點（point-like）**。
3. 分子之間**只透過短暫的彈性碰撞（brief elastic collisions）** 產生交互作用。

> 📘 **彈性碰撞（elastic collision）**：碰撞前後，分子的**總移動動能（total translational kinetic energy）不變**。

> **評論假設的限制**（課本討論題 D1B.1，常見問答題）：
> - 假設 2 在**高壓**下不成立：分子間距縮小，分子本身體積不可忽略，這是凡得瓦方程式中參數 $b$ 的來源。
> - 假設 3 忽略了**分子間的長程吸引力**：在低溫、高壓下吸引力明顯，這是參數 $a$ 的來源（見 1C）。
> - 假設 1 用古典力學：對極輕的分子（如 H₂、He）在極低溫下，量子效應會變得重要。
> - 因此氣體動力論是**理想氣體的分子模型**。

---

### 二、推導一：壓力與分子速率（Pressure and Molecular Speeds）（簡報 p.33–40）

**目標**：從分子撞擊器壁的動量變化，推出巨觀的壓力。

#### Step 1：單一分子碰撞一次的動量變化（簡報 p.33）

質量 $m$、速度 $x$ 分量為 $v_x$ 的分子，以**彈性碰撞**撞擊垂直於 $x$ 軸的右側器壁後反彈：

- 碰撞前 $x$ 方向的**線動量（linear momentum）**：$+mv_x$
- 碰撞後：$-mv_x$（方向相反，大小不變）
- $y$、$z$ 分量不變。

所以每次碰撞的動量變化（大小）為

$$
\Delta p_x = mv_x - (-mv_x) = 2mv_x
$$

在時間 $\Delta t$ 內，器壁所受的總動量變化為

$$
\text{總動量變化} = (\Delta t\text{ 內撞到器壁的分子數}) \times 2mv_x
$$

#### Step 2：$\Delta t$ 內撞到器壁的分子數（簡報 p.35–37）

- 速度分量 $v_x$ 的分子在 $\Delta t$ 內沿 $x$ 方向移動 $v_x\Delta t$。
- 因此距器壁 $v_x\Delta t$ 以內、且**往器壁方向**移動的分子，都會在 $\Delta t$ 內撞到器壁（圖 1B.2）。
- 器壁面積為 $A$ 時，這些分子位於體積為 $Av_x\Delta t$ 的區域內。

**數目密度（number density）**：

$$
\mathcal{N} = \frac{N}{V} = \frac{nN_A}{V}
$$

所以此區域內的分子數為 $\dfrac{nN_A}{V}\times Av_x\Delta t$。

任一瞬間，**一半的分子往右、一半往左**，因此真正撞到右壁的分子數為

$$
\frac{nN_AAv_x\Delta t}{2V}
$$

**總動量變化**：

$$
\text{總動量變化} = \frac{nN_AAv_x\Delta t}{2V}\times 2mv_x = \frac{nmN_AAv_x^2\Delta t}{V} = \frac{nMAv_x^2\Delta t}{V}
$$

最後一步使用了**莫耳質量** $M = mN_A$。

> 📘 「一半往右」是簡化說法。嚴格做法是只對 $v_x > 0$ 的分子積分，結果相同。

#### Step 3：計算力（簡報 p.38）

由**牛頓第二運動定律（Newton's second law of motion）**，力等於動量的時間變化率：

$$
F = \frac{\text{總動量變化}}{\Delta t} = \frac{nMAv_x^2}{V}
$$

#### Step 4：計算壓力（簡報 p.38）

$$
p = \frac{F}{A} = \frac{nMv_x^2}{V}
$$

（面積 $A$ 消去。）

#### Step 5：對所有分子取平均（簡報 p.39–40）

分子速度各不相同，量到的壓力是平均值（以 $\langle\cdots\rangle$ 表示）：

$$
p = \frac{nM\langle v_x^2\rangle}{V}
$$

**等向性（isotropy）**：氣體分子的運動沒有偏好方向，所以

$$
\langle v_x^2\rangle = \langle v_y^2\rangle = \langle v_z^2\rangle
$$

又因 $v^2 = v_x^2 + v_y^2 + v_z^2$，取平均後 $\langle v^2\rangle = 3\langle v_x^2\rangle$，即

$$
\langle v_x^2\rangle = \frac{1}{3}\langle v^2\rangle
$$

定義**方均根速率（root-mean-square speed）**：

$$
\boxed{\,v_\text{rms} = \langle v^2\rangle^{1/2}\,} \qquad \text{（定義，式 1B.1）}
$$

代入得

$$
\boxed{\,pV = \frac{1}{3}nMv_\text{rms}^2\,} \qquad \text{（式 1B.2）}
$$

#### 推導延伸：溫度的分子意義（Kinetic Interpretation of Temperature）

比較式 1B.2 與理想氣體方程式 $pV = nRT$：

$$
\frac{1}{3}nMv_\text{rms}^2 = nRT \;\Rightarrow\; v_\text{rms} = \left(\frac{3RT}{M}\right)^{1/2}
$$

（這與下一段由馬克士威–波茲曼分布算出的結果式 1B.8 完全一致，所以動力論模型確實是**理想氣體的模型**。）

改寫成動能的形式：

$$
\underbrace{\frac{1}{2}Mv_\text{rms}^2}_{\text{每莫耳的平均移動動能}} = \frac{3}{2}RT
\qquad\Longleftrightarrow\qquad
\underbrace{\frac{1}{2}m\langle v^2\rangle}_{\text{每個分子}} = \frac{3}{2}kT
$$

> **重點**：
> - **溫度是分子平均移動動能的量度**。同溫度下，**任何氣體分子的平均移動動能都相同**，與分子質量無關。
> - 另一種寫法：$pV = \frac{2}{3}E_\text{k}$，其中 $E_\text{k} = \frac{1}{2}nMv_\text{rms}^2$ 是氣體的總移動動能。
> - 在 298 K 時，每莫耳的平均移動動能 $= \frac{3}{2}RT = \frac{3}{2}(8.3145)(298) = 3.72\ \text{kJ mol}^{-1}$。

---

### 三、推導二：馬克士威–波茲曼速率分布（簡報 p.41–53）

#### 1. 分布函數的意義（簡報 p.41–42）

真實氣體中，分子的速率分布很廣，碰撞會不斷重新分配速率：分子可能在一次碰撞後加速，下一次碰撞又減速。

速率在 $v$ 到 $v + dv$ 之間的分子所占的**分率（fraction）**正比於範圍寬度 $dv$，寫成

$$
\text{分率} = f(v)\,dv
$$

$f(v)$ 稱為**速率分布（distribution of speeds）**。

> **注意**：$f(v)$ 本身不是機率，**$f(v)dv$ 才是**。$f(v)$ 是「機率密度（probability density）」，單位為 (m s⁻¹)⁻¹。就像簡報 p.45 所說，機率有「面積」的感覺：曲線下的面積才是機率，而全部面積必須為 1。

**推導思路**：分子的能量全部是動能，再用**波茲曼分布（Boltzmann distribution）**描述能量在分子間的分配。

#### 2. 推導步驟

**Step 1：寫出動能的分布**（簡報 p.43）

波茲曼分布指出：速度分量為 $(v_x, v_y, v_z)$ 的分子所占分率，正比於其動能 $\varepsilon$ 的**指數函數（exponential function）**：

$$
f \propto e^{-\varepsilon/kT} = Ke^{-\varepsilon/kT}
$$

$K$ 為比例常數。動能為三個方向的貢獻之和：

$$
\varepsilon = \frac{1}{2}mv_x^2 + \frac{1}{2}mv_y^2 + \frac{1}{2}mv_z^2
$$

利用 $a^{x+y+z} = a^x a^y a^z$：

$$
f = Ke^{-(mv_x^2 + mv_y^2 + mv_z^2)/2kT} = Ke^{-mv_x^2/2kT}\,e^{-mv_y^2/2kT}\,e^{-mv_z^2/2kT}
$$

此式可**分解（factorize）** 成三個方向各自的分布：

$$
f = f(v_x)f(v_y)f(v_z), \qquad K = K_xK_yK_z, \qquad f(v_x) = K_xe^{-mv_x^2/2kT}
$$

**Step 2：決定常數 $K_x$（歸一化，normalization）**（簡報 p.44–47）

分子的 $v_x$ 必定落在 $-\infty < v_x < \infty$ 之間，所以總機率為 1：

$$
\int_{-\infty}^{\infty} f(v_x)\,dv_x = 1 \;\Rightarrow\; 1 = K_x\int_{-\infty}^{\infty} e^{-mv_x^2/2kT}\,dv_x
$$

使用**高斯積分（Gaussian integral）**（課本 Integral G.1）：

$$
\int_{-\infty}^{\infty} e^{-ax^2}dx = \left(\frac{\pi}{a}\right)^{1/2}, \qquad a = \frac{m}{2kT}
$$

$$
1 = K_x\left(\frac{2\pi kT}{m}\right)^{1/2} \;\Rightarrow\; K_x = \left(\frac{m}{2\pi kT}\right)^{1/2}
$$

$$
\boxed{\,f(v_x) = \left(\frac{m}{2\pi kT}\right)^{1/2}e^{-mv_x^2/2kT}\,} \qquad \text{（一維速度分布，式 1B.3）}
$$

> **📐 數學補充：高斯積分怎麼算？**
> 簡報 p.46 放了一個 $\int x^2e^{-x^3}dx$ 的變數代換例子。**但 $\int e^{-ax^2}dx$ 不能用變數代換解**，因為 $e^{-ax^2}$ 沒有初等函數的反導函數。標準做法是「平方後換極座標」：
> $$I = \int_{-\infty}^{\infty}e^{-ax^2}dx \;\Rightarrow\; I^2 = \int_{-\infty}^{\infty}\!\!\int_{-\infty}^{\infty}e^{-a(x^2+y^2)}dx\,dy = \int_0^{2\pi}\!\!\int_0^{\infty}e^{-ar^2}\,r\,dr\,d\theta = 2\pi\cdot\frac{1}{2a} = \frac{\pi}{a}$$
> 所以 $I = (\pi/a)^{1/2}$。內層 $\int_0^\infty re^{-ar^2}dr$ 因為多了一個 $r$，**就可以**用 $u = r^2$ 代換，這正是簡報 p.46 例子所示技巧的用處。

**Step 3：三維速度的機率**（簡報 p.48）

分子速度落在 $v_x\sim v_x+dv_x$、$v_y\sim v_y+dv_y$、$v_z\sim v_z+dv_z$ 的機率：

$$
f(v_x)f(v_y)f(v_z)\,dv_xdv_ydv_z = \left(\frac{m}{2\pi kT}\right)^{3/2}e^{-mv^2/2kT}\,dv_xdv_ydv_z \qquad (\text{式 1B.4})
$$

其中 $v^2 = v_x^2 + v_y^2 + v_z^2$。**注意這個式子只與速率 $v$ 有關，與方向無關。**

**Step 4：轉換成速率的分布——速度空間中的球殼**（簡報 p.49–51）

- 把 $(v_x, v_y, v_z)$ 想成**速度空間（velocity space）** 的座標，體積元素為 $dv_xdv_ydv_z$。
- 速率在 $v \sim v+dv$ 之間（不論方向）的所有點，構成一個半徑 $v$、厚度 $dv$ 的**球殼（spherical shell）**（圖 1B.3）。
- 球殼體積 = 表面積 × 厚度 $= 4\pi v^2\,dv$。
- 由於 Step 3 的機率密度只與 $v$ 有關，在球殼上處處相同，所以

$$
f(v)\,dv = \left(\frac{m}{2\pi kT}\right)^{3/2}e^{-mv^2/2kT}\times 4\pi v^2\,dv
$$

**Step 5：改用莫耳量表示**

利用 $R = N_Ak$，得 $\dfrac{m}{k} = \dfrac{mN_A}{R} = \dfrac{M}{R}$：

$$
\boxed{\,f(v) = 4\pi\left(\frac{M}{2\pi RT}\right)^{3/2}v^2\,e^{-Mv^2/2RT}\,} \qquad \text{馬克士威–波茲曼速率分布（式 1B.5）}
$$

> ⚠️ **簡報 p.51 勘誤**：簡報最終式寫成 $4\pi\left[\dfrac{M}{2\pi kT}\right]^{3/2}v^2e^{-Mv^2/2RT}$，括號內把 **$M$ 與 $k$ 混用**了。正確是 $\left(\dfrac{M}{2\pi RT}\right)^{3/2}$ 或 $\left(\dfrac{m}{2\pi kT}\right)^{3/2}$：**莫耳質量配 $R$，分子質量配 $k$**。可用單位檢查：$M/RT$ 的單位是 $(\text{kg mol}^{-1})/(\text{J mol}^{-1}) = \text{s}^2\,\text{m}^{-2}$，次方 $3/2$ 後乘上 $v^2$（m² s⁻²），得 (m s⁻¹)⁻¹，正是機率密度的單位 ✓。

#### 3. 分布的特徵（簡報 p.52–54，圖 1B.4）

$$
f(v) = \underbrace{4\pi\left(\frac{M}{2\pi RT}\right)^{3/2}}_{\text{歸一化常數}}\;\underbrace{v^2}_{\text{球殼因子}}\;\underbrace{e^{-Mv^2/2RT}}_{\text{高斯衰減}}
$$

| 因子 | 效果 |
|---|---|
| **高斯函數（Gaussian function）** $e^{-Mv^2/2RT}$ | 當 $v$ 很大時趨近零，所以**極高速的分子很少** |
| 指數中的 $M/2RT$ | $M$ 大時衰減更快，所以**重分子不太可能有極高速率** |
| | $T$ 高時衰減較慢，所以**高溫時有較多高速分子** |
| **$v^2$ 因子** | $v \to 0$ 時趨近零，所以**不論質量為何，極低速的分子也很少** |
| 其餘常數 $4\pi(M/2\pi RT)^{3/2}$ | 確保 $\int_0^\infty f(v)dv = 1$ |

**圖 1B.4 的判讀**：

- **低溫或高分子量**：峰窄、高，且位於低速處。
- **高溫或低分子量**：峰寬、矮，且往高速移動。
- 曲線下總面積永遠是 1，所以峰變寬時必然變矮。
- 分布只取決於 **$T/M$ 這個比值**：「升高溫度」與「降低分子量」效果相同。

> **$f(v_x)$ 與 $f(v)$ 的差別**（常考）：
> - 一維 $f(v_x)$ 是對稱於 0 的高斯曲線，**最大值在 $v_x = 0$**：最可能的速度分量是 0。
> - 三維 $f(v)$ 因為乘上了 $v^2$，**在 $v = 0$ 為零**，峰在 $v_\text{mp} > 0$。
> - 原因：速率為 $v$ 的「方向」有很多種（球殼面積 $\propto v^2$），$v$ 越大，可能的速度向量越多。

---

### 四、平均值與特徵速率（Mean Values）（簡報 p.55–57）

#### 1. 速率區間的分率與平均值

速率在 $v_1$ 到 $v_2$ 之間的分子分率是曲線下的面積（圖 1B.5）：

$$
F(v_1, v_2) = \int_{v_1}^{v_2}f(v)\,dv
$$

除特殊情況外，此積分需用數值方法計算。若區間很窄（$\Delta v \ll v$），可近似為 $F \approx f(v)\Delta v$。

$v$ 的 $n$ 次方的平均值：

$$
\langle v^n\rangle = \int_0^\infty v^n f(v)\,dv \qquad (\text{式 1B.6})
$$

**常用積分表**（令 $a = M/2RT$；課本 Resource section）

| 積分 | 結果 |
|---|---|
| $\int_{-\infty}^{\infty}e^{-ax^2}dx$ | $(\pi/a)^{1/2}$ |
| $\int_0^{\infty}xe^{-ax^2}dx$ | $\dfrac{1}{2a}$ |
| $\int_0^{\infty}x^2e^{-ax^2}dx$ | $\dfrac{1}{4}\left(\dfrac{\pi}{a^3}\right)^{1/2}$ |
| $\int_0^{\infty}x^3e^{-ax^2}dx$ | $\dfrac{1}{2a^2}$ |
| $\int_0^{\infty}x^4e^{-ax^2}dx$ | $\dfrac{3}{8}\left(\dfrac{\pi}{a^5}\right)^{1/2}$ |

此時 $f(v) = 4\pi(a/\pi)^{3/2}v^2e^{-av^2}$。

#### 2. 推導三種特徵速率

**(a) 方均根速率 $v_\text{rms}$**（$n = 2$，課本 Self-test 1B.1）

$$
\langle v^2\rangle = 4\pi\left(\frac{a}{\pi}\right)^{3/2}\int_0^\infty v^4e^{-av^2}dv = 4\pi\frac{a^{3/2}}{\pi^{3/2}}\cdot\frac{3}{8}\frac{\pi^{1/2}}{a^{5/2}} = \frac{3}{2a} = \frac{3RT}{M} \qquad (\text{式 1B.7})
$$

$$
\boxed{\,v_\text{rms} = \left(\frac{3RT}{M}\right)^{1/2}\,} \qquad (\text{式 1B.8})
$$

**(b) 平均速率 $v_\text{mean}$**（$n = 1$）

$$
v_\text{mean} = 4\pi\left(\frac{a}{\pi}\right)^{3/2}\int_0^\infty v^3e^{-av^2}dv = 4\pi\frac{a^{3/2}}{\pi^{3/2}}\cdot\frac{1}{2a^2} = \frac{2}{(\pi a)^{1/2}}
$$

$$
\boxed{\,v_\text{mean} = \left(\frac{8RT}{\pi M}\right)^{1/2} = \left(\frac{8}{3\pi}\right)^{1/2}v_\text{rms}\,} \qquad (\text{式 1B.9})
$$

**(c) 最可能速率 $v_\text{mp}$**（分布的峰值，$df/dv = 0$；詳見習題 P1B.10）

$$
\boxed{\,v_\text{mp} = \left(\frac{2RT}{M}\right)^{1/2} = \left(\frac{2}{3}\right)^{1/2}v_\text{rms}\,} \qquad (\text{式 1B.10})
$$

#### 3. 三種速率的比較（簡報 p.56；課本圖 1B.6）

以 $v_\text{mp}$ 為單位：

$$
v_\text{mp} : v_\text{mean} : v_\text{rms} = 1 : \left(\frac{4}{\pi}\right)^{1/2} : \left(\frac{3}{2}\right)^{1/2} = 1 : 1.128 : 1.225
$$

$$
\boxed{\,v_\text{mp} < v_\text{mean} < v_\text{rms}\,}
$$

> **為什麼是這個順序？**
> - 分布曲線**右側拖著長尾巴（不對稱）**，高速分子把平均值往右拉，所以 $v_\text{mean} > v_\text{mp}$。
> - $v_\text{rms}$ 先平方再平均，**更加強調**高速分子，所以 $v_\text{rms} > v_\text{mean}$。這是數學上的普遍性質 $\langle v^2\rangle \ge \langle v\rangle^2$。

**共同規律**：三者都 $\propto (T/M)^{1/2}$，即**溫度越高越快、分子越重越慢**（簡報 p.55 箭頭）。

| 速率 | 定義 | 用途 |
|---|---|---|
| 最可能速率 $v_\text{mp}$ | $f(v)$ 的峰值位置 | 最多分子所具有的速率 |
| 平均速率 $v_\text{mean}$ | $\langle v\rangle$ | 碰撞頻率、平均自由徑、擴散（1B.2） |
| 方均根速率 $v_\text{rms}$ | $\langle v^2\rangle^{1/2}$ | 壓力、動能（$\frac{1}{2}m v_\text{rms}^2 = \frac{3}{2}kT$） |

> ⚠️ **簡報 p.55–56 右上角的定義有誤**：
> - 簡報寫「RMS velocity is the average speed of an object or particle in any given direction」，不正確。$v_\text{rms}$ 的定義是**速率平方的平均值再開根號**（式 1B.1），與「某個方向」無關。
> - 簡報寫「average velocity is the total distance travelled divided by the total time」，這是力學中「平均速率」的定義，與此處統計上的 $v_\text{mean} = \langle v\rangle$（對分布取平均）意義不同。
> - 這三者都是**速率（speed，純量）**，不是**速度（velocity，向量）**。氣體分子的**平均速度向量為零**（各方向機會均等），但平均速率不為零。

#### 4. 平均相對速率（Mean Relative Speed）（簡報 p.57）

**平均相對速率** $v_\text{rel}$：一個分子接近另一個分子的平均速率。它決定碰撞的頻率。

**定性說明（圖 1B.7）**：設兩分子速率都是 $v$：

| 運動方向 | 相對速率 |
|---|---|
| 同方向（紅框） | $0$ |
| 迎面相撞（藍框） | $2v$ |
| 互相垂直，從側面接近（綠框） | $\sqrt{v^2 + v^2} = 2^{1/2}v$ |

最具代表性的是側面接近，所以平均相對速率約為 $2^{1/2}v$。詳細計算證實：

$$
\boxed{\,v_\text{rel} = 2^{1/2}v_\text{mean}\,} \qquad \text{（相同分子，式 1B.11a）}
$$

**不同分子 A、B**：

$$
\boxed{\,v_\text{rel} = \left(\frac{8kT}{\pi\mu}\right)^{1/2}, \qquad \mu = \frac{m_\text{A}m_\text{B}}{m_\text{A} + m_\text{B}}\,} \qquad (\text{式 1B.11b})
$$

$\mu$ 稱為**約化質量（reduced mass）**。

> **檢查**：A、B 相同時 $\mu = m/2$，代入得 $v_\text{rel} = (16kT/\pi m)^{1/2} = 2^{1/2}(8kT/\pi m)^{1/2} = 2^{1/2}v_\text{mean}$ ✓
> ⚠️ 式 1B.11b 用的是**分子質量** $m$ 與 $k$。若改用莫耳質量，要寫成 $(8RT/\pi\mu_\text{molar})^{1/2}$。

---

### 📘 課本例題 1B.1：計算 N₂ 的平均速率

**題目**：Calculate $v_\text{rms}$ and the mean speed, $v_\text{mean}$, of N₂ molecules at 25 °C.
（計算 25 °C 時 N₂ 分子的 $v_\text{rms}$ 與平均速率 $v_\text{mean}$。）

**詳解**：$M = 0.02802\ \text{kg mol}^{-1}$，$T = 298\ \text{K}$；注意 $1\ \text{J} = 1\ \text{kg m}^2\,\text{s}^{-2}$。

$$
v_\text{rms} = \left(\frac{3(8.3145\ \text{J K}^{-1}\text{mol}^{-1})(298\ \text{K})}{0.02802\ \text{kg mol}^{-1}}\right)^{1/2} = 515\ \text{m s}^{-1}
$$

$$
v_\text{mean} = \left(\frac{8(8.3145)(298)}{\pi(0.02802)}\right)^{1/2} = 475\ \text{m s}^{-1}
$$

（補充：$v_\text{mp} = (2RT/M)^{1/2} = 421\ \text{m s}^{-1}$。三者比例 421 : 475 : 515 = 1 : 1.128 : 1.225 ✓）

> ⚠️ **易錯**：$M$ 一定要用 **kg mol⁻¹**，否則答案會差 $\sqrt{1000} \approx 31.6$ 倍。

### 📘 練習：不同分子的相對速率（課本 E1B.2）

**題目**：25 °C 時，N₂（28.02 g mol⁻¹）與 H₂（2.016 g mol⁻¹）的平均相對速率為何？

**詳解**：

$$
\mu = \frac{(28.02)(2.016)}{28.02 + 2.016}\ \text{g mol}^{-1} = 1.881\ \text{g mol}^{-1}
$$

$$
v_\text{rel} = \left(\frac{8(8.3145)(298.15)}{\pi(1.881\times10^{-3})}\right)^{1/2} = 1.83\times10^3\ \text{m s}^{-1}
$$

> **觀念**：約化質量**小於兩者中較小的質量**，所以 $v_\text{rel}$ 由**輕分子主導**。

---

## 1B.2 碰撞（Collisions）

### 一、碰撞頻率（Collision Frequency）（簡報 p.58–60）

#### 1. 碰撞直徑與碰撞截面

雖然模型假設分子是質點，但只要兩分子**中心距離**小於某特徵距離 $d$，就算一次碰撞（hit）。

- **碰撞直徑（collision diameter）** $d$：若把分子視為不可穿透的硬球（hard sphere），$d$ 就是球的直徑（兩個半徑之和）。
- **碰撞截面（collision cross-section）** $\sigma$：

$$
\sigma = \pi d^2
$$

> ⚠️ **易錯**：$\sigma = \pi d^2$，**不是** $\pi r^2$。碰撞截面的半徑是 $d$（兩分子中心距離小於 $d$ 就會碰撞），所以 $\sigma$ 是單一分子截面積 $\pi r^2$ 的 **4 倍**。

**📘 課本表 1B.1 碰撞截面**

| 分子 | $\sigma$/nm² |
|---|---|
| C₆H₆ | 0.88 |
| CO₂ | 0.52 |
| He | 0.21 |
| N₂ | 0.43 |

#### 2. 推導碰撞頻率

**碰撞頻率** $z$：一個分子在一段時間內的碰撞次數除以該時間。

**Step 1：凍結模型。** 想像除了一個分子以外，**其他分子都靜止不動**。因為只關心相對運動，所以這個分子以**平均相對速率** $v_\text{rel}$（而非 $v_\text{mean}$）移動。

**Step 2：碰撞管（collision tube）。** 在 $\Delta t$ 內，此分子移動 $v_\text{rel}\Delta t$。任何中心落在以其路徑為軸、截面積 $\sigma = \pi d^2$ 的圓柱內的分子都會被撞到（圖 1B.8）。

$$
\text{碰撞管體積} = \sigma v_\text{rel}\Delta t
$$

**Step 3：數目。** 管內的分子數 = 體積 × 數目密度 $\mathcal{N}$ = 碰撞次數：

$$
\text{碰撞次數} = \mathcal{N}\sigma v_\text{rel}\Delta t
$$

**Step 4：除以 $\Delta t$。**

$$
\boxed{\,z = \sigma v_\text{rel}\mathcal{N}\,} \qquad (\text{式 1B.12a})
$$

**Step 5：以壓力表示。** 由理想氣體方程式與 $R = N_Ak$：

$$
\mathcal{N} = \frac{N}{V} = \frac{nN_A}{V} = \frac{nN_A}{nRT/p} = \frac{pN_A}{RT} = \frac{p}{kT}
$$

$$
\boxed{\,z = \frac{\sigma v_\text{rel}\,p}{kT}\,} \qquad (\text{式 1B.12b})
$$

> **物理意義**：
> - **定容**時，$z$ 隨 $T$ 增加（式 1B.12a：$\mathcal{N}$ 不變，$v_\text{rel} \propto T^{1/2}$）。
> - **定溫**時，$z \propto p$（式 1B.12b）：壓力越大，數目密度越大，越常相遇。
> - $z$ 也正比於 $\sigma$：分子越大越容易被撞到。

### 二、平均自由徑（Mean Free Path）（簡報 p.61）

**平均自由徑** $\lambda$（lambda）：分子在兩次碰撞之間平均移動的距離。

分子碰撞頻率為 $z$，兩次碰撞間的**自由飛行（free flight）** 時間為 $1/z$，這段時間移動距離 $v_\text{rel}/z$：

$$
\boxed{\,\lambda = \frac{v_\text{rel}}{z}\,} \qquad (\text{式 1B.13})
$$

代入式 1B.12b：

$$
\boxed{\,\lambda = \frac{kT}{\sigma p}\,} \qquad (\text{式 1B.14，理想氣體})
$$

> ⚠️ **簡報 p.61 勘誤**：簡報寫 $\lambda = \dfrac{KT}{\sigma p}$，**$K$ 應為小寫 $k$**（波茲曼常數）。$K$ 在 1B.1 的推導中是比例常數，大寫 $K$ 也常代表平衡常數，不可混用。

> **$\lambda$ 與各變數的關係**（課本討論題 D1B.2）：
> - **壓力**：$\lambda \propto 1/p$。壓力加倍，$\lambda$ 減半，因為分子更擁擠。
> - **分子大小**：$\lambda \propto 1/\sigma$。分子越大，越容易撞到別的分子。
> - **溫度**：式中雖有 $T$，但在**定容**下 $p \propto T$，$T/p$ 不變，所以 **$\lambda$ 與溫度無關**。分子跑得快，只是更快到達下一次碰撞，路徑長度不變。$\lambda$ 只取決於單位體積內有多少分子（$\lambda = 1/\sigma\mathcal{N}$）。
> - 注意 $\lambda$ 與 $v_\text{rel}$ 無關，但 $z$ 與 $v_\text{rel}$ 有關。

---

### 📘 課本 Brief illustration 1B.1 & 1B.2：N₂ 在 25 °C、1 atm 的碰撞

**碰撞頻率**：由例題 1B.1，$v_\text{mean} = 475\ \text{m s}^{-1}$，所以 $v_\text{rel} = 2^{1/2}\times 475 = 671\ \text{m s}^{-1}$；$\sigma = 0.43\ \text{nm}^2 = 0.43\times10^{-18}\ \text{m}^2$。

$$
z = \frac{\sigma v_\text{rel}p}{kT} = \frac{(0.43\times10^{-18}\ \text{m}^2)(671\ \text{m s}^{-1})(1.01\times10^5\ \text{Pa})}{(1.381\times10^{-23}\ \text{J K}^{-1})(298\ \text{K})} = 7.1\times10^9\ \text{s}^{-1}
$$

每個分子每秒約碰撞 70 億次。

**平均自由徑**：

$$
\lambda = \frac{v_\text{rel}}{z} = \frac{671\ \text{m s}^{-1}}{7.1\times10^9\ \text{s}^{-1}} = 9.5\times10^{-8}\ \text{m} = 95\ \text{nm}
$$

> **整體圖像**（課本總結）：25 °C、1 atm 的典型氣體（N₂、O₂）中，分子平均速率約 500 m s⁻¹，約每 **1 ns** 碰撞一次，兩次碰撞間移動約 **100 nm**。
> 📘 課本說這「約為 1000 個分子直徑」。由 $\sigma = \pi d^2$ 反推 $d = (0.43/\pi)^{1/2} = 0.37$ nm，$\lambda/d \approx 260$，數量級為 $10^2$–$10^3$。重點是 $\lambda \gg d$，這正好**驗證了假設 2**（分子大小可忽略）。

---

### 概念地圖：1B 在整個 Focus 1 的位置（簡報 p.62）

簡報 p.62 用紅框標出：1B 氣體動力論為「理想氣體」這一支（$pV = nRT$ 與其衍生定律）提供了**分子層次的解釋**；下方的維里方程式與凡得瓦方程式則屬於 1C 真實氣體，處理動力論假設不成立時的情況。

---

## 精選章末習題（含詳解）

> 數值均已用程式驗算。

---

### 習題 1｜E1B.10 特定速率區間的分子分率

**題目**：Use the Maxwell–Boltzmann distribution of speeds to estimate the fraction of N₂ molecules at 400 K that have speeds in the range 200–210 m s⁻¹. *Hint*: The fraction of molecules with speeds in the range $v$ to $v + dv$ is equal to $f(v)dv$.

（利用馬克士威–波茲曼分布，估計 400 K 時速率在 200–210 m s⁻¹ 之間的 N₂ 分子所占分率。）

**解題思路**：區間寬度 $\Delta v = 10\ \text{m s}^{-1}$ 遠小於典型速率（$v_\text{mp} = 487\ \text{m s}^{-1}$），$f(v)$ 在區間內變化不大，可用 $F \approx f(v)\Delta v$，取區間中點 $v = 205\ \text{m s}^{-1}$。

**詳解**：

$$
\frac{M}{2RT} = \frac{0.02802}{2(8.3145)(400)} = 4.212\times10^{-6}\ \text{s}^2\,\text{m}^{-2}
$$

$$
4\pi\left(\frac{M}{2\pi RT}\right)^{3/2} = 4\pi\left(\frac{4.212\times10^{-6}}{\pi}\right)^{3/2} = 1.951\times10^{-8}\ \text{s}^3\,\text{m}^{-3}
$$

$$
f(205) = (1.951\times10^{-8})(205)^2\,e^{-(4.212\times10^{-6})(205)^2} = (8.200\times10^{-4})\,e^{-0.1770} = 6.87\times10^{-4}\ \text{s m}^{-1}
$$

$$
F \approx f(v)\Delta v = (6.87\times10^{-4}\ \text{s m}^{-1})(10\ \text{m s}^{-1}) = \boxed{6.87\times10^{-3}}
$$

約 **0.69%** 的分子。直接數值積分 $\int_{200}^{210}f(v)dv$ 也得 $6.87\times10^{-3}$，近似非常好。

> **注意**：若取 $v = 200$（區間下限），得 $6.59\times10^{-3}$，誤差約 4%。**用區間中點較準確**。

---

### 習題 2｜E1B.16 超高真空中的分子行為

**題目**：The best laboratory vacuum pump can generate a vacuum of about 1 nTorr. At 25 °C and assuming that air consists of N₂ molecules with a collision diameter of 395 pm, calculate at this pressure (i) the mean speed of the molecules, (ii) the mean free path, (iii) the collision frequency in the gas.

（最好的實驗室真空幫浦可達約 1 nTorr。在 25 °C 下，假設空氣全為碰撞直徑 395 pm 的 N₂，計算此壓力下：(i) 平均速率；(ii) 平均自由徑；(iii) 碰撞頻率。）

**詳解**：

**單位換算**：

$$
p = 1\times10^{-9}\ \text{Torr}\times133.32\ \text{Pa Torr}^{-1} = 1.333\times10^{-7}\ \text{Pa}
$$

$$
\sigma = \pi d^2 = \pi(395\times10^{-12}\ \text{m})^2 = 4.90\times10^{-19}\ \text{m}^2
$$

**(i) 平均速率**（與壓力無關）：

$$
v_\text{mean} = \left(\frac{8(8.3145)(298.15)}{\pi(0.02802)}\right)^{1/2} = \boxed{475\ \text{m s}^{-1}}
$$

**(ii) 平均自由徑**：

$$
\lambda = \frac{kT}{\sigma p} = \frac{(1.381\times10^{-23})(298.15)}{(4.90\times10^{-19})(1.333\times10^{-7})} = \boxed{6.3\times10^{4}\ \text{m} \approx 63\ \text{km}}
$$

**(iii) 碰撞頻率**：

$$
z = \frac{v_\text{rel}}{\lambda} = \frac{2^{1/2}(475)}{6.3\times10^4} = \boxed{1.1\times10^{-2}\ \text{s}^{-1}}
$$

平均約 **94 秒**才碰撞一次。

> **觀念延伸**：
> - 63 km 遠大於任何真空腔體，所以在超高真空中，**分子幾乎只撞器壁、不互相碰撞**，這種狀態稱為**分子流（molecular flow）**。
> - 這也與 1A 的 BA 型真空計（量測範圍到約 $10^{-10}$ Torr）相呼應：在這種壓力下，每 cm³ 仍有約 $\mathcal{N} = p/kT = 3.2\times10^{13}\ \text{m}^{-3} = 3.2\times10^7\ \text{cm}^{-3}$ 個分子。「真空」並不空。

---

### 習題 3｜P1B.2 二維氣體的速率分布

**題目**：Consider molecules that are confined to move in a plane (a two-dimensional gas). Calculate the distribution of speeds and determine the mean speed of the molecules at a temperature $T$.

（考慮被限制在平面上運動的分子〔二維氣體〕。計算其速率分布，並求溫度 $T$ 時的平均速率。）

**解題思路**：仿照三維推導，但速度空間只有二維。三維的「球殼 $4\pi v^2dv$」換成二維的「圓環（annulus）$2\pi v\,dv$」。

**詳解**：

**Step 1：二維速度分布**

$$
f(v_x)f(v_y)\,dv_xdv_y = \left(\frac{m}{2\pi kT}\right)e^{-mv^2/2kT}\,dv_xdv_y, \qquad v^2 = v_x^2 + v_y^2
$$

（每個方向貢獻 $(m/2\pi kT)^{1/2}$，兩個方向相乘得一次方。）

**Step 2：轉換成速率**：速率在 $v\sim v+dv$ 之間的點，在速度平面上構成半徑 $v$、寬 $dv$ 的圓環，面積為 $2\pi v\,dv$：

$$
f(v)\,dv = \frac{m}{2\pi kT}e^{-mv^2/2kT}\times 2\pi v\,dv
$$

$$
\boxed{\,f(v) = \frac{m}{kT}\,v\,e^{-mv^2/2kT}\,} \qquad \left(\text{或} = \frac{M}{RT}\,v\,e^{-Mv^2/2RT}\right)
$$

**驗證歸一化**（令 $a = m/2kT$）：

$$
\int_0^\infty 2a\,v\,e^{-av^2}dv = 2a\cdot\frac{1}{2a} = 1 \;✓
$$

**Step 3：平均速率**

$$
v_\text{mean} = \int_0^\infty v f(v)\,dv = 2a\int_0^\infty v^2e^{-av^2}dv = 2a\cdot\frac{1}{4}\left(\frac{\pi}{a^3}\right)^{1/2} = \frac{1}{2}\left(\frac{\pi}{a}\right)^{1/2}
$$

$$
\boxed{\,v_\text{mean}^{(2\text{D})} = \left(\frac{\pi kT}{2m}\right)^{1/2} = \left(\frac{\pi RT}{2M}\right)^{1/2}\,}
$$

> **比較**：
> $$\frac{v_\text{mean}^{(2\text{D})}}{v_\text{mean}^{(3\text{D})}} = \frac{(\pi kT/2m)^{1/2}}{(8kT/\pi m)^{1/2}} = \left(\frac{\pi^2}{16}\right)^{1/2} = \frac{\pi}{4} \approx 0.785$$
> 二維氣體的平均速率較低，因為少了一個自由度可以貢獻動能（二維時 $\langle\frac{1}{2}mv^2\rangle = kT$，三維時為 $\frac{3}{2}kT$）。
> **應用**：吸附在固體表面上、可在表面移動的分子，就近似二維氣體。

---

### 習題 4｜P1B.3 速度選擇器

**題目**：A specially constructed velocity selector accepts a beam of molecules from an oven at a temperature $T$ but blocks the passage of molecules with a speed greater than the mean. What is the mean speed of the emerging beam, relative to the initial value? Treat the system as one-dimensional.

（一個特製的速度選擇器接收來自溫度 $T$ 爐子的分子束，但擋住速率大於平均值的分子。出射分子束的平均速率是原本的幾倍？將系統視為一維。）

**解題思路**：一維、只往正方向（$v \ge 0$）的分布 $f(v) \propto e^{-av^2}$（$a = m/2kT$）。先求原平均 $\bar{v}_0$，再求截斷在 $\bar{v}_0$ 以下的新平均。注意截斷後要**重新歸一化**。

**詳解**：

**Step 1：原平均速率**

$$
\bar{v}_0 = \frac{\int_0^\infty ve^{-av^2}dv}{\int_0^\infty e^{-av^2}dv} = \frac{1/2a}{\frac{1}{2}(\pi/a)^{1/2}} = \frac{1}{(\pi a)^{1/2}}
$$

**Step 2：截斷後的平均速率**（只保留 $0 \le v \le \bar{v}_0$）

$$
\bar{v} = \frac{\int_0^{\bar{v}_0}ve^{-av^2}dv}{\int_0^{\bar{v}_0}e^{-av^2}dv}
$$

令 $x = a^{1/2}v$，上限 $x_0 = a^{1/2}\bar{v}_0 = \pi^{-1/2}$：

- 分子：$\displaystyle\int_0^{\bar{v}_0}ve^{-av^2}dv = \frac{1}{2a}\left(1 - e^{-a\bar{v}_0^2}\right) = \frac{1}{2a}\left(1 - e^{-1/\pi}\right)$
- 分母：$\displaystyle\int_0^{\bar{v}_0}e^{-av^2}dv = \frac{1}{a^{1/2}}\cdot\frac{\pi^{1/2}}{2}\,\text{erf}(\pi^{-1/2})$

其中 $\text{erf}(x) = \frac{2}{\sqrt{\pi}}\int_0^x e^{-t^2}dt$ 為**誤差函數（error function）**。

**Step 3：比值**

$$
\frac{\bar{v}}{\bar{v}_0} = \frac{\dfrac{1 - e^{-1/\pi}}{2a}}{\dfrac{\pi^{1/2}}{2a^{1/2}}\text{erf}(\pi^{-1/2})}\times(\pi a)^{1/2} = \frac{1 - e^{-1/\pi}}{\text{erf}(\pi^{-1/2})}
$$

代入 $e^{-1/\pi} = 0.7274$、$\text{erf}(0.5642) = 0.5752$：

$$
\frac{\bar{v}}{\bar{v}_0} = \frac{0.2726}{0.5752} = \boxed{0.474}
$$

出射分子束的平均速率約為原本的 **47%**。

> **觀念**：結果略小於一半。因為被保留的 $0$–$\bar{v}_0$ 區間中，一維分布在 $v = 0$ 附近最大，低速分子較多。

---

### 習題 5｜P1B.4 速率高於 $v_\text{rms}$ 或 $v_\text{mean}$ 的分子比例

**題目**：What, according to the Maxwell–Boltzmann distribution, is the proportion of gas molecules having (i) more than, (ii) less than the root-mean-square speed? (iii) What are the proportions having speeds greater and smaller than the mean speed?

（依馬克士威–波茲曼分布，速率 (i) 高於、(ii) 低於方均根速率的分子比例各為何？(iii) 高於與低於平均速率的比例各為何？）

**解題思路**：以 $x = v/v_\text{mp}$ 為無因次變數，分布變成與 $T$、$M$ 無關的通用形式。速率高於 $v$ 的分率可用誤差函數寫成解析式。

**詳解**：

**Step 1：無因次化**。令 $x = v/v_\text{mp}$（$v_\text{mp}^2 = 2RT/M$）：

$$
f(v)\,dv = \frac{4}{\pi^{1/2}}x^2e^{-x^2}dx
$$

**Step 2：分部積分**。速率高於 $x_0$ 的分率：

$$
F(x > x_0) = \frac{4}{\pi^{1/2}}\int_{x_0}^\infty x^2e^{-x^2}dx
$$

令 $u = x$、$dw = xe^{-x^2}dx$（$w = -\frac{1}{2}e^{-x^2}$）：

$$
\int_{x_0}^\infty x^2e^{-x^2}dx = \frac{1}{2}x_0e^{-x_0^2} + \frac{1}{2}\int_{x_0}^\infty e^{-x^2}dx = \frac{1}{2}x_0e^{-x_0^2} + \frac{\pi^{1/2}}{4}\text{erfc}(x_0)
$$

$$
\boxed{\,F(x > x_0) = \text{erfc}(x_0) + \frac{2x_0}{\pi^{1/2}}e^{-x_0^2}\,}
$$

（$\text{erfc}(x) = 1 - \text{erf}(x)$ 為**互補誤差函數（complementary error function）**。）

**Step 3：代入**

| 門檻 | $x_0 = v/v_\text{mp}$ | 高於門檻 | 低於門檻 |
|---|---|---|---|
| (i)(ii) $v_\text{rms}$ | $(3/2)^{1/2} = 1.225$ | **0.392**（39.2%） | **0.608**（60.8%） |
| (iii) $v_\text{mean}$ | $(4/\pi)^{1/2} = 1.128$ | **0.467**（46.7%） | **0.533**（53.3%） |

> **觀念**：
> - 結果**與 $T$、$M$ 無關**，對所有理想氣體都相同。
> - 速率高於 $v_\text{mean}$ 的分子**不到一半**，再次說明分布是右偏的：少數高速分子把平均值拉高。

---

### 習題 6｜P1B.7 脫離速度與行星大氣組成

**題目**：Calculate the escape velocity (the minimum initial velocity that will take an object to infinity) from the surface of a planet of radius $R$. What is the value for (i) the Earth, $R = 6.37\times10^6$ m, $g = 9.81$ m s⁻², (ii) Mars, $R = 3.38\times10^6$ m, $m_\text{Mars}/m_\text{Earth} = 0.108$. At what temperatures do H₂, He, and O₂ molecules have mean speeds equal to their escape speeds? What proportion of the molecules have enough speed to escape when the temperature is (i) 240 K, (ii) 1500 K? Calculations of this kind are very important in considering the composition of planetary atmospheres.

（計算半徑 $R$ 的行星表面的**脫離速度（escape velocity）**，即使物體能到達無窮遠的最小初速。求 (i) 地球、(ii) 火星的值。H₂、He、O₂ 在什麼溫度時平均速率等於脫離速度？在 240 K 與 1500 K 時，有多少比例的分子速率足以脫離？）

**詳解**：

**Step 1：推導脫離速度**

由**力學能守恆（conservation of mechanical energy）**：表面的動能至少要等於從表面到無窮遠所需克服的**重力位能（gravitational potential energy）**：

$$
\frac{1}{2}mv_e^2 = \frac{GMm}{R} \;\Rightarrow\; v_e = \left(\frac{2GM}{R}\right)^{1/2}
$$

又表面重力加速度 $g = GM/R^2$，即 $GM = gR^2$：

$$
\boxed{\,v_e = (2gR)^{1/2}\,}
$$

**Step 2：數值**

- **地球**：$v_e = [2(9.81)(6.37\times10^6)]^{1/2} = \boxed{1.12\times10^4\ \text{m s}^{-1}}$（11.2 km s⁻¹）
- **火星**：先求火星表面的 $g$。由 $g \propto M_\text{planet}/R^2$：
  $$g_\text{Mars} = 9.81\times0.108\times\left(\frac{6.37}{3.38}\right)^2 = 3.76\ \text{m s}^{-2}$$
  $$v_e = [2(3.76)(3.38\times10^6)]^{1/2} = \boxed{5.04\times10^3\ \text{m s}^{-1}}$$

**Step 3：平均速率等於脫離速度的溫度**

$$
v_\text{mean} = \left(\frac{8RT}{\pi M}\right)^{1/2} = v_e \;\Rightarrow\; T = \frac{\pi Mv_e^2}{8R}
$$

| 氣體 | 地球 | 火星 |
|---|---|---|
| H₂（2.016 g mol⁻¹） | $1.19\times10^4$ K | $2.42\times10^3$ K |
| He（4.003 g mol⁻¹） | $2.36\times10^4$ K | $4.81\times10^3$ K |
| O₂（32.00 g mol⁻¹） | $1.89\times10^5$ K | $3.84\times10^4$ K |

**Step 4：速率 ≥ $v_e$ 的分子比例**

用習題 5 的公式，$x_0 = v_e/v_\text{mp}$，$F = \text{erfc}(x_0) + \frac{2x_0}{\sqrt{\pi}}e^{-x_0^2}$：

| 氣體 | 行星 | 240 K | 1500 K |
|---|---|---|---|
| H₂ | 地球 | $3\times10^{-27}$ | $1.5\times10^{-4}$ |
| H₂ | 火星 | $1.1\times10^{-5}$ | $0.25$ |
| He | 地球 | $5\times10^{-54}$ | $1.0\times10^{-8}$ |
| He | 火星 | $5\times10^{-11}$ | $0.043$ |
| O₂ | 地球 | $\sim10^{-434}$ | $3\times10^{-69}$ |
| O₂ | 火星 | $4\times10^{-88}$ | $4\times10^{-14}$ |

> **觀念延伸**（課本討論題 D1B.3：為何輕氣體在地球大氣中稀少？）：
> - 高層大氣（熱氣層，thermosphere）溫度可達約 1500 K。此時地球上的 H₂ 有約 $10^{-4}$ 的分子速率超過脫離速度；而 O₂ 只有 $10^{-69}$，實際上完全不會逸散。
> - 經過數十億年，**輕分子（H₂、He）會不斷逸散**，重分子（N₂、O₂、CO₂）則被保留。
> - 火星的脫離速度較小，連較重的氣體也較易流失，這是火星大氣稀薄的原因之一。
> - 關鍵在於分布的**高速尾端**：雖然平均速率遠低於 $v_e$，但只要有極少比例的分子夠快，長時間累積後仍會造成大量流失。

---

### 習題 7｜P1B.10 ＋ I1.1 推導最可能速率與能量均分

**題目**：
- **P1B.10**：The maximum in the Maxwell–Boltzmann distribution occurs when $df(v)/dv = 0$. Find, by differentiation, an expression for the most probable speed of molecules of molar mass $M$ at a temperature $T$.
- **I1.1**：Go on to demonstrate the validity of the equipartition conclusion that the average translational kinetic energy of molecules free to move in three dimensions is $\frac{3}{2}kT$.

（P1B.10：馬克士威–波茲曼分布的最大值發生在 $df/dv = 0$ 處，以微分求最可能速率。I1.1：進一步驗證**能量均分（equipartition）** 的結論：可在三維自由運動的分子，平均移動動能為 $\frac{3}{2}kT$。）

**詳解**：

**Part 1：最可能速率**

$f(v) = Cv^2e^{-av^2}$，$C$ 為常數，$a = M/2RT$。

$$
\frac{df}{dv} = C\left[2ve^{-av^2} + v^2(-2av)e^{-av^2}\right] = 2Cv\,e^{-av^2}\left(1 - av^2\right)
$$

令 $df/dv = 0$：

- $v = 0$：此處 $f = 0$，是**最小值**。
- $e^{-av^2} = 0$：即 $v \to \infty$，也是最小值。
- $1 - av^2 = 0$：$v^2 = 1/a$，這才是**最大值**。

$$
\boxed{\,v_\text{mp} = \left(\frac{1}{a}\right)^{1/2} = \left(\frac{2RT}{M}\right)^{1/2}\,}
$$

**Part 2：平均移動動能**

$$
\langle\varepsilon_\text{k}\rangle = \left\langle\frac{1}{2}mv^2\right\rangle = \frac{1}{2}m\langle v^2\rangle
$$

由前面的推導 $\langle v^2\rangle = 3RT/M = 3kT/m$：

$$
\langle\varepsilon_\text{k}\rangle = \frac{1}{2}m\cdot\frac{3kT}{m} = \boxed{\frac{3}{2}kT}
$$

**能量均分的解讀**：由一維分布 $f(v_x)$ 可得 $\langle v_x^2\rangle = kT/m$（請試用積分表驗證），所以

$$
\left\langle\frac{1}{2}mv_x^2\right\rangle = \frac{1}{2}kT
$$

每個平方項（每個移動方向）貢獻 $\frac{1}{2}kT$，三維共三個方向，得 $\frac{3}{2}kT$。這就是**能量均分定理（equipartition theorem）**。

> **連結**：
> - 習題 3 的二維氣體只有兩個方向，平均動能為 $kT$，與此一致。
> - 課本 E1B.7：20 °C 時 H₂ 與 Hg 原子的**平均移動動能比為 1 : 1**（只取決於 $T$）；平均速率比則為 $(M_\text{Hg}/M_{\text{H}_2})^{1/2} = (200.59/2.016)^{1/2} = 9.97$。

---

### 習題 8｜P1B.11 甲烷分子的碰撞頻率

**題目**：A methane, CH₄, molecule may be considered as spherical, with a radius of 0.38 nm. How many collisions does a single methane molecule make if 0.10 mol CH₄(g) is held at 25 °C in a vessel of volume 1.0 dm³?

（甲烷分子可視為半徑 0.38 nm 的球體。若 0.10 mol CH₄(g) 在 25 °C 下裝在 1.0 dm³ 的容器中，單一甲烷分子每秒碰撞幾次？）

**解題思路**：已知 $n$ 與 $V$（定容），直接用 $z = \sigma v_\text{rel}\mathcal{N}$ 最方便，不需要先算壓力。

**詳解**：

**Step 1：碰撞截面**（⚠️ 碰撞直徑 $d$ = 兩個半徑之和 = $2r$）

$$
d = 2(0.38\ \text{nm}) = 0.76\ \text{nm}, \qquad \sigma = \pi d^2 = \pi(0.76\times10^{-9}\ \text{m})^2 = 1.81\times10^{-18}\ \text{m}^2
$$

**Step 2：數目密度**

$$
\mathcal{N} = \frac{nN_A}{V} = \frac{(0.10)(6.022\times10^{23})}{1.0\times10^{-3}\ \text{m}^3} = 6.02\times10^{25}\ \text{m}^{-3}
$$

**Step 3：平均相對速率**（$M = 0.01604\ \text{kg mol}^{-1}$）

$$
v_\text{mean} = \left(\frac{8(8.3145)(298.15)}{\pi(0.01604)}\right)^{1/2} = 627\ \text{m s}^{-1}, \qquad v_\text{rel} = 2^{1/2}v_\text{mean} = 887\ \text{m s}^{-1}
$$

**Step 4：碰撞頻率**

$$
z = \sigma v_\text{rel}\mathcal{N} = (1.81\times10^{-18})(887)(6.02\times10^{25}) = \boxed{9.7\times10^{10}\ \text{s}^{-1}}
$$

> **補充**：此時壓力 $p = \mathcal{N}kT = 2.48\times10^5$ Pa（約 2.5 bar），平均自由徑 $\lambda = 1/(\sigma\mathcal{N}) = 9.2$ nm。
> ⚠️ **最常見的錯誤**：直接用 $\sigma = \pi r^2$，答案會小 4 倍。

---

## 觀念問答練習（配合問答題形式）

**Q1.（D1B.1）列出氣體動力論的假設，並評論其限制。**
> (1) 分子做永不停止的隨機運動、遵守古典力學；(2) 分子大小可忽略；(3) 分子只透過短暫的彈性碰撞交互作用。限制：高壓下分子體積不可忽略，違反 (2)；低溫高壓下分子間吸引力明顯，違反 (3)；極輕分子在極低溫下需考慮量子效應，違反 (1)。所以此模型描述的是理想氣體。

**Q2. 為什麼推導壓力時要乘 $\frac{1}{2}$？為什麼 $\langle v_x^2\rangle = \frac{1}{3}\langle v^2\rangle$？**
> 任一瞬間只有一半的分子朝向該器壁運動，只有它們會撞到器壁。氣體分子運動等向，三個方向的 $\langle v_i^2\rangle$ 相等，而 $v^2 = v_x^2 + v_y^2 + v_z^2$，所以每個方向占三分之一。

**Q3. 溫度的分子意義是什麼？同溫下 H₂ 與 O₂ 何者平均動能大？何者平均速率大？**
> 溫度正比於分子的平均移動動能：$\frac{1}{2}m\langle v^2\rangle = \frac{3}{2}kT$。同溫下兩者平均動能**相同**；但 H₂ 較輕，平均速率較大，是 O₂ 的 $(32.00/2.016)^{1/2} \approx 4$ 倍。

**Q4. 一維分布 $f(v_x)$ 的最大值在 $v_x = 0$，為何三維速率分布 $f(v)$ 在 $v = 0$ 卻為零？**
> $f(v)$ 包含球殼體積 $4\pi v^2dv$。速率越大，速度空間中對應的球殼面積越大，可能的速度方向越多；$v \to 0$ 時球殼縮成一點，所以 $f(0) = 0$。雖然「單一速度向量」在原點機率密度最大，但「速率接近 0」的狀態數極少。

**Q5. 說明溫度與莫耳質量如何影響馬克士威–波茲曼分布。**
> 分布只取決於 $T/M$。$T$ 升高或 $M$ 降低時，峰值右移（$v_\text{mp}$ 增加），分布變寬、變矮（總面積保持 1），高速分子比例增加。

**Q6. 比較 $v_\text{mp}$、$v_\text{mean}$、$v_\text{rms}$ 的大小，並解釋原因。**
> $v_\text{mp} < v_\text{mean} < v_\text{rms}$，比例為 $1 : 1.128 : 1.225$。分布右偏，高速尾端使平均值大於峰值；$v_\text{rms}$ 平方後更強調高速分子，所以最大。

**Q7.（D1B.2）解釋平均自由徑與溫度、壓力、分子大小的關係。**
> $\lambda = kT/\sigma p = 1/\sigma\mathcal{N}$。壓力增加時分子更密集，$\lambda$ 減小；分子越大（$\sigma$ 越大），越容易碰撞，$\lambda$ 減小。定容下升溫，$p/T$ 不變、$\mathcal{N}$ 不變，所以 $\lambda$ 與溫度無關：分子只是更快到達下一次碰撞，路徑長度不變。

**Q8. 為什麼計算碰撞頻率用 $v_\text{rel}$ 而非 $v_\text{mean}$？為什麼 $\sigma = \pi d^2$？**
> 碰撞取決於分子之間的相對運動；推導時「凍結」其他分子，移動的那一個必須以相對速率前進才能正確計數。兩分子中心距離小於 $d$（兩半徑之和）就會碰撞，所以有效的「靶面積」是半徑為 $d$ 的圓，$\pi d^2$ 是單一分子截面積 $\pi r^2$ 的四倍。

**Q9.（D1B.3）為什麼 He 等輕氣體在地球大氣中稀少？**
> 同溫下輕分子平均速率大，馬克士威–波茲曼分布的高速尾端中，有較多分子速率超過地球的脫離速度（11.2 km/s），尤其在高層大氣的高溫下。長時間累積後輕氣體逐漸逸散；重分子超過脫離速度的比例小到可以忽略，因此被保留（見習題 6）。

---

## 簡報勘誤與注意事項

| 位置 | 原文 | 說明／更正 |
|---|---|---|
| 簡報 p.36 | n is the mole of molecules | 應為 the **amount** of molecules（物質的量） |
| 簡報 p.41 | a molecule may travelling rapidly | 文法：應為 may **be** travelling rapidly |
| 簡報 p.46–47 | Substitution … than gives | 應為 **then** gives |
| 簡報 p.46 | 以 $\int x^2e^{-x^3}dx$ 示範代換積分 | 該技巧**不能**直接用於 $\int e^{-ax^2}dx$。高斯積分需用極座標法，見本講義「數學補充」 |
| **簡報 p.51** | $f(v) = 4\pi\left[\dfrac{M}{2\pi kT}\right]^{3/2}v^2e^{-Mv^2/2RT}$ | **重要**：括號內應為 $\dfrac{M}{2\pi RT}$（或 $\dfrac{m}{2\pi kT}$）。莫耳質量配 $R$，分子質量配 $k$。該頁上半部另有文字重疊、無法辨識 |
| 簡報 p.55–56 | RMS velocity is the average speed … in any given direction；average velocity is total distance / total time | 定義不正確。$v_\text{rms} = \langle v^2\rangle^{1/2}$；$v_\text{mean} = \langle v\rangle$ 是對分布取的統計平均。三者都是**速率（speed）**，不是速度（velocity） |
| 簡報 p.56 | Figure 1B.7 | 課本中此圖為 **Figure 1B.6**（1B.7 是 p.57 的相對速率示意圖） |
| 簡報 p.60 | $N_A$: Avogadro's number | 應稱 Avogadro's **constant**（亞佛加厥常數），有單位 mol⁻¹ |
| **簡報 p.61** | $\lambda = KT/\sigma p$ | **$K$ 應為小寫 $k$**（波茲曼常數） |
| 課本 p.17 | the mean free path … about 1000 molecular diameters | 以 $d = 0.37$ nm 計算，$\lambda/d \approx 260$；數量級為 $10^2$–$10^3$ |

---

## 本節公式總整理

| 名稱 | 公式 | 說明 | 編號 |
|---|---|---|---|
| 方均根速率（定義） | $v_\text{rms} = \langle v^2\rangle^{1/2}$ | — | 1B.1 |
| 動力論壓力 | $pV = \frac{1}{3}nMv_\text{rms}^2$ | 由動量變化推導 | 1B.2 |
| 平均移動動能 | $\frac{1}{2}m\langle v^2\rangle = \frac{3}{2}kT$；每莫耳 $\frac{3}{2}RT$ | 溫度的分子意義 | — |
| 一維速度分布 | $f(v_x) = \left(\dfrac{m}{2\pi kT}\right)^{1/2}e^{-mv_x^2/2kT}$ | 最大值在 $v_x = 0$ | 1B.3 |
| 三維速度機率 | $\left(\dfrac{m}{2\pi kT}\right)^{3/2}e^{-mv^2/2kT}dv_xdv_ydv_z$ | 與方向無關 | 1B.4 |
| **馬克士威–波茲曼分布** | $f(v) = 4\pi\left(\dfrac{M}{2\pi RT}\right)^{3/2}v^2e^{-Mv^2/2RT}$ | 球殼 $4\pi v^2dv$ | 1B.5 |
| 速率的 $n$ 次方平均 | $\langle v^n\rangle = \int_0^\infty v^nf(v)dv$ | — | 1B.6 |
| 速率區間分率 | $F(v_1, v_2) = \int_{v_1}^{v_2}f(v)dv \approx f(v)\Delta v$ | 窄區間可近似 | — |
| 均方速率 | $\langle v^2\rangle = 3RT/M$ | — | 1B.7 |
| 方均根速率 | $v_\text{rms} = (3RT/M)^{1/2}$ | — | 1B.8 |
| 平均速率 | $v_\text{mean} = (8RT/\pi M)^{1/2}$ | — | 1B.9 |
| 最可能速率 | $v_\text{mp} = (2RT/M)^{1/2}$ | — | 1B.10 |
| 速率比例 | $v_\text{mp} : v_\text{mean} : v_\text{rms} = 1 : 1.128 : 1.225$ | — | — |
| 平均相對速率（相同分子） | $v_\text{rel} = 2^{1/2}v_\text{mean}$ | — | 1B.11a |
| 平均相對速率（不同分子） | $v_\text{rel} = (8kT/\pi\mu)^{1/2}$，$\mu = \dfrac{m_\text{A}m_\text{B}}{m_\text{A} + m_\text{B}}$ | 約化質量 | 1B.11b |
| 碰撞截面 | $\sigma = \pi d^2$ | $d$ = 碰撞直徑 | — |
| 數目密度 | $\mathcal{N} = N/V = p/kT$ | 理想氣體 | — |
| 碰撞頻率 | $z = \sigma v_\text{rel}\mathcal{N} = \sigma v_\text{rel}p/kT$ | — | 1B.12a/b |
| 平均自由徑 | $\lambda = v_\text{rel}/z = kT/\sigma p$ | 定容下與 $T$ 無關 | 1B.13/14 |
| 脫離速度 | $v_e = (2gR)^{1/2}$ | 習題 P1B.7 | — |
| 速率高於 $x_0 v_\text{mp}$ 的分率 | $\text{erfc}(x_0) + \dfrac{2x_0}{\sqrt{\pi}}e^{-x_0^2}$ | 習題 P1B.4 | — |
| 二維速率分布 | $f(v) = \dfrac{m}{kT}ve^{-mv^2/2kT}$，$v_\text{mean} = (\pi kT/2m)^{1/2}$ | 習題 P1B.2 | — |

**常用常數**：$k = 1.380\,649\times10^{-23}\ \text{J K}^{-1}$，$R = 8.3145\ \text{J K}^{-1}\text{mol}^{-1}$，$N_A = 6.022\times10^{23}\ \text{mol}^{-1}$，$1\ \text{J} = 1\ \text{kg m}^2\,\text{s}^{-2}$

---

## 專有名詞中英對照表

| 中文 | 英文 |
|---|---|
| 氣體動力論 | kinetic theory of gases |
| 氣體分子動力論 | kinetic-molecular theory (KMT) |
| 動力論模型 | kinetic model |
| 動能 | kinetic energy |
| 移動動能 | translational kinetic energy |
| 隨機運動 | random motion |
| 古典力學 | classical mechanics |
| 彈性碰撞 | elastic collision |
| 質點 | point-like particle |
| 線動量 | linear momentum |
| 牛頓第二運動定律 | Newton's second law of motion |
| 數目密度 | number density |
| 等向性 | isotropy |
| 方均根速率 | root-mean-square speed |
| 均方速率 | mean square speed |
| 平均速率 | mean speed |
| 最可能速率 | most probable speed |
| 平均相對速率 | mean relative speed |
| 約化質量 | reduced mass |
| 速率 | speed |
| 速度 | velocity |
| 速率分布 | distribution of speeds |
| 馬克士威–波茲曼速率分布 | Maxwell–Boltzmann distribution of speeds |
| 波茲曼分布 | Boltzmann distribution |
| 波茲曼常數 | Boltzmann constant |
| 機率密度 | probability density |
| 分率 | fraction |
| 歸一化 | normalization |
| 指數函數 | exponential function |
| 高斯函數 | Gaussian function |
| 高斯積分 | Gaussian integral |
| 誤差函數 | error function (erf) |
| 互補誤差函數 | complementary error function (erfc) |
| 速度空間 | velocity space |
| 球殼 | spherical shell |
| 圓環 | annulus |
| 分部積分 | integration by parts |
| 能量均分定理 | equipartition theorem |
| 二維氣體 | two-dimensional gas |
| 速度選擇器 | velocity selector |
| 碰撞 | collision |
| 碰撞頻率 | collision frequency |
| 碰撞直徑 | collision diameter |
| 碰撞截面 | collision cross-section |
| 碰撞管 | collision tube |
| 硬球 | hard sphere |
| 平均自由徑 | mean free path |
| 自由飛行 | free flight |
| 分子流 | molecular flow |
| 脫離速度 | escape velocity |
| 力學能守恆 | conservation of mechanical energy |
| 重力位能 | gravitational potential energy |
| 熱氣層 | thermosphere |
| 莫耳質量 | molar mass |
| 亞佛加厥常數 | Avogadro constant |

---

## 本節自我檢核

- [ ] 能說出動力論三大假設並評論其限制
- [ ] 能**逐步推導** $pV = \frac{1}{3}nMv_\text{rms}^2$（動量變化 → 撞壁分子數 → 力 → 壓力 → 平均）
- [ ] 能由 $pV = \frac{1}{3}nMv_\text{rms}^2$ 說明 $\frac{1}{2}m\langle v^2\rangle = \frac{3}{2}kT$
- [ ] 能**逐步推導**馬克士威–波茲曼分布（波茲曼因子 → 分解 → 歸一化 → 球殼 → 改用 $M, R$）
- [ ] 會算高斯積分，知道為何不能用變數代換
- [ ] 能解釋 $T$、$M$ 對分布曲線的影響，以及 $v^2$ 與指數項各自的角色
- [ ] 能推導 $v_\text{mp}$、$v_\text{mean}$、$v_\text{rms}$ 並說明大小順序
- [ ] 能推導 $z = \sigma v_\text{rel}p/kT$ 與 $\lambda = kT/\sigma p$
- [ ] 知道 $\sigma = \pi d^2$（不是 $\pi r^2$），計算時用 $v_\text{rel}$
- [ ] 能解釋 $\lambda$ 在定容下與溫度無關的原因
