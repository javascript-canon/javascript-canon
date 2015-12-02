/* ================================================================= */
/* | MODEL DATA                                                      */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // require Firebase library
    firebase = require( "firebase" ),
    
    // create a new model of data Firebase library
    ResourceModel = new firebase( "https://javascriptcanon.firebaseio.com/resources/" );

// Export out the model data
exports.ResourceModel = ResourceModel;