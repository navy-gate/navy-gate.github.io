$(function() 
{
	$(document).on('click', '.header-home-offers,.header-button', function(event) 
	{
		$("html, body").animate({ scrollTop: $('.part3').offset().top }, 1000);
	});
	$(document).on('click', '.header-home-title', function(event) 
	{
		location.reload();
	});
   
	resize();
	$(window).on("resize", function(){                      
	        resize();
	});
  	
});

function resize(){    
	console.log("k")
    $("canvas").outerHeight($(window).height()-$("canvas").offset().top- Math.abs($("canvas").outerHeight(true) - $("canvas").outerHeight()));
  }