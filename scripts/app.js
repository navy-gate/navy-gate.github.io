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
   
	$( window ).resize(function() {
  		console.log("ok");
  		$("canvas").css('height', $("#webgl").height());
  		$("canvas").css('width', $("#webgl").width());
	});
  	
});

