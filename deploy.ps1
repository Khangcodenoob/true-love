# Deploy script for GitHub Pages
Write-Host "Deploying website to GitHub Pages..." -ForegroundColor Green

# Change to project directory
Set-Location "G:\Khang De Thuong\20-10-2025"

# Add all files
Write-Host "Adding files..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Fix workflow and deploy"

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "`nDeployment completed!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Go to: https://github.com/Khangcodenoob/true-love/actions" -ForegroundColor White
Write-Host "2. Wait for workflow to complete (2-3 minutes)" -ForegroundColor White
Write-Host "3. Go to: https://github.com/Khangcodenoob/true-love/settings/pages" -ForegroundColor White
Write-Host "4. Select 'Deploy from a branch'" -ForegroundColor White
Write-Host "5. Choose branch 'gh-pages'" -ForegroundColor White
Write-Host "6. Click 'Save'" -ForegroundColor White
Write-Host "`nWebsite will be available at:" -ForegroundColor Cyan
Write-Host "https://khangcodenoob.github.io/true-love" -ForegroundColor Green

Read-Host "Press Enter to continue"
