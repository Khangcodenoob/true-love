# Website Chúc mừng Ngày Phụ nữ Việt Nam 20/10

Một website React.js đẹp mắt để chúc mừng Ngày Phụ nữ Việt Nam với animation, âm nhạc và giao diện thân thiện.

## Tính năng

- 🎨 Thiết kế đẹp mắt với màu hồng, trắng và vàng pastel
- 🌸 Animation hoa rơi và trái tim bay
- 🎵 Nhạc nền tự động phát
- 💌 Modal gửi lời chúc cá nhân
- 📱 Responsive design cho mobile và desktop
- ✨ Hiệu ứng fade-in và floating cho messages

## Cài đặt và chạy

1. Cài đặt dependencies:
```bash
npm install
```

2. Thêm file nhạc nền:
   - Đặt file nhạc `.mp3` vào thư mục `public/`
   - Đổi tên file thành `background-music.mp3`
   - Hoặc thay đổi tên file trong `src/App.js` dòng 12

3. Chạy ứng dụng:
```bash
npm start
```

4. Mở trình duyệt tại `http://localhost:3000`

## Cấu trúc dự án

```
src/
├── App.js                 # Component chính
├── App.css               # Styles chính
├── index.js              # Entry point
├── index.css             # Global styles
└── components/
    ├── FlowerAnimation.js    # Animation hoa và trái tim
    ├── FlowerAnimation.css   # Styles cho animation
    ├── WishModal.js          # Modal gửi lời chúc
    └── WishModal.css         # Styles cho modal

public/
├── index.html            # HTML template
└── background-music.mp3  # File nhạc nền (cần thêm)
```

## Deploy lên GitHub Pages

1. Build project:
```bash
npm run build
```

2. Cài đặt gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Thêm script vào package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy:
```bash
npm run deploy
```

## Ghi chú

- Website sử dụng React Hooks (useState, useEffect)
- Animation được tạo bằng CSS keyframes và JavaScript
- Nhạc nền tự động phát khi load trang
- Responsive design tối ưu cho mọi thiết bị

## Tác giả

Made with 💖 by KhangDC
