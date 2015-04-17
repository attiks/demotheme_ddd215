# Install

npm install
./node_modules/bower/bin/bower update

# Bower problems

Remove info files: find . -type f -name "*.info"

# Change server settings

  location ~* ^([^_]+)_\d+\.(css|js)$ {
    expires    max;
    access_log off;
    etag       off;
    limit_conn limreq 8888;
    add_header Cache-Control "max-age=31449600, no-transform, public";
    add_header Access-Control-Allow-Origin *;
    add_header X-Header "NeedForSpeed";

    try_files   $1.$2 @nobots;
  }

# Disable NeedForSpeed

drush vset needforspeed_disabled 1 -y
