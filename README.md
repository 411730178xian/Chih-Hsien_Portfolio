# 徐芷嫺 Portfolio 網站

從 Claude Design 設計稿整理出的可維護專案結構，純 HTML / CSS / JS，不需要建置工具，用瀏覽器打開 `index.html` 就能看。

正式網址：https://411730178xian.github.io/Chih-Hsien_Portfolio/
（GitHub repo：https://github.com/411730178xian/Chih-Hsien_Portfolio，`main` 分支推送後會自動重新部署）

## 專案結構

```
portfolio/
├── index.html              首頁（Hero / 關於我 / 技能 / 精選作品 / 工作方法 / 聯絡）
├── works.html               完整作品集頁（13 個作品，含分類篩選）
├── css/
│   └── style.css            所有樣式（顏色、字體、間距皆為 CSS 變數，改一處全站套用）
├── js/
│   └── main.js               手機選單、作品分類篩選
├── assets/
│   ├── icons/                favicon / apple-touch-icon
│   ├── images/
│   │   ├── hero/              Hero 背景與四角裝飾圖
│   │   ├── profile/           個人照
│   │   ├── social/            社群分享預覽圖（Open Graph）
│   │   └── works/              13 張作品封面圖
│   └── resume/
│       └── 徐芷嫺履歷.pdf      履歷正本（首頁「下載完整履歷 PDF」按鈕已連結至此檔案）
└── README.md
```

## 更新網站怎麼做

改完 HTML / CSS / JS 或圖片後：

```bash
git add -A
git commit -m "說明這次改了什麼"
git push origin main
```

推送後 GitHub Pages 會自動重新部署，通常 1-2 分鐘內生效。**`css/style.css` 的連結帶了 `?v=數字` 版本號**（例如 `css/style.css?v=4`），這是為了避開瀏覽器 10 分鐘的快取——只要有改 CSS，記得把 `index.html` 和 `works.html` 裡的版本號一起 +1，不然使用者可能會看到舊樣式。

## 圖片怎麼補 / 更換

檔案放進對應資料夾、檔名對上就會自動顯示，不用改任何程式碼。作品封面圖建議先壓到最寬 1600px 左右（網格實際顯示大小），避免像之前一樣直接上傳好幾 MB 的原始截圖，導致圖片要花很久才跑得出來。

### 個人照

放到 `assets/images/profile/portrait.png`，建議尺寸 4:5（例如 1200×1500px）。

### 作品封面圖

放到 `assets/images/works/`，依「完整作品集頁」的順序編號 `work-01.png` ～ `work-13.png`，建議尺寸 16:10、最寬 1600px。對照表：

| 檔名 | 作品名稱 | 分類 |
|---|---|---|
| work-01.png | 觀星協會數位經營導入企劃《星之所嚮》 | 數位行銷 |
| work-02.png | VOST 品牌建構 | 數位行銷 |
| work-03.png | 紀錄片影音企劃《綠意—忠寮社區的綠色奇蹟》 | 數位行銷 |
| work-04.png | 淡江教育科技系網站開發 | UI/UX 前端 |
| work-05.png | 音浪狂潮 音樂互動教材 | UI/UX 前端 |
| work-06.png | 海洋保育探險 AR 互動教材 | UI/UX 前端 |
| work-07.png | 荒島求生：水晶爭奪戰 | UI/UX 前端 |
| work-08.png | 淨零異世界－綠色淨化之路 | 系統邏輯 |
| work-09.png | 驅趕老鼠大作戰 | 系統邏輯 |
| work-10.png | 貓咪小教室 3D 虛擬展間 | 系統邏輯 |
| work-11.png | 稻神之守 | 系統邏輯 |
| work-12.png | 小小數學王 | 系統邏輯 |
| work-13.png | 紐西蘭南島家庭自駕旅遊 Web | 系統邏輯 |

首頁「精選作品」區塊展示其中 6 個，直接沿用同一份檔案，不用另外準備圖片：

| 首頁精選順序 | 作品名稱 | 對應檔案 |
|---|---|---|
| 01 | 音浪狂潮 音樂互動教材 | work-05.png |
| 02 | 紀錄片影音企劃《綠意—忠寮社區的綠色奇蹟》 | work-03.png |
| 03 | 淡江教育科技系網站開發 | work-04.png |
| 04 | 荒島求生：水晶爭奪戰 | work-07.png |
| 05 | 淨零異世界－綠色淨化之路 | work-08.png |
| 06 | 紐西蘭南島家庭自駕旅遊 Web | work-13.png |

> 檔名副檔名如果不是 `.png`（例如 `.jpg` / `.webp`），要同步修改 `index.html` / `works.html` 裡對應的 `<img src="assets/images/works/work-XX.png">` 路徑。

## 履歷 PDF

首頁「下載完整履歷 PDF」按鈕已指向 `assets/resume/徐芷嫺履歷.pdf`（來自 `/Users/xian/Downloads/履歷.pdf`）。之後要換版本，直接覆蓋同一個檔案即可，不用改 HTML。

## 內容怎麼修改

所有文字（自我介紹、經歷、作品說明、聯絡方式）都直接寫在 `index.html` 和 `works.html` 裡，用文字編輯器打開搜尋對應文字修改即可，不涉及任何資料庫或建置流程。

## 本機預覽

直接用瀏覽器打開 `index.html` 即可。若要用本機伺服器預覽（部分瀏覽器對本機檔案路徑的中文檔名處理較嚴格，建議使用伺服器方式）：

```bash
cd "portfolio"
python3 -m http.server 8000
# 瀏覽器開 http://localhost:8000
```
