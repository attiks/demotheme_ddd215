/* global module */
module.exports = function(grunt) {
  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt'),
    overridePath: path.join(process.cwd(), 'config'),
    preMerge: function(config, data) {
      var base = grunt.file.exists('settings.base.json') ? grunt.file.readJSON('settings.base.json') : {};
      var common = grunt.file.exists('settings.common.json') ? grunt.file.readJSON('settings.common.json') : {};
      var local = grunt.file.exists('settings.local.json') ? grunt.file.readJSON('settings.local.json') : {};
      data.local = grunt.util._.merge(base, common, local);
    }
  });
};
