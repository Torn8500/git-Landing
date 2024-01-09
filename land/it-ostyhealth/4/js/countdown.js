'use strict';
//Countdown script for imitation limited proposition
var countdown = document.getElementsByClassName('js-countdown');

if (countdown.length !== 0) {
    var countLength = countdown.length;
    var number = 83; //current quantity of product
    var order = 2; //default length of product number string. For 06 products order=2; for 206 products order=3
    var numberStr = String(number);
    var minProdCount = 1; //Minimum products count
    var maxProdCount = 5; //Maximum products count
    var minTimer = 10000, //Minimum time
        maxTimer = 50000; //Maximum time
    if (!isNaN(parseInt(countdown[0].innerText)) && parseInt(countdown[0].innerText) > 5) {
        number = countdown[0].innerText.trim();
    }
    if (isStorage()) {
        var lastNumber = parseInt(localStorage.getItem("lastNumber"));
        if (!isNaN(lastNumber)) {
            number = lastNumber;
        }
    }
    updateCounters();
    var timer = setInterval(doCountdown, getRandomInt(minTimer, maxTimer));
} else {
    console.warn("You have to add \"js-countdown\" class for any DOM element");
}

//pretify number of products. Add zeros before number.
function prettyNumber(num, order) {
    var numStr = num.toString();
    while (numStr.length < order) {
        numStr = '0' + numStr;
    }
    return numStr;
}

//function for updating counters
function updateCounters() {
    while (countLength) {
        var countDigits = countdown[countLength - 1].querySelectorAll('.js-count-digit');
        var countDigitsLength = countDigits.length;
        if (countDigitsLength === 0) {
            numberStr = prettyNumber(number, 2);
            countdown[countLength - 1].innerText = numberStr;
        } else {
            numberStr = prettyNumber(number, countDigitsLength);
            for (var i = 0; i < countDigitsLength; i++) {
                countDigits[i].innerText = numberStr[i];
            }
        }
        countLength--;
    }
    if (isStorage()) { localStorage.setItem("lastNumber", numberStr); }
}

//do coundown iteration
function doCountdown() {
    countLength = countdown.length;
    if (number > 5) {
        number -= getRandomInt(minProdCount, maxProdCount);
    } else {
        clearInterval(timer);
        return 5;
    }
    updateCounters();
}
//get random int from custom interval
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Check local storage support
function isStorage() {
    if (window.localStorage !== undefined) {
        return true;
    } else {
        return false;
    }
}