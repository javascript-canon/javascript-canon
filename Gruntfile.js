module.exports = function(grunt) {

  // Project config
  grunt.initConfig({

    //uncss task
    uncss: {
      dist: {
        files: {
          "css-build/build-sandbox/css/style.css": ["css-build/build-sandbox/index.html"]
        },
        options: {
          ignore: [
            "article",
            ".header__subtitle--fadein",
            ".header__subtitle--fadeout",
            ".header__title--moveDown",
            ".header__title--moveUp",
            ".header--expanded",
            ".header__logo--scalein",
            ".header__logo--scaleout",
            ".nav__button",
            ".nav__button:hover",
            ".nav__button:visted",
            ".nav--notVisible",
            ".nav--visible",
            ".resource-header",
            ".single-resource",
            ".single-resource__header",
            ".single-resource__author",
            ".single-resource__book-image",
            ".single-resource__button"
          ]
        }
      }
    }
  });

  // List the only grunt task
  grunt.loadNpmTasks("grunt-uncss");

  // Running "grunt" runs the uncss task
  grunt.registerTask("default", ["uncss"]);

};