/* ================================================================= */
/* | CONTROLLER FOR THE FRONT PAGE                                   */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require( "jquery" ),

    // reference to Heroku-powered model data in the view
    modelData = require("./model"),

    // "require" the view module so the controller can access it
    HomePageView = require( "./firstPageView" ),

    resourceData = modelData.ResourceModel,

    // reference to the view object in the view
    homepageView = HomePageView.SingleResourceView;

 $.getJSON(resourceData).done(function(data){
    return homepageView.renderFirstPage(data);
 });