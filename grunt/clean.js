/* global module */
module.exports = {
  dist: {
    src: [
      'css/**/*.map',
      'css/critical1.css',
      'css/<%= package.name %>*.css'
    ]
  }
};
