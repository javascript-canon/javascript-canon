/* ================================================================= */
/* | CONTROLLER FOR THE FRONT PAGE                                   */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require( "jquery" ),

    // reference to Heroku-powered model data
    modelData = require("./model").ResourceModel,

    // "require" the view module so the controller can access it
    HomePageView = require( "./firstPageView" ),

    // reference to the view object in the view
    homepageView = HomePageView.SingleResourceView;

// JSON on the model data, then build the first page
$.getJSON(modelData).done(function(data){
  return homepageView.renderFirstPage(data);
});