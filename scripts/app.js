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
   
	$("canvas").removeAttr('width');
	$("canvas").removeAttr('height');
  	
});

