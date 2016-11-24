module.exports = function( grunt ) {

  // Project config
  grunt.initConfig({

    //uncss task
    uncss: {
      dist: {
        files: {
          'app/public/css/style.css': ['http://localhost:3000']
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
            ".nav--visible",
            ".nav--notVisible",
            ".nav__button",
            ".page-modal__button",
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

  grunt.loadNpmTasks( "grunt-uncss" );

  // running "grunt" runs the uncss task
  grunt.registerTask( "default", ["uncss"] );

};