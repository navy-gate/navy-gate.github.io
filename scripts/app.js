$(function() 
{
	$(document).on('click', '.header-home-offers,.header-button', function(event) 
	{
		$("html, body").animate({ scrollTop: $('.part3').offset().top }, 1000);
	});
	$(document).on('click', '.header-home-title', function(event) 
	{
		$("html, body").animate({ scrollTop: $('.part1').offset().top }, 1000);
	});
   
	$( window ).resize(function() {
  		$("canvas").css('height', $("#webgl").height());
  		$("canvas").css('width', $("#webgl").width());
	});
  	
});

