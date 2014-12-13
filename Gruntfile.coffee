module.exports = (grunt) ->
  
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    coffee:
      compile:
        files: 'js/build/<%= pkg.name %>.js': ['js/src/*.coffee']

    sass:
      dist:
        files:
          'css/lib/application.css': 'css/src/application.scss'
        options:
          style: 'compressed'

    bower_concat:
      all:
        dest: 'js/build/bower_components.js'

    uglify:
      options:
        banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
      build:
        src: ['js/build/bower_components.js','js/build/<%= pkg.name %>.js']
        dest: 'js/lib/<%= pkg.name %>.min.js'
  
  # Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-bower-concat'
  grunt.loadNpmTasks 'grunt-contrib-sass'


  # Default task(s).
  grunt.registerTask 'default', ['sass','coffee','bower_concat','uglify']
  return
