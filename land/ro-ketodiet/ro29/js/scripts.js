jQuery(document).ready(function ($) {

	$("a[href^='#']").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

	$.fn.isInViewport = function() {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom - 200;
	};

	function animation() {
		$('.animation').each(function () {
			if ($(this).isInViewport()) {
				$(this).addClass('animation-on');
			} else {
				$(this).removeClass('animation-on');
			}
		});
	}

	animation();

	$(window).scroll(function() {
		animation();
	});

	$('.reviews-slider').slick({
		slidesToShow: 1,
		infinite: true,
		responsive: [
		{
			breakpoint: 9999,
			dots: false,
			nav: true,
		},
		{
			breakpoint: 768,
			settings: {
				dots: true,
				nav: false,
			}
		}]
	});
});

$(function(){
	var nowDate = new Date();    
	var countDownDiff = Math.ceil((24*60*60)-(nowDate.getHours() * 60 * 60 + nowDate.getMinutes() * 60 + nowDate.getSeconds()));
	var endDate = new Date(nowDate.getTime() + countDownDiff * 1000);
	setInterval( function () {
	var diffDate = new Date(endDate.getTime() - Date.now()),
	  h = (diffDate.getHours() > 9) ? diffDate.getHours() : '0'+diffDate.getHours(),
	  m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0'+diffDate.getMinutes(),
	  s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0'+diffDate.getSeconds();
	  $('.hoursSH').html(h);
	  $('.minutesSH').html(m);    
	  $('.secondsSH').html(s);   
	}, 1000);
});