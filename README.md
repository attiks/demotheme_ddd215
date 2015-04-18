# Install

- Clone repo
- Make sure you have omega-7.x-4.x installed
- Run ./rename.sh MYTHEME
- Make sure you have npm installed
- Run ./update.sh
- Run grunt build
- drush cc all

# Update

- Run ./update.sh
- Run grunt build
- drush cc all

# Change server settings

## Apache

    RewriteRule ^(.*).([0-9-]+).(js|css)$ $1.$3 [L]

## Nginx

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
