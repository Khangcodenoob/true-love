# 🚀 TẠO BRANCH GH-PAGES THỦ CÔNG

## Cách 1: Sử dụng GitHub Actions (Khuyến nghị)

### Bước 1: Push code lên GitHub
1. Mở Command Prompt
2. Chạy các lệnh sau:
```cmd
cd "G:\Khang De Thuong\20-10-2025"
git add .
git commit -m "Create gh-pages branch"
git push origin main
```

### Bước 2: Chờ GitHub Actions chạy
1. Vào: https://github.com/Khangcodenoob/true-love/actions
2. Chờ workflow "Deploy to GitHub Pages" chạy xong (2-3 phút)
3. Sau khi hoàn thành, branch "gh-pages" sẽ được tạo tự động

### Bước 3: Cấu hình GitHub Pages
1. Vào: https://github.com/Khangcodenoob/true-love/settings/pages
2. Chọn "Deploy from a branch"
3. Chọn branch "gh-pages"
4. Chọn folder "/ (root)"
5. Click "Save"

## Cách 2: Tạo branch gh-pages thủ công

### Bước 1: Tạo branch gh-pages
```cmd
cd "G:\Khang De Thuong\20-10-2025"
git checkout -b gh-pages
```

### Bước 2: Build website
```cmd
npm run build
```

### Bước 3: Copy files build vào root
```cmd
xcopy build\* . /E /H /Y
```

### Bước 4: Commit và push
```cmd
git add .
git commit -m "Deploy to gh-pages"
git push origin gh-pages
```

### Bước 5: Cấu hình GitHub Pages
1. Vào Settings → Pages
2. Chọn "Deploy from a branch"
3. Chọn branch "gh-pages"
4. Click "Save"

## Kết quả:
Website sẽ có địa chỉ: https://khangcodenoob.github.io/true-love
