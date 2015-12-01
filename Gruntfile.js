module.exports = function( grunt ) {

  // Authorization key for saving "resources.json" to Firebase
  var authConfig = grunt.file.readJSON( "./config/auth.json" );

  // Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),

    // Authentication token config
    authConfig: authConfig,

    // firebase task config
    firebase: {
      options: {

        // reference to start with (full Firebase URL)
        reference: "https://javascriptcanon.firebaseio.com/",

        // token: the secret key used for connecting to Firebase 
        token: "<%= authConfig.token %>"
      },
      load: {
        files: [
          {
            src: "./resources.json"
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks( "grunt-firebase" );

  // Type "grunt" in the CLI and the Firebase task runs
  grunt.registerTask( "default", ["firebase"] );

};