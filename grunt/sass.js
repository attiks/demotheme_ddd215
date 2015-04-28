/* global module */
module.exports = {
  dev: {
    options: {
      sourceMap: true,
      sourceComments: false,
      outputStyle: 'expanded',
      includePaths: [
        'libraries/compass-mixins/lib',
        'libraries/compass-mixins/lib/compass',
        'libraries/breakpoint-sass/stylesheets'
      ]
    },
    files: {
      'css/demotheme.styles.css': 'sass/demotheme.styles.scss',
      'css/demotheme.hacks.css': 'sass/demotheme.hacks.scss',
      'css/demotheme.no-query.css': 'sass/demotheme.no-query.scss',
      'css/demotheme.normalize.css': 'sass/demotheme.normalize.scss',
      'css/layouts/basic/basic.layout.css': 'sass/layouts/basic/basic.layout.scss'
    }
  }
};
