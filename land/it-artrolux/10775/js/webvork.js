(function () {
    'use strict';

    var wvDOM = {
        getElement: function (elem) {
            if (!elem) return undefined;
            return document.querySelector(elem);
        },
        getElementAll: function (elem) {
            if (!elem) return undefined;
            return document.querySelectorAll(elem);
        },
        getAttributeElement: function (elem, name) {
            if (!name || !elem) return undefined;
            return elem.getAttribute(name);
        },
        crateScript: function (value) {
            if (!value) return undefined;
            var newScript = document.createElement('script');
            newScript.innerHTML = value;
            document.body.appendChild(newScript);
        }
    };

    var wvParams = {
        offerId: '',
        pageType: '',
        createdUrl: '',
        YmCounter: '',
        GaCounter: '',
        tracker: '',
        params: '',
        // Функция для работы с url
        get: function (name) {
            if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(this.getLocationSearch()));
            return (name === null) ? undefined : encodeURIComponent(name[ 1 ]);
        },
        // Складывает строки, если второй параметр пустой или с ошибкой, вернет ''
        set: function (str, existStr) {
            if (str && existStr) {
                return str + existStr;
            }
            return '';
        },
        getLocationSearch: function () {
            return location.search;
        },
        getUrl: function () {
            return window.location.href;
        },
        getHtmlData: function () {
            return wvDOM.getElement('html')
        },
        // Проверка на существование параметра или куки, возвращает первое что существует или пустую строку
        isExist: function (prop) {
            var param = this.get(prop);
            if (param) {
                return param;
            }

            var cookie = wvCookie.get('c_' + prop);
            if (cookie) {
                return cookie;
            }

            return '';
        },
        // Проверка существования свойства
        isReal: function (prop) {
            if (prop) {
                return prop;
            }
            return '';
        }
    };

    var wvCookie = {
        // Получаем куки
        get: function (name) {
            if (!name) return;
            var matches = this.searchCookie(name)
            return matches ? decodeURIComponent(matches[ 1 ]) : undefined;
        },
        // Устанавливаем куки
        set: function (cname, cvalue, exdays) {
            var expires, cookieStr, d = new Date();

            if (!exdays) {
                exdays = 30;
            }

            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            expires = "expires=" + d.toUTCString();

            if (cname && cvalue) {
                cookieStr = cname + "=" + cvalue + ";" + expires + ";path=/";
                document.cookie = cookieStr
            } else {
                cookieStr = null;
            }

            return cookieStr;
        },
        //устанавливаем куки из параметров url
        setParamsToCookie: function () {
            var paramsArr = [ 'ym', 'ga', 'fb', 'fb_sot', 'fb_sol', 'fb_sos', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term' ];
            return paramsArr.map(function (param_key) {
                var parameter = wvParams.get(param_key);
                if (parameter) {
                    return wvCookie.set('c_' + param_key, parameter, 30);
                }
            });
        },
        // Поиск куки
        searchCookie: function (name) {
            return document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)",
            ));
        }
    };

    // Объект с известными параметрами или куками
    var wvPageData = {
        ym: wvParams.isExist('ym'),
        ga: wvParams.isExist('ga'),
        fb: wvParams.isExist('fb'),
        fb_track: wvParams.isExist('fb_track') || 'PageView',
        fb2: wvParams.isExist('fb2'),
        fb2_track: wvParams.isExist('fb2_track') || 'PageView',
        utm_source: wvParams.isExist('utm_source'),
        utm_medium: wvParams.isExist('utm_medium'),
        utm_campaign: wvParams.isExist('utm_campaign'),
        utm_content: wvParams.isExist('utm_content'),
        utm_term: wvParams.isExist('utm_term'),
        cbwv: wvParams.isExist('cbwv'),
        fb_sot: wvParams.isExist('fb_sot'), // Флаг для установки пикселя на прелендинг
        fb_sol: wvParams.isExist('fb_sol'), // Флаг для установки пикселя на лендинг
        fb_sos: wvParams.isExist('fb_sos'), // Флаг для установки пикселя на success
    };

    var wvMetric = {
        pageType: null,
        // Устанавливает счетчики
        add: function (type, counterID) {
            switch (type) {
                case 'YM':
                    if (counterID !== null) {
                        var scriptYM = '(function (d, w, c){(w[c] = w[c] || []).push(function() {try {w.yaCounter' + counterID + ' = new Ya.Metrika({  id:' + counterID + ', clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, triggerEvent: true});} catch(e) { }}); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "../https@mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") {d.addEventListener("DOMContentLoaded", f, false);} else { f(); }})(document, window, "yandex_metrika_callbacks");';
                        wvDOM.crateScript(scriptYM);
                        return scriptYM
                    }
                    break;
                case 'GA':
                    if (counterID !== null) {
                        var scriptGA = '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'../https@www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\', \'' + counterID + '\', \'auto\');ga(\'send\', \'pageview\');';
                        wvDOM.crateScript(scriptGA);
                        return scriptGA;
                    }
                    break;
                case 'FB':
                    if (counterID !== null) {
                        var scriptFB;
                        var track = (this.pageType === 'success') ? 'fbq(\'track\', \'Lead\'); fbq(\'track\', \'AddToCart\'); fbq(\'track\', \'' + wvPageData.fb_track + '\');' : 'fbq(\'track\', \'' + wvPageData.fb_track + '\');';
                        scriptFB = '!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod?' +
                            'n.callMethod.apply(n,arguments):n.queue.push(arguments)};' +
                            'if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=\'2.0\';' +
                            'n.queue=[];t=b.createElement(e);t.async=!0;' +
                            't.src=v;s=b.getElementsByTagName(e)[0];' +
                            's.parentNode.insertBefore(t,s)}(window, document,\'script\',' +
                            '\'../https@connect.facebook.net/en_US/fbevents.js\');' +
                            'fbq(\'init\', ' + counterID + ');' + track;
                        wvDOM.crateScript(scriptFB);
                        return scriptFB;
                    }
                    break;
                case 'FB2':
                    if (counterID !== null) {
                        var scriptFB;
                        var track = 'fbq(\'track\', \'Lead\'); fbq(\'track\', \'AddToCart\'); fbq(\'track\', \'' + wvPageData.fb2_track + '\');';
                        scriptFB = '!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod?' +
                            'n.callMethod.apply(n,arguments):n.queue.push(arguments)};' +
                            'if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=\'2.0\';' +
                            'n.queue=[];t=b.createElement(e);t.async=!0;' +
                            't.src=v;s=b.getElementsByTagName(e)[0];' +
                            's.parentNode.insertBefore(t,s)}(window, document,\'script\',' +
                            '\'../https@connect.facebook.net/en_US/fbevents.js\');' +
                            'fbq(\'init\', ' + counterID + ');' + track;
                        wvDOM.crateScript(scriptFB);
                        return scriptFB;
                    }
                    break;
                default: return null;
            }
        },
        // Для установки ползовательских метрик
        set: function (ym, ga, fb, fb2, pageType) {
            if (!ym && !ga && !fb && !pageType) return null;
            var counts = '';
            this.pageType = pageType;
            if (ym) {
                counts += this.add('YM', ym);

            }
            if (ga) {
                counts += this.add('GA', ga);
            }
            //фб устанавливается в зависисмости от типа страницы и переданных параметров
            if (fb) {
                var pixel = {
                    fb_sot: wvParams.isExist('fb_sot'),
                    fb_sol: wvParams.isExist('fb_sol'),
                    fb_sos: wvParams.isExist('fb_sos'),
                };

                //если не передано параметров для пикселя, вешаем его на все страницы
                if (!pixel.fb_sot && !pixel.fb_sol && !pixel.fb_sos && !pageType) {
                    counts += this.add('FB', fb);
                }

                if (pixel.fb_sol && pageType === 'landing') {
                    counts += this.add('FB', fb);
                }

                if (pixel.fb_sot && pageType === 'prelanding') {
                    counts += this.add('FB', fb);
                }

                if (pixel.fb_sos && pageType === 'success') {
                    counts += this.add('FB', fb);
                }
            }

            if (fb2) {
                if (pageType === 'success') {
                    counts += this.add('FB2', fb2);
                }
            }
            return counts;
        },
        metricsHandler: function (cb) {
            if (!cb) {
                throw new Error('metricsHandler method don`t has param')
            }
            var unloadedMetricsCount = 3;
            //вызываем трекер второй раз когда загрузятся метрики и отправляем куки YM и GA, и полученные гуиды
            wvParams.tracker.addEventListener('load', function () {
                tryCB();
            });

            //ждем загрузки счетчика YM https://bit.ly/2T1m8Kt
            document.addEventListener('yacounter' + wvParams.YmCounter + 'inited', function () {
                tryCB();
            });

            //ждем загрузки счетчика GA, https://bit.ly/2BDZYqD
            try {
                ga(function () {
                    tryCB();
                });
            } catch (e) {
                throw new Error('google analytics не загружен, выключите adblock');
            }

            function tryCB() {
                unloadedMetricsCount--;
                if (unloadedMetricsCount === 0) {
                    cb();
                }
            }
            return true;
        }
    };

    var wvForm = {
        data: [
            'ym',
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'utm_content',
            'utm_term',
            'prelanding_id',
            'url',
            'cookie_enabled',
            'referer' ],
        // Устанавливаем параметры в инпуты
        setParamsToInput: function () {
            this.setFormsInput('ym', wvPageData.ym);
            this.setFormsInput('utm_source', wvPageData.utm_source);
            this.setFormsInput('utm_medium', wvPageData.utm_medium);
            this.setFormsInput('utm_campaign', wvPageData.utm_campaign);
            this.setFormsInput('utm_content', wvPageData.utm_content);
            this.setFormsInput('utm_term', wvPageData.utm_term);
            this.setFormsInput('prelanding_id', wvParams.isReal(wvParams.get('prelanding_id')));
            this.setFormsInput('url', wvParams.getUrl());
            this.setFormsInput('cookie_enabled', (navigator.cookieEnabled) ? 1 : 0);
            this.setFormsInput('referer', wvPage.getReferrer());
            return true;
        },
        setFormsInput: function (inputName, value) {
            if (!inputName || !value) return null;
            var inputs = this.getInputs('input[name="' + inputName + '"]');
            if (!inputs) {
                throw new Error('Inputs ' + inputName + ' of the page not found!');
            }
            inputs.forEach(function (input) {
                input.value = value;
            });
            if (inputs) return true;
        },
        getInputs: function (inputName) {
            return wvDOM.getElementAll(inputName);
        }
    };

    var wvLink = {
        // Изменение ссылок на странице на новый путь
        changeLinks: function () {
            var amountLinks = wvLink.getLink('a');
            if (!amountLinks) {
                throw new Error('Links of the page not found!');
            }
            amountLinks.forEach(function (link) {
                link.setAttribute('href', wvLink.getUrl());
            });
            return amountLinks;
        },
        // Изменение ПАРАМЕТРОВ ссылок на странице только с определенным классом
        changeLinksByClassName: function (classNames) {
            if (!classNames) return null;

            return classNames.map(function (className) {
                var links = wvLink.getLink(className);
                if (!links) {
                    throw new Error('Class "' + className + '" not found!');
                }

                links.forEach(function (link) {
                    var currentHref = link.getAttribute('href');
                    currentHref += '?' + wvParams.params;
                    link.setAttribute('href', currentHref);

                });
                return links;
            });
        },
        // Изменение ПОЛНЫХ ссылок на странице только с определенным классом
        changeFullLinksByClassName: function (classNames) {
            if (!classNames) return null;
            return classNames.map(function (className) {
                var links = wvLink.getLink(className);
                if (!links) {
                    throw new Error('Class "' + className + '" not found!');
                }
                links.forEach(function (link) {
                    link.setAttribute('href', wvLink.getUrl());
                });
                return links;
            });
        },
        getLink: function (elem) {
            return wvDOM.getElementAll(elem);
        },
        getUrl: function () {
            return wvParams.createdUrl;
        }
    };

    var wvGuid = {
        // Получение гуида
        getGuid: function (name) {
            if (!name) return null;
            var dataGuid = this.getAttrElem(this.getHtmlData(), 'data-' + name);
            if (dataGuid) {
                return dataGuid;
            } else {
                var c_guid = wvCookie.get('c_' + name);
                if (c_guid) {
                    return c_guid;
                } else {
                    return '';
                }
            }
        },
        // Ставим гуид в куки
        setGuidsToCookie: function () {
            var first_guid = this.getAttrElem(this.getHtmlData(), 'data-first_guid');
            var guid = this.getAttrElem(this.getHtmlData(), 'data-guid');
            if (first_guid) {
                wvCookie.set('c_first_guid', first_guid);
                wvCookie.set('c_guid', guid);
                return first_guid;
            } else if (guid) {
                wvCookie.set('c_first_guid', guid);
                wvCookie.set('c_guid', guid);
                return guid;
            } else {
                return undefined;
            }
        },
        // Ставим гуиды в инпуты
        setGuidsToInput: function () {
            var first_guid = this.getAttrElem(this.getHtmlData(), 'data-first_guid');
            var guid = this.getAttrElem(this.getHtmlData(), 'data-guid');
            if (first_guid) {
                wvForm.setFormsInput('first_guid', first_guid);
                wvForm.setFormsInput('guid', guid);
                return first_guid;
            } else if (guid) {
                wvForm.setFormsInput('first_guid', guid);
                wvForm.setFormsInput('guid', guid);
                return guid;
            } else {
                return undefined;
            }
        },
        getAttrElem: function (elem, name) {
            return wvDOM.getAttributeElement(elem, name);
        },
        getHtmlData: function () {
            return wvParams.getHtmlData();
        }
    };

    var wvPhone = {
        // Подставляем код телефона
        addPhoneCode: function () {
            var mask = {
                init: function () {
                    var selects = wvPhone.getCountryElement('.country_select');
                    var phones = wvPhone.getPhoneElement('.wv_phone');

                    if (!selects || !phones) return null;

                    //выставляем дефолтный код
                    var countryCode = selects[ 0 ].value.toLowerCase();
                    var countryCodes = {
                        'at': '+43',
                        'ch': '+268',
                        'de': '+49',
                        'it': '+39',
                        'es': '+34',
                        'lv': '+371',
                        'lt': '+370',
                        'ee': '+372',
                        'ro': '+40',
                        'bg': '+359',
                        'pl': '+48',
                        'gr': '+30',
                        'cy': '+357',
                        'hu': '+36',
                        'fr': '+33',
                        'cz': '+420',
                        'pt': '+351',
                        'ru': '+7',
                    };

                    selects.forEach(function (select) {
                        select.addEventListener('change', function () {
                            countryCode = this.value;
                            selects.forEach(function (sel) {
                                sel.value = countryCode;
                            });
                        });
                    });

                    phones.forEach(function (phone) {
                        phone.pattern = '(\\+)[0-9]{11,16}';
                        phone.title = 'the phone must contain 12 to 17 digits only';

                        //при попадании фокуса оставляем код + введенную часть номера
                        phone.addEventListener('focusin', function () {
                            var code = countryCodes[ countryCode.toLowerCase() ];
                            this.value = !(this.value.length > code.length) ? code : this.value;
                        });

                        //при вводе блокируем удаление кода страны
                        phone.addEventListener('input', function () {
                            var code = countryCodes[ countryCode.toLowerCase() ];
                            this.value.indexOf(code) && (this.value = code);
                        });
                    });

                    return { selects, phones };
                }
            };
            return mask.init();
        },
        // Подставляем placeholders
        setPlaceholders: function () {
            var selects = this.getCountryElement('.country_select'); // Получаем все селекты
            var phones = this.getPhoneElement('input[name="phone"]'); // Получаем все инпуты с телефоном
            var optionVal = '';

            if (!selects && !phones) return null;

            // Выставляем дефолтное значение плейсхолдеров
            window.onload = function () {
                var defaultSelect = selects[ 0 ];
                if (defaultSelect) {
                    optionVal = defaultSelect.value; // Получаем текущее значение селекта
                    changePhonePlaceholder(optionVal);
                }
            };

            // Объект со всеми плейсхолдерами
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

            selects.forEach(function (select) { // Для каждого селекта вешаем обработчик
                select.addEventListener("change", function () {
                    optionVal = this.options[ this.selectedIndex ].value; // Получаем текущее значение селекта
                    selects.forEach(function (otherSelect) {
                        otherSelect.value = optionVal;
                    });
                    return changePhonePlaceholder(optionVal);// Меняем все инпуты phone
                });
            });

            // Функция смены всех инпутов с именем name
            function changePhonePlaceholder(optionVal) {
                return phones.forEach(function (phone) {
                    return phone.placeholder = phonesHolders[ optionVal.toLowerCase() ];
                });
            }
            return { selects, phones };
        },
        getPhoneElement: function (elem) {
            var selects = wvDOM.getElementAll(elem);
            return (selects.length) ? selects : 0;
        },
        getCountryElement: function (elem) {
            var phones = wvDOM.getElementAll(elem);
            return (phones.length) ? phones : 0;
        }
    };

    var wvPage = {
        init: function () {
            // Если это не лендинг
            if (wvParams.pageType !== 'landing') {
                var prelandId = wvDOM.getAttributeElement(wvParams.getHtmlData(), 'data-prelanding_id');
                wvParams.params = 'url=' + encodeURIComponent(wvParams.getUrl()) +
                    wvParams.set('&utm_source=', wvPageData.utm_source) +
                    wvParams.set('&utm_medium=', wvPageData.utm_medium) +
                    wvParams.set('&utm_campaign=', wvPageData.utm_campaign) +
                    wvParams.set('&utm_content=', wvPageData.utm_content) +
                    wvParams.set('&utm_term=', wvPageData.utm_term) +
                    wvParams.set('&referer=', encodeURIComponent(wvPage.getReferrer())) +
                    wvParams.set('&prelanding_id=', prelandId) +
                    wvParams.set('&offer_id=', wvParams.offerId) +
                    wvParams.set('&page_type=', wvParams.pageType);

                // Вызываем трекер и передаем в него известные параметры
                wvParams.tracker = wvPage.jsonp('//webvkrd.com/js.php?' + wvParams.params);

                // После получения лендинга из трекера, меняем ссылки на транзитке
                wvParams.tracker.addEventListener('load', function () {
                    var trackerData = {
                        land: wvParams.isReal(wvDOM.getAttributeElement(wvParams.getHtmlData(), 'data-landing_url')),
                        guid: wvParams.isReal(wvGuid.getGuid('guid')),
                        fguid: wvParams.isReal(wvGuid.getGuid('first_guid')),
                    };

                    wvParams.createdUrl = trackerData.land + '?';
                    for (var key in wvPageData) {
                        if (wvParams.isReal(wvPageData[ key ])) {
                            wvParams.createdUrl += key + '=' + wvPageData[ key ] + '&';
                        }
                    }

                    wvParams.createdUrl += wvParams.set('referer=', encodeURIComponent(wvPage.getReferrer())) + wvParams.set('&prelanding_id=', prelandId);
                    if (document.body.getAttribute('data-links') === 'change-only-wv') {
                        wvLink.changeFullLinksByClassName([ '.wv_link' ]);
                    } else {
                        wvLink.changeLinks();
                    }
                    wvGuid.setGuidsToCookie();
                });

                // Если это страница успешного заказа, ставим счетчики лендинга
                if (wvParams.pageType === 'success') {
                    wvParams.tracker.addEventListener('load', function () {
                        wvGuid.setGuidsToInput();
                        //если на клиенте выключены куки, передаем guid лида постом
                        if (navigator.cookieEnabled === false) {
                            wvForm.setFormsInput('lead_guid', wvParams.isReal(wvParams.get('lead_guid')));
                        }
                    });
                    // Landing webvork counters
                    wvParams.YmCounter = '56119783';
                    wvParams.GaCounter = 'UA-149576110-39';
                    wvMetric.add('GA', wvParams.GaCounter);
                    wvMetric.add('YM', wvParams.YmCounter);
                    wvForm.setParamsToInput();
                    wvParams.test = 'success page';
                } else {// Иначе ставим счетчики транзитки
                    // Prelanding webvork counters
                    wvParams.YmCounter = '56119783';
                    wvParams.GaCounter = 'UA-149576110-39';
                    wvMetric.add('GA', wvParams.GaCounter);
                    wvMetric.add('YM', wvParams.YmCounter);
                    wvParams.test = 'not landing page';
                }

                wvMetric.metricsHandler(function () {
                    wvParams.params =
                        wvParams.set('c_ym_uid=', wvCookie.get('_ym_uid')) +
                        wvParams.set('&c_ga=', wvCookie.get('_ga')) +
                        wvParams.set('&guid=', wvGuid.getGuid('guid')) +
                        wvParams.set('&first_guid=', wvGuid.getGuid('first_guid'));
                    wvPage.jsonp('//webvkrd.com/js.php?' + wvParams.params);
                });

                // Если есть поток, то ставим куки
                if (wvParams.get('utm_source') !== null) {
                    wvCookie.setParamsToCookie();
                }
                // Если это лендинг
            } else {
                var landId = wvDOM.getAttributeElement(wvParams.getHtmlData(), 'data-landing_id');
                // Landing webvork counters
                wvParams.YmCounter = '56119783';
                wvParams.GaCounter = 'UA-149576110-39';
                wvMetric.add('GA', wvParams.GaCounter);
                wvMetric.add('YM', wvParams.YmCounter);
                wvParams.test = 'landing page';

                wvParams.params = 'url=' + encodeURIComponent(wvParams.getUrl()) +
                    wvParams.set('&utm_source=', wvPageData.utm_source) +
                    wvParams.set('&utm_medium=', wvPageData.utm_medium) +
                    wvParams.set('&utm_campaign=', wvPageData.utm_campaign) +
                    wvParams.set('&utm_content=', wvPageData.utm_content) +
                    wvParams.set('&utm_term=', wvPageData.utm_term) +
                    wvParams.set('&referer=', encodeURIComponent(wvPage.getReferrer())) +
                    wvParams.set('&landing_id=', landId) +
                    wvParams.set('&offer_id=', wvParams.offerId) +
                    wvParams.set('&page_type=', wvParams.pageType);
                // Запрашиваем трекер с передачей параметров
                wvParams.tracker = wvPage.jsonp('//webvkrd.com/js.php?' + wvParams.params);

                wvMetric.metricsHandler(function () {
                    wvParams.params =
                        wvParams.set('c_ym_uid=', wvCookie.get('_ym_uid')) +
                        wvParams.set('&c_ga=', wvCookie.get('_ga')) +
                        wvParams.set('&guid=', wvGuid.getGuid('guid')) +
                        wvParams.set('&first_guid=', wvGuid.getGuid('first_guid'));
                    wvPage.jsonp('//webvkrd.com/js.php?' + wvParams.params);
                    wvGuid.setGuidsToCookie();
                    wvGuid.setGuidsToInput();
                });

                wvForm.setParamsToInput();
                wvCookie.setParamsToCookie();
                if (wvParams.get('utm_source')) {
                    wvCookie.set('c_uri', document.location);
                    wvCookie.set('c_referer', wvPage.getReferrer());
                }

                // Добавляем параметры у многратраничных сайтов
                wvLink.changeLinksByClassName([ '.wv_formpay', '.wv_params' ]);

            }
            return wvParams;
        },
        getReferrer: function () {
            switch (wvParams.pageType) {
                case 'prelanding':
                    return wvPage.getRef();

                case 'landing':
                    var utmSource = wvParams.get('utm_source');
                    var paramReferer = wvParams.get('referer');
                    var cookieReferer = wvCookie.get('c_referer');
                    var currentReferer = wvPage.getRef();

                    if (paramReferer) {
                        return paramReferer;
                    }

                    // На рефералке нужно брать всегда новый рефрер если есть поток
                    if (wvParams.offerId === '13' && utmSource) {
                        return currentReferer;
                    }

                    if (wvParams.offerId === '13' && !utmSource && !!cookieReferer) {
                        return currentReferer;
                    }

                    if (wvParams.offerId === '13' && !utmSource && cookieReferer) {
                        return cookieReferer;
                    }
                    //-------------------------------------------------------------

                    if (utmSource && !!cookieReferer) {
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
                    return wvCookie.get('c_referer');
            }
        },
        getRef: function () {
            return document.referrer;
        },
        // Функция асинхронного вызова
        jsonp: function (url, callback) {
            if (!url) return null;
            var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
            window[ callbackName ] = function (data) {
                delete window[ callbackName ];
                document.body.removeChild(scriptJSONP);
                callback(data);
            };

            var scriptJSONP = document.createElement('script');
            scriptJSONP.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
            scriptJSONP.async = false;
            document.body.appendChild(scriptJSONP);
            return scriptJSONP;
        }
    };

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
            // {
            //   path: '../https@webvork.com/js/modules/phonemask/wvmask.js',
            // },
            // {
            //     path: '../https@webvork.com/js/modules/validation/wvvalid.js',
            // },
        ],
        // Запуск модулей
        init: function () {
            return this.mod.map(function (el) {
                // Включаем модуль если есть кука или параметр
                if (el.param) {
                    if (wvParams.isExist(el.param)) {
                        return wvModules.appendModule(el.path);
                    } else {
                        return '';
                    }
                }
            })
        },
        // Добавление модуля в дом
        appendModule: function (modulePath) {
            var module = document.createElement('script');
            module.type = 'text/javascript';
            module.src = modulePath;
            document.body.appendChild(module);
        },
    };

    // Устанавливаем параметры
    wvParams.offerId = wvDOM.getAttributeElement(wvParams.getHtmlData(), 'data-offer_id');
    wvParams.pageType = wvDOM.getAttributeElement(wvParams.getHtmlData(), 'data-page_type');

    // Ставим счетчики вебмастера
    wvMetric.set(wvPageData.ym, wvPageData.ga, wvPageData.fb, wvPageData.fb2, wvParams.pageType);
    wvCookie.set('c_referer', wvPage.getReferrer(), 30);

    // Заполняем параметры
    wvPage.init();

    // Подключение модулей через параметры
    wvModules.init();

    // Подставляем код номера телефона и placeholder
    wvPhone.addPhoneCode();
    wvPhone.setPlaceholders();


    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = {
            wvDOM,
            wvParams,
            wvCookie,
            wvMetric,
            wvForm,
            wvLink,
            wvGuid,
            wvPhone,
            wvPage,
            wvModules,
            wvPageData,
        };
    }
})();
