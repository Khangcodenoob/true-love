# 🚀 HƯỚNG DẪN DEPLOY ĐƠN GIẢN NHƯ HÔM QUA

## Cách 1: Chạy script tự động (Đơn giản nhất)

### Bước 1: Chạy file DEPLOY_DON_GIAN.bat
1. Vào thư mục `G:\Khang De Thuong\20-10-2025`
2. Double-click file `DEPLOY_DON_GIAN.bat`
3. Chờ script chạy xong

### Bước 2: Cấu hình GitHub Pages
1. Vào: https://github.com/Khangcodenoob/true-love/settings/pages
2. Chọn "Deploy from a branch"
3. Chọn branch "main"
4. Chọn folder "/ (root)"
5. Click "Save"

## Cách 2: Làm thủ công

### Bước 1: Mở Command Prompt
1. Nhấn `Win + R`
2. Gõ `cmd` và Enter

### Bước 2: Chạy các lệnh
```cmd
cd "G:\Khang De Thuong\20-10-2025"
git add .
git commit -m "Deploy website"
git push origin main
```

### Bước 3: Cấu hình GitHub Pages
1. Vào: https://github.com/Khangcodenoob/true-love/settings/pages
2. Chọn "Deploy from a branch"
3. Chọn branch "main"
4. Chọn folder "/ (root)"
5. Click "Save"

## Cách 3: Sử dụng Netlify (Khuyến nghị)

### Bước 1: Tạo tài khoản Netlify
1. Vào: https://netlify.com
2. Click "Sign up with GitHub"

### Bước 2: Deploy website
1. Click "New site from Git"
2. Chọn "GitHub"
3. Chọn repository "true-love"
4. Build command: `npm run build`
5. Publish directory: `build`
6. Click "Deploy site"

## 🎯 Kết quả:
- GitHub Pages: https://khangcodenoob.github.io/true-love
- Netlify: https://your-site-name.netlify.app

## 💡 Lưu ý:
- Cách 1: Đơn giản nhất, tự động
- Cách 3: Nhanh nhất, không cần cấu hình phức tạp
