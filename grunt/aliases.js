/* global module */
module.exports = {
  'default': [
    'watch'
  ],
  'build': [
    'uglify:dist',
    'sass:dev',
    'autoprefixer:dist',
    'cssmin:dist',
    'criticalcss',
    'shell:cleancritical',
    'cssmin:dist',
    'replace:dist',
    'clean:dist'
  ],
  'speedtest': [
    'build',
    'devperf',
    'yslow'
  ],
  'test': [
    'photobox',
    'phantomas',
    'notify:photobox'
  ],
  'critical': [
    'criticalcss',
    'shell:cleancritical',
    'cssmin'
  ]
};
