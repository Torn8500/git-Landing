
//Some JS
window.onload = function() {

    // questions
    var questionsItems = document.querySelectorAll('.questions__item');
    for (var i = 0; i < questionsItems.length; i++) {
        questionsItems[i].addEventListener('click', function() {
            $(this).nextAll().removeClass('show');
            $(this).prevAll().removeClass('show');
            this.classList.toggle('show');
        });
    }
};

$('.reviews__plus').click(function() {
    $(this).prev().toggleClass('active');

    $(this).prev().hasClass('active') ? $(this).text('-') : $(this).text('+');
});
var reviewSlider = $('.reviews__slider');

/*
 * Initializes a slider with the given options.
 *
 * @param {Object} slider - The slider element to initialize.
 * @param {Object} options - The options for the slider.
 * @return {void}
 */
function initSlider(slider, options) {
    slider.on('init', function() {
        setTimeout(function() {
            slider.addClass('is-ready');
        }, 100);
    });
    slider.not('.slick-initialized').slick(options);
}

/*
 * Destroys a slider.
 *
 * @param {Object} slider - The slider to destroy.
 */
function destroySlider(slider) {
    if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
    }
}

/*
 * Shows the slider based on the window width. If the window width is less than 1024 pixels, 
 * the slider is initialized with the specified settings. If the window width is 1024 pixels 
 * or greater, the slider is destroyed.
 *
 * @return {void} 
 */
function showSlider() {
    var tablet = $(window).width() < 1024;
    if (tablet) {
        initSlider(reviewSlider, {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    } else {
        destroySlider(reviewSlider);
    }
};

showSlider();

$(window).on('resize', showSlider);

$('.reviews__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.reviews__text').removeClass('active');
    $('.reviews__plus').text('+');
});
