#!/usr/bin/env node

/**
 * 快速診斷腳本 - 檢查開發環境設置
 * 執行方式: node check-setup.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 正在檢查項目設置...\n');

// 檢查重要檔案
const requiredFiles = [
  'package.json',
  'App.tsx',
  'main.tsx', 
  'index.html',
  'tsconfig.json',
  'vite.config.ts',
  'styles/globals.css'
];

const requiredDirs = [
  'components',
  'styles',
  'components/ui'
];

console.log('📁 檢查檔案結構:');
let missingFiles = [];
let missingDirs = [];

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - 缺失`);
    missingFiles.push(file);
  }
});

requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`✅ ${dir}/`);
  } else {
    console.log(`❌ ${dir}/ - 缺失`);
    missingDirs.push(dir);
  }
});

// 檢查 package.json 內容
console.log('\n📦 檢查 package.json:');
try {
  if (fs.existsSync('package.json')) {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    console.log(`✅ 項目名稱: ${packageJson.name}`);
    console.log(`✅ 版本: ${packageJson.version}`);
    
    // 檢查重要依賴
    const requiredDeps = ['react', 'react-dom', 'lucide-react'];
    const requiredDevDeps = ['vite', '@vitejs/plugin-react', 'typescript', 'tailwindcss'];
    
    console.log('\n📚 檢查依賴:');
    requiredDeps.forEach(dep => {
      if (packageJson.dependencies && packageJson.dependencies[dep]) {
        console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`);
      } else {
        console.log(`❌ ${dep} - 缺失`);
      }
    });
    
    console.log('\n🛠️ 檢查開發依賴:');
    requiredDevDeps.forEach(dep => {
      if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
        console.log(`✅ ${dep}: ${packageJson.devDependencies[dep]}`);
      } else {
        console.log(`❌ ${dep} - 缺失`);
      }
    });
    
    // 檢查腳本
    console.log('\n🚀 檢查腳本:');
    const requiredScripts = ['dev', 'build', 'preview'];
    requiredScripts.forEach(script => {
      if (packageJson.scripts && packageJson.scripts[script]) {
        console.log(`✅ ${script}: ${packageJson.scripts[script]}`);
      } else {
        console.log(`❌ ${script} - 缺失`);
      }
    });
    
  }
} catch (error) {
  console.log(`❌ package.json 格式錯誤: ${error.message}`);
}

// 檢查 node_modules
console.log('\n📦 檢查安裝狀態:');
if (fs.existsSync('node_modules')) {
  console.log('✅ node_modules 存在');
  
  // 檢查重要套件
  const importantPackages = ['react', 'vite', 'typescript'];
  importantPackages.forEach(pkg => {
    if (fs.existsSync(`node_modules/${pkg}`)) {
      console.log(`✅ ${pkg} 已安裝`);
    } else {
      console.log(`❌ ${pkg} 未安裝`);
    }
  });
} else {
  console.log('❌ node_modules 不存在 - 需要執行 npm install');
}

// 提供建議
console.log('\n💡 建議操作:');

if (missingFiles.length > 0) {
  console.log('⚠️ 缺失重要檔案，請檢查是否在正確的專案目錄中');
}

if (missingDirs.length > 0) {
  console.log('⚠️ 缺失重要資料夾，請確認專案結構完整');
}

if (!fs.existsSync('node_modules')) {
  console.log('1. 執行: npm install');
}

console.log('2. 執行: npm run dev');
console.log('3. 開啟瀏覽器檢查 http://localhost:5173');

console.log('\n🎯 如果一切正常，您就可以開始部署流程了！');