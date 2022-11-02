function startTimer(duration) {
var timer = duration, minutes, seconds;
setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    document.querySelector('#hours_bottom').textContent ="00";
    document.querySelector('#minutes_bottom').textContent =minutes;
    document.querySelector('#seconds_bottom').textContent =seconds;

//    document.querySelector('#hours_bottom1').textContent ="00";
//    document.querySelector('#minutes_bottom1').textContent =minutes;
//    document.querySelector('#seconds_bottom1').textContent =seconds;

    // document.querySelector('#hours_bottom2').textContent ="00";
    // document.querySelector('#minutes_bottom2').textContent =minutes;
    // document.querySelector('#seconds_bottom2').textContent =seconds;
    if (--timer < 0) {
        timer = duration;
    }
}, 1000);
}


var mins = 60 * 12;
startTimer(mins);