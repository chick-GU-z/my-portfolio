# 🚨 故障排除指南

## 快速診斷

首先執行診斷腳本：
```bash
node check-setup.js
```

## 常見問題解決

### 問題 1: `npm` 指令無法執行

**症狀**: `'npm' is not recognized` 或類似錯誤

**解決方法**:
1. 確認已安裝 Node.js: https://nodejs.org/
2. 重新啟動終端
3. 檢查版本: `node --version` 和 `npm --version`

### 問題 2: `package.json` 找不到

**症狀**: `ENOENT: no such file or directory, open 'package.json'`

**解決方法**:
```bash
# 確認當前目錄
pwd

# 查看檔案
ls -la

# 如果看不到 package.json，請確認您在正確的專案資料夾中
```

### 問題 3: 依賴安裝失敗

**症狀**: `npm install` 報錯

**解決方法**:
```bash
# 方法 1: 清理快取
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# 方法 2: 使用 yarn (如果已安裝)
yarn install

# 方法 3: 強制重新安裝
npm ci
```

### 問題 4: TypeScript 錯誤

**症狀**: 類型錯誤或 `.tsx` 檔案無法解析

**解決方法**:
```bash
# 檢查 TypeScript 配置
npx tsc --noEmit

# 重新安裝 TypeScript
npm install -D typescript@latest
```

### 問題 5: Vite 開發伺服器無法啟動

**症狀**: `npm run dev` 失敗

**解決方法**:
```bash
# 檢查端口是否被占用
lsof -i :5173

# 嘗試不同端口
npm run dev -- --port 3000

# 檢查 vite.config.ts 配置
```

### 問題 6: 建置失敗

**症狀**: `npm run build` 錯誤

**解決方法**:
```bash
# 檢查語法錯誤
npm run lint

# 清理快取
rm -rf dist .vite

# 重新建置
npm run build
```

## 🔍 詳細診斷步驟

如果以上方法都無效：

### 1. 檢查環境
```bash
# Node.js 版本 (需要 18+)
node --version

# npm 版本
npm --version

# 操作系統
echo $OS (Windows) 或 uname -a (Mac/Linux)
```

### 2. 檢查檔案權限 (Mac/Linux)
```bash
# 確認檔案可讀寫
ls -la package.json

# 修復權限 (如需要)
chmod 644 package.json
chmod 755 node_modules/.bin/*
```

### 3. 檢查網路連線
```bash
# 測試 npm registry 連線
npm ping

# 使用不同的 registry (如需要)
npm install --registry https://registry.npmjs.org/
```

## 🆘 最終解決方案

如果所有方法都失敗：

### 完全重置專案
```bash
# 1. 備份重要檔案
cp -r components components_backup
cp App.tsx App.tsx.backup
cp styles/globals.css styles/globals.css.backup

# 2. 清理所有
rm -rf node_modules package-lock.json .vite dist

# 3. 重新安裝
npm install

# 4. 測試
npm run dev
```

### 建立新專案 (最後手段)
```bash
# 1. 創建新的 Vite + React 專案
npm create vite@latest portfolio-new -- --template react-ts

# 2. 複製您的組件和樣式
# 3. 手動重新配置
```

## 📞 尋求幫助

如果問題仍然存在，請提供：

1. **錯誤訊息截圖**
2. **終端完整輸出**
3. **環境資訊**:
   ```bash
   node --version
   npm --version
   echo $OS
   pwd
   ls -la
   ```
4. **package.json 內容**

**記住**: 95% 的問題都是環境配置問題，通常可以通過重新安裝解決！