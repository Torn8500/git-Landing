/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getCookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


var checkCookieParked = function checkCookieParked() {
  return Object(_getCookie__WEBPACK_IMPORTED_MODULE_0__["default"])('parking') === '1';
};

/* harmony default export */ __webpack_exports__["default"] = (checkCookieParked);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getCookie = function getCookie(name) {
  var pattern = "(?:^|; )".concat(name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1'), "=([^;]*)");
  var matches = document.cookie.match(new RegExp(pattern));
  return matches ? decodeURIComponent(matches[1]) : false;
};

/* harmony default export */ __webpack_exports__["default"] = (getCookie);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_checkCookieParked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



(function () {
  'use strict';

  var LB = function LB(params) {
    /**
     * Дефолтные параметры
     * @type {object }
     */
    this.params = $.extend({
      comebacker: false,
      projectDomain: this.queryGET('host') ? "//".concat(this.queryGET('host'), "/") : '//lea' + 'dbit.biz/',
      formDomain: this.queryGET('form_host') ? "//".concat(this.queryGET('form_host'), "/") : '//lea' + 'dbit.com/',
      now: new Date().getTime(),
      commentSelector: '',
      isParked: false,
      currentUrl: document.location.hostname + document.location.pathname,
      apiUrl: "//".concat(document.location.hostname + document.location.pathname).concat(document.location.pathname[document.location.pathname.length - 1] !== '/' && '/', "api/"),
      getToExtend: ['cb', 'fblp', 'lp', 'fbsop', 'gclid'] // send to hidden inputs form

    }, params);

    if (window.location.hash === '#devmode') {
      this.params.projectDomain = this.queryGET('host') ? "//".concat(this.queryGET('host'), "/") : '//devt.lea' + 'dbit.biz/';
      this.params.formDomain = this.queryGET('form_host') ? "//".concat(this.queryGET('form_host'), "/") : '//devt.lea' + 'dbit.com/';
    }

    this.params.currentUrl = this.params.currentUrl.replace(/\/$/, '');
    var tid = this.queryGET('TID') || this.queryGET('tid');
    var utid = this.queryGET('UTID') || this.queryGET('utid');
    var cookieParking = this.checkCookieParked(); // If ver param exist - this domain is parked

    if (cookieParking || this.queryGET('ver')) {
      // if not in iframe
      if (!window.frameElement) {
        this.params.isParked = true;
        this.getTid(cookieParking);
      }
    } else {
      // Тянем настройки с бека
      var data = {
        v: 2,
        page: this.params.currentUrl,
        iframe: window != window.top,
        callback: 'App.jsonCallback'
      };
      this.extendWithGet(this.params.getToExtend, data); // Отправляем TID и UTID на случай отсутствия кук

      if (utid) data['UTID'] = utid;
      if (tid && !utid) data['TID'] = tid;
      $.ajax({
        url: "".concat(this.params.projectDomain, "landing-data"),
        data: data,
        contentType: 'application/json',
        jsonpCallback: 'App.jsonCallback',
        dataType: 'jsonp'
      });
    }

    if (this.params.commentSelector.length) {
      this.setCommentsDate(this.params.commentSelector);
    }

    this.checkTest();
  };

  LB.prototype = {
    checkCookieParked: _utils_checkCookieParked__WEBPACK_IMPORTED_MODULE_0__["default"],

    /**
     * Расширение массива во 2 аргументе
     * @param {Array} params
     * @param {Object} array
     * @return {*}
     */
    extendWithGet: function extendWithGet(params, array) {
      for (var i = 0; i < params.length; i++) {
        var param = this.queryGET(params[i]);
        param ? array[params[i]] = param : false;
      }

      return array;
    },

    /**
     * Мапим utm параметры из url
     * @return {void}
     */
    mapGetParams: function mapGetParams() {
      var getParams = {};
      if (this.queryGET('utm_medium')) getParams['utm_medium'] = this.queryGET('utm_medium');
      if (this.queryGET('utm_source')) getParams['utm_source'] = this.queryGET('utm_source');
      if (this.queryGET('utm_campaign')) getParams['utm_campaign'] = this.queryGET('utm_campaign');
      if (this.queryGET('utm_term')) getParams['utm_term'] = this.queryGET('utm_term');
      if (this.queryGET('utm_content')) getParams['utm_content'] = this.queryGET('utm_content');
      if (this.queryGET('gclid')) getParams['gclid'] = this.queryGET('gclid');
      this.params.data = $.extend(this.params.data, getParams);
    },

    /**
     * Кейс загрузки лендинга
     * @param  {object} params Параметры загрузки лендинга
     * @return {void}
     */
    initLanding: function initLanding(params) {
      this.params = $.extend(this.params, params);
      var tidInQuery = this.queryGET('TID') || this.queryGET('tid');
      var utidInQuery = this.queryGET('UTID') || this.queryGET('utid');
      var fbsop = this.queryGET('fbsop');
      var tid = tidInQuery || this.params.TID || this.params.tid || 0;
      var utid = utidInQuery || this.params.redirect_id || 0;
      var form = document.getElementsByTagName('form');
      var formAction;
      var additionalFormData = '';
      this.mapGetParams();

      switch (true) {
        case this.checkCookieParked():
          formAction = "/api/conversion/new-from-form?TID=".concat(tid);
          break;

        case this.params.isParked:
          formAction = "api/conversion/new-from-form?TID=".concat(tid);
          break;

        default:
          this.params.formDomain = params.order_url;
          formAction = "//".concat(this.params.formDomain);
          if (utidInQuery) formAction = "".concat(formAction, "?UTID=").concat(utidInQuery);else if (tidInQuery) formAction = "".concat(formAction, "?TID=").concat(tidInQuery);else if (utid) formAction = "".concat(formAction, "?UTID=").concat(utid);else if (tid) formAction = "".concat(formAction, "?TID=").concat(tid);
          if (fbsop) formAction = "".concat(formAction, "&fbsop=").concat(fbsop);
      } // Прокидываем data в виде hidden полей у форм.


      if (_typeof(this.params.data) === 'object') {
        for (var prop in this.params.data) {
          if (this.params.data.hasOwnProperty(prop)) {
            additionalFormData += "<input type=\"hidden\" name=\"".concat(prop, "\" value=\"").concat(this.params.data[prop], "\" />");
          }
        }
      }

      for (var i = 0; i < form.length; i++) {
        form[i].setAttribute('action', formAction);
        form[i].setAttribute('method', 'POST');
        form[i].setAttribute('id', "order_form".concat(i));
        $(form[i]).on('submit', $.proxy(this.validateForm, this));
        this.setLandingValueToForm(form[i]);
        $(form[i]).append(additionalFormData);
      }

      if (!tid && !this.params.TID && this.params.isParked && this.params.TID !== 'error') {
        this.getTid(this.checkCookieParked());
      }
    },

    /**
     * Проставляем значение landing для поля :landing
     * @param {HTMLFormElement} form
     */
    setLandingValueToForm: function setLandingValueToForm(form) {
      var hostname = location.hostname;

      if (!form.elements.landing) {
        $(form).append("<input type=\"hidden\" name=\"landing\" value=\"".concat(hostname, "\" />"));
      } else {
        form.elements.landing.value = hostname;
      }
    },

    /**
     * Получение тида для припаркованного ленда
     * @param {Boolean} cookieParked
     * @return {void}
     */
    getTid: function getTid(cookieParked) {
      var regexp = /\/(\w{4})\//;
      var regExec = regexp.exec(location.pathname);
      var hash = regExec ? regExec[1] : false;
      var url = cookieParked ? "//".concat(location.hostname, "/api/get-tid/").concat(hash) : "api/tid/".concat(hash);

      if (hash && hash.length) {
        $.ajax({
          url: url,
          data: {
            v: 2,
            page: this.params.currentUrl,
            callback: 'App.getTidCallback',
            sub1: this.queryGET('sub1'),
            sub2: this.queryGET('sub2'),
            sub3: this.queryGET('sub3'),
            sub4: this.queryGET('sub4'),
            sub5: this.queryGET('sub5')
          },
          contentType: 'application/json',
          jsonpCallback: 'App.getTidCallback',
          dataType: 'jsonp'
        });
      }
    },

    /**
     * Проставляем тид в экшен всех форм.
     * @param {Object} data
     * @return {void}
     */
    getTidCallback: function getTidCallback(data) {
      var cookieParked = this.checkCookieParked();
      this.params.TID = data.tid; // Если ошибка - то ставим нулевой тид, чтобы предотвратить еще запросы на тид.

      if (data.error) {
        this.params.TID = 'error';
      }

      var formAction = "".concat(cookieParked && '/', "api/conversion/new-from-form?TID=").concat(data.tid);
      var form = document.forms;

      for (var i = 0; i < form.length; i++) {
        form[i].setAttribute('action', formAction);
      } // Тянем настройки с бека


      data = {
        v: 2,
        page: this.params.currentUrl,
        iframe: window != window.top,
        callback: 'App.jsonCallback'
      };
      this.extendWithGet(this.params.getToExtend, data);
      $.ajax({
        url: "".concat(cookieParked ? "//".concat(location.hostname, "/") : '', "api/check-page"),
        data: data,
        contentType: 'application/json',
        jsonpCallback: 'App.jsonCallback',
        dataType: 'jsonp'
      });
    },

    /**
     * Валидация формы при отправке
     * @param  {Object} event
     * @return {void}
     */
    validateForm: function validateForm(event) {
      event.preventDefault ? event.preventDefault() : event.returnValue = false;
      var form = document.getElementById(event.target.id);
      var name = form.elements.name;
      var phone = form.elements.phone;
      var countryCode = form.elements.country;
      var valid = true;
      var countryInfo = typeof lCountries.countries !== 'undefined' ? lCountries.countries[lCountries.userCountryCode] : {
        phoneError: 'Invalid phone',
        nameError: 'Invalid name',
        countryError: 'Invalid country code'
      };

      if (typeof String.prototype.trim !== 'function') {
        // eslint-disable-next-line no-extend-native
        String.prototype.trim = function () {
          return this.replace(/^\s+|\s+$/g, '');
        };
      }

      if (lCountries.userCountryCode.toLowerCase() === 'in') {
        if (phone.value.trim().length <= 10 && phone.value.trim().length > 7) {
          alert(countryInfo.phoneError);
          valid = false;
        }

        if (form.elements.address && form.elements.address.value.trim().length > 0 && form.elements.address.value.trim().length < 5) {
          alert('Invalid address');
          valid = false;
        }
      } // Телефон


      if (phone.value.trim().length <= 7) {
        alert(countryInfo.phoneError);
        valid = false;
      }

      if (name.value.trim().length <= 2) {
        alert(countryInfo.nameError);
        valid = false;
      }

      if (countryCode.value.length < 2) {
        alert(countryInfo.countryError);
        valid = false;
      }

      if (valid && !this.params.isSubmited) {
        form.submit();
        this.params.isSubmited = true;
      }
    },

    /**
     * Кейс загрузки прокладки
     * @param {object} data Параметры загрузки прокладки
     */
    jsonCallback: function jsonCallback(data) {
      if (window.lCountries && this.checkCookieParked()) {
        window.lCountries.constructor();
      }

      App.initLanding.call(App, data);
      App.setData(data);
    },
    setData: function setData(data) {
      // Check FB pixel
      if (data && data.facebookPixelCodeId) {
        App.insertFbId(data.facebookPixelCodeId);
      } // Check GooglePixel


      if (data && data.googleTagId) {
        App.insertGoogleTag(data.googleTagId);
      } // Check GoogleAnalytics


      if (data && data.googleAnalyticsId) {
        App.insertGoogleAnalytics(data.googleAnalyticsId);
      } // Check GoogleSiteTag


      if (data && data.googleSiteTagIdForLanding) {
        App.insertGoogleSiteTag(data.googleSiteTagIdForLanding);
      } // Check TiktokPixel


      if (data && data.tiktokPixelIdForLanding) {
        App.insertTiktokPixel(data.tiktokPixelIdForLanding);
      } // Check iFrame


      if (data && data.iframeUrl) {
        App.insertIframe(data.iframeUrl);
      }

      if (data && data.PropellerAdsImgPixelLeaving) {
        App.insertPropellerImg(data.PropellerAdsImgPixelLeaving);
      }
    },

    /**
     * Вставляем facebook id
     * @param {String} tagId Facebook pixel id
     */
    insertFbId: function insertFbId(tagId) {
      var fbScript = "<!-- Facebook Pixel Code -->" + " <script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '" + tagId + "');fbq('track', 'PageView');</script><img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id=" + tagId + "&ev=PageView&noscript=1'/>";
      document.body.insertAdjacentHTML('beforeend', fbScript);
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return;

        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };

        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', tagId);
    },

    /**
     * Вставляем google tag
     * @tagId  {int} google tag id
     */
    insertGoogleTag: function insertGoogleTag(tagId) {
      var googleScript = "<noscript><iframe src='//www.googletagmanager.com/ns.html?id=" + tagId + "' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript> <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','" + tagId + "');</script>";
      document.body.insertAdjacentHTML('beforeend', googleScript);

      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', tagId);
    },

    /**
     * Вставляем google analitycs id
     * @tagId  {int} google analitycs id
     * @return void
     */
    insertGoogleAnalytics: function insertGoogleAnalytics(tagId) {
      var googleAnalitycs = "<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', '" + tagId + "', 'auto');ga('send', 'pageview');</script>";
      document.body.insertAdjacentHTML('beforeend', googleAnalitycs);

      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

      ga('create', tagId, 'auto');
      ga('send', 'pageview');
    },

    /**
     * Вставляем google site tag
     * @tagId  {string}
     * @return void
     */
    insertGoogleSiteTag: function insertGoogleSiteTag(tagId) {
      /* eslint-disable-next-line */
      var googleSiteTagScript = "<!-- Global site tag (gtag.js) - Google Analytics --> <script async src='https://www.googletagmanager.com/gtag/js?id=" + tagId + "'></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', '" + tagId + "');</script>";
      document.body.insertAdjacentHTML('beforeend', googleSiteTagScript);
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());
      gtag('config', tagId);
    },

    /**
     * Вставляем tiktok pixel id
     * @tagId  {string}
     * @return void
     */
    insertTiktokPixel: function insertTiktokPixel(tagId) {
      var tiktokPixel = "<script>\n          !function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=[\"page\",\"track\",\"identify\",\"instances\",\"debug\",\"on\",\"off\",\"once\",\"ready\",\"alias\",\"group\",\"enableCookie\",\"disableCookie\"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i=\"https://analytics.tiktok.com/i18n/pixel/events.js\";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement(\"script\");o.type=\"text/javascript\",o.async=!0,o.src=i\"?sdkid=\"e\"&lib=\"+t;var a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(o,a)}; ttq.load(".concat(tagId, "); ttq.page();}(window, document, 'ttq');\n        </script>");
      document.body.insertAdjacentHTML('beforeend', tiktokPixel);
      !function (w, d, t) {
        w.TiktokAnalyticsObject = t;
        var ttq = w[t] = w[t] || [];
        ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) {
          t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        };

        for (var i = 0; i < ttq.methods.length; i++) {
          ttq.setAndDefer(ttq, ttq.methods[i]);
        }

        ttq.instance = function (t) {
          for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) {
            ttq.setAndDefer(e, ttq.methods[n]);
          }

          return e;
        }, ttq.load = function (e, n) {
          var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
          ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = new Date(), ttq._o = ttq._o || {}, ttq._o[e] = n || {};
          var o = document.createElement("script");
          o.type = "text/javascript", o.async = !0, o.src = "".concat(i, "?sdkid=").concat(e, "&lib=").concat(t);
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(o, a);
        };
        ttq.load(tagId);
        ttq.page();
      }(window, document, 'ttq');
    },

    /**
     * Вставляем iFrame
     * @iframeUrl  {string} iframeUrl
     */
    insertIframe: function insertIframe(iframeUrl) {
      var iframe = '<iframe style="position: absolute;left:-9999px;" width="1" scrolling="no" height="1" frameborder="0" src="' + iframeUrl + '" seamless="seamless">';
      document.body.insertAdjacentHTML('beforeend', iframe);
    },

    /**
     * Вставляем pixel от propeller
     * @param imgSrc
     */
    insertPropellerImg: function insertPropellerImg(imgSrc) {
      var img = "<img src=\"".concat(imgSrc, "\" frameborder=\"0\" width=\"1\" height=\"1\"/>");
      document.body.insertAdjacentHTML('beforeend', img);
    },

    /**
     * Установить cookie
     * @param {String} name
     * @param {String} value
     * @param {Object} options
     */
    setCookie: function setCookie(name, value, options) {
      options = options || {};
      var expires = options.expires;

      if (typeof expires == 'number' && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
      }

      if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
      }

      value = encodeURIComponent(value);
      var updatedCookie = "".concat(name, "=").concat(value);

      for (var propName in options) {
        if (options.hasOwnProperty(propName)) {
          updatedCookie += "; ".concat(propName);
          var propValue = options[propName];

          if (propValue !== true) {
            updatedCookie += "=".concat(propValue);
          }
        }
      }

      document.cookie = updatedCookie;
    },

    /**
     * Удалить cookie
     * @param {String} name
     */
    deleteCookie: function deleteCookie(name) {
      this.setCookie(name, '', {
        expires: -1
      });
    },

    /**
     * Запускаем JS тесты по хештегу #test
     * @return {void}
     */
    checkTest: function checkTest() {
      $(function () {
        // Проверка тестирования
        if (window.location.hash === '#test') {
          var jsTest = document.createElement('script');
          jsTest.setAttribute('src', '/cdn/js/lead' + 'bit_test.js');
          document.body.appendChild(jsTest);
        }
      });
    },

    /**
     * Генератор рандомных чисел
     * @param  {int} min Минимальное значение
     * @param  {int} max Максимальное значение
     * @return {int}     Рандомное число
     */
    randomInt: function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Получаем GET параметр из URL
     * @param  {String} name Имя параметра
     * @return {String}
     */
    queryGET: function queryGET(name) {
      if (name = new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)').exec(location.search)) {
        return name[1] ? decodeURIComponent(name[1]) : 0;
      }
    }
  };
  $(function () {
    window.App = new LB();
  });
})();

/***/ })
/******/ ]);