/* global module */
module.exports = {
  options: {
    nokey: true,
    url: '<%= local.url %>'
  },
  desk: {
    options: {
      paths: '<%= local.pagespeed.paths %>',
      locale: 'nl_BE',
      strategy: 'desktop',
      threshold: 80
    }
  },
  mobi: {
    options: {
      paths: '<%= local.pagespeed.paths %>',
      locale: 'nl_BE',
      strategy: 'mobile',
      threshold: 80
    }
  }
};
