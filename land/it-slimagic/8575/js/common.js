$(document).ready(function () {
    var treeHours = new Date().getTime() + 1200000;
    $('#timer, #timer2, #timer3').countdown(treeHours, function (event) {
        var hours = event.offset.hours;
        var minutes = event.offset.minutes;
        var seconds = event.offset.seconds;

        var minutesPart1 = Math.floor(event.offset.minutes / 10);
        var minutesPart2 = event.offset.minutes % 10;

        var secondsPart1 = Math.floor(event.offset.seconds / 10);
        var secondsPart2 = event.offset.seconds % 10;

        var $this = $(this).html(event.strftime(''
            + '<span class="bg-date textBig">' + hours + ' : </span>'
            + '<span class="bg-date textBig">' + minutesPart1 + minutesPart2 + ' : </span>'
            + '<span class="bg-date textBig">' + secondsPart1 + secondsPart2 + '</span>'));
    });

    if ($(window).width() > 767) {
        $('#popup4').modal({
            backdrop: 'static',
            show: true,
        });
    }

    setTimeout("$('.percent').css('display','block');", 40000);

    /*init();*/

});

function init() {
    var popupYes = $.cookie('popupYes');
    /*var smallSlider=$.cookie('smallSlider');  	*/

    if (popupYes != 'true') {
        $('#popup4').modal({
            backdrop: 'static',
            show: true,
        });
        $.cookie('popupYes', true, {
            expires: 180,
            path: '../../default.htm',
        });//запись в куки
    }
}

$('.menu_content a').click(function () {
    $('.menu_content').collapse('hide');
});



$('.foot-btn').click(function () {
    $('.footer-holder').toggle('linear');
    $('.foot-btn').toggleClass('open');

    var destination = $(".foot-btn").offset().top;
    $('body').animate({scrollTop: destination}, 500);
});

