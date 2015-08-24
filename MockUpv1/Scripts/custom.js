$('#myTabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	  
	    /* Animated JS */
		new WOW().init();
	
		/* Collapse*/
	$(document).ready(function() {
	$(".panel-heading").click(function() {
		$('.panel-group').find('.panel-heading').removeClass('active');
		$(this).addClass('active');
		});
	});
	$('.panel-heading a').on('click',function(e){
		if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
		e.stopPropagation();
		}
	});
	
       /* Scroll */
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 500) { 
		$('#return-to-top').fadeIn(600); 
		} else {
		$('#return-to-top').fadeOut(600); 
		}
	});
	$('#return-to-top').click(function() { 
		$('body,html').animate({
			scrollTop : 0 
		}, 500);
	});
	$(document).ready(function() {
		$('#return-to-top').css("display", "none");
	});
	$(document).ready(function() {
		$('#return-to-top').css("display", "none");
	});
	$(document).ready(function() {
		$('#return-to-top').css("display", "none");
	});
	
	/* Preloader */
	$(window).load(function(){
		$("#preloader").delay(500).fadeOut(1000);
	});	
	
    /* Tooltip */
	$('[data-toggle="tooltip"]').tooltip({'placement': 'top'});
		/* Header */
	$('.header-relative').on('click',function(e){
	    $('.navbar').removeClass('navbar-fixed-top');
	});
	$('.header-fix').on('click',function(e){
	    $('.navbar').addClass('navbar-fixed-top');
	});	
	
	
	$(document).ready(function(){
	//$window = $(window);
	$('div[data-type="background"]').each(function(){
	var $bgobj = $(this);
	$(window).scroll(function(){
	var yPos = -($window.scrollTop()/$bgobj.data('speed'));
	var coords = '50% ' + yPos + 'px';
	//$bgobj.css({backgroundPosition: coords});
	});
	});
	});