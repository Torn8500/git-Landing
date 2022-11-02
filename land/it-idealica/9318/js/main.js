$(document).ready(function () {
    $('.toform').click(function () {
        $("html, body").animate({scrollTop: $("#form-scroll").offset().top}, 1000);
        return false;
    });

    $('.rev-slider').lightSlider({
        item: 3,
        loop: false,
        slideMargin: 40,
        pager: false,
        controls: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 0,
                    autoWidth: false,
                    controls: true,
                    adaptiveHeight: true,
                    loop: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    item: 1,
                    slideMove: 1,
                    controls: true,
                    adaptiveHeight: true,
                    loop: true
                }
            }
        ]
    });
});
