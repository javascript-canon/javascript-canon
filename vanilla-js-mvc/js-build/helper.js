// "require" jQuery core
var $ = require( "jquery" );

// Click on "#btn-show-all" to make ALL the learning resources visible
$("#btn-show-all").click(function(event) {
  event.preventDefault();
  $(".single-resource").css("display", "block");
});


// When the user clicks on the modal's close button, close it
$(".page-modal-element__button").click(function(){
    SingleResourcePageController.closeModal();
});