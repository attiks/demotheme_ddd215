/* global module */
module.exports = {
  dist: {
    options: {
      expand: false,
      keepSpecialComments: 0
    },
    files: {
      'css/site.css': [
        'css/layouts/**/*.css',
        'jslib/**/*.css',
        '<%= local.contrib.css %>',
        'css/demotheme.normalize.css',
        'css/demotheme.styles.css'
      ],
      'css/critical-min.css': [
        'css/critical.css'
      ]
    }
  }
};
