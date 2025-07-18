# 🚀 自動部署設置指南

讓您的網站在代碼修改時自動更新！

## 📋 前置準備

1. **Git Repository**: 確保您的代碼已上傳到GitHub
2. **測試本地構建**: 確保 `npm run build` 能成功執行

## 🎯 推薦方案：Vercel (完全免費)

### 第一次設置

1. **前往 Vercel**
   - 訪問 [vercel.com](https://vercel.com)
   - 使用GitHub賬號登入

2. **導入項目**
   - 點擊 "New Project"
   - 選擇您的GitHub repository
   - Vercel會自動檢測到React項目

3. **配置設置** (通常自動檢測正確)
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **部署**
   - 點擊 "Deploy"
   - 等待2-3分鐘完成首次部署

### 🔄 自動更新流程

**設置完成後，每次您：**
1. 修改代碼
2. 執行 `git add .` → `git commit -m "更新說明"` → `git push`
3. **Vercel自動檢測到變更並重新部署** ⚡
4. 2-3分鐘後網站自動更新

### 📍 獲取網站網址

部署完成後，您會得到：
- 免費的 `.vercel.app` 網址
- 可以綁定自定義域名 (免費)

## 🔧 其他部署選項

### Option 2: Netlify

1. **前往 Netlify**
   - 訪問 [netlify.com](https://netlify.com)
   - GitHub登入

2. **新增站點**
   - "New site from Git" → 選擇repository
   - 構建設置：
     ```
     Build command: npm run build
     Publish directory: dist
     ```

3. **自動部署**
   - 同樣支持Git push自動部署

### Option 3: GitHub Pages (免費)

1. **創建部署workflow**