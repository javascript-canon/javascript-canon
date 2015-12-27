/* ================================================================= */
/* | MODEL DATA                                                      */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var $ = require( "jquery" );

function getJSONAPI( url, data ){
    var result = null;
    $.ajax({
      async: false,
      dataType: "json",
      url: url,
      data: data,
      success: function(data){
        result = data;
      }
    });
    return result;
}

var ResourceModel = new getJSONAPI( "http://jscanon-data.herokuapp.com/" );

// Export out the data model
exports.ResourceModel = ResourceModel;