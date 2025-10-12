# 🚀 CÁC CÁCH DEPLOY KHÁC NGOÀI "Deploy from a branch"

## Cách 1: GitHub Actions (Khuyến nghị)

### Bước 1: Cấu hình GitHub Pages
1. Vào: https://github.com/Khangcodenoob/true-love/settings/pages
2. Trong "Source", chọn **"GitHub Actions"**
3. Click "Save"

### Bước 2: Workflow sẽ tự động chạy
- GitHub Actions sẽ tự động build và deploy
- Không cần tạo branch gh-pages
- Tự động cập nhật khi push code

## Cách 2: Deploy từ branch main

### Bước 1: Cấu hình GitHub Pages
1. Vào: https://github.com/Khangcodenoob/true-love/settings/pages
2. Chọn "Deploy from a branch"
3. Chọn branch **"main"** (thay vì gh-pages)
4. Chọn folder "/ (root)"
5. Click "Save"

### Bước 2: Tạo file index.html
Tạo file `index.html` trong thư mục gốc với nội dung:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Vietnamese Women's Day</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div id="root"></div>
    <script src="src/index.js"></script>
</body>
</html>
```

## Cách 3: Sử dụng Netlify (Miễn phí)

### Bước 1: Tạo tài khoản Netlify
1. Vào: https://netlify.com
2. Đăng ký bằng GitHub

### Bước 2: Deploy từ GitHub
1. Click "New site from Git"
2. Chọn GitHub
3. Chọn repository "true-love"
4. Build command: `npm run build`
5. Publish directory: `build`
6. Click "Deploy site"

## Cách 4: Sử dụng Vercel (Miễn phí)

### Bước 1: Tạo tài khoản Vercel
1. Vào: https://vercel.com
2. Đăng ký bằng GitHub

### Bước 2: Deploy từ GitHub
1. Click "New Project"
2. Import repository "true-love"
3. Framework: React
4. Click "Deploy"

## Cách 5: Sử dụng Surge.sh (Miễn phí)

### Bước 1: Cài đặt Surge
```cmd
npm install -g surge
```

### Bước 2: Build và deploy
```cmd
npm run build
cd build
surge
```

## Cách 6: Sử dụng Firebase Hosting (Miễn phí)

### Bước 1: Cài đặt Firebase CLI
```cmd
npm install -g firebase-tools
```

### Bước 2: Deploy
```cmd
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 🎯 Khuyến nghị:

**Cách 1: GitHub Actions** - Đơn giản nhất, tự động
**Cách 3: Netlify** - Nhanh nhất, dễ sử dụng
**Cách 4: Vercel** - Tốt nhất cho React

## 🎉 Kết quả:
- GitHub Actions: https://khangcodenoob.github.io/true-love
- Netlify: https://your-site-name.netlify.app
- Vercel: https://your-site-name.vercel.app
