// "require" jQuery core
var $ = require( "jquery" );

// Click on "#btn-show-all" to make ALL the learning resources visible
$("#btnShowAll").click(function(event) {
  event.preventDefault();
  $(".single-resource").css("display", "inline-block");
});

// Start functionality for showing & hiding the mobile menu
var checkMobileState = function() {

	// Store the state of <body> when it has a "mobileVisible" class
	var mobileVisible = $("body").hasClass("mobileVisible");

	// If <body> doesn't have a "mobileVisible" class...
	if(!mobileVisible) {
		
		/* ...then mobile nav isn't visible. Add a class that makes it 
		 * visible while removing a class that hides it. Use a jQuery 
		 * Promise to what for that to happen, then add a "mobileVisible"
		 * class to <body>...
		 */
		$.when($("#navigation").addClass("nav--visible").removeClass("nav--notVisible")).then(function() {
			$("body").addClass("mobileVisible");
			$(".header").addClass("header-expanded");
			$("#logo").addClass("scale-out").removeClass("scale-up");
			$("#title").addClass("h1-moveUp").removeClass("h1-moveDown");
		  $("#subtitle").addClass("subtitle-fadeOut").removeClass("subtitle-fadeIn");
		});

	/* ...otherwise, the mobile menu is visible so do the opposite stuff 
	 * when closing it.
	 */
	} else {
		$("#navigation").addClass("nav--notVisible").removeClass("nav--visible");
		$("body").removeClass("mobileVisible");
		$(".header").removeClass("header-expanded");

		$("#logo").removeClass("scale-out").addClass("scale-up");
		$("#title").removeClass("h1-moveUp").addClass("h1-moveDown");
		$("#subtitle").removeClass("subtitle-fadeOut").addClass("subtitle-fadeIn");
	}
}

// Button click funtionality that runs the checkMobileState function
document.getElementById("mobile-button").addEventListener("click", checkMobileState, false);
// Stop functionality for showing & hiding the mobile menu