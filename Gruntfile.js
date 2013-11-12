module.exports = function (grunt) {

  'use strict';

  var banner = '// (c) 2013 Henrik Joreteg\n';
  banner += '// MIT Licensed\n';
  banner += '// For all details and documentation:\n';
  banner += '// https://github.com/HenrikJoreteg/human-model\n';
  banner += '// \n';
  banner += '// Built: <%= grunt.template.today("yyyy-mm-dd:HH:MM") %>\n';
  banner += '\n';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        'Gruntfile.js',
        'human-model.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'uglify']
    },

    uglify: {
      options: {
        banner: banner
      },

      build: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },

    qunit: {
      options: {
        timeout: 10000
      },
      all: ['test/index.html']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify']);
  grunt.registerTask('test', ['jshint', 'qunit']);

};
