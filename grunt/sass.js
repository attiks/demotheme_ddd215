/* global module */
module.exports = {
  dev: {
    options: {
      pwd: true,
      sourceMap: true,
      sourceComments: false,
      outputStyle: 'expanded',
      includePaths: '<%= local.sass.includes %>'
    },
    files: '<%= local.sass.files %>'
  }
};
