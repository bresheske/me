ng build --prod
copy-item "dist\index.html" -destination "dist\404.html"
set-location "dist"
git init
git remote add origin https://github.com/bresheske/bresheske.github.io.git
git add -A
git stage *
git commit -m "Web build"
git push --set-upstream origin master --force