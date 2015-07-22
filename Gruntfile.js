module.exports = function(grunt) {

  grunt.initConfig({

    // JS TASKS ================================================================

    // jshint: {
    //   all: ['public/src/js/**/*.js'] 
    // },

    uglify: {
      build: {
        options: {
          report: 'min',
          mangle: false
        },
        files: {
          'public/dist/js/app.min.js': ['public/src/js/**/*.main.js', 'public/src/js/*.main.js', 'public/src/js/**/*.module.js', 'public/src/js/*.module.js', 'public/src/js/**/*.routes.js', 'public/src/js/*.routes.js', 'public/src/js/**/*.controller.js', 'public/src/js/*.controller.js','public/src/js/**/*.js', 'public/src/js/*.js']
        }
      },
    },

    // CSS TASKS ===============================================================

    sass: {
        dev: {
            files: {
                "public/dist/css/master.css" : "public/src/css/master.scss"
            }
        }
    },

    cssmin: {
      build: {
        files: {
          'public/dist/css/master.min.css': 'public/dist/css/master.css'
        }
      }
    },

    // COOL TASKS ==============================================================
   bower: {
        files: ['bower.json'],
        tasks: ['bower']
      },

     browserSync: {
        dev: {
            options: {
                proxy: "localhost:8080",
                files: ['master.css', 'js/**/*.js', '**/*.html'],
                watchTask: true, 
            }
        }
    },

    watch: {
      css: {
        files: ['public/src/css/**/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: ['public/src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }   

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'bower','sass', 'cssmin', 'uglify', 'concurrent','watch']);

};