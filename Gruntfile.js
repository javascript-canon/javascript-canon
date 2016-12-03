module.exports = function( grunt ) {

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
            ".page-modal__button",
            ".page-modal__content",
            ".page-modal__header",
            ".page-modal__img",
            ".page-modal__slide",
            ".page-modal__slide--moveDown",
            ".page-modal__slide--moveUp",
            ".resource-header",
            ".single-resource",
            ".single-resource__header",
            ".single-resource__author",
            ".single-resource__book-image",
            ".single-resource__button"
          ]
        },
      }
    }
  });

  grunt.loadNpmTasks("grunt-uncss");

  // running "grunt" runs the uncss task
  grunt.registerTask("default", ["uncss"]);

};