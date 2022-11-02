! function(GlobalObj) {
    var settings = {
        phonesCode: {
            AE: 971,
            AL: 355,
            AT: 43,
            BA: 387,
            BD: 880,
            BE: 32,
            BG: 359,
            CY: 357,
            CZ: 420,
            DE: 49,
            EE: 372,
            ES: 34,
            FI: 358,
            FR: 33,
            GR: 30,
            HR: 385,
            HU: 36,
            ID: 62,
            IN: 91,
            IT: 39,
            LT: 370,
            LV: 371,
            MA: 212,
            MY: 60,
            NG: 234,
            NL: 31,
            PH: 63,
            PL: 48,
            PT: 351,
            RO: 40,
            RS: 381,
            RU: 7,
            SI: 386,
            SK: 421,
            TH: 66,
            VN: 84,
            XK: 383,
            JO: 962,
            CI: 225,
            KH: 855,
            OM: 968,
            SG: 65,
            TR: 90,
            CO: 57,
            AR: 54,
            TW: 886,
            HK: 852,
            MK: 389
        },
        phoneMinLength: 9,
        phoneMaxLength: 18,
        allowedBtnCodes: [43, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 32, 40, 41, 229, 8, 13],
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
            VN: {
                fillName: "Nhập họ tên",
                fillPhone: "Nhập số điện thoại",
                incorrectPhone: "Lỗi, số điện thoại không đúng"
            },
            IN: {
                fillName: "नाम भरे",
                fillPhone: "आपका नम्बर",
                incorrectPhone: "ग़लत नम्बर"
            },
            HR: {
                fillName: "Upišite Ime i Prezime",
                fillPhone: "Upišite broj telefona",
                incorrectPhone: "Pogreška, nepravilan broj"
            },
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
            },
            BA: {
                fillName: "Unesite IME i PREZIME",
                fillPhone: "Unesite broj telefona",
                incorrectPhone: "Greška, nekorektan broj"
            },
            NL: {
                fillName: "Vul naam in",
                fillPhone: "Voer telefoonnummer in",
                incorrectPhone: "Foutmelding, nummer ongeldig"
            },
            FI: {
                fillName: "Saisimmeko nimenne",
                fillPhone: "Puhelinnumeronne",
                incorrectPhone: "Virhe, väärä numero"
            },
            KH: {
                fillName: "បញ្ចូលឈ្មោះរបស់អ្នក",
                fillPhone: "បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក",
                incorrectPhone: "លេខទូរស័ព្ទមិនត្រឹមត្រូវ"
            },
            CO: {
                fillName: "Introduzca su nombre comleto",
                fillPhone: "Introduzca su número de teléfono",
                incorrectPhone: "Error, el número de teléfono incorrecto"
            },
            MK: {
                fillName: "Внесете ги името и презимето",
                fillPhone: "Внесете го бројот",
                incorrectPhone: "Грешка, погрешен број"
            }
        }
    };

    function Validator(settings) {
        this.forms = [].slice.call(document.querySelectorAll(".al-form")), this.settings = settings || {}, this.isLabel = "true" == this._getPerameterFromJSON("label"), this.noCountryCode = "true" == this._getPerameterFromJSON("no_code"), this.countriesWithoutPlus = ["OM"];
        var _this = this;
        return setTimeout((function() {
            var _selectedCountryCode = _this._getCountry();
            _this._setCountrySettings(_selectedCountryCode)
        }), 300), this.isLang = this._getPerameterFromJSON("lang"), this.isLabel || (this.setRelativeForm(this.forms), this._setStylesTooltips()), this._addEvents(), this
    }
    Validator.prototype.DEFAULT_SETTINGS = {
        phonesCode: "",
        isClicked: !1,
        phoneMinLength: 9,
        phoneMaxLength: 18,
        allowedBtnCodes: [43, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 32, 40, 41, 229, 8, 13],
        massages: {
            fillName: "Enter your name",
            fillPhone: "Enter your number",
            incorrectPhone: "Error, incorrect number"
        }
    }, Validator.prototype._getParamsFromScriptURL = function() {
        for (var index = 0, paramsJSON = {}, scripts = document.getElementsByTagName("script"), i = 0; i < scripts.length; i++) {
            var scriptSrc = scripts[i].getAttribute("src");
            scriptSrc && -1 !== scriptSrc.indexOf("tl-validator") && (index = i)
        }
        var validatorScript, scriptURL = scripts[index].src,
            params; - 1 !== scriptURL.indexOf("?") && scriptURL.substring(scriptURL.indexOf("?") + 1).split("&").forEach((function(part) {
            var item = part.split("=");
            paramsJSON[item[0]] = decodeURIComponent(item[1])
        }));
        return paramsJSON
    }, Validator.prototype._setCountrySettings = function(countryCode) {
        "IN" !== countryCode && "PH" !== countryCode || (this.noCountryCode = !0)
    }, Validator.prototype._getPerameterFromJSON = function(query) {
        var result = "";
        try {
            result = this._getParamsFromScriptURL()[query]
        } catch (error) {
            console.warn(error)
        }
        return result
    }, Validator.prototype._testCountryCode = function(countryCode) {
        return countryCode.toUpperCase().match(/[A-Z]{2}/i)[0] in this.settings.phonesCode || (console.log("%cIncorrect country code! Can't get country " + countryCode + ".", "color: #004ff0; font-size: 20px; font-weight: bold;"), !1)
    }, Validator.prototype._getCountry = function() {
        window.countryKey && (window.countryKey = window.countryKey.toUpperCase());
        var countryCodeURL = window.countryKey || this._getPerameterFromJSON("country");
        if (countryCodeURL && this._testCountryCode(countryCodeURL)) return countryCodeURL.toUpperCase().match(/[A-Z]{2}/i)[0];
        if (this.forms[0].country) var options = this.forms[0].country.options;
        else var options = this.forms[0].querySelector("select").options;
        var optionsLength = options.length,
            i = void 0;
        for (i = 0; i < optionsLength; i++) {
            if (options[i].selected) var selectedCountryCode = options[i].value;
            if (selectedCountryCode) return selectedCountryCode.toString().toUpperCase().match(/[A-Z]{2}/i)[0]
        }
    }, Validator.prototype._getProp = function(prop) {
        var countryCode = this._getCountry();
        return this.isLang && "massages" == prop ? this.settings[prop][this.isLang.toUpperCase()] || this.DEFAULT_SETTINGS[prop] : this.settings[prop][countryCode] || this.DEFAULT_SETTINGS[prop]
    }, Validator.prototype._clearPhone = function(phone) {
        return phone.replace(/[^\d]+/gi, "")
    }, Validator.prototype._setStylesTooltips = function() {
        var styles = document.createElement("style");
        styles.innerHTML = '\t\t\t.validator__tooltip { \t\t\t\tposition: absolute; \t\t\t\tz-index: 700; \t\t\t\tdisplay: block; \t\t\t\tfont-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; \t\t\t\tfont-style: normal; \t\t\t\tfont-weight: 400; \t\t\t\tletter-spacing: normal; \t\t\t\tline-break: auto; \t\t\t\tline-height: 1.5; \t\t\t\ttext-align: left; \t\t\t\ttext-align: start; \t\t\t\ttext-decoration: none; \t\t\t\ttext-shadow: none; \t\t\t\ttext-transform: none; \t\t\t\twhite-space: normal; \t\t\t\tword-break: normal; \t\t\t\tword-spacing: normal; \t\t\t\tfont-size: 14px; \t\t\t\tword-wrap: break-word; \t\t\t\topacity: 1; \t\t\t\tpadding-bottom: 5px; \t\t\t\tpointer-events: none \t\t\t} \t\t\t.input-wrapper .error+label {\t\t\t\tpointer-events: none;\t\t\t} \t\t\t.validator__tooltip-inner { \t\t\t\tmax-width: 290px; \t\t\t\tpadding: 3px 8px; \t\t\t\tcolor: #fff; \t\t\t\ttext-align: center; \t\t\t\tbackground-color: #cd5b20; \t\t\t\tborder-radius: 4px; \t\t\t} \t\t\t.validator__tooltip-inner::before { \t\t\t\tposition: absolute; \t\t\t\twidth: 0; \t\t\t\theight: 0; \t\t\t\tborder-color: transparent; \t\t\t\tborder-style: solid; \t\t\t\tbottom: 1px; \t\t\t\tleft: 50%; \t\t\t\tmargin-left: -5px; \t\t\t\tcontent: ""; \t\t\t\tborder-width: 5px 5px 0; \t\t\t\tborder-top-color: #cd5b20; \t\t\t}', document.body.appendChild(styles)
    }, Validator.prototype._getCoords = function(elem) {
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
        }
    }, Validator.prototype.insertBefore = function(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode)
    }, Validator.prototype.setRelativeForm = function(forms) {
        for (var i = 0; i < forms.length; i++) {
            var currPosition;
            "static" == window.getComputedStyle(forms[i], null).getPropertyValue("position") && (forms[i].style.position = "relative")
        }
    }, Validator.prototype._createErrorMassage = function(element, massage) {
        if (this._removeState(element), element.classList ? element.classList.add("error") : element.className += " error", this.isLabel) {
            var elId = element.id;
            if (elId) var label = document.querySelector("[for=" + elId + "]");
            label && (label.innerText = massage)
        } else {
            var errorMassage = document.createElement("div");
            errorMassage.className = "validator__tooltip", errorMassage.innerHTML = '<div class="validator__tooltip-inner">' + massage + "</div>", this.insertBefore(errorMassage, element), errorMassage.setAttribute("style", "left:50%; margin-top: -" + errorMassage.clientHeight + "px; margin-left: -" + errorMassage.clientWidth / 2 + "px;")
        }
    }, Validator.prototype._removeState = function(element) {
        if (element.classList ? (element.classList.remove("error"), element.classList.remove("success")) : element.className = errorFields[i].className.replace(new RegExp("(^|\\b)(error|success)(\\b|$)", "gi"), " "), !this.isLabel) {
            var errorTooltip = element.parentNode.querySelector(".validator__tooltip");
            errorTooltip && errorTooltip.parentNode.removeChild(errorTooltip)
        }
    }, Validator.prototype._success = function(element) {
        this._removeState(element), element.classList && element.classList.add("success")
    }, Validator.prototype._validate = function(form, element) {
        this.massages = this._getProp("massages"), this.phonesCode = this._getProp("phonesCode"), this.phoneMinLength = this.settings.phoneMinLength || this.DEFAULT_SETTINGS.phoneMinLength, this.phoneMaxLength = this.settings.phoneMaxLength || this.DEFAULT_SETTINGS.phoneMaxLength;
        var elementName = void 0;
        elementName = element ? element.name : "all";
        var valid = !0;
        if (!form.name || "name" != elementName && "all" != elementName || (null === form.name.value || "" == form.name.value || form.name.value.length < 3 || void 0 === form.name.value ? (this._createErrorMassage(form.name, this.massages.fillName), valid = !1) : this._success(form.name)), form.phone && ("phone" == elementName || "all" == elementName)) {
            var clearTel = this._clearPhone(form.phone.value),
                phoneCodeRegEx = new RegExp("^(00)?" + this.phonesCode, "i"),
                phoneDigitRepeatRegEx = /(\d)\1{4,}/gi,
                geo = this._getCountry();
            if (null === clearTel || "" == form.phone.value || void 0 === clearTel) this._createErrorMassage(form.phone, this.massages.fillPhone), valid = !1;
            else if ("" == clearTel && form.phone.value.length > 0 || !this.noCountryCode && -1 == clearTel.search(phoneCodeRegEx) || clearTel.search(phoneDigitRepeatRegEx) > -1) this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1;
            else if ("DE" == geo) {
                var phoneRegExForDE = new RegExp("^(00)?" + this.phonesCode + "0+", "i");
                clearTel.search(phoneRegExForDE) > -1 ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : clearTel.length < this.phoneMinLength ? (this._createErrorMassage(form.phone, this.massages.lessNineSymbols), valid = !1) : clearTel.length > this.phoneMaxLength ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone)
            } else if ("FR" == geo) {
                var phoneRegExForFR = new RegExp("^(00)?" + this.phonesCode + "\\d{9}$", "i"); - 1 == clearTel.search(phoneRegExForFR) ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone)
            } else if ("ES" == geo || "IT" == geo) clearTel.length < 7 || clearTel.length > this.phoneMaxLength ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone);
            else if ("IN" == geo) 10 !== clearTel.length ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone);
            else if ("PH" == geo) {
                var phoneRegExForPH = new RegExp("^(" + this.phonesCode + ")?\\d{10,15}$", "i"); - 1 == clearTel.search(phoneRegExForPH) ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone)
            } else if ("JO" == geo) clearTel.length < 11 || clearTel.length > 15 ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone);
            else if ("ID" == geo) clearTel.length < 8 || clearTel.length > 14 ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone);
            else if ("OM" == geo) clearTel.length < 10 || clearTel.length > 12 ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone);
            else if ("TR" == geo) clearTel.length < 11 || clearTel.length > 13 ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone);
            else if ("MA" == geo) {
                var phoneRegExForMA = new RegExp("^(" + this.phonesCode + ")?\\d{10}$", "i"); - 1 == clearTel.search(phoneRegExForMA) ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone)
            } else "CO" == geo ? clearTel.length < 10 || clearTel.length > 13 ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone) : "AR" == geo ? 10 !== clearTel.length ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone) : "HK" == geo ? clearTel.length < 11 || clearTel.length > 15 ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone) : "MK" == geo ? clearTel.length < 11 || clearTel.length > 12 ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone) : clearTel.length < this.phoneMinLength || clearTel.length > this.phoneMaxLength ? (this._createErrorMassage(form.phone, this.massages.incorrectPhone), valid = !1) : this._success(form.phone)
        }
        return !!valid
    }, Validator.prototype._moveCursorToEnd = function(nodeElement) {
        if ("number" == typeof nodeElement.selectionStart) nodeElement.selectionStart = nodeElement.selectionEnd = nodeElement.value.length;
        else if (void 0 !== nodeElement.createTextRange) {
            nodeElement.focus();
            var range = nodeElement.createTextRange();
            range.collapse(!1), range.select()
        }
    }, Validator.prototype._addEvents = function() {
        var _this = this,
            formLength = this.forms.length,
            i = void 0;
        for (i = 0; i < formLength; i++) {
            var form = this.forms[i],
                elementsLength = form.elements.length,
                j;
            for (j = 0; j < elementsLength; j++) "button" != form.elements[j].getAttribute("type") && "submit" != form.elements[j].getAttribute("type") && "BUTTON" != form.elements[j].tagName || form.elements[j].addEventListener("click", (function(event) {
                var valid;
                if (_this._validate(this.form)) {
                    var geo = _this._getCountry(),
                        phoneVal = this.form.phone.value;
                    return phoneVal = _this._clearPhone(phoneVal), "PH" === geo && (phoneVal = "63" + phoneVal.replace(/^63(\d{10,15})/, "$1")), void(this.form.phone.value = phoneVal)
                }
                event.preventDefault()
            }));
            form.name && form.name.addEventListener("blur", (function() {
                _this._validate(this.form, this)
            })), form.phone && (form.phone.setAttribute("maxlength", _this._getProp("phoneMaxLength")), form.phone.addEventListener("focus", (function() {
                if (!this.value) {
                    if (!_this.noCountryCode) {
                        var geo = _this._getCountry(); - 1 === _this.countriesWithoutPlus.indexOf(geo) && (this.value = "+"), this.value += _this._getProp("phonesCode")
                    }
                    _this.isClicked = !1
                }
            })), form.phone.addEventListener("click", (function() {
                _this.isClicked || (_this._moveCursorToEnd(this), _this.isClicked = !0)
            })), form.phone.addEventListener("blur", (function() {
                _this._validate(this.form, this)
            })), form.phone.addEventListener("keypress", (function(event) {
                if (_this.settings.allowedBtnCodes.indexOf(event.which) < 0) return event.preventDefault(), !1
            })), form.phone.addEventListener("keyup", (function(event) {
                /[^\+\d]+/g.test(this.value) && (this.value = this.value.replace(/[^\+\d]+/, ""))
            }))), form.country && form.country.addEventListener("change", (function() {
                for (var k = 0; k < formLength; k++) _this.forms[k].country.selectedIndex = this.selectedIndex, _this.forms[k].phone.value = ""
            }))
        }
    }, GlobalObj.addEventListener("DOMContentLoaded", (function() {
        new Validator(settings)
    }))
}(window);