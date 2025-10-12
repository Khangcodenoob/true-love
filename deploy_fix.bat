@echo off
echo Fixing GitHub Pages deployment...
echo.

cd /d "G:\Khang De Thuong\20-10-2025"

echo Adding files...
git add .

echo Committing changes...
git commit -m "Fix GitHub Pages deployment"

echo Pushing to GitHub...
git push origin main

echo.
echo Deployment completed!
echo.
echo Next steps:
echo 1. Go to: https://github.com/Khangcodenoob/true-love/actions
echo 2. Wait for workflow to complete (2-3 minutes)
echo 3. Go to: https://github.com/Khangcodenoob/true-love/settings/pages
echo 4. Select "Deploy from a branch"
echo 5. Choose branch "gh-pages"
echo 6. Click "Save"
echo.
echo Website will be available at:
echo https://khangcodenoob.github.io/true-love
echo.
pause
