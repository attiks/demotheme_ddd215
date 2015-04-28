/* global module */
module.exports = {
  options: {
    urls: ['<%= local.url %>'],
    warnings: [
      { variable : 'requests', limit : 25},
      { variable : 'DOMqueriesDuplicated', limit : 10},
      { variable : 'DOMinserts', limit : 100},
      { variable : 'jQuerySizzleCalls', limit : 20},
      { variable : 'imagesWithoutDimensions', limit : -1},
    ]
  }
};
