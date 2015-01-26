module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: {
        src: ['build/**/*']
      }
    },

    connect: {
      server: {
        options: {
          livereload: true,
          base: 'build',
          open: {
            appName: 'Google Chrome'
          }
        }
      }
    },

    copy: {
      html: {
        files: [
          {expand: true, src: ['index.html'], dest: 'build'}
        ]
      },

      images: {
        files: [
          {expand: true, src: ['img/*'], dest: 'build', filter: 'isFile'}
        ]
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },

    less: {
      development: {
        src: 'less/style.less',
        dest: 'build/css/style.css'
      },
      production: {
        options: {
          cleancss: true
        },
        src: 'less/style.less',
        dest: 'build/css/style.css'
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: 'less/**/*.less',
        tasks: ['less'],
        options: {
          spawn: false
        }
      },
      html: {
        files: '*.html',
        tasks: ['copy:html'],
        options: {
          spawn: false
        }
      },
      images: {
        files: 'img/*',
        tasks: ['copy:images'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:development', 'copy', 'connect', 'watch']);
  grunt.registerTask('build', ['clean', 'less:production', 'imagemin', 'copy']);
};
