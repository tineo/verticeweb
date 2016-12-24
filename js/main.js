/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSirius() {
	"use strict";

	//HERO DIMENSIONS AND CENTER
	(function() {
		function heroInit(){
			var hero = $('.hero'),
				windowHeight = $(window).height(),
				heroHeight = windowHeight,
				heroContent = $('.hero-content'),
				contentHeight = heroContent.height(),
				topContentMargin = (heroHeight - contentHeight) / 2;


			hero.css({
				height: heroHeight+"px"
			});

			heroContent.css({
				"margin-top" : topContentMargin+"px"
			});

		}

		$(window).on("resize", heroInit);
	    $(document).on("ready", heroInit);
	})();






	// FORM

	$(function($) {
		$('body').on('click','#subscribe',function(){$.ajax({'type':'POST','success':function(data) {
									
		var error = $('.notification.error');
		var success = $('.notification.success');
		if(data == 1) {
			success.css('opacity', 0);
			success.slideDown(300);
			success.animate({
				opacity : 1
			}, 300);
			error.hide()
		} else {
			error.css('opacity', 0);
			error.slideDown(300);
			error.animate({
				opacity : 1
			}, 300);
			success.hide()
		} 
		},
		'url':'form.php',		  
		'cache':false,
		'data':$(this).parents("form").serialize()});return false;});
	});
};


	// SCROLLTO
		
	var scrollY = 0;
	var distance = 10;
	var speed = 10;
	function autoScrollTo (el)  {
		var currentY = window.pageYOffset;
		var targetY = document.getElementById(el).offsetTop;
		var bodyHeight = document.body.offsetHeight;
		var yPos = currentY + window.innerHeight;
		var animator = setTimeout('autoScrollTo(\''+el+'\')',speed);
		if(yPos > bodyHeight) {
			clearTimeout(animator);
		} else {
			if(currentY < targetY-distance) {
				scrollY = currentY+distance;
				window.scroll(0, scrollY);
			} else {
				clearTimeout (animator);
			}

		}
	}



/* END ------------------------------------------------------- */


/* =Document Ready Trigger
-------------------------------------------------------------- */
$(document).ready(function(){

	initializeSirius();

});
/* END ------------------------------------------------------- */

/* =Window Load Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	//SKROLLR 
    if (Modernizr.touch) {
        skrollr.init().destroy();
    } else {   
        skrollr.init({
        	forceHeight: false
        });  
    }
});





/* END ------------------------------------------------------- */