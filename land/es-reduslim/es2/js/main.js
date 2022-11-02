$(document).ready(function () {
    function t(t, n) {
        var o = t - .5 + Math.random() * (n - t + 1);
        return o = Math.round(o)
    }

    function n(n, o) {
        var e = t(n, o), a = e - t(5, 9);
        $(".op_on").text(e), $(".op_raz").text(a)
    }

    $(".section5__button").on("click", function (t) {
        t.preventDefault();
        var n = $(this).attr("data-id"), o = $(n).offset().top - 100;
        $("body, html").animate({scrollTop: o}, 1500)
    }), $(".section1__leftblock_header-button").on("click", function (t) {
        t.preventDefault();
        var n = $(this).attr("data-id"), o = $(n).offset().top - 100;
        $("body,html").animate({scrollTop: o}, 1500)
    }), n(35, 45), setInterval(n, 15e3, 35, 45), $(".section9__slider").slick({
        infinite: !0,
        slidesToShow: 3,
        responsive: [{breakpoint: 991, settings: {slidesToShow: 1, dots: true}}]
    })
});
