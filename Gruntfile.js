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
        tasks: ['compass', 'postcss']
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
    postcss: {
      options: {
        map: false, // inline sourcemaps
        processors: [
          require('autoprefixer')({browsers: ['last 4 version', 'ie 8', 'ie 9']}), // add vendor prefixes
        ]
      },
      dist: {
        src: 'css/screen.css',
        dest: 'css/screen.css'
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-postcss');

  // Default task
  grunt.registerTask('default', ['compass', 'postcss']);
};
