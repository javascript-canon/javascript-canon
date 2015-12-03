module.exports = function( grunt ) {

  // Project config
  grunt.initConfig({
    uncss: {
      dist: {
        files: {
          'build/css/style.css': ['build/index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks( "grunt-uncss" );
  grunt.registerTask( "default", ["uncss"] );

};