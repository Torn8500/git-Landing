$(document).ready(function() {
    var fullTime = new Date().getTime() + 13500000;
    $('.countdown-container').countdown(fullTime, function (event) {
        $(this).html(event.strftime(
            '<span class="time time_hours">%H</span>'
            +'<span class="dots">:</span>'
            +'<span class="time time_minutes">%M</span>'
            +'<span class="dots">:</span>'
            +'<span class="time time_seconds">%S</span>'));
    });
});