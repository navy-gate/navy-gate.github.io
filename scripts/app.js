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
  	$("#webgl").bind("wheel mousewheel", function(e) {e.preventDefault()});

  	$(document).on('click', '.go-top', function(event) 
  	{
  		
  		$("html, body").animate({ scrollTop: $('header').offset().top }, 1000);

  	});
  	$(window).scroll(function()
  	{

  		if ($(this).scrollTop() > 1100)
  		{
  			if($(".go-top").hasClass('invisible'))
  			{
  				$(".go-top").removeClass('invisible');
  			}
  		}
  		else
  		{
  			if(!$(".go-top").hasClass('invisible'))
  			{
  				$(".go-top").addClass('invisible');
  			}
  		}
  	});
});

