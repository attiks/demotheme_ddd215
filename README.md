# Install

- Make sure you have omega-7.x-4.x installed
- Create directory sites/all/themes/custom
- Clone repo: git clone --branch 7.x-1.x git@github.com:attiks/demotheme_ddd215.git MYTHEME
- Run ./rename.sh MYTHEME
- Make sure you have npm installed
- Run ./update.sh
- Optional: Create settings.common.json
- Optional: Create settings.local.json
- Run grunt build
- drush cc all

# Settings

## settings.base.json

This file contains the base settings, you should not edit this file

## settings.common.json

This file contains common settings for everybody working on this theme.  
This file should be checked in into git so it is shared by everybody.

This file can for example contains API keys.

## settings.local.json

This file contains settings specific for your environment, like for instance
the drush alias to use or the local domain names, this file should not be checked in into git.

```
{
  "hostname": "test.dev.aegir.local",
  "url": "http://test.dev.aegir.local",
  "photobox": {
    "urls": ["http://test.dev.aegir.local"]
  },
  "phantomas": {
    "url": "http://test.dev.aegir.local"
  },
  "drush": {
    "alias": "@test.dev.aegir.local"
  }
}

```

# Update

- Run ./update.sh
- Run grunt build
- drush cc all

# Develop using watch

- Run grunt

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
