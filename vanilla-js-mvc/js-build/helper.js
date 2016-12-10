// use strict mode
"use strict";

// "require" jQuery core
var $ = require( "jquery" );

/**
 * Start functionality that sets the mobile state
 */
var setMobileState = function() {

  // Store the state of <body> when it has a "mobileVisible" class
  var mobileVisible = $("body").hasClass("mobileVisible");

  // If <body> doesn't have a "mobileVisible" class...
  if(!mobileVisible) {

    /* ...then mobile nav isn't visible. Add a class that makes it
     * visible and when that's done, then make some elements animate
     * while setting up the mobile view and add a "mobileVisible"
     * class to the body tag...
     */
    $.when($("#navigation").addClass("nav--visible").removeClass("nav--notVisible")).then(function() {

      $("body").addClass("mobileVisible");
      $("#headerElement").addClass("header--expanded");
      $("#logo").addClass("header__logo--scaleout").removeClass("header__logo--scalein");
      $("#title").addClass("header__title--moveUp").removeClass("header__title--moveDown");
      $("#subtitle").addClass("header__subtitle--fadeout").removeClass("header__subtitle--fadein");
    });

  /* ...otherwise, the mobile menu is visible so do the opposite stuff
   * when closing it.
   */
  } else {

    $("#navigation").addClass("nav--notVisible").removeClass("nav--visible");
    $("body").removeClass("mobileVisible");
    $("#headerElement").removeClass("header--expanded");
    $("#logo").removeClass("header__logo--scaleout").addClass("header__logo--scalein");
    $("#title").removeClass("header__title--moveUp").addClass("header__title--moveDown");
    $("#subtitle").removeClass("header__subtitle--fadeout").addClass("header__subtitle--fadein");
  }

}

// Button click functionality that runs the setMobileState function
document.getElementById("mobile-button").addEventListener("click", setMobileState, false);

/**
 * Stop functionality that sets the mobile state
 */