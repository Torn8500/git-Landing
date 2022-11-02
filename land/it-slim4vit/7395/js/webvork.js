(function () {
    document.addEventListener("DOMContentLoaded", function () {
        'use strict';

        var url = window.location.href;
        var htmlData = document.getElementsByTagName('html')[0]; //html элемент в который трекер пишет данные
        var createdUrl = '';
        var wvYmCounter;
        var wvGaCounter;
        var tracker;
        var offerId = htmlData.getAttribute('data-offer_id');
        var pageType = htmlData.getAttribute('data-page_type');
        var params;

        var pageData = {
            ym: isExist('ym'),
            ga: isExist('ga'),
            fb: isExist('fb'),
            utm_source: isExist('utm_source'),
            utm_medium: isExist('utm_medium'),
            utm_campaign: isExist('utm_campaign'),
            utm_content: isExist('utm_content'),
            utm_term: isExist('utm_term'),
            cbwv: isExist('cbwv'),
            fb_sot: isExist('fb_sot'), //флаг для установки пикселя на прелендинг
            fb_sol: isExist('fb_sol'), //флаг для установки пикселя на лендинг
            fb_sos: isExist('fb_sos'), //флаг для установки пикселя на success
        };

        //ставим счетчики вебмастера
        setWebMetric(pageData.ym, pageData.ga, pageData.fb, pageType);
        setCookie('c_referer', getReferrer(), 30);

        //если это не лендинг
        if (pageType !== 'landing') {
            var prelandId = htmlData.getAttribute('data-prelanding_id');
            params = 'url=' + encodeURIComponent(url) +
                setParam('&utm_source=', pageData.utm_source) +
                setParam('&utm_medium=', pageData.utm_medium) +
                setParam('&utm_campaign=', pageData.utm_campaign) +
                setParam('&utm_content=', pageData.utm_content) +
                setParam('&utm_term=', pageData.utm_term) +
                setParam('&referer=', encodeURIComponent(getReferrer())) +
                setParam('&prelanding_id=', prelandId) +
                setParam('&offer_id=', offerId) +
                setParam('&page_type=', pageType);

            //вызываем трекер и передаем в него известные параметры
            tracker = jsonp('//webvkrd.com/js.php?' + params);

            //после получения лендинга из трекера, меняем ссылки на транзитке
            tracker.addEventListener('load', function () {
                var trackerData = {
                    land: isReal(htmlData.getAttribute('data-landing_url')),
                    guid: isReal(getGuid('guid')),
                    fguid: isReal(getGuid('first_guid')),
                };

                createdUrl = trackerData.land + '?';
                for (var key in pageData) {
                    if (isReal(pageData[key])) {
                        createdUrl += key + '=' + pageData[key] + '&';
                    }
                }

                createdUrl += setParam('referer=', encodeURIComponent(getReferrer())) + setParam('&prelanding_id=', prelandId);
                if (document.body.getAttribute('data-links') === 'change-only-wv') {
                    changeFullLinksByClassName(['.wv_link']);
                } else {
                    changeLinks();
                }
                setGuidsToCookie();
            });

            //если это страница успешного заказа, ставим счетчики лендинга
            if (pageType === 'success') {
                tracker.addEventListener('load', function () {
                    setGuidsToInput();
                    //если на клиенте выключены куки, передаем guid лида постом
                    if (navigator.cookieEnabled === false) {
                        setFormsInput('lead_guid', isReal(getParam('lead_guid')));
                    }
                });
                //landing webvork counters
                wvYmCounter = '50853787';
                wvGaCounter = 'UA-125569289-44';
                addMetric('GA', wvGaCounter);
                addMetric('YM', wvYmCounter);
            } else {//иначе ставим счетчики транзитки
                //prelanding webvork counters
                wvYmCounter = '50853787';
                wvGaCounter = 'UA-125569289-44';
                addMetric('GA', wvGaCounter);
                addMetric('YM', wvYmCounter);
            }

            metricsHandler(function () {
                params =
                    setParam('c_ym_uid=', getCookie('_ym_uid')) +
                    setParam('&c_ga=', getCookie('_ga')) +
                    setParam('&guid=', getGuid('guid')) +
                    setParam('&first_guid=', getGuid('first_guid'));
                jsonp('//webvkrd.com/js.php?' + params);
                setGuidsToCookie();
                setGuidsToInput();
            });

            //если есть поток, то ставим куки
            if (getParam('utm_source') !== null) {
                setParamsToCookie();
            }

            //если это ленд
        } else {
            var landId = htmlData.getAttribute('data-landing_id');
            //landing webvork counters
            wvYmCounter = '50853787';
            addMetric('YM', wvYmCounter);
            if (document.location.hostname.indexOf('webvork')) {
                wvGaCounter = 'UA-125569289-44';
                addMetric('GA', wvGaCounter);
            }

            params = 'url=' + encodeURIComponent(url) +
                setParam('&utm_source=', pageData.utm_source) +
                setParam('&utm_medium=', pageData.utm_medium) +
                setParam('&utm_campaign=', pageData.utm_campaign) +
                setParam('&utm_content=', pageData.utm_content) +
                setParam('&utm_term=', pageData.utm_term) +
                setParam('&referer=', encodeURIComponent(getReferrer())) +
                setParam('&landing_id=', landId) +
                setParam('&offer_id=', offerId) +
                setParam('&page_type=', pageType);
            //запрашиваем трекер с передачей параметров
            tracker = jsonp('//webvkrd.com/js.php?' + params);

            metricsHandler(function() {
                params =
                    setParam('c_ym_uid=', getCookie('_ym_uid')) +
                    setParam('&c_ga=', getCookie('_ga')) +
                    setParam('&guid=', getGuid('guid')) +
                    setParam('&first_guid=', getGuid('first_guid'));
                jsonp('//webvkrd.com/js.php?' + params);
                setGuidsToCookie();
                setGuidsToInput();
            });

            setParamsToInput();
            setParamsToCookie();
            if (getParam('utm_source')) {
                setCookie('c_uri', document.location);
                setCookie('c_referer', getReferrer());
            }
            setPlaceholders();

            //добавляем параметры у многратраничных сайтов
            changeLinksByClassName(['.wv_formpay', '.wv_params']);
        }

        //подключение модулей через параметры

        var wvModules = {
            mod: [
                {
                    param: 'testwv',
                    path: '../https@webvork.com/js/modules/testlanding/wvtests.js',
                },
                {
                    param: 'cbwv',
                    path: '../https@webvork.com/js/modules/comebacker/comeback.js',
                },
                {
                    param: 'fpwv',
                    path: '../https@webvork.com/js/modules/fakepay/fakepay.js',
                },
                {
                    path: '../https@webvork.com/js/modules/phonemask/wvmask.js',
                },
                // {
                //     path: '../https@webvork.com/js/modules/validation/wvvalid.js',
                // },
            ],

            //запуск модулей
            init: function () {
                this.mod.forEach(function (mod) {
                    //включаем модуль если есть кука или параметр
                    if (mod.param) {
                        if (isExist(mod.param)) {
                            wvModules.appendModule(mod.path);
                        }
                        //включаем модуль везде, если не указан способ включения
                    } else {
                        wvModules.appendModule(mod.path);
                    }
                })
            },

            //добавление модуля в дом
            appendModule: function (modulePath) {
                var module = document.createElement('script');
                module.type = 'text/javascript';
                module.src = modulePath;
                document.body.appendChild(module);
            },
        };
        wvModules.init();


        function metricsHandler(cb) {
            var unloadedMetricsCount = 3;
            //вызываем трекер второй раз когда загрузятся метрики и отправляем куки YM и GA, и полученные гуиды
            tracker.addEventListener('load', function () {
                tryCB();
            });

            //ждем загрузки счетчика YM https://bit.ly/2T1m8Kt
            document.addEventListener('yacounter' + wvYmCounter + 'inited', function () {
                tryCB();
            });

            //ждем загрузки счетчика GA, https://bit.ly/2BDZYqD
            ga(function () {
                tryCB();
            });

            function tryCB() {
                unloadedMetricsCount--;
                if (unloadedMetricsCount === 0) {
                    cb();
                }
            }
        }

        function getReferrer() {
            switch (pageType) {
                case 'prelanding':
                    return document.referrer;

                case 'landing':
                    var utmSource = getParam('utm_source');
                    var paramReferer = getParam('referer');
                    var cookieReferer = getCookie('c_referer');
                    var currentReferer = document.referrer;

                    if (paramReferer) {
                        return paramReferer;
                    }

                    //на рефералке нужно брать всегда новый рефрер если есть поток
                    if (offerId === '13' && utmSource) {
                        return currentReferer;
                    }

                    if (offerId === '13' && !utmSource) {
                        return cookieReferer;
                    }
                    //-------------------------------------------------------------

                    if (utmSource && !cookieReferer) {
                        return currentReferer;
                    }

                    if (utmSource && !currentReferer) {
                        return cookieReferer;
                    }

                    if (cookieReferer) {
                        return cookieReferer;
                    }

                    return currentReferer;

                case 'success':
                    return getCookie('c_referer');
            }
        }

        // изменение ссылок на странице на новый путь
        function changeLinks() {
            var amountLinks = document.getElementsByTagName('a').length;
            for (var i = 0; i < amountLinks; i++) {
                var link = document.getElementsByTagName('a')[i];
                link.setAttribute('href', createdUrl);
            }
        }

        // изменение ПАРАМЕТРОВ ссылок на странице только с определенным классом
        function changeLinksByClassName(classNames) {
            classNames.forEach(function (className) {
                var links = document.querySelectorAll(className);
                links.forEach(function (link) {
                    var currentHref = link.getAttribute('href');
                    currentHref = currentHref + '?';
                    link.setAttribute('href', currentHref + params);
                });
            });
        }

        // изменение ПОЛНЫХ ссылок на странице только с определенным классом
        function changeFullLinksByClassName(classNames) {
            classNames.forEach(function (className) {
                var links = document.querySelectorAll(className);
                links.forEach(function (link) {
                    link.setAttribute('href', createdUrl);
                });
            });
        }

        //получение гуида
        function getGuid(name) {
            var dataGuid = htmlData.getAttribute('data-' + name);
            if (dataGuid !== null && dataGuid !== undefined) {
                return dataGuid;
            } else {
                var c_guid = getCookie('c_' + name);
                if (c_guid !== null && c_guid !== undefined) {
                    return c_guid;
                } else {
                    return '';
                }
            }
        }


        //ставим гуид в куки
        function setGuidsToCookie() {
            var first_guid = htmlData.getAttribute('data-first_guid');
            var guid = htmlData.getAttribute('data-guid');
            if (first_guid !== null && first_guid !== undefined && first_guid !== '') {
                setCookie('c_first_guid', first_guid);
                setCookie('c_guid', guid);
            } else {
                setCookie('c_first_guid', guid);
                setCookie('c_guid', guid);
            }
        }

        //ставим гуиды в инпуты
        function setGuidsToInput() {
            var first_guid = htmlData.getAttribute('data-first_guid');
            var guid = htmlData.getAttribute('data-guid');
            if (first_guid !== null && first_guid !== undefined && first_guid !== '') {
                setFormsInput('first_guid', first_guid);
                setFormsInput('guid', guid);
            } else {
                setFormsInput('first_guid', guid);
                setFormsInput('guid', guid);
            }
        }

        //set placeholders
        function setPlaceholders() {
            var selects = document.querySelectorAll('.country_select'); //получаем все селекты
            var phones = document.getElementsByName('phone'); //получаем все инпуты с телефоном
            var optionVal = '';

            //выставляем дефолтное значение плейсхолдеров
            window.onload = function () {
                var defaultSelect = selects[0];
                if (defaultSelect) {
                    optionVal = defaultSelect.value; //получаем текущее значение селекта
                    changePhonePlaceholder(optionVal);
                }
            };

            //объект со всеми плейсхолдерами
            var phonesHolders = {
                at: 'mob:+43 644 123456',
                ch: 'mob:+268 76123456',
                de: 'mob:+49 151 23456789',
                it: 'mob:+39 312 3456789',
                es: 'mob:+34 612 345678',
                lv: 'mob:+371 21 234567',
                lt: 'mob:+370 612 34567',
                ee: 'mob:+372 51234567',
                ro: 'mob:+40 712 345678',
                bg: 'mob:+359 48 123456',
                pl: 'mob:+48 512 345678',
                gr: 'mob:+30 691 2345678',
                cy: 'mob:+357 96 123456',
                hu: 'mob:+36 20 1234567',
                fr: 'mob:+33 6 12 345678',
                cz: 'mob:+420 601 123456',
                pt: 'mob:+351 293 402 881',
                ru: 'моб:+7 999 99 9999',
            };

            selects.forEach(function (select) { //для каждого селекта вешаем обработчик
                select.addEventListener("change", function () {
                    optionVal = this.options[this.selectedIndex].value; //получаем текущее значение селекта
                    changePhonePlaceholder(optionVal);//меняем все инпуты phone

                    selects.forEach(function (otherSelect) {
                        otherSelect.value = optionVal;
                    });
                });
            });

            //функция смены всех инпутов с именем name
            function changePhonePlaceholder(optionVal) {
                phones.forEach(function (phone) {
                    phone.placeholder = phonesHolders[optionVal.toLowerCase()];
                });
            }
        }

        function setFormsInput(inputName, value) {
            var inputs = document.querySelectorAll('input[name="' + inputName + '"]');

            inputs.forEach(function (input) {
                input.value = value;
            });
        }

        //проверка на существование параметра или куки, возвращает первое что существует или пустую строку
        function isExist(prop) {
            if (getParam(prop) !== null && getParam(prop) !== undefined) {
                return (getParam(prop));
            } else {
                if (getCookie('c_' + prop) !== null && getCookie('c_' + prop) !== undefined) {
                    return getCookie('c_' + prop);
                } else {
                    return '';
                }
            }
        }

        //проверка существования свойства
        function isReal(prop) {
            if (prop !== undefined && prop !== null) {
                return prop;
            }
            return '';
        }

        //устанавливаем куки из параметров url
        function setParamsToCookie() {
            var params = ['ym', 'fb', 'fb_sot', 'fb_sol', 'fb_sos', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
            params.forEach(function (param_key) {
                var parameter = getParam(param_key);
                if (parameter) {
                    setCookie('c_' + param_key, parameter, 30);
                }
            });
        }

        //устанавливаем параметры в инпуты
        function setParamsToInput() {
            setFormsInput('ym', pageData.ym);
            setFormsInput('utm_source', pageData.utm_source);
            setFormsInput('utm_medium', pageData.utm_medium);
            setFormsInput('utm_campaign', pageData.utm_campaign);
            setFormsInput('utm_content', pageData.utm_content);
            setFormsInput('utm_term', pageData.utm_term);
            setFormsInput('prelanding_id', isReal(getParam('prelanding_id')));
            setFormsInput('url', url);
            setFormsInput('cookie_enabled', (navigator.cookieEnabled) ? 1 : 0);
            setFormsInput('referer', getReferrer());
        }

        //для установки метрик
        function addMetric(type, counterID) {
            switch (type) {
                case 'GA':
                    if (counterID !== null) {
                        var scriptGA = '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'../https@www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\', \'' + counterID + '\', \'auto\');ga(\'send\', \'pageview\');';
                        var createGA = document.createElement('script');
                        createGA.innerHTML = scriptGA;
                        document.body.appendChild(createGA);
                    }
                    break;
                case 'YM':
                    if (counterID !== null) {
                        var scriptYM = '(function (d, w, c){(w[c] = w[c] || []).push(function() {try {w.yaCounter' + counterID + ' = new Ya.Metrika({  id:' + counterID + ', clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, triggerEvent: true});} catch(e) { }}); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "../https@mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") {d.addEventListener("DOMContentLoaded", f, false);} else { f(); }})(document, window, "yandex_metrika_callbacks");';
                        var createYM = document.createElement('script');
                        createYM.innerHTML = scriptYM;
                        document.body.appendChild(createYM);
                    }
                    break;
                case 'FB':
                    if (counterID !== null) {
                        var scriptFB;
                        var createFB;
                        var track = (pageType === 'success') ? 'fbq(\'track\', \'Lead\'); fbq(\'track\', \'AddToCart\');' : 'fbq(\'track\', \'PageView\');';
                        scriptFB = '!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod?' +
                            'n.callMethod.apply(n,arguments):n.queue.push(arguments)};' +
                            'if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=\'2.0\';' +
                            'n.queue=[];t=b.createElement(e);t.async=!0;' +
                            't.src=v;s=b.getElementsByTagName(e)[0];' +
                            's.parentNode.insertBefore(t,s)}(window, document,\'script\',' +
                            '\'../https@connect.facebook.net/en_US/fbevents.js\');' +
                            'fbq(\'init\', ' + counterID + ');' + track;
                        createFB = document.createElement('script');
                        createFB.innerHTML = scriptFB;
                        document.body.appendChild(createFB);
                    }
                    break;
            }
        }

        //для установки ползовательских метрик
        function setWebMetric(ym, ga, fb, pageType) {
            if (ym !== undefined && ym !== null && ym !== '') {
                addMetric('YM', ym);
            }
            if (ga !== undefined && ga !== null && ga !== '') {
                addMetric('GA', ga);
            }
            //фб устанавливается в зависисмости от типа страницы и переданных параметров
            if (fb !== undefined && fb !== null && fb !== '') {
                var pixel = {
                    fb_sot: isExist('fb_sot'),
                    fb_sol: isExist('fb_sol'),
                    fb_sos: isExist('fb_sos'),
                };

                //если не передано параметров для пикселя, вешаем его на все страницы
                if (!pixel.fb_sot && !pixel.fb_sol && !pixel.fb_sos) {
                    addMetric('FB', fb);
                    return;
                }

                if (pixel.fb_sot && pageType === 'prelanding') {
                    addMetric('FB', fb);
                    return;
                }
                if (pixel.fb_sol && pageType === 'landing') {
                    addMetric('FB', fb);
                    return;
                }
                if (pixel.fb_sos && pageType === 'success') {
                    addMetric('FB', fb);
                    return;
                }
            }
        }

        //складывает строки, если второй параметр пустой или с ошибкой, вернет ''
        function setParam(str, existStr) {
            if (existStr !== undefined && existStr !== null && existStr !== '') {
                return str + existStr;
            }
            return '';
        }

        //функция асинхронного вызова
        function jsonp(url, callback) {
            var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
            window[callbackName] = function (data) {
                delete window[callbackName];
                document.body.removeChild(scriptJSONP);
                callback(data);
            };

            var scriptJSONP = document.createElement('script');
            scriptJSONP.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
            scriptJSONP.async = false;
            document.body.appendChild(scriptJSONP);
            return scriptJSONP;
        }

        //функция для установки куки
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        // получение куки
        function getCookie(name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)",
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        //функция для работы с url
        function getParam(name) {
            if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
                return (name === null) ? null : decodeURIComponent(name[1]);
        }
    });
})();