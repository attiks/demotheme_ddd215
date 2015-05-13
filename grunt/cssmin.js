/* global module */
module.exports = {
  dist: {
    options: {
      expand: false,
      keepSpecialComments: 0
    },
    files: {
      'css/site.css': [
        '<%= local.contrib.css %>',
        '<%= local.custom.css %>',
      ],
      'css/critical-min.css': [
        'css/critical.css'
      ]
    }
  }
};
