
$(document).ready(function() {

    $('.js-commits__box').owlCarousel({
        loop: true,
        margin: 0,
        autoHeight: true,
        responsive : {
            320 : {
                items: 1
            },

            768 : {
                items: 2
            },

            960 : {
                items: 3
            }
        }
    });

    Start();
    function Start() {
        var m = 22,
            s = 0;

        if (m <= 9) {
            m = "0" + m;
        };

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;

                if (s <= 9) {
                    s = "0" + s;
                }
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;

                    if (m <= 9) {
                        m = "0" + m;
                    }
                } else {
                    return
                }
            }

            $('.form__time-count:nth-of-type(2) span:first-child').text(m);
            $('.form__time-count:last-child span:first-child').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000);
    }

    AOS.init({
      once: false,
      mirror: true
    });
});
