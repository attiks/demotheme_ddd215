/* global module */
module.exports = {
  options: {
    livereload: true
  },
  sass: {
    files: ['sass/{,**/}*.{scss,sass}'],
    tasks: ['sass:dev', 'autoprefixer', 'notify:watchsass'],
    options: {
      livereload: false,
      sourcemap: true
    }
  },
  registry: {
    files: ['*.info', '{,**}/*.{php,inc}'],
    tasks: ['shell'],
    options: {
      livereload: false
    }
  },
  svg: {
    files: ['svg/{,**/}*.svg'],
    tasks: ['grunticon'],
  },
  images: {
    files: ['images/**']
  },
  css: {
    files: ['css/{,**/}*.css']
  },
  js: {
    files: ['js/{,**/}*.js', '!js/{,**/}*.min.js'],
    tasks: ['jshint', 'uglify:dev', 'notify:watchjs']
  }
};
