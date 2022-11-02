$('.pre_toform').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#order_form').offset().top
    }, 2500);
});

/********************** circle svg**********************/
var mySvg = document.querySelector('#my-svg');
var snap = Snap(mySvg);
var w = mySvg.width.baseVal.value,
    h = mySvg.height.baseVal.value,
    cx = w / 2,
    cy = h / 2;

var radius = 100;
var perimeter = 2 * Math.PI * radius;
var percent = 1;
var color = '#04fbc4';

var circle = snap.circle(cx, cy, radius);
var text = document.querySelector('.percent-text');
text.style.color = color;


var flag = false;

function updateGraph(perc) {

    // Reset attributes
    circle.attr({
        fill: 'none',
        stroke: color,
        strokeWidth: '0.2cm',
        strokeDasharray: '0 ' + perimeter,
        strokeDashoffset: perimeter * .25
    });

    // Animate
    Snap.animate(0, perc, (val) => {
        circle.attr({
            strokeDasharray: perimeter * val + ' ' + perimeter * (1 - val)
        });

        text.innerHTML = Math.round(val * 100) + '%';
    }, 1500, mina.easeinout)
    flag = true;
}
/**проверка на видимость блока order, прячем и показываем кнопку скролла наверх*/

var scrollShow = function () {

    var element = $('#my-svg');

    var scroll = $(document).scrollTop();
    var winHeight = $(window).height();

    element.each(function () {

        var self = $(this);
        var elementPos = self.offset().top;

        if (scroll >= (elementPos - (winHeight / 1.2))) {
            updateGraph(percent);

            console.log(flag)
        }

    });

};


/************ SLIDER ***************/
function reviewSlider() {
    var slider = $('.sec14__list');
    settings = {
        dots: true,
        arrows: false
    };
    if ($(window).width() <= 991) {
        slider.slick(settings);
    }
    $(window).on('resize', function () {
        if ($(window).width() >= 991) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
        } else if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });
}


$(function () {
    reviewSlider();

    if ($(window).width() > 991) {
        wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0
        })
        wow.init();
    };

});
$(document).on('scroll', function () {

    if (!flag) {
        scrollShow();
    }
});