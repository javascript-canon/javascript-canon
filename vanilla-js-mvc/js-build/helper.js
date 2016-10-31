// "require" jQuery core
var $ = require( "jquery" );

// Click on "#btn-show-all" to make ALL the learning resources visible
$("#btn-show-all").click(function(event) {
  event.preventDefault();
  $(".single-resource").css("display", "inline-block");
});