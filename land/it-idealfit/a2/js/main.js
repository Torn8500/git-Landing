$(function () {

    var $link = $('.link'),
        $compositionItem = $('.composition__item'),
        $reviewsText = $('.reviews--2 .reviews__text'),
        $compositionSlider = $('.composition__list'),
        $reviewsSlider = $('.reviews__list'),
        compositionSettings = {
            dots: true,
            arrows: false,
            variableWidth: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: "unslick"
                }
            ]
        },
        reviewsSettings = {
            dots: true,
            arrows: false,
            mobileFirst: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: "unslick"
                }
            ]
        };


    if ($(window).width() > 991) {
        wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0
        });
        wow.init();
        // var rellax = new Rellax('.rellax');
    }

    $compositionSlider.slick(compositionSettings);
    $reviewsSlider.slick(reviewsSettings);
    $compositionItem.matchHeight();

    $link.on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            target = $(id).offset().top;
        $('body, html').animate({scrollTop: target}, 1200);
    });


    if ($(window).width() > 767) {
        $('.instruction__item--4').after($('.instruction__item--3'));
    }

    if ($(window).width() > 991) {
        $reviewsText.matchHeight();
    }


    $(window).on('resize', function () {

        if ($(window).width() < 768 && !$compositionSlider.hasClass('slick-initialized')) {
            $compositionSlider.slick(compositionSettings);
        }

        if ($(window).width() < 992 && !$reviewsSlider.hasClass('slick-initialized')) {
            $reviewsSlider.slick(reviewsSettings);
            $reviewsText.matchHeight({
                remove: true
            });
        }

        if ($(window).width() > 767) {
            $('.instruction__item--4').after($('.instruction__item--3'));
        } else {
            $('.instruction__item--3').after($('.instruction__item--4'));
        }

        if ($(window).width() > 991) {
            $reviewsText.matchHeight();
        }
    });

});