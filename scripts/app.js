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
   
	$("canvas").attr('width', '');
	$("canvas").attr('height', '');
  	
});

