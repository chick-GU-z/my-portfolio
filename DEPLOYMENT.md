# Deployment Guide

This guide covers different deployment options for your portfolio website.

## 🚀 Quick Deploy Options

### Vercel (Recommended) - 自動部署設置

#### 首次設置

1. **上傳代碼到GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **連接Vercel**
   - 前往 [vercel.com](https://vercel.com)
   - 使用GitHub賬號登入
   - 點擊 "New Project"
   - 選擇您的GitHub repository

3. **確認構建設置** (自動檢測):
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   Node.js Version: 18.x
   ```

4. **部署**
   - 點擊 "Deploy"
   - 等待2-3分鐘完成首次部署
   - 獲得免費的 `.vercel.app` 網址

#### 🔄 自動更新流程

**設置完成後，每次您修改代碼：**

1. **本地修改** → 編輯任何文件
2. **提交變更**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. **自動部署** → Vercel檢測到Git推送
4. **網站更新** → 2-3分鐘後自動上線

**完全自動化！無需手動操作！** ⚡

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### GitHub Pages

1. In your repository, go to Settings > Pages
2. Select "GitHub Actions" as source
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## ⚙️ Environment Variables

If you need environment variables, create a `.env` file:

```env
VITE_EMAIL_ADDRESS=your.email@example.com
VITE_PHONE_NUMBER=+49123456789
VITE_LOCATION=Berlin, Germany
```

Then update your components to use these variables:

```typescript
const email = import.meta.env.VITE_EMAIL_ADDRESS || 'your.email@example.com';
```

## 🔧 Custom Domain

### Vercel
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain
4. Follow DNS setup instructions

### Netlify
1. Go to Site settings > Domain management
2. Add custom domain
3. Configure DNS records

## 📊 Performance Optimization

The build is already optimized with:
- Code splitting
- Tree shaking
- Minification
- Asset optimization

### Additional optimizations:
- Enable gzip compression on your hosting platform
- Use a CDN for assets
- Enable browser caching headers

## 🛠️ Troubleshooting

### Build Fails
- Check Node.js version (use 18+)
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- Ensure image URLs are accessible
- For local images, place them in `public/` folder
- Update image paths to `/image-name.jpg`

### Email Links Not Working
- Update email addresses in Contact.tsx
- Test mailto links in different browsers
- Consider adding a contact form service for better deliverability

## 📱 Mobile Testing

Test your deployed site on:
- Different screen sizes
- Various browsers (Chrome, Firefox, Safari)
- Real mobile devices

## 🔄 Continuous Deployment

Once set up, your site will automatically update when you:
1. Make changes to your code
2. Push to your main branch
3. The hosting platform rebuilds and deploys automatically

## 📈 Analytics (Optional)

Add Google Analytics or similar:

1. Get tracking ID
2. Add to index.html or use a React package
3. Track page views and user interactions

---

**Need help?** Check the hosting platform's documentation or reach out for support!