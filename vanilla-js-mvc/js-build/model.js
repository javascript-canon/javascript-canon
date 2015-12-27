/* ================================================================= */
/* | MODEL DATA                                                      */
/* ================================================================= */
/*                                                                   */
/*   - create a constructor function called "getJSONAPI()"           */
/*   - have getJSONAPI() XHR in the Heroku JSON API                  */
/*   - create getJSONAPI() instance called "ResourceModel" that      *//*     represents the model data                                     */
/*   - export out ResourceModel so views and controllers can see it  */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

// "require" jQuery core
var $ = require( "jquery" );

function getJSONAPI( url, data ){
    var result = null;
    $.ajax({
      async: false,
      dataType: "json",
      url: url,
      data: data,
      success: function( data ) {
        result = data;
      }
    });
    return result;
}

var ResourceModel = new getJSONAPI( "http://jscanon-data.herokuapp.com/" );

// Export out the data model
exports.ResourceModel = ResourceModel;