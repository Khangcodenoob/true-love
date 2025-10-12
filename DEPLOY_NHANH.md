# 🚀 DEPLOY NHANH NHƯ HÔM QUA

## Bước 1: Mở Command Prompt
1. Nhấn `Win + R`
2. Gõ `cmd` và Enter
3. Copy và paste từng lệnh này:

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

## Bước 2: Vào GitHub Actions
1. Mở trình duyệt
2. Vào: https://github.com/Khangcodenoob/true-love/actions
3. Chờ workflow "Deploy to GitHub Pages" chạy xong (2-3 phút)

## Bước 3: Cấu hình GitHub Pages
1. Vào: https://github.com/Khangcodenoob/true-love/settings/pages
2. Trong "Source", chọn "Deploy from a branch"
3. Chọn branch "gh-pages"
4. Chọn folder "/ (root)"
5. Click "Save"

## Bước 4: Truy cập website
Sau 2-3 phút, website sẽ có địa chỉ:
https://khangcodenoob.github.io/true-love

## Nếu vẫn không được:
1. Vào Settings → Pages
2. Thử chọn "GitHub Actions" thay vì "Deploy from a branch"
3. Hoặc chọn branch "main" thay vì "gh-pages"
