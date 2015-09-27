module.exports = function(grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration
    
    watch: {
      css: {
        files: 'sass/**/*.scss',
        tasks: ['compass', 'autoprefixer']
      }
    },
    compass: {
      dist: {
        options: { // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 4 version', 'ie 8', 'ie 9']
      },
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: 'css/screen.css',
        dest: 'css/screen.css'
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task
  grunt.registerTask('default', ['compass', 'autoprefixer']);
};
