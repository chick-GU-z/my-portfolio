# 📝 Git 工作流程指南

## 🆕 首次上傳到GitHub

### 1. 創建GitHub Repository

1. 登入 [github.com](https://github.com)
2. 點擊右上角 "+" → "New repository"
3. 填寫資訊：
   ```
   Repository name: portfolio-website (或您喜歡的名稱)
   Description: My personal design portfolio website
   Public/Private: 選擇 Public (免費部署需要)
   ✅ Add a README file: 取消勾選 (我們已經有了)
   ```
4. 點擊 "Create repository"

### 2. 本地Git初始化

在您的項目資料夾中執行：

```bash
# 初始化Git
git init

# 添加遠端repository (替換YOUR_USERNAME和YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 檢查當前分支名稱
git branch

# 如果不是main，重命名為main
git branch -M main

# 添加所有文件
git add .

# 第一次提交
git commit -m "Initial commit: Portfolio website setup"

# 推送到GitHub
git push -u origin main
```

## 🔄 日常更新流程

### 基本工作流程

```bash
# 1. 修改您的代碼...

# 2. 查看變更
git status

# 3. 添加變更的文件
git add .

# 4. 提交變更 (寫清楚的說明)
git commit -m "描述您的變更"

# 5. 推送到GitHub
git push
```

### 📝 良好的提交訊息範例

```bash
git commit -m "Update hero section copy and images"
git commit -m "Add new project to portfolio gallery"
git commit -m "Fix mobile responsive issues in header"
git commit -m "Update contact information and social links"
git commit -m "Improve accessibility and SEO meta tags"
```

## 🎨 常見更新場景

### 更新個人資訊
```bash
# 修改 components/Contact.tsx, components/Header.tsx 等
git add .
git commit -m "Update personal contact information"
git push
```

### 新增作品項目
```bash
# 修改 components/Portfolio.tsx
git add .
git commit -m "Add new interior design project to portfolio"
git push
```

### 調整設計和樣式
```bash
# 修改 CSS 或組件樣式
git add .
git commit -m "Refine color scheme and typography"
git push
```

## 🔧 實用Git指令

### 查看狀態
```bash
git status          # 查看當前狀態
git log --oneline   # 查看提交歷史
git diff           # 查看未提交的變更
```

### 撤銷操作
```bash
git checkout -- filename.tsx    # 撤銷對特定文件的修改
git reset HEAD~1                # 撤銷最後一次提交(保留變更)
git reset --hard HEAD~1         # 撤銷最後一次提交(刪除變更)
```

### 分支操作 (進階)
```bash
git branch feature-new-layout    # 創建新分支
git checkout feature-new-layout  # 切換分支
git merge feature-new-layout     # 合併分支
```

## ⚡ 自動部署觸發

**每次執行 `git push` 後：**
1. ✅ GitHub接收您的代碼更新
2. ✅ Vercel/Netlify檢測到變更
3. ✅ 自動執行構建流程
4. ✅ 部署新版本到網站
5. ✅ **您的網站自動更新！** 🎉

**整個流程通常只需要2-5分鐘**

## 🚨 故障排除

### 推送失敗
```bash
# 先拉取遠端變更
git pull origin main

# 解決衝突後重新推送
git push
```

### 構建失敗
1. 本地測試：`npm run build`
2. 檢查錯誤訊息
3. 修復後重新推送

### 部署失敗
1. 檢查部署平台的錯誤日誌
2. 確認 `package.json` 中的腳本正確
3. 檢查環境變數設置

---

**🎯 記住：每次 `git push` = 網站自動更新！**