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

    // reference to Heroku-powered model data in the view
    modelData = require("./model"),

    resourceData = modelData.ResourceModel,

    // "require" the view code so the controller can access it
    NavigationView = require("./buildNavView"),

    // reference to the view object in the view
    navView = NavigationView.SingleNavView;

 /* Run the "displayNav()" method & pass the model data as its
 	* parameter, which is represented by the "navModelData" variable
 	* defined above.
 	*/
 $.getJSON(resourceData).done(function(data){
 		return navView.render(data);
 });
