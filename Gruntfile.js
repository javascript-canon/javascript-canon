module.exports = function(grunt) {

  // Authorization key for saving "resources.json" to Firebase
  var authConfig = grunt.file.readJSON("./config/auth.json");

  // Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    authConfig: authConfig,
    firebase: {
      options: {

        // reference to start with (full firebase url)
        reference: "https://javascriptcanon.firebaseio.com/",

        // token: the secret key used for connecting to firebase 
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

  grunt.registerTask("default", ["firebase"]);

};