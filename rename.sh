sed -i 's/demotheme/'"$1"'/g' bower.json
sed -i 's/demotheme/'"$1"'/g' sass/demotheme.no-query.scss
sed -i 's/demotheme/'"$1"'/g' theme-settings.php
sed -i 's/demotheme/'"$1"'/g' process/page.process.inc
sed -i 's/demotheme/'"$1"'/g' js/demotheme.behaviors.js
sed -i 's/demotheme/'"$1"'/g' preprocess/page.preprocess.inc
sed -i 's/demotheme/'"$1"'/g' package.json
sed -i 's/demotheme/'"$1"'/g' demotheme.info
sed -i 's/demotheme/'"$1"'/g' needforspeed_css.php
sed -i 's/demotheme/'"$1"'/g' template.php

rename 's/demotheme/'"$1"'/' demotheme.info
rename 's/demotheme/'"$1"'/' js/*
rename 's/demotheme/'"$1"'/' sass/*

