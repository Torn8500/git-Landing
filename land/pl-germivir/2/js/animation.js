animationFirstBlock('.order-right', 'animation-moveLeft');
animationFirstBlock('.order-left', 'animation-fadeIn');
animationSimple('h2', 'animation-moveLeft');
animationSimple('.pest-item', 'animation-fadeIn');
animationSimple('.every2Block-item', 'animation-moveRight');
animationSimple('.consist .product-img', 'animation-fadeIn');
animationSimple('.scale_yellow', 'animation-width_1');
animationSimple('.scale_pink', 'animation-width_2');
animationSimple('.scale_red', 'animation-width_3');
animationSimple('.scale_lightPink', 'animation-width_4');
animationSimple('.spec-text', 'animation-fadeIn');
animationSimple('.order-right1', 'animation-moveLeft');
animationSimple('.order-left1', 'animation-fadeIn');

function hide(arr) {
    let element = document.querySelectorAll(arr);
    for (let i = 0; i < element.length; i++) {
        element[i].style.opacity = '0';
    }
}

function position(el) { /*определяем кооординаты элемента*/
    let elementBorder = window.pageYOffset + el.getBoundingClientRect().top,
        windowHeight = document.documentElement.clientHeight,
        visibleBottom = window.pageYOffset + windowHeight - 50,
        pos = {
            element: el,
            elementBorder: elementBorder,
            windowHeight: windowHeight,
            visibleBottom: visibleBottom
        };
    return pos;
}

function animationSimple(dom, animation) {/*arr = DOM элемент*/
    let arr = document.querySelectorAll(dom);
    hide(dom);
    window.addEventListener('scroll', function () {
        for (let item of arr) {
            let pos = position(item);
            if (pos.visibleBottom > pos.elementBorder) {
                pos.element.classList.add(animation);
                pos.element.style.opacity = '1';
            }
        }
    }, false);
}

function animationFirstBlock(val, animation) {
    hide(val);
    let element = document.querySelectorAll(val);
    for (let el of element) {
        el.classList.add(animation);
        el.style.opacity = '1';
    }
}

$(document).ready(function(){
    $("a").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
    });
});

$('.slider').slick({infinite: false,dots: false,arrows: false,adaptiveHeight: true,slidesToShow: 4,slidesToScroll: 4,responsive: [{breakpoint: 1300,settings:{slidesToShow: 3,dots: true,slidesToScroll: 1,adaptiveHeight: true,}},{breakpoint: 992,settings:{slidesToShow:
2,dots: true,slidesToScroll: 1,adaptiveHeight: true,}},{breakpoint: 577,settings:{slidesToShow: 1,dots: true,slidesToScroll: 1,adaptiveHeight: true,}}]});