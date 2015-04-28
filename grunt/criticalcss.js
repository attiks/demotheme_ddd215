/* global module */
module.exports = {
  options: {
    filename: 'css/site.css',
    width: 1200,
    height: 900,
    buffer: 800*1024
  },
  home: {
    options: {
      url: '<%= local.url %>',
      filename: 'css/site.css',
      outputfile: 'css/critical1.css'
    }
  }
};
