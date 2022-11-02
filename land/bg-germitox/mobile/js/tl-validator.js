// for correct work form must have
// - class "al-form"
// - option with selected country in select name="country"
// - two text fields with name "name, phone"
// - button submit
// - if "settings" (fills below) hasn't "phonesCode" for country - this validation ignore

(function(GlobalObj) {
  // data
  var settings = {
    // phone codes
    phonesCode: {
      DE: 49,
      AT: 43,
      RU: 7,
      FR: 33,
      IT: 39,
      BG: 359,
      ES: 34,
      PT: 351,
      GR: 30,
      CY: 357,
      SI: 386,
      SK: 421,
      CZ: 420,
      HU: 36,
      RO: 40,
      PL: 48,
      HR: 385,
      RS: 381,
      LT: 370,
      MY: 60,
      VN: 84,
      IN: 91,
      TH: 66,
      NG: 234,
      LV: 371,
      EE: 372,
      ID: 62,
      AL: 355,
      NL: 31,
      BE: 32,
      MA: 212,
      XK:383
    },

    // phone length
    phoneMinLength: 9,
    phoneMaxLength: 15,

    // allow btn codes
    allowedBtnCodes: [
      43,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      45,
      32,
      40,
      41,
      229,
      8,
      13
    ],

    // massages errors list
    massages: {
      EN: {
        fillName: "Enter your name",
        fillPhone: "Enter your number",
        incorrectPhone: "Error, incorrect number"
      },
      RU: {
        fillName: "Введите ФИО",
        fillPhone: "Введите номер",
        incorrectPhone: "Ошибка, некорректный номер"
      },
      ES: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto"
      },
      FR: {
        fillName: "Entrez votre nom et prénom",
        fillPhone: "Entrez le numéro de téléphone",
        incorrectPhone: "Erreur, numéro incorrect"
      },
      IT: {
        fillName: "Inserire il nome ed il cognome",
        fillPhone: "Inserire il numero di telefono",
        incorrectPhone: "Errore, numero sbagliato"
      },
      PT: {
        fillName: "Introduza seu nome e sobrenome",
        fillPhone: "Introduza o número de telemovel",
        incorrectPhone: "Error, número incorrecto"
      },
      GR: {
        fillName: "Εισάγετε το όνομα και το επώνυμο",
        fillPhone: "Εισάγετε τον αριθμό τηλεφώνου",
        incorrectPhone: "Σφάλμα, λάθος νούμερο"
      },
      CY: {
        fillName: "Εισάγετε το όνομα και το επώνυμο",
        fillPhone: "Εισάγετε τον αριθμό τηλεφώνου",
        incorrectPhone: "Σφάλμα, λάθος νούμερο"
      },
      BG: {
        fillName: "Име",
        fillPhone: "Телефон номер",
        incorrectPhone: "Грешка, невалиден номер"
      },
      SI: {
        fillName: "Napišite svoje ime in priimek",
        fillPhone: "Napišite svojo telefonsko številko",
        incorrectPhone: "Napačna številka"
      },
      SK: {
        fillName: "Zadajte Meno a Priezvisko",
        fillPhone: "Zadajte telefónne číslo",
        incorrectPhone: "Chyba, zlé číslo"
      },
      CZ: {
        fillName: "Zadejte Jméno Příjmení",
        fillPhone: "Zadejte telefonní číslo",
        incorrectPhone: "Chyba, není platné číslo"
      },
      HU: {
        fillName: "Vezetéknév, keresztnév",
        fillPhone: "Telefon",
        incorrectPhone: "Hiba, helytelen számot adott meg"
      },
      RO: {
        fillName: "Nume de tip",
        fillPhone: "Introduceţi numărul de",
        incorrectPhone: "Număr invalid eroare"
      },
      PL: {
        fillName: "Wpisz swoje imię i nazwisko",
        fillPhone: "Podaj swoj numer",
        incorrectPhone: "Błąd , nieprawidłowy numer"
      },
      DE: {
        fillName: "Geben Sie Ihren Namen ein",
        fillPhone: "Geben Sie Ihre Telefonnummer ein",
        incorrectPhone: "Eingabefehler, die Nummer ist inkorrekt",
        lessNineSymbols: "Eingabefehler, die Nummer ist inkorrekt"
      },
      AT: {
        fillName: "Geben Sie Ihren Namen ein",
        fillPhone: "Geben Sie Ihre Telefonnummer ein",
        incorrectPhone: "Eingabefehler, die Nummer ist inkorrekt",
        lessNineSymbols: "Eingabefehler, die Nummer ist inkorrekt"
      },
      MY: {
        fillName: "Masukkan Nama",
        fillPhone: "Masukkan nombor",
        incorrectPhone: "Ralat, nombor yang salah"
      },
      LT: {
        fillName: "Įveskite savo vardą",
        fillPhone: "Įveskite savo telefono numerį",
        incorrectPhone: "Klaidingas telefono numeris"
      },
      // Вьетнам
      VN: {
        fillName: "Nhập họ tên",
        fillPhone: "Nhập số điện thoại",
        incorrectPhone: "Lỗi, số điện thoại không đúng"
      },
      // Индия
      IN: {
        fillName: "नाम भरे",
        fillPhone: "आपका नम्बर",
        incorrectPhone: "ग़लत नम्बर"
      },
      // Хорватия
      HR: {
        fillName: "Upišite Ime i Prezime",
        fillPhone: "Upišite broj telefona",
        incorrectPhone: "Pogreška, nepravilan broj"
      },
      // Сербия
      RS: {
        fillName: "Unesite IME i PREZIME",
        fillPhone: "Unesite broj telefona",
        incorrectPhone: "Greška, nekorektan broj"
      },
      TH: {
        fillName: "ใส่ชื่อ",
        fillPhone: "ใส่เบอร์โทร",
        incorrectPhone: "Error, หมายเลขโทรศัพท์ไม่ถูกต้อง"
      },
      LV: {
        fillName: "Ievadiet jūsu vārdu",
        fillPhone: "Ievadiet jūsu numuru",
        incorrectPhone: "Kļūda, numurs norādīts nepareizi"
      },
      EE: {
        fillName: "Sisestage oma nimi",
        fillPhone: "Sisestage oma number",
        incorrectPhone: "Viga, vale number"
      },
      AL: {
        fillName: "Vendos emrin dhe mbiemrin",
        fillPhone: "Vendos numrin e telefonit",
        incorrectPhone: "Gabim, numri nuk është i saktë"
      }
    }
  };

  // Validator main
  function Validator(settings) {
    this.forms = [].slice.call(document.querySelectorAll(".al-form"));
    this.settings = settings || {};
    this.isLabel = this._getPerameterFromJSON("label") == "true";
    this.isLang = this._getPerameterFromJSON("lang");
    if (!this.isLabel) {
      this.setRelativeForm(this.forms);
      this._setStylesTooltips();
    }
    this._addEvents();
    return this;
  }

  Validator.prototype.DEFAULT_SETTINGS = {
    phonesCode: "",
    isClicked: false,
    phoneMinLength: 9,
    phoneMaxLength: 15,
    allowedBtnCodes: [
      43,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      45,
      32,
      40,
      41,
      229,
      8,
      13
    ],
    massages: {
      fillName: "Enter your name",
      fillPhone: "Enter your number",
      incorrectPhone: "Error, incorrect number"
    }
  };
  Validator.prototype._getParamsFromScriptURL = function() {
    var index = 0;
    var paramsJSON = {};
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var scriptSrc = scripts[i].getAttribute("src");
      if (scriptSrc && scriptSrc.indexOf("tl-validator") !== -1) {
        index = i;
      }
    }
    var validatorScript = scripts[index];
    var scriptURL = validatorScript.src;
    if (scriptURL.indexOf("?") !== -1) {
      var params = scriptURL.substring(scriptURL.indexOf("?") + 1);
      params.split("&").forEach(function(part) {
        var item = part.split("=");
        paramsJSON[item[0]] = decodeURIComponent(item[1]);
      });
    }
    return paramsJSON;
  };

  Validator.prototype._getPerameterFromJSON = function(query) {
    var result = "";
    try {
      result = this._getParamsFromScriptURL()[query];
    } catch (error) {
      console.warn(error);
    }
    return result;
  };
  Validator.prototype._testCountryCode = function(countryCode) {
    if (
      countryCode.toUpperCase().match(/[A-Z]{2}/i)[0] in
      this.settings.phonesCode
    ) {
      return true;
    }
    console.log(
      "%cIncorrect country code! Can't get country " + countryCode + ".",
      "color: #004ff0; font-size: 20px; font-weight: bold;"
    );
    return false;
  };
  Validator.prototype._getCountry = function() {
    if (window.countryKey) {
      window.countryKey = window.countryKey.toUpperCase();
    }
    var countryCodeURL =
      window.countryKey || this._getPerameterFromJSON("country");
    if (countryCodeURL && this._testCountryCode(countryCodeURL)) {
      return countryCodeURL.toUpperCase().match(/[A-Z]{2}/i)[0];
    } else {
      if (this.forms[0].country) {
        var options = this.forms[0].country.options;
      } else {
        var options = this.forms[0].querySelector("select").options;
      }
      var optionsLength = options.length,
        i = void 0;
      for (i = 0; i < optionsLength; i++) {
        if (options[i].selected) {
          var selectedCountryCode = options[i].value;
        }
        if (selectedCountryCode) {
          return selectedCountryCode
            .toString()
            .toUpperCase()
            .match(/[A-Z]{2}/i)[0];
        }
      }
    }
  };

  Validator.prototype._getProp = function(prop) {
    var countryCode = this._getCountry();
    if (this.isLang && prop == "massages") {
      return (
        this.settings[prop][this.isLang.toUpperCase()] ||
        this.DEFAULT_SETTINGS[prop]
      );
    }
    return this.settings[prop][countryCode] || this.DEFAULT_SETTINGS[prop];
  };

  Validator.prototype._clearPhone = function(phone) {
    return phone.replace(/[^\d]+/gi, "");
  };

  Validator.prototype._setStylesTooltips = function() {
    var styles = document.createElement("style");
    styles.innerHTML =
      '\
			.validator__tooltip { \
				position: absolute; \
				z-index: 700; \
				display: block; \
				font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; \
				font-style: normal; \
				font-weight: 400; \
				letter-spacing: normal; \
				line-break: auto; \
				line-height: 1.5; \
				text-align: left; \
				text-align: start; \
				text-decoration: none; \
				text-shadow: none; \
				text-transform: none; \
				white-space: normal; \
				word-break: normal; \
				word-spacing: normal; \
				font-size: 14px; \
				word-wrap: break-word; \
				opacity: 1; \
				padding-bottom: 5px; \
				pointer-events: none \
			} \
			.input-wrapper .error+label {\
				pointer-events: none;\
			} \
			.validator__tooltip-inner { \
				max-width: 290px; \
				padding: 3px 8px; \
				color: #fff; \
				text-align: center; \
				background-color: #cd5b20; \
				border-radius: 4px; \
			} \
			.validator__tooltip-inner::before { \
				position: absolute; \
				width: 0; \
				height: 0; \
				border-color: transparent; \
				border-style: solid; \
				bottom: 1px; \
				left: 50%; \
				margin-left: -5px; \
				content: ""; \
				border-width: 5px 5px 0; \
				border-top-color: #cd5b20; \
			}';
    document.body.appendChild(styles);
  };

  Validator.prototype._getCoords = function(elem) {
    var box = elem.getBoundingClientRect(),
      body = document.body,
      docEl = document.documentElement,
      scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
      scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
      clientTop = docEl.clientTop || body.clientTop || 0,
      clientLeft = docEl.clientLeft || body.clientLeft || 0;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  };

  Validator.prototype.insertBefore = function(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
  };

  Validator.prototype.setRelativeForm = function(forms) {
    for (var i = 0; i < forms.length; i++) {
      var currPosition = window
        .getComputedStyle(forms[i], null)
        .getPropertyValue("position");
      if (currPosition == "static") {
        forms[i].style.position = "relative";
      }
    }
  };

  Validator.prototype._createErrorMassage = function(element, massage) {
    if (this.isLabel) {
      var elId = element.id;
      if (elId) var label = document.querySelector("[for=" + elId + "]");
      if (label) label.innerText = massage;
      if (element.classList) element.classList.add("error");
      else element.className += " " + "error";
    } else {
      var errorMassage = document.createElement("div");
      errorMassage.className = "validator__tooltip";
      errorMassage.innerHTML =
        '<div class="validator__tooltip-inner">' + massage + "</div>";
      this.insertBefore(errorMassage, element);
      errorMassage.setAttribute(
        "style",
        "left:50%; margin-top: -" +
          errorMassage.clientHeight +
          "px; margin-left: -" +
          errorMassage.clientWidth / 2 +
          "px;"
      );
    }
  };

  Validator.prototype._validate = function(form, element) {
    this.massages = this._getProp("massages");
    this.phonesCode = this._getProp("phonesCode");
    this.phoneMinLength =
      this.settings.phoneMinLength || this.DEFAULT_SETTINGS.phoneMinLength;
    this.phoneMaxLength =
      this.settings.phoneMaxLength || this.DEFAULT_SETTINGS.phoneMaxLength;

    var elementName = void 0;
    if (element) {
      elementName = element.name;
    } else {
      elementName = "all";
    }
    if (this.isLabel) {
      var errorFields = form.querySelectorAll(".error");
      if (errorFields) {
        var errorFieldsLength = errorFields.length,
          i;
        for (i = 0; i < errorFieldsLength; i++) {
          if (errorFields[i].classList)
            errorFields[i].classList.remove("error");
          else
            errorFields[i].className = errorFields[i].className.replace(
              new RegExp("(^|\\b)" + "error" + "(\\b|$)", "gi"),
              " "
            );
        }
      }
    } else {
      var errorTooltips = document.querySelectorAll(".validator__tooltip");
      if (errorTooltips.length > 0) {
        var errorTooltipsLength = errorTooltips.length,
          i = void 0;
        for (i = 0; i < errorTooltipsLength; i++) {
          errorTooltips[i].parentNode.removeChild(errorTooltips[i]);
        }
      }
    }

    var valid = true;

    // validate name
    if (form.name && (elementName == "name" || elementName == "all")) {
      if (
        form.name.value === null ||
        form.name.value == "" ||
        form.name.value === undefined
      ) {
        this._createErrorMassage(form.name, this.massages.fillName);
        valid = false;
      }
    }
    // validate phone
    if (form.phone && (elementName == "phone" || elementName == "all")) {
      var clearTel = this._clearPhone(form.phone.value),
        phoneCodeRegEx = new RegExp("^(00)?" + this.phonesCode, "i"),
        phoneDigitRepeatRegEx = /(\d)\1{4,}/gi;
      var geo = this._getCountry();

      if (
        clearTel === null ||
        form.phone.value == "" ||
        clearTel === undefined
      ) {
        this._createErrorMassage(form.phone, this.massages.fillPhone);
        valid = false;
      } else if (
        (clearTel == "" && form.phone.value.length > 0) ||
        clearTel.search(phoneCodeRegEx) == -1 ||
        clearTel.search(phoneDigitRepeatRegEx) > -1
      ) {
        this._createErrorMassage(form.phone, this.massages.incorrectPhone);
        valid = false;
      } else if (geo == "DE") {
        var phoneRegExForDE = new RegExp(
          "^(00)?" + this.phonesCode + "0+",
          "i"
        );
        if (clearTel.search(phoneRegExForDE) > -1) {
          this._createErrorMassage(form.phone, this.massages.incorrectPhone);
          valid = false;
        } else if (clearTel.length < this.phoneMinLength) {
          this._createErrorMassage(form.phone, this.massages.lessNineSymbols);
          valid = false;
        } else if (clearTel.length > this.phoneMaxLength) {
          this._createErrorMassage(form.phone, this.massages.incorrectPhone);
          valid = false;
        }
      } else if (geo == "FR") {
        var phoneRegExForFR = new RegExp(
          "^(00)?" + this.phonesCode + "\\d{9}$",
          "i"
        );
        if (clearTel.search(phoneRegExForFR) == -1) {
          this._createErrorMassage(form.phone, this.massages.incorrectPhone);
          valid = false;
        }
      } else if (geo == "ES" || geo == "IT") {
        if (clearTel.length < 7 || clearTel.length > this.phoneMaxLength) {
          this._createErrorMassage(form.phone, this.massages.incorrectPhone);
          valid = false;
        }
      } else if (
        clearTel.length < this.phoneMinLength ||
        clearTel.length > this.phoneMaxLength
      ) {
        this._createErrorMassage(form.phone, this.massages.incorrectPhone);
        valid = false;
      }
    }
    // if something isn't valid
    if (!valid) {
      return false;
    }
    // if all valid
    else {
      return true;
    }
  };
  Validator.prototype._moveCursorToEnd = function(nodeElement) {
    if (typeof nodeElement.selectionStart == "number") {
      nodeElement.selectionStart = nodeElement.selectionEnd =
        nodeElement.value.length;
    } else if (typeof nodeElement.createTextRange != "undefined") {
      nodeElement.focus();
      var range = nodeElement.createTextRange();
      range.collapse(false);
      range.select();
    }
  };
  Validator.prototype._addEvents = function() {
    var _this = this,
      formLength = this.forms.length,
      i = void 0;

    for (i = 0; i < formLength; i++) {
      var form = this.forms[i],
        elementsLength = form.elements.length,
        j;

      for (j = 0; j < elementsLength; j++) {
        if (
          form.elements[j].getAttribute("type") == "button" ||
          form.elements[j].getAttribute("type") == "submit" ||
          form.elements[j].tagName == "BUTTON"
        ) {
          form.elements[j].addEventListener("click", function(event) {
            var valid = _this._validate(this.form);
            if (valid) {
              this.form.phone.value = _this._clearPhone(this.form.phone.value);
              return;
            } else {
              event.preventDefault();
            }
          });
        }
      }

      if (form.name) {
        form.name.addEventListener("blur", function() {
          _this._validate(this.form, this);
        });
      }

      if (form.phone) {
        form.phone.setAttribute("maxlength", _this._getProp("phoneMaxLength"));
        form.phone.addEventListener("focus", function() {
          if (!this.value) {
            this.value = "+" + _this._getProp("phonesCode");
            _this.isClicked = false;
          }
        });

        form.phone.addEventListener("click", function() {
          if (!_this.isClicked) {
            _this._moveCursorToEnd(this);
            _this.isClicked = true;
          }
        });

        form.phone.addEventListener("blur", function() {
          _this._validate(this.form, this);
        });

        // not for android chrome
        form.phone.addEventListener("keypress", function(event) {
          if (_this.settings.allowedBtnCodes.indexOf(event.which) < 0) {
            event.preventDefault();
            return false;
          }
        });

        form.phone.addEventListener("keyup", function(event) {
          if (/[^\+\d]+/g.test(this.value)) {
            this.value = this.value.replace(/[^\+\d]+/, "");
          }
        });
      }

      if (form.country) {
        form.country.addEventListener("change", function() {
          for (var k = 0; k < formLength; k++) {
            _this.forms[k].country.selectedIndex = this.selectedIndex;
            _this.forms[k].phone.value = "";
          }
        });
      }
    }
  };

  GlobalObj.addEventListener("DOMContentLoaded", function() {
    new Validator(settings);
  });
})(window);
