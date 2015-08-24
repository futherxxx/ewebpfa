(function($){
	"use strict";
	$(document).ready(function () {
		color.init();
	});
	var color = {
		init: function () {
			$("#color-styles h2 a").click(function(e){
				e.preventDefault();
				var div = $("#color-styles");
				console.log(div.css("left"));
				if (div.css("left") === "-140px") {
					$("#color-styles").animate({
						left: "0px"
					}); 
				} else {
					$("#color-styles").animate({
						left: "-140px"
					});
				}
			})
			$(".colors li a").click(function(e){
				e.preventDefault();
				var color = $(this).attr('class');
				color = color.replace('active', '').trim();
				$("#theme-color" ).attr("href", "css/corpon-" + color + ".css" );
				$(this).parent().parent().find("a").removeClass("active");
				$(this).addClass("active");
			})
		}
	}
})(jQuery);
(function($){
	"use strict";
	$(document).ready(function () {
		color.init();
	});
	var color = {
		init: function () {
			$("#color-styles h2 a").click(function(e){
				e.preventDefault();
				var div = $("#color-styles");
				console.log(div.css("left"));
				if (div.css("left") === "-140px") {
					$("#color-styles").animate({
						left: "0px"
					}); 
				} else {
					$("#color-styles").animate({
						left: "-140px"
					});
				}
			})
			$(".layout li a").click(function(e){
				e.preventDefault();
				var color = $(this).attr('class');
				color = color.replace('active', '').trim();
				$("#theme-layout" ).attr("href", "css/corpon-" + color + ".css" );
				$(this).parent().parent().find("a").removeClass("active");
				$(this).addClass("active");
			})
		}
	}
})
(jQuery);