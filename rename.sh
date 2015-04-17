sed -i 's/testje/'"$1"'/g' bower.json
sed -i 's/testje/'"$1"'/g' sass/demotheme.no-query.scss
sed -i 's/testje/'"$1"'/g' theme-settings.php
sed -i 's/testje/'"$1"'/g' process/page.process.inc
sed -i 's/testje/'"$1"'/g' js/demotheme.behaviors.js
sed -i 's/testje/'"$1"'/g' preprocess/page.preprocess.inc
sed -i 's/testje/'"$1"'/g' package.json
sed -i 's/testje/'"$1"'/g' demotheme.info
sed -i 's/testje/'"$1"'/g' needforspeed_css.php
sed -i 's/testje/'"$1"'/g' Gruntfile.js

rename 's/testje/'"$1"'/' testje.info
rename 's/testje/'"$1"'/' js/*
rename 's/testje/'"$1"'/' sass/*

