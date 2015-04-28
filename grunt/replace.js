/* global module */
module.exports = {
  dev: {
    src: ['templates/system/html.tpl.php'],
    overwrite: true,
    replacements: [
    ]
  },
  dist: {
    src: ['needforspeed_css.php', 'needforspeed_script.php'],
    overwrite: true,
    replacements: [
      // Force new timestamp
      {
        from: /\/js\/script\.min_[0-9]*\.js/g,
        to: '/js/script.min.js'
      },
      {
        from: '/js/script.min.js',
        to: '/js/script.min_<%= Date.now() %>.js'
      },
      {
        from: /\/css\/site_[0-9]*\.css/g,
        to: '/css/site.css'
      },
      {
        from: '/css/site.css',
        to: '/css/site_<%= Date.now() %>.css'
      },
    ]
  }
};
