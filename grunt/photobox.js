/* global module */
module.exports = {
  run: {
    options: {
      indexPath: 'photobox/',
      screenSizes: [ '960', '350', '1200' ],
      template: 'magic',
      relativePaths: true,
      urls: '<%= local.photobox.urls %>'
    }
  }
};
