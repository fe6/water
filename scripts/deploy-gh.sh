cd docs
git init
git add -A
git commit -m 'docs($site): deploy site'
git push -f git@github.com:fe6/water.git master:gh-pages
