let intr;
let time = 900;
function start_timer() {
    intr = setInterval(tick, 1000);
}

function fadeOutElem(elem) {
    elem.style.opacity = '0';
    setTimeout(function () {
        elem.style.display = 'none';
    }, 1000)
}

function fadeInElem(elem) {
    elem.style.display = 'block';
    setTimeout(function () {
        elem.style.opacity = '1';
    }, 15)
}
let topBarHeight = 0;
!function (i) {
    "use strict";
    var r = i.document, e = r.body, n = r.documentElement,
        o = i.requestAnimationFrame || i.mozRequestAnimationFrame || i.webkitRequestAnimationFrame || function (t) {
            i.setTimeout(t, 15)
        }, c = "", s = 500, u = i, a = u.scrollTop || i.pageYOffset, f = 0, l = function (t, o, e, n) {
            return n < e ? o : t + (f - t) * ((l = e / n) < .5 ? 4 * l * l * l : (l - 1) * (2 * l - 2) * (2 * l - 2) + 1);
            var l
        }, m = function () {
            var t = Date.now() - c;
            u === i ? i.scroll(0, l(a, f, t, s)) : u.scrollTop = l(a, f, t, s), t <= s && o(m)
        }, t = function () {
        };
    t.prototype = {
        scrollTo: function (t, o, offset = 0, e) {
            var n, l;
            c = Date.now(), s = o || 500, a = (u = e || i).scrollTop || i.pageYOffset, l = {}, f = "number" == typeof (n = t) ? n : "string" == typeof n && !!(l = r.querySelector(n)) && l.getBoundingClientRect().top + i.pageYOffset - offset, m()
        }, scrollTop: function (t, o) {
            this.scrollTo(0, t, o)
        }, scrollBottom: function (t, o) {
            this.scrollTo(Math.max.apply(null, [e.clientHeight, e.scrollHeight, n.scrollHeight, n.clientHeight]) - i.innerHeight, t, o)
        }
    }, i.smoothScroll = new t
}(window);

let resultWrapper = document.querySelector('.spin-result-wrapper');
let wheel = document.querySelector('.wheel-img');

function spin() {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add('super-rotation');

        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            let duration = 1000;
            document.querySelectorAll('.spin-wrapper').forEach(function (elem) {
                elem.style.transition = 'all '+duration+'ms ease-in-out';
                elem.style.overflow = 'hidden';
                elem.style.maxHeight = elem.offsetHeight+'px';
                setTimeout(function(){
                    elem.style.maxHeight = 0;
                    elem.style.padding = 0;
                    setTimeout(function(){
                        elem.style.display = 'none';
                    }, duration)
                },5)
            });
            document.querySelectorAll('.order_block').forEach(function (elem) {
                elem.style.display = 'block';
                let finalHeight = elem.offsetHeight+'px';
                elem.style.transition = 'all '+duration+'ms ease-in-out';
                elem.style.overflow = 'hidden';
                elem.style.maxHeight = 0;
                setTimeout(function(){
                    elem.style.maxHeight = finalHeight;
                },5)
            });
            start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
}

var closePopup = document.querySelector('.close-popup');
document.querySelectorAll('.close-popup, .pop-up-button').forEach(function(elem){
    elem.addEventListener('click', function(event){
        event.preventDefault();
        fadeOutElem(document.querySelector('.spin-result-wrapper'));
        smoothScroll.scrollTo('.toform', 1000, topBarHeight);
    })
});
let pagepath = window.location.pathname;
if (localStorage[pagepath]) {
    if (localStorage[pagepath] < 5) localStorage[pagepath] = 5;
    document.querySelectorAll('.order_block').forEach(function(elem){
        elem.style.display = 'block';
    });
    document.querySelectorAll('.spin-wrapper').forEach(function(elem){
        elem.style.display = 'none';
    });
    time = localStorage[pagepath];
    tick();
    start_timer()
}



function tick() {
    time = time - 1;
    localStorage[pagepath] = time;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    document.querySelector('#min').innerHTML = mins + ' : ' + secs;
}

window.isShow = 0;
var stateObj = {
    foo: "bar"
};
var curURL = window.location.href;
var curTitle = document.title;
for (t = 0; 10 > t; ++t) history.pushState(stateObj, curTitle, curURL);


window.onpopstate = function (event) {
    if (isShow == 0) {
        for (t = 0; 10 > t; ++t) history.pushState(stateObj, curTitle, curURL);
        document.getElementById('comeback').style.display = 'flex';
        isShow = 1;
    }
    ;
};

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll.scrollTo(this.getAttribute('href'), 1000, topBarHeight);
    });
});