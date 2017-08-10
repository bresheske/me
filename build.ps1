ng build --delete-output-path false --prod
copy-item "..\bresheske.github.io\index.html" -destination "..\bresheske.github.io\404.html"
set-location "..\bresheske.github.io"
git add -A
git stage *
git commit -m "Web build"
git push