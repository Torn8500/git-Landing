document.addEventListener("DOMContentLoaded", function(event) {
    //timer

    var fullTime = new Date().getTime() + 13500000; //1.5 дня
    $('.timer-container').countdown(fullTime, function(event) {
        $(this).html(event.strftime(
            '<div><span>%H</span></div>' +
            ':' +
            '<div><span>%M</span></div>' +
            ':' +
            '<div><span>%S</span></div>'
        ));
    });

});