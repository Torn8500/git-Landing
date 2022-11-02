$(document).ready(function () {
    function t(t, n) {
        var o = t - .5 + Math.random() * (n - t + 1);
        return o = Math.round(o)
    }

    function n(n, o) {
        var e = t(n, o), a = e - t(5, 9);
        $(".op_on").text(e), $(".op_raz").text(a)
    }

    // countdownStart
    var storageCountdownReset = "countdownResetFitv3",
        storageCountdownTime = "countdownTimeFitv3",
        countdownResetTimeVal = 41,
        nowDateTime = new Date().getTime(),
        countdownReset = localStorage.getItem(storageCountdownReset);
    if (countdownReset == null) {
      localStorage.setItem(storageCountdownReset, nowDateTime)
    } else {
      if(nowDateTime - countdownReset > countdownResetTimeVal*60*1000) {
        var countdownTime = (new Date).getTime() + 24e5;
        localStorage.setItem(storageCountdownTime, countdownTime);
        localStorage.setItem(storageCountdownReset, nowDateTime);
      }
    }

    if (localStorage.getItem(storageCountdownTime)) {
      var countdownTime = localStorage.getItem(storageCountdownTime);
    } else {
      countdownTime = (new Date).getTime() + 24e5;
    }
    $(".countdown__wrap").countdown(countdownTime, function (t) {
        $(this).html(t.strftime('<span class="hour">%H</span><span class="minute">%M</span><span class="second">%S</span>'))

    }).on('update.countdown', function (e) {
      countdownTime = e.finalDate.getTime();
      localStorage.setItem(storageCountdownTime, countdownTime);
    }).on('finish.countdown', function (e) {
      $('.countdown__wrap').countdown('stop');
    });
    // countdownEnd
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
