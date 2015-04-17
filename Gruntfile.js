/* global module */
module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    local: grunt.file.exists('settings.json') ? grunt.file.readJSON('settings.json') : {
      'photobox': {
        'urls': ['http://localhost']
      },
      'phantomas': {
        'url': 'http://localhost'
      }
    },

    notify: {
      options: {
        enabled: true,
        title: 'demotheme'
      },
      photobox: {
        options: {
          message: 'Photobox and phantomas are ready'
        }
      },
      watchjs: {
        options: {
          message: 'js ready, reloading ...'
        }
      },
      watchsass: {
        options: {
          message: 'css ready, reloading ...'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['sass/{,**/}*.{scss,sass}'],
        tasks: ['sass:dev', 'autoprefixer', 'notify:watchsass'],
        options: {
          livereload: false,
          sourcemap: true
        }
      },
      registry: {
        files: ['*.info', '{,**}/*.{php,inc}'],
        tasks: ['shell'],
        options: {
          livereload: false
        }
      },
      svg: {
        files: ['svg/{,**/}*.svg'],
        tasks: ['grunticon'],
      },
      images: {
        files: ['images/**']
      },
      css: {
        files: ['css/{,**/}*.css']
      },
      js: {
        files: ['js/{,**/}*.js', '!js/{,**/}*.min.js'],
        tasks: ['jshint', 'uglify:dev', 'notify:watchjs']
      }
    },

    shell: {
      all: {
        command: 'drush cache-clear theme-registry'
      },
      cleancritical: {
        // Remove inlined svg or images.
        command: 'sed -i  \'/data:/d\' css/critical[0-9].css; cat css/critical1.css css/critical[0-9].css > css/critical.css'
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9'],
        cascade: false,
        map: true
      },
      dist: {
        expand: true,
        src: 'css/{,**/}*.css',
        dest: ''
      },
    },

    sass: {
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
          'css/demotheme.normalize.css': 'sass/demotheme.normalize.scss'
        }
      }
    },

    criticalcss: {
      custom_options: {
        options: {
          url: '<%= local.critical1 %>',
          filename: 'css/site.css',
          width: 1200,
          height: 900,
          outputfile: 'css/critical1.css',
          buffer: 800*1024
        }
      },
      custom_options2: {
        options: {
          url: '<%= local.critical2 %>',
          filename: 'css/site.css',
          width: 1200,
          height: 900,
          outputfile: 'css/critical2.css',
          buffer: 800*1024
        }
      }
    },

    cssmin: {
      dist: {
        options: {
          expand: false,
          keepSpecialComments: 0
        },
        files: {
          'css/site.css': [
            'jslib/responsive-carousel/responsive-carousel.css',
            'jslib/responsive-carousel/responsive-carousel.slide.css',
            '../../../modules/contrib/youtube/css/youtube.css',
            'css/demotheme.normalize.css',
            'css/demotheme.styles.css'
          ],
          'css/critical-min.css': [
            'css/critical.css'
          ]
        }
      }
    },

    cleancritical: {
    },

    clean: {
      dist: {
        src: ['css/**/*.map']
      }
    },

    favicons: {
      options: {
        trueColor: true,
        precomposed: true,
        appleTouchBackgroundColor: "#ffffff",
        coast: true,
        windowsTile: true,
        tileBlackWhite: false,
        tileColor: "auto",
        html: '',
        HTMLPrefix: ''
      },
      icons: {
        src: 'logo_source.png',
        dest: ''
      }
    },

    replace: {
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
    },

    scsslint: {
      allFiles: [
        'sass/*/*.scss',
      ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true,
        exclude: ['sass/base/_slideshow.scss', 'sass/demotheme.normalize.scss']
      },
    },

    photobox: {
      run: {
        options: {
          indexPath: 'photobox/',
          screenSizes: [ '960', '350', '1200' ],
          template: 'magic',
          relativePaths: true,
          urls: '<%= local.photobox.urls %>'
        }
      }
    },

    phantomas: {
      run: {
        options: {
          indexPath: './phantomas/',
          options: {
            'timeout': 30
          },
          url: '<%= local.phantomas.url %>'
        }
      }
    },

    devperf: {
      options: {
        urls: ['<%= local.phantomas.url %>'],
        warnings: [
          { variable : 'requests', limit : 25},
          { variable : 'DOMqueriesDuplicated', limit : 10},
          { variable : 'DOMinserts', limit : 100},
          { variable : 'jQuerySizzleCalls', limit : 20},
          { variable : 'imagesWithoutDimensions', limit : -1},
        ]
      }
    },

    yslow: {
      options: {
        thresholds: {
          weight: 180,
          speed: 1000,
          score: 80,
          requests: 15
        }
      },
      pages: {
        files: [
          {
            src: '<%= local.phantomas.url %>'
          }
        ]
      }
    },

    pagespeed: {
      options: {
        nokey: true,
        url: '<%= local.phantomas.url %>'
      },
      desk: {
        options: {
          paths: ['/', '/node/1'],
          locale: 'nl_BE',
          strategy: 'desktop',
          threshold: 80
        }
      },
      mobi: {
        options: {
          paths: ['/', '/node/1'],
          locale: 'nl_BE',
          strategy: 'mobile',
          threshold: 80
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['js/{,**/}*.js', '!js/{,**/}*.min.js']
    },

    grunticon: {
      myIcons: {
        files: [{
          expand: true,
          cwd: 'svg',
          src: ['*.svg', '*.png'],
          dest: 'sass/svg'
        }],
        options: {
          datasvgcss: '_svg.scss',
          cssprefix: '@mixin icon-'
        }
      }
    },

    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: [{
          expand: true,
          flatten: true,
          cwd: 'js',
          dest: 'js',
          src: ['**/*.js', '!**/*.min.js'],
          rename: function(dest, src) {
            var folder = src.substring(0, src.lastIndexOf('/'));
            var filename = src.substring(src.lastIndexOf('/'), src.length);
            filename = filename.substring(0, filename.lastIndexOf('.'));
            return dest + '/' + folder + filename + '.min.js';
          }
        }]
      },
      dist: {
        options: {
          mangle: false,
          compress: true,
          flatten: true
        },
        files: {
          'js/script.min.js': [
            '../../../modules/contrib/picture/picturefill2/picturefill.min.js',
            'js/demotheme.behaviors.js'
          ]
        }
      }
    },

    perfbudget: {
      default: {
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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-phantomas');
  grunt.loadNpmTasks('grunt-photobox');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-yslow');
  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-devperf');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-favicons');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-perfbudget');
  
  grunt.registerTask('build', [
    'uglify:dist',
    'sass:dev',
    'autoprefixer:dist',
    'cssmin:dist',
    'criticalcss',
    'shell:cleancritical',
    'cssmin:dist',
    'replace:dist',
    'clean:dist'
  ]);

  grunt.registerTask('speedtest', [
    'build',
    'devperf',
    'yslow'
  ]);

  grunt.registerTask('test', [
    'photobox',
    'phantomas',
    'notify:photobox'
  ]);

  grunt.registerTask('critical', [
    'criticalcss',
    'shell:cleancritical',
    'cssmin'
  ]);

};
