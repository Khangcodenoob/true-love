# 🚀 DEPLOY NGAY BÂY GIỜ

## Bước 1: Push code lên GitHub
Mở Command Prompt và chạy:
```cmd
cd "G:\Khang De Thuong\20-10-2025"
git add .
git commit -m "Deploy website"
git push origin main
```

## Bước 2: Cấu hình GitHub Pages
1. Vào: https://github.com/Khangcodenoob/true-love/settings/pages
2. Trong "Source", chọn "Deploy from a branch"
3. Chọn branch "gh-pages"
4. Chọn folder "/ (root)"
5. Click "Save"

## Bước 3: Truy cập website
Sau 2-3 phút, website sẽ có địa chỉ:
https://khangcodenoob.github.io/true-love

## Nếu không thấy branch gh-pages:
1. Vào tab "Actions"
2. Chờ workflow "Deploy to GitHub Pages" chạy xong
3. Quay lại Settings → Pages
4. Chọn branch "gh-pages"
