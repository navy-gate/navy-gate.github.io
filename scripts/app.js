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
  	var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
	n = 0;
	$(document).keydown(function (e) {
	    if (e.keyCode === k[n++]) {
	        if (n === k.length) {
		        showLightbox();
	            n = 0;
	            return false;
	        }
	    }
	    else {
	        n = 0;
	    }
	});

	$('body').keyup(function(event) {
		if(event.which == 27) {
			if ($('#easter-egg').length){
				hideLightbox();
		    }
		}
	});
	$('body').on("click",'#close', function () {
		hideLightbox();
	});
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

  	$(".right-slide-button").click(function(event) 
  	{
  		var idslide = $( ".slide-image-item[class='slide-image-item active-slide']").attr('id-slide');
  		idslide++;
  		if(idslide>3)
  		{
  			idslide=1;
  		}
  		
  		$(".slide-image-item").removeClass('active-slide');
  		setTimeout(function()
  		{ 
  			$( '.slide-image-item[id-slide="'+idslide+'"]' ).addClass('active-slide')

  		}, 400);
  		
  		
  	});
  	$(".left-slide-button").click(function(event) 
  	{
  		var idslide = $( ".slide-image-item[class='slide-image-item active-slide']").attr('id-slide');
  		idslide--;
  		if(idslide==0)
  		{
  			idslide=3;
  		}
  		
  		$(".slide-image-item").removeClass('active-slide');
  		setTimeout(function()
  		{ 
  			$( '.slide-image-item[id-slide="'+idslide+'"]' ).addClass('active-slide')

  		}, 400);  		
  	});
});


function showLightbox() {
	var easter_egg = $('<div />', {
		id:"easter-egg"
	});

	$('<video />', {
		id:"issu_easter-egg",
		controls: "controls",
		src: "easter-egg/rba.mp4"
	}).appendTo(easter_egg);

	$('<div>',{
		id:"close",
		text:"X"
	}).appendTo(easter_egg);

	$('body').append(easter_egg)
}

function hideLightbox() {
	$('#easter-egg').css("overflow","visible");
	$('div').remove('#easter-egg');
}