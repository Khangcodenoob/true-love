# 🚀 Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Cài đặt gh-pages

Mở Command Prompt hoặc PowerShell và chạy:

```bash
npm install --save-dev gh-pages
```

Nếu gặp lỗi, thử:
```bash
npm install --save-dev gh-pages --force
```

## Bước 2: Tạo GitHub Repository

1. Đi tới [GitHub.com](https://github.com)
2. Click "New repository"
3. Đặt tên: `vietnamese-womens-day-celebration`
4. Chọn "Public"
5. **KHÔNG** tích "Add a README file"
6. Click "Create repository"

## Bước 3: Khởi tạo Git và Push code

Trong thư mục dự án, chạy các lệnh sau:

```bash
# Khởi tạo git repository
git init

# Thêm tất cả files
git add .

# Commit lần đầu
git commit -m "Initial commit: Vietnamese Women's Day website"

# Thêm remote repository (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/vietnamese-womens-day-celebration.git

# Push code lên GitHub
git branch -M main
git push -u origin main
```

## Bước 4: Deploy lên GitHub Pages

```bash
# Deploy website
npm run deploy
```

## Bước 5: Cấu hình GitHub Pages

1. Vào repository trên GitHub
2. Click tab "Settings"
3. Scroll xuống "Pages" (bên trái)
4. Trong "Source", chọn "Deploy from a branch"
5. Chọn branch "gh-pages"
6. Click "Save"

## Bước 6: Truy cập website

Website sẽ có địa chỉ:
```
https://YOUR_USERNAME.github.io/vietnamese-womens-day-celebration
```

## 🔧 Troubleshooting

### Lỗi npm install:
```bash
# Thử xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Lỗi git push:
```bash
# Kiểm tra remote
git remote -v

# Nếu sai, sửa lại
git remote set-url origin https://github.com/YOUR_USERNAME/vietnamese-womens-day-celebration.git
```

### Lỗi deploy:
```bash
# Thử build trước
npm run build

# Sau đó deploy
npm run deploy
```

## 📝 Lưu ý quan trọng:

1. **Thay YOUR_USERNAME** bằng username GitHub thật của bạn
2. **Đảm bảo repository là Public** để GitHub Pages hoạt động
3. **Chờ 5-10 phút** sau khi deploy để website cập nhật
4. **Kiểm tra console** nếu có lỗi

## 🎉 Kết quả:

Sau khi hoàn thành, bạn sẽ có:
- Website chạy trên GitHub Pages
- URL công khai để chia sẻ
- Tự động cập nhật khi push code mới
- Miễn phí hosting

Chúc bạn deploy thành công! 💕
