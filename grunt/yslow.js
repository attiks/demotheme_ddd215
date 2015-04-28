/* global module */
module.exports = {
  options: {
    thresholds: {
      weight: 250,
      speed: 1000,
      score: 80,
      requests: 15
    }
  },
  pages: {
    files: [
      {
        src: '<%= local.url %>'
      }
    ]
  }
};
