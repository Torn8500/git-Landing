(function($) {
    'use strict';
    //Отдельном выносим языки, для более простой локализации
    var Lang = {
        ru: {
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthsRp: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
            monthsPp: ['январе', 'феврале', 'марте', 'апреле', 'мае', 'июне', 'июле', 'августе', 'сентябре', 'октябре', 'ноябре', 'декабре'],
            maxPurchase: 'Больше всего заказов (_COUNT_)  было  _DATE_ _MONTH_  2015 ',
            stockInfoTitle: 'Более 100 000 продаж в',
            stockInfoTime: 'Сроки проведения акции с _STARTDATE_ _STARTMONTH_  по _ENDDATE_ _ENDMONTH_  '
        }
    };
    //Объявляем класс нашего лендинга
    var Landing = function() {
        this.nowDate = new Date();

        //Параметры загрузки лендинга
        this.params = {
            lang: 'ru', //локализация
            maxPurchase: 2419, //Максимальное кол-во покупок
            maxPurchaseDate: 2, //Количество дней назад
            startStockDate: 29, //Дней назад началась акция
            endStockDate: 1, //Дней через которые акция закончится
            lastPackTime: 15, //Секунд, через которое уменьшится количество оставшихся на складе упаковок
            countDownDiff: Math.ceil((24 * 60 * 60) - (this.nowDate.getHours() * 60 * 60 + this.nowDate.getMinutes() * 60 + this.nowDate.getSeconds())), //Количество секунд до конца таймера
            selectors: {
                countDown: '.landing__countdown', //Таймер
                maxPurcahesDate: '.landing__maxpurcashe', //Максимальное кол-во покупок
                stockInfo: '.landing__stockinfo',
                stockInfoTitle: '.landing__stockinfo_title',
                lastPack: '.landing__lastpack'
            }
        };
        //Стартуем таймер
        this.initCountDown();
        //Заполняем обман
        //Максимальное количество покупок
        this.initMaxPurcasheDate();
        //Даты проведения акции
        this.initStockInfo();
        //Уменьшаем количество lastpack
        this.initLastPack();
        this.initEvents();
    };
    //Список ивентов лендинга
    Landing.prototype.initEvents = function() {

        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        $('.bxslider').bxSlider();

        $('.button-click').on('click', function(event) {
            $('.popup-first').css('display', 'block');
            event.preventDefault();
        });

        $('.modal-first').on('click', function() {
            $('.popup-first').css('display', 'none');


        });




    };
    //Уменьшаем количество last-pack
    Landing.prototype.initLastPack = function() {
        var _this = this;
        var lastPackTimer = setTimeout(function() {
            $(_this.params.selectors.lastPack).each(function(index, elem) {
                var val = parseFloat($(elem).text(), 10);
                $(elem).html((val - 1));
            });
        }, this.params.lastPackTime * 1000);
    };
    //Информация о дате проведения лендингов
    Landing.prototype.initStockInfo = function() {
        var lang = Lang[this.params.lang];
        var stockTitle = lang.stockInfoTitle + lang.monthsPp[this.nowDate.getUTCMonth()];

        var endStockDate = new Date(this.nowDate.getTime() + (this.params.endStockDate * 24 * 60 * 60 * 1000));
        var startStockDate = new Date(this.nowDate.getTime() - (this.params.startStockDate * 24 * 60 * 60 * 1000));
        var stockInfo = lang.stockInfoTime;
        stockInfo = stockInfo.replace('_STARTDATE_', startStockDate.getUTCDate());
        stockInfo = stockInfo.replace('_ENDDATE_', endStockDate.getUTCDate());
        stockInfo = stockInfo.replace('_STARTMONTH_', lang.monthsRp[startStockDate.getMonth()]);
        stockInfo = stockInfo.replace('_ENDMONTH_', lang.monthsRp[endStockDate.getMonth()]);

        $(this.params.selectors.stockInfoTitle).html(stockTitle);
        $(this.params.selectors.stockInfo).html(stockInfo);
    };

    //Максимальное количество покупок
    Landing.prototype.initMaxPurcasheDate = function() {
        var maxPurchaseDate = new Date(this.nowDate.getTime() - (this.params.maxPurchaseDate * 24 * 60 * 60 * 1000));
        var htmlString = Lang[this.params.lang].maxPurchase;
        htmlString = htmlString.replace('_COUNT_', this.params.maxPurchase);
        htmlString = htmlString.replace('_DATE_', maxPurchaseDate.getUTCDate());
        htmlString = htmlString.replace('_MONTH_', Lang[this.params.lang].monthsRp[maxPurchaseDate.getUTCMonth()]);
        $(this.params.selectors.maxPurcahesDate).html(htmlString);
    };
    //Таймер countdown
    Landing.prototype.initCountDown = function() {
        var _this = this,
            endDate = new Date(this.nowDate.getTime() + this.params.countDownDiff * 1000);
        var countDownTimer = setInterval(function() {
            var diffDate = new Date(endDate.getTime() - Date.now()),
                h = (diffDate.getHours() > 9) ? diffDate.getHours() : '0' + diffDate.getHours(),
                m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0' + diffDate.getMinutes(),
                s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0' + diffDate.getSeconds();
            var htmlTime = '<span class="hours">' + h + '</span>' +
                '<span class="minutes">' + m + '</span>' +
                '<span class="seconds">' + s + '</span>';
            $(_this.params.selectors.countDown).html(htmlTime);
        }, 1000);
    };

    Landing.prototype.scrollToForm = function(event) {
        var $target = $(event.currentTarget);

        $("body,html").animate({
            scrollTop: $($target.attr("href")).offset().top
        }, 1e3);
        event.preventDefault();
    };


    Landing.prototype.initSliderBackground = function(class_name) {
        var _this = this;

        _this.slider = $(class_name);

        var _init = function(element) {

            var items = element.find(".js-bg"),
                itemsLen = items.length,
                itemCount = 0;

            items.eq(0).siblings(".js-bg").css({
                display: 'none'
            });

            function anim() {
                itemCount++;
                if (itemCount == itemsLen) {
                    itemCount = 0;
                }
                items.eq(itemCount).stop(true, true).fadeIn(300).siblings(".js-bg").fadeOut(0);
            }

            setInterval(anim, 5000);

        };

        _this.slider.each(function() {
            new _init($(this));
        });
    };

    Landing.prototype.showHelpers = function(event) {
        var $target = $(event.currentTarget);
        var $hint = $target.next('.landing_helper');
        $hint.is(':visible') ? $hint.hide() : $hint.fadeIn(250);
    };

    Landing.prototype.initLastPackNotice = function() {
        this.packNotify = new LastPackNotify({
            usersMax: 150, //Макс количество пользователей
            repeat: true, //Повторять вывод нотисов
            geo: lCountries.userCountryCode, //Текущее ГЕО
            city: 'Москва', //Город по умолчанию
            packCount: 57, //Кол-во на старте
            packCountSelector: '.lastpack', //Класс для обновления инфы о количестве
            male: 'm', // m - male , f - female
            buyCount: 2, //Количество штук на 1 покупку
            malePhrase: '{name} из г. {city} приобрел {count} шт. Осталось штук по акции: {newcount}', //Фраза для мужчин
            femalePhrase: '{name} из г. {city} купила {count} шт. Осталось штук по акции: {newcount}', //Фраза для женщин
            repeatIterations: 3, //Показов покупок между нотисом с пользователями
            startTime: 5 * 1000, //ms - перед стартом показа,
            delayTime: 10 * 1000, //ms - задержка между показами
            visibleTime: 5 * 1000 //ms - время показа
        });
    };



    $(function() {
        window.landing = new Landing();
    });

})(jQuery);
