$(document).ready(function () {
	$('.pre_toform').on('touchend, click', function (e) {
		e.preventDefault();
		$('body,html').animate({ scrollTop: $('#order_form0,.scrollform').offset().top }, 400);
	});
});

var nextSection = function () {
	$('.arrow').on('click', function () {
		var nextSlide = $(this).closest('section,header,footer').next().offset().top;
		$('html,body').animate({ scrollTop: nextSlide }, 800);
	});
};

var timer = function () {
	var _currentDate = new Date();
	var count = 15;
	var _toDate = new Date(
		_currentDate.getFullYear(),
		_currentDate.getMonth(),
		_currentDate.getDate(),
		_currentDate.getHours(),
		_currentDate.getMinutes() + count,
		1
	);
	$elem = $('.timer');

	$elem.each(function () {
		var $this = $(this),
			hours = $this.find('.timer__hours'),
			min = $this.find('.timer__min'),
			sec = $this.find('.timer__sec'),
			hoursNum = hours.find('.timer__num'),
			minNum = min.find('.timer__num'),
			secNum = sec.find('.timer__num');
		$this.countdown(_toDate, function (e) {
			hoursNum.text('' + e.strftime('%H'));

			minNum.text('' + e.strftime('%M'));

			secNum.text('' + e.strftime('%S'));
		});
	});
};

$.fn.isOnScreen = function (shift) {
	if (!shift) {
		shift = 0;
	}
	var viewport = {};
	viewport.top = $(window).scrollTop();
	viewport.bottom = viewport.top + $(window).height();
	var bounds = {};
	bounds.top = this.offset().top + shift;
	bounds.bottom = bounds.top + this.outerHeight() - shift;
	return bounds.top <= viewport.bottom && bounds.bottom >= viewport.top;
};

var _bxInnit = function (elem, opt) {
	var breakPoint = 992;
	var init = {
		sliderActive: false,
	};

	var flag = false;

	var slider;

	var sliderClone = $(elem).clone();

	var options = opt;

	function createSlider() {
		slider = $(elem).bxSlider(options);
		return true;
	}

	if (window.innerWidth < breakPoint) {
		createSlider();
		init.sliderActive = true;
	}

	$(window).resize(function () {
		if (window.innerWidth >= breakPoint) {
			if (init.sliderActive) {
				slider.destroySlider();
				init.sliderActive = false;
				slider.replaceWith(sliderClone.clone());
			}
		}

		if (window.innerWidth < breakPoint) {
			if (!init.sliderActive) {
				createSlider();
				init.sliderActive = true;
			}
		}
	});

	var a, b;
	a = 1;
	b = 0;

	$(window).on('scroll', function () {
		if (init.sliderActive == true) {
			if (slider.isOnScreen()) {
				b = 1;
			} else {
				b = 0;
			}

			if (a == b) {
				slider.startAuto();
			} else {
				slider.stopAuto();
			}
		}
	});
};

$(function () {
	//toForm();
	nextSection();
	timer();
	_bxInnit('.bxslider', {
		adaptiveHeight: false,
		swipeThreshold: 40,
		controls: false,
		auto: false,
		pause: 7000,
		autoHover: true,
		slideSelector: '.reviews__item',
		slideMargin: 5,
	});
});
