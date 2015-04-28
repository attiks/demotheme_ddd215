/* global module */
module.exports = {
  options: {
    browsers: ['last 2 versions', 'ie 9'],
    cascade: false,
    map: true
  },
  dist: {
    expand: true,
    src: 'css/{,**/}*.css',
    dest: ''
  },
};
