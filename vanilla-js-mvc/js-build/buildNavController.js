/* ================================================================= */
/* | CONTROLLER FOR THE NAVIGATION                                   */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" the view code so the controller can access it
    NavView = require( "./buildNavView" ),

    // reference to Heroku-powered model data in the view
    navModelData = NavView.navData,

    // reference to the view object in the view
    navView = NavView.SingleNavView,

    // create a controller object for the homepage view
    NavController = {};

/* 
 * "displayNav()" method renders the model data that's passed to view
 * object's "render()" method. The "getData" parameter represents the
 * model data.
 */
NavController.displayNav = function( getData ) {
  return navView.render( getData );
};

 /*
 * Run the "displayNav()" method & pass the model data as its
 * parameter, which is represented by the "navModelData" variable
 * defined above.
 */
NavController.displayNav( navModelData );