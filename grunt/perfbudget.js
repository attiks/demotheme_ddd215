/* global module */
module.exports = {
  all: {
    options: {
      url: '<%= local.webpagetest.url %>',
      key: '<%= local.webpagetest.apikey %>',
      runs: 3,
      budget: {
        location: 'Brussels:Chrome', // http://www.webpagetest.org/getLocations.php?f=html
        visualComplete: '2000',
        fullyLoaded: '2000',
        speedIndex: '1500',
        requests: '10'
      }
    }
  }
};
