$(document).ready(function (e) {

	$('.for_scroll').click(function () {
		$("html, body").animate({
			scrollTop: $(".main_form").offset().top + 100
		}, 2000);
		return false;
	});

	$('.review_slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		accessibility: false,
		centerPadding: '30px',
		responsive: [
		  {
			breakpoint: 991,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
				dots: true,
				adaptiveHeight: true
			}
		  }
		]
		});

			$('.slider_3').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 4,
				accessibility: false,
				centerPadding: '30px',
				responsive: [
					{
					breakpoint: 991,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						// infinite: true,
						dots: true,
						adaptiveHeight: true
					}
					}
				]
				});

				$('.slider_2').slick({
					dots: false,
					infinite: false,
					speed: 300,
					slidesToShow: 6,
					slidesToScroll: 6,
					accessibility: false,
					centerPadding: '30px',
					// vertical: true,
					responsive: [
						{
						breakpoint: 991,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							// infinite: true,
							dots: true,
							adaptiveHeight: true
						}
						}
					]
					});
});

new WOW().init();
var rellax = new Rellax('.rellax');