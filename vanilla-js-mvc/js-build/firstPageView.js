/* ================================================================= */
/* | VIEW FOR THE FRONT PAGE                                         */
/* ================================================================= */

// use strict mode
"use strict";

var
    // "require" the model data
    Resources = require( "./model" ),

    // create a short-hand reference to the data model
    resourcesData = Resources.ResourceModel,
    SingleResourceView = {};

  SingleResourceView.render = function() {
    return resourcesData.on("value", function(snapshot) {
      var data = snapshot.val();
    });
  }
    

SingleResourceView.render();