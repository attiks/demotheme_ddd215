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
