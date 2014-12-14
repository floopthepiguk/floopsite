module.exports = (grunt) ->
  
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    coffee:
      compile:
        files: 'js/lib/application.js': ['js/src/app.coffee','js/src/config/*.coffee','js/src/controllers/*.coffee']

    sass:
      dist:
        files:
          'css/lib/application.css': 'css/src/application.scss'
        options:
          style: 'compressed'

    bower_concat:
      all:
        dest: 'js/lib/bower_components.js'

    uglify:
      options:
        banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
      build:
        src: ['js/lib/bower_components.js','js/lib/application.js']
        dest: 'js/lib/application.min.js'

    watch:
      sass:
        files: ['css/src/**/*.scss']
        tasks: ['sass']
      coffee:
        files: ['js/src/*.coffee','js/src/**/*.coffee']
        tasks: ['coffee','uglify']
  

  # Load the plugins
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-bower-concat'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  # Default task(s).
  grunt.registerTask 'default', ['sass','coffee','bower_concat','uglify']
  #grunt.registerTask 'default', ['sass']                             # CSS only
  #grunt.registerTask 'default', ['coffee','bower_concat','uglify']   # Coffeescript only
  return
