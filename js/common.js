$(function() {

// scroll-down
	$('.btn-down').click(function(){
		$('html, body').animate({ scrollTop: $('.header').height()}, 'slow');
		return false;
	});

// menu
$('.toggle-mnu').click(function(){
	$(this).toggleClass('on');
	$('.header-top__nav').slideToggle();
	});

// scrol-top
$('.top').click(function(){
	$('html, body').animate({ scrollTop: 0 }, 'slow');
	return false;
});

// slider
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
		loop: true,
		smartSpeed: 500,
		fluidSpeed: 500,
			responsive: {
				0:{
					items: 1
				},
				800:{
					items: 2
				},
				992: {
					items: 3
				}
			}
	});
});

});
