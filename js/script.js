$(document).ready(function() {

	$(window).scroll(changeBgcNav);
	smoothScrolling();
	
	 $('#btn-toogler').on('click', function() {
		
		$('#main-nav').toggleClass('activated');
	});
 	
	
});

function changeBgcNav() {
	var navHeight = $('#main-nav').outerHeight();
	var currentPosition = $(window).scrollTop();
	
	if(currentPosition >= navHeight) {
		$('#main-nav').addClass('scrolled');
	} else {
		$('#main-nav').removeClass('scrolled');
	}
}

 var smoothScrolling = function() {
	 
	  $("#main-nav a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
		

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
 }
 


 
 
