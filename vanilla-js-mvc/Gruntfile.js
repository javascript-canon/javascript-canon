module.exports = function( grunt ) {

  // Project config
  grunt.initConfig({
    
    //uncss task
    uncss: {
      dist: {
        files: {
          'build/css/style.css': ['build/index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks( "grunt-uncss" );

  // running "grunt" in "vanilla-js-mvc" runs the uncss task
  grunt.registerTask( "default", ["uncss"] );

};