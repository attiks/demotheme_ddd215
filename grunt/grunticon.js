/* global module */
module.exports = {
  myIcons: {
    files: [{
      expand: true,
      cwd: 'svg',
      src: ['*.svg', '*.png'],
      dest: 'sass/svg'
    }],
    options: {
      datasvgcss: '_svg.scss',
      cssprefix: '@mixin icon-'
    }
  }
};
