ng build --prod
copy-item "..\bresheske.github.io\index.html" -destination "..\bresheske.github.io\404.html"
set-location "..\bresheske.github.io"
git init
git remote add origin https://github.com/bresheske/bresheske.github.io.git
git add -A
git stage *
git commit -m "Web build"
git push --set-upstream origin master --force