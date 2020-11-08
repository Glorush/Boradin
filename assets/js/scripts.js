$(document).ready(function(){
	$('.carousel-banner').owlCarousel({
		items:1,
		nav:false,
		dots:true,
	    loop:true,
		autoplay:1000

	})

	// header-spy
	$('body').scrollspy({
	 target: '#nav-class' 
	});

	$('.feature-hotel').owlCarousel({
		margin:30,
		loop:true,
		nav:true,
		dots:false,
		autopplay:true,
		// autoplay:1000,    
		responsiveClass:true,
    	responsive:{
        	0:{
            	items:1,
           	 	nav:false
        	},
        	768:{
           	 	items:2,
            	nav:true
        	},
       		1000:{
           	 	items:3,
            	nav:true,
        	}
    	}
	});

	// video popup
  $('.video-popup').magnificPopup({type:'iframe'});

  	// news carousel
	$('.news-carousel').owlCarousel({
		
		loop:true,
		nav:true,
		dots:false,
		autoplay:1000,    
    	responsive:{
        	0:{
            	items:1,
           	 	nav:true
        	},
        	768:{
           	 	items:2,
            	nav:true
        	},
       		1000:{
           	 	items:3,
            	nav:true,
        	}
    	}
	});

	$('.all-items-carousel').owlCarousel({
		items:3,
		margin:25,
    	stagePadding: 100,
		loop:true,
		nav:false,
		dots:false,
		// autoplay:1000,    
		responsiveClass:true,
    	responsive:{
        	0:{
            	items:1,
        	},
        	768:{
           	 	items:2,
        	},
       		1000:{
           	 	items:3,
            	loop:false
        	}
    	}
	});
	$('.back-top-btn').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1000);
	});


	// menu to body-scoll
	$('.collapse ul li a').click(function(){
		$('html,body').animate({
			scrollTop:$($(this).attr('href')).offset().top
		},500);
		return false;
	});


	// aos animate
	AOS.init();

});

$(window).scroll(function(){
	var scrollvalue = $(this).scrollTop();

	// header add class
	if(scrollvalue>200){
		$('header').addClass('sticky');
	}else{
		$('header').removeClass('sticky');
	}

	if(scrollvalue>300){
		$('.back-top-btn').fadeIn();
	}else{
		$('.back-top-btn').fadeOut();
	}
});