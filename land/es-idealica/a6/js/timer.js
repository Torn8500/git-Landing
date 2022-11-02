$(document).ready(function () {
//код jQuery
    //Вызываем функцию на исполнение
    get_timer('.timer');



//функция вызова таймера
    function get_timer( elem) {

        var date_new = new Date();

        date_new.setDate(date_new.getDate()+ 1);
        date_new.setHours(0);
        date_new.setMinutes(0);
        date_new.setSeconds(0);
        ////////////////////////////////////
        ////////////////////////////////////
        date_new.setSeconds(date_new.getSeconds()-1);
        //Объект даты для обратного отсчета
        //var date_t = new Date(date_new);
        //Объект текущей даты
        var date = new Date();

        //Вычесляем сколько миллисекунд пройдет
        //от текущей даты до даты отсчета времени
        var timer = date_new - date;

        //Проверяем не нужно ли закончить отсчет
        //если дата отсчета еще не истекла, то количество
        //миллисекунд в переменной date_t будет больше чем в переменной date
        if(date_new > date) {

            //Вычисляем сколько осталось часов до даты отсчета.
            //Для этого переменную timer делим на количество
            //миллисекунд в одном часе и отбрасываем дни
            hour = parseInt(timer/(60*60*1000))%24;

            //если полученное число меньше 10 прибавляем 0
            if(hour < 10) {
                hour = '0' + hour;
            }
            //Приводим результат к строке
            hour = hour.toString();

            //Вычисляем сколько осталось минут до даты отсчета.
            //Для этого переменную timer делим на количество
            //миллисекунд в одной минуте и отбрасываем часы
            min = parseInt(timer/(1000*60))%60;
            //если полученное число меньше 10 прибавляем 0
            if(min < 10) {
                min = '0' + min;
            }
            //Приводим результат к строке
            min = min.toString();

            //Вычисляем сколько осталось секунд до даты отсчета.
            //Для этого переменную timer делим на количество
            //миллисекунд в одной минуте и отбрасываем минуты
            sec = parseInt(timer/1000)%60;
            //если полученное число меньше 10 прибавляем 0
            if(sec < 10) {
                sec = '0' + sec;
            }
            //Приводим результат к строке
            sec = sec.toString();

            //Выводим часы
            //Проверяем какие предыдущие цифры времени должны вывестись на экран
            //Для десятков часов
            if(hour[1] == 3 &&
                min[0] == 5 &&
                min[1] == 9 &&
                sec[0] == 5 &&
                sec[1] == 9) {
                animation($(elem).find(".hour0"),hour[0]);
            }
            else {
                $(elem).find(".hour0").html(hour[0]);
            }
            //Для единиц чассов
            if(min[0] == 5 &&
                min[1] == 9 &&
                sec[0] == 5 &&
                sec[1] == 9) {
                animation($(elem).find(".hour1"),hour[1]);
            }
            else {
                $(elem).find(".hour1").html(hour[1]);
            }

            //Выводим минуты
            //Проверяем какие предыдущие цифры времени должны вывестись на экран
            //Для десятков минут
            if(min[1] == 9 &&
                sec[0] == 5 &&
                sec[1] == 9) {
                animation($(elem).find(".min0"),min[0]);
            }
            else {
                $(elem).find(".min0").html(min[0]);
            }
            //Для единиц минут
            if(sec[0] == 5 && sec[1] == 9) {
                animation($(elem).find(".min1"),min[1]);
            }
            else {
                $(elem).find(".min1").html(min[1]);
            }

            //Выводим секунды
            //Проверяем какие предыдущие цифры времени должны вывестись на экран
            //Для десятков секунд
            if(sec[1] == 9) {
                animation($(elem).find(".sec0"),sec[0]);
            }
            else {
                $(elem).find(".sec0").html(sec[0]);
            }
            $(elem).find(".sec1").html(sec[1]);
            animation($(elem).find(".sec1"),sec[1]);
            //Переодически вызываем созданную функцию,
            //интервал вызова одна секунда(1000 милли секунд)
            setTimeout(get_timer,1000,elem);
        }
        else {
            //$("#clock").html("<span id='stop'>Отсчет закончен!!!</span>");
            console.log('end');
        }

    }
    //Функция для красивого отображения времени.
    function animation(vibor,param) {
        vibor.html(param)
            // .css({'marginTop':'-20px','opacity':'0'})
            // .animate({'marginTop':'0px','opacity':'1'});
    }

});
