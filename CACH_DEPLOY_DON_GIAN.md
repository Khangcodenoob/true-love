# 🚀 CÁCH DEPLOY ĐƠN GIẢN NHẤT

## Bước 1: Mở Command Prompt
1. Nhấn phím `Windows + R`
2. Gõ `cmd` và nhấn Enter
3. Copy và paste từng lệnh sau:

```cmd
cd "G:\Khang De Thuong\20-10-2025"
```

```cmd
git add .
```

```cmd
git commit -m "Deploy website"
```

```cmd
git push origin main
```

## Bước 2: Cấu hình GitHub Pages
1. Mở trình duyệt
2. Vào: https://github.com/Khangcodenoob/true-love/settings/pages
3. Tìm phần "Source" (ở trên phần Custom domain)
4. Chọn "Deploy from a branch"
5. Chọn branch "gh-pages"
6. Chọn folder "/ (root)"
7. Click "Save"

## Bước 3: Chờ deployment
1. Vào tab "Actions" trong repository
2. Chờ workflow "Deploy to GitHub Pages" chạy xong (2-3 phút)
3. Nếu không thấy branch "gh-pages", chờ workflow hoàn thành rồi thử lại

## Bước 4: Truy cập website
Sau khi hoàn thành, website sẽ có địa chỉ:
https://khangcodenoob.github.io/true-love

## Nếu gặp lỗi:
- Dùng Command Prompt (không phải PowerShell)
- Đảm bảo đã đăng nhập GitHub
- Chờ 2-3 phút sau mỗi bước
