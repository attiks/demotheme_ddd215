/* global module */
module.exports = {
  dev: {
    options: {
      mangle: false,
      compress: false,
      beautify: true
    },
    files: [{
      expand: true,
      flatten: true,
      cwd: 'js',
      dest: 'js',
      src: ['**/*.js', '!**/*.min.js'],
      rename: function(dest, src) {
        var folder = src.substring(0, src.lastIndexOf('/'));
        var filename = src.substring(src.lastIndexOf('/'), src.length);
        filename = filename.substring(0, filename.lastIndexOf('.'));
        return dest + '/' + folder + filename + '.min.js';
      }
    }]
  },
  dist: {
    options: {
      mangle: false,
      compress: true,
      flatten: true
    },
    files: {
      'js/script.min.js': [
        '<%= local.contrib.js %>',
        'js/demotheme.behaviors.js'
      ]
    }
  }
};
