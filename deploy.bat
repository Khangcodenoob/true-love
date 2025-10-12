@echo off
echo Deploying website to GitHub Pages...
echo.

cd /d "G:\Khang De Thuong\20-10-2025"

echo Adding files...
git add .

echo Committing changes...
git commit -m "Deploy website"

echo Pushing to GitHub...
git push origin main

echo.
echo Deployment completed!
echo.
echo Next steps:
echo 1. Go to: https://github.com/Khangcodenoob/true-love/settings/pages
echo 2. Select "Deploy from a branch"
echo 3. Choose branch "gh-pages"
echo 4. Choose folder "/ (root)"
echo 5. Click "Save"
echo.
echo Website will be available at:
echo https://khangcodenoob.github.io/true-love
echo.
pause
