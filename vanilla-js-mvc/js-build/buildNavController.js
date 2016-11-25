/* ================================================================= */
/* | CONTROLLER FOR THE NAVIGATION                                   */
/* ================================================================= */
/*                                                                   */
/*   -  A very simple MVC implementation-read more at:               */
/*      http://bit.ly/1zxWh0m                                        */
/* ================================================================= */

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require("jquery"),

    // reference to Heroku-powered model data
    modelData = require("./model").ResourceModel,

    // "require" the view code so the controller can access it
    navView = require("./buildNavView").SingleNavView;

 /* Run the "displayNav()" method & pass the model data as its
  * parameter, which is represented by the "navModelData" variable
  * defined above.
  */
  $.getJSON(modelData).done(function(data){
    return navView.render(data);
  });