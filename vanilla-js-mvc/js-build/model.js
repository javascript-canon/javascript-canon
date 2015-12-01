/* ================================================================= */
/* | MODEL DATA                                                      */
/* ================================================================= */

// use strict mode
"use strict";

var

    // require Firebase library
    firebase = require( "firebase" ),
    
    // create a new model of data Firebase library
    ResourceModel = new firebase( "https://javascriptcanon.firebaseio.com/resources/" );

// Export out the model data
exports.ResourceModel = ResourceModel;