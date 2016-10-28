/* ================================================================= */
/* | VIEW FOR THE SHOW/HIDE RESOURCE BUTTONS                         */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require("jquery"),

    // "require" underscore library
    _ = require("underscore"),

    // Create an object for the SingleNavView
    SingleNavView = {},

    /* The default element for out view.  Think of it as the "el"
     * value in "Backbone.Model()"
     */
    btnTargetEl = document.querySelector(".resource-links-list");

// "render()" method renders info for single nav button.
SingleNavView.render = function(model) {

  var

    // Array that will contain a list of resource types
    types = [],

    // Array that will contain a list of filtered resource types
    linkType,

    // Will be an $.each() function that must return a promise
    createTypeLink;

    // Loop through the model data to build the nav
    for (var key in model) {

      // Do standard hasOwnProperty() check against "data" object
      if(model.hasOwnProperty(key)) {

        // Get all the resource types & add them to the "types" array
        types.push(model[key].type);

      } // end hasOwnProperty() check

    } // end for...in loop

    /* The "types" array contains duplicate items at this point.
     * Remove the duplicate items with underscore's "uniq" method
     * Store the resulting array in a new array with a variable name
     * of "linkType".
     */
    linkType = _.uniq(types);

    /* Let the "createTypeLink" variable be a jQuery.each() call that
     * loops through the "types" ("book", "class", etc.) and create a
     * a for each one. Using jQuery because we need it to return
     * a promise for something later on.
     */
    createTypeLink = $.each(linkType, function(index, resourceType) {

      var

        // Create an <a> element
        btnLink = document.createElement("a"),

        // Create an <li> element
        btnListItem = document.createElement("li"),

        // Create an eventual id attribute for the <a> element
        btnId = resourceType + "-id";

      /* The type text is lowercase: make it proper-case & place it
       * inside the <a> element
       */
      btnLink.innerHTML = resourceType.charAt(0).toUpperCase() + resourceType.slice(1);

      // Give the <a> element an id
      btnLink.setAttribute("id", btnId);

      btnListItem.setAttribute("class", "resource-links-list__list_item");

      // Give the <a> element some classes and a data attribute
      $(btnLink).attr("data-link-type", resourceType);

      btnListItem.appendChild(btnLink);

      /* Place the <a> in the target "view" element, which is
       * <nav>
       */
      btnTargetEl.appendChild(btnListItem);


    }); //end "createTypeLink"

    /* USE JQUERY PROMISES
     * ================================================================
     * The data MIGHT not return fast enough so that buttons update
     * the view when they're clicked on and return a console error.
     * Use $.Deferred, $.promise(), and $.done() to prevent this
     */

    // "defer" will be a method that we need to return a promise
    var defer = $.Deferred();

    // Let "createTypeLink" be the method that returns a promise
    defer.promise(createTypeLink);

    /* "createTypeLink" represents the looping function that builds
     * each nav button. When (and ONLY when) all the nav button
     * elements are built, then the buttons can respond to $.click()
     * elements.
     */
    createTypeLink.done(

      $(".nav__button").click(function(){

        // Single var pattern
        var getLinkType, getElType, getElNotType;

        /* The ".btn" data-link-type value gets stored in getLinkType.
         * Data attributes don't work in IE 10 and lower. Feature-
         * detect if the browser supports the dataset property
         */

        // If it doesn't, use the getAttribute method instead
        if(!this.dataset) { // If <= IE10
          getLinkType = this.getAttribute("data-link-type");
        } else { // For other browsers
          getLinkType = this.dataset.linkType;
        }

        /* The ".btn" data-link-type val matches "data-resource-type"
         * value. Store items with matching data-resource-type in the
         * "getElType" variable.
         */
        getElType = $("article[data-resource-type*="+getLinkType+"]");

        // Store non-matching data-resource-type items in getElNotType
        getElNotType = $("article:not([data-resource-type*="+getLinkType+"])");

        /* Find page elements with the ".resource" class. Let
         * $.filter() show matching elements, hide non-matching ones.
         */
        $(".single-resource").filter(getElNotType).css("display", "none");
        $(".single-resource").filter(getElType).css("display", "block");
      })
   );
}

// Click on "#btn-show-all" to make ALL the learning resources visible
$("#btn-show-all").click(function(event) {
  event.preventDefault();
  $(".single-resource").css("display", "block");
});

// Export the nav view so it's available to the nav controller
exports.SingleNavView = SingleNavView;