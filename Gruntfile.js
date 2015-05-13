/* global module */
module.exports = function(grunt) {
  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt'),
    overridePath: path.join(process.cwd(), 'config'),
    data: {
      local: grunt.file.exists('settings.json') ? grunt.file.readJSON('settings.json') : {
        'hostname': 'localhost',
        'url': 'http://localhost',
        'logo_source': 'logo_source.png',
        'contrib': {
          'css': [
          ],
          'js': [
          ]
        },
        'custom': {
          'css': [
            'css/layouts/**/*.css',
            'jslib/**/*.css',
            'css/demotheme.normalize.css',
            'css/demotheme.styles.css'
          ],
          'js': [
            'js/demotheme.behaviors.js'
          ]
        },
        'sass': {
          'includes': [
            'libraries/compass-mixins/lib',
            'libraries/compass-mixins/lib/compass',
            'libraries/breakpoint-sass/stylesheets'
          ],
          'files': {
            'css/demotheme.styles.css': 'sass/demotheme.styles.scss',
            'css/demotheme.hacks.css': 'sass/demotheme.hacks.scss',
            'css/demotheme.no-query.css': 'sass/demotheme.no-query.scss',
            'css/demotheme.normalize.css': 'sass/demotheme.normalize.scss',
            'css/layouts/basic/basic.layout.css': 'sass/layouts/basic/basic.layout.scss'
          }
        },
        'pagespeed_paths': ['/'],
        'photobox': {
          'urls': ['http://localhost']
        },
        'phantomas': {
          'url': 'http://localhost'
        }
      }
    }
  });
};
