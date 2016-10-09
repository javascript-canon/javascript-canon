/* ================================================================= */
/* | MODEL DATA                                                      */
/* ================================================================= */
/*                                                                   */
/*   - create a constructor function called "GetJSONAPI()"           */
/*   - have GetJSONAPI() XHR in the Heroku JSON API                  */
/*   - create GetJSONAPI() instance called "ResourceModel" that      */
/*     represents the model data                                     */
/*   - export out ResourceModel so views and controllers can see it  */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

// "require" jQuery core
var $ = require( "jquery" );

/*
 *  GetJSONAPI(): a constructor function for grabbing a JSON API via
 * XHR...just pass a "url" parameter. It can be made reusable if it's
 * exported out via Node exports.
 *
 * TODO
 * ----
 * This is currently done sync and is returning console errors.  Make it async at some point and then have it return a promise but for now,
 * do what "ThePractical Programmer" teaches us and treat it as "good
 * enough software."
 */
function GetJSONAPI( url, data ){
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

/*
 * Create new instance of "GetJSONAPI" to represent that app's model
 * data. Pass a url parameter while the data parameter is assumed to
 * be whatever data was returned in the GetJSONAPI's $.ajax call.
 */
var ResourceModel = new GetJSONAPI( "http://jscanon-data.herokuapp.com/" );

// Export out the data model
exports.ResourceModel = ResourceModel;