@echo off
echo ========================================
echo    DEPLOY WEBSITE LEN GITHUB PAGES
echo ========================================
echo.

cd /d "G:\Khang De Thuong\20-10-2025"

echo Buoc 1: Dang them files...
git add .

echo Buoc 2: Dang commit...
git commit -m "Deploy website"

echo Buoc 3: Dang push len GitHub...
git push origin main

echo.
echo ========================================
echo    HOAN THANH! 
echo ========================================
echo.
echo Buoc tiep theo:
echo 1. Vao: https://github.com/Khangcodenoob/true-love/settings/pages
echo 2. Chon "Deploy from a branch"
echo 3. Chon branch "main"
echo 4. Chon folder "/ (root)"
echo 5. Click "Save"
echo.
echo Website se co dia chi:
echo https://khangcodenoob.github.io/true-love
echo.
pause
