/* ================================================================= */
/* | MODEL DATA                                                      */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // require Firebase library
    firebase = require( "firebase" ),
    
    // create a new data model from object that's up on Firebase
    ResourceModel = new firebase( "https://javascriptcanon.firebaseio.com/resources/" );

// Export out the data model
exports.ResourceModel = ResourceModel;