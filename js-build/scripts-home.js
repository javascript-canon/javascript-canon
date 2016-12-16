/*jslint node: true, strict: true */
/* globals window: true, document: true, window: true, XMLHttpRequest: true */

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require("jquery"),

    // Require RSVP to polyfill Promise support...for IE mostly
    RSVP = require("RSVP"),

      /* Use Promises if there's native browser support for them...use
       * RSVP if there isn't
       */
      Promise = window.Promise ||  RSVP.Promise,

      // Create a document fragment to batch load the data all at once
      documentFragment = document.createDocumentFragment(),

      // Point to the <ul> target where the examples links will load into
      ulTargetElement = document.getElementById("examples-target");

  /* An IIFE that checks if <ul id="examples-target" /> is on the page.
   * If it is run the buildExampleList()...if not, just do a "return
   * false". This should only run on the home page.
   */
  (function(){
    if(ulTargetElement) {
      return makeRequest();
    } else {
      return false;
    }
  })();



  /* Use Vanilla JS to AJAX in data after a Promise resolves. A simple
   * implementation I found on Stack Overflow at: http://bit.ly/2hvEK5U.
   */
  function makeRequest() {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", '/api/resources');
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
  }

  makeRequest()
  .then(function (datums) {
      console.log(datums);
  }).catch(function(error) {
    console.error(error);
  });