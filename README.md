# 網頁切版直播班 Vite 範例 - Bootstrap 版本

## Node.js 版本
  - 專案的 Node.js 版本需為 v16 以上
  - 查看自己版本指令：`node -v`

## 取得專案
  - git clone https://github.com/169628/nong_nong.git
## 移動到專案內
  - cd nong_nong
## 安裝套件
  - npm install
## 運行專案
  - npm run serve

## 指令列表
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

## 資料夾結構
- _assets_     # 靜態資源放置處
  - _images_   # 圖片放置處
  - _scss_     # SCSS 的樣式放置處
    - _base_   # 除了 bootstrap 之外的全域設定、斷點設定
    - _components_ # 打包成組件的 scss(ex: 卡片)
    - _layout_ # 放 header 跟 footer 的 scss
    - _pages_  # 放其他頁面的 scss
    - _utils_  # 所有 bootstrap 相關
    - all.scss # 以上所有 scss 的匯總
- _layout_     # ejs 模板放置處
  - footer.ejs
  - header.ejs
- _pages_      # 頁面放置處
- main.js
- vite.config.js

- JavaScript 程式碼可寫在 main.js 檔案

### 專案技術
- bootstrap v5.1.3
- Vite v4.0.4
- Node.js v16.15.0
- git

### 注意事項
- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽
vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能


## 部署 gh-pages 流程說明
### Windows 版本
1. 在 GitHub 建立一個新的 Repository

2. 部署前請務必先將原始碼上傳到 GitHub Repository 也就是初始化 GitHub，因此通常第一步驟會在專案終端機輸入以下指令
```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main // 僅限第一次輸入，往後只需要輸入 git push
```

3. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署
