$('<meta name="robots" content="noindex, nofollow" />').insertAfter('title');
$('<div class="error-box"></div>').insertAfter('input[name="fio"]');
$('<div class="error-box"></div>').insertAfter('input[name="name"]');
$('<div class="error-box"></div>').insertAfter('input[name="phone"]');
$('input[name="fio"]').attr("required","");
$('input[name="name"]').attr("required","");
$('input[name="phone"]').attr("required","");
$('input[name="phone"]').addClass('phone').prop('type', 'tel');
$('form').addClass('intlTelInput');


var languageError = {
  "RU": {
    "name": "Неверно заполнено имя",
    "noPhone": "Вы не заполнили телефон",
    "errorPhone": "Неверно заполнен номер телефона"
  },
  "CZ": {
    "name": "Špatně napsané jméno",
    "noPhone": "Nenapsali jste telefonní číslo",
    "errorPhone": "Neplatné telefonní číslo"
  },
  "LT": {
    "name": "Неверно заполнено имя",
    "noPhone": "Вы не заполнили телефон",
    "errorPhone": "Неверно заполнен номер телефона"
  },
  "BG": {
    "name": "Неправилно попълнено име",
    "noPhone": "Вие не сте попълнили телефон",
    "errorPhone": "Невалиден телефонен номер"
  },
  "ES": {
    "name": "Nombre no válido",
    "noPhone": "Usted no cargar en el teléfono",
    "errorPhone": "Inválida Teléfono lleno"
  },
  "EN": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "IT": {
    "name": "Il campo \"nome\" non è compilato correttamente",
    "noPhone": "Non hai compilato un numero di telefono",
    "errorPhone": "Il campo con il numero di telefono è sbagliato"
  },
  "MY": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "MS": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "TH": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "SG": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "DE": {
    "name": "Der Name ist falsch eingegeben",
    "noPhone": "Sie haben die Telefonnummer nicht ausgefüllt",
    "errorPhone": "Die Telefonnummer ist falsch eingegeben"
  },
  "AT": {
    "name": "Der Name ist falsch eingegeben",
    "noPhone": "Sie haben die Telefonnummer nicht ausgefüllt",
    "errorPhone": "Die Telefonnummer ist falsch eingegeben"
  },
  "GR": {
    "name": "Το πεδίο δεν έχει συμπληρώθει με το σωστό όνομα",
    "noPhone": "Δεν πληκτρολογήσατε τον αριθμό του κινητού σας",
    "errorPhone": "Πληκτρολογήσατε έναν μη έγκυρο αριθμό"
  },
  "PL": {
    "name": "Niepoprawnie zapełnione imię",
    "noPhone": "Nie podano numeru telefonu",
    "errorPhone": "Niepoprawnie zapełniony numer telefonu"
  },
  "RO": {
    "name": "Nu ați indicat corect numele, prenumele",
    "noPhone": "Nu ați indicat numărul de telefon",
    "errorPhone": "Număr de telefon incorect"
  },
  "MD": {
    "name": "Неверно заполнено имя",
    "noPhone": "Вы не заполнили телефон",
    "errorPhone": "Неверно заполнен номер телефона"
  },
  "SE": {
    "name": "Felaktigt namn",
    "noPhone": "Du har inte fyllt telefonnummer",
    "errorPhone": "Felaktigt telefonnummer"
  },
  "CH": {
    "name": "Der Name ist falsch eingegeben",
    "noPhone": "Sie haben die Telefonnummer nicht ausgefüllt",
    "errorPhone": "Die Telefonnummer ist falsch eingegeben"
  },
  "NO": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "HU": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "SI": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "PT": {
    "name": "O Nome não foi preenchido corretamente",
    "noPhone": "Você não adicionou o telefone",
    "errorPhone": "O número de telefone não foi preenchido corretamente"
  },
  "BR": {
    "name": "O Nome não foi preenchido corretamente",
    "noPhone": "Você não adicionou o telefone",
    "errorPhone": "O número de telefone não foi preenchido corretamente"
  },
  "RS": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "SK": {
    "name": "Špatně napsané jméno",
    "noPhone": "Nenapsali jste telefonní číslo",
    "errorPhone": "Neplatné telefonní číslo"
  }
};



var rv_name = /^[A-ZА-ЯЁ\s-]*$/i; // регулярное выражение для поля name
var rv_mask = /^\+7\(___\)(.*)/; // регулярное выражение для поля маски
var boolChangeSelect = true;

function errorLanguage (country){ // язык ошибки
    if (!(country)){
        country = "EN";
    }
    errorName = languageError[(country)]["name"];
    errorNoPhone = languageError[(country)]["noPhone"];
    errorPhone = languageError[(country)]["errorPhone"];
}

function showError (t, text){ // css элементы для ошибки
    t.next('.error-box').show();
    t.removeClass('not_error').addClass('error');
    t.next('.error-box').html(text)
}

function notError (t){
    t.next('.error-box').hide();
    t.addClass('not_error');
}

function addMask(t){
    t.mask("+7(999)? 999-9999");
    t.attr( "placeholder","+7(999) 999-9999");
}

function libPhoneNumber (t) {
    t.attr( "placeholder","");
    t.intlTelInput("destroy");
    t.intlTelInput({
        allowExtensions: true,
        autoFormat: true,
        nationalMode: false,
        utilsScript: "js/utils.js"
    });
    $('<div class="error-box"></div>').insertAfter('input[name="phone"]');
}

function nameInputName(){
    if ($('input[name="name"]').length > 0){
        formName = "name";
    }else if ($('input[name="fio"]').length > 0){
        formName = "fio";
    }
}

function selectCountry(defaultSelectCountry){
    $('select[name="country"]').children("option").attr("selected", false);
    $('select[name="country"]').children('option[value="'+ defaultSelectCountry +'"]').attr("selected", true);
    $('select[name="country"]').change();
}

function changeSelect(dataId){
    if (boolChangeSelect){
        boolChangeSelect = false;
        $('select[name="country"]').children("option").attr("selected", false);
        $('select[name="country"]').children('option[data-id="'+ dataId +'"]').attr("selected", true);
        $('select[name="country"]').change();
        boolChangeSelect = true;
    }
}

function textPriseAndLabel(dataId) {

    if ($('.priceForLandingInfoApi')) {
        $('.priceForLandingInfoApi').text(infoForLannding[dataId]['price']);
    }
    if ($('.labelForLandingInfoApi')) {
        $('.labelForLandingInfoApi').text(infoForLannding[dataId]['labelPrice']);
    }
    if ($('.priceAndLabelForLandingInfoApi')) {
        $('.priceAndLabelForLandingInfoApi').text(infoForLannding[dataId]['price'] + " " + infoForLannding[dataId]['labelPrice']);
    }
    if ($('.oldPriceForLandingInfoApi')) {
        $('.oldPriceForLandingInfoApi').text(infoForLannding[dataId]['oldPrice']);
    }
    if ($('.oldPriceAndLabelForLandingInfoApi')) {
        $('.oldPriceAndLabelForLandingInfoApi').text(infoForLannding[dataId]['oldPrice'] + " " + infoForLannding[dataId]['labelPrice']);
    }
}

$(document).ready(function(){

    textPriseAndLabel(0);

    $('form').on('submit', function () {
        var validate = true;
        var i = 0;
        $('.error-box:parent').each(function () {
            i = i + 1;
            if ($(this).css('display') == 'block'){
                validate = false;
            }
        });
        return validate;
    });

    nameInputName();

    $('input[name="'+ formName +'"] , input[name="phone"]').blur( function(){

        var id = $(this).attr('name');
        var val = $(this).val();

        switch(id)
        {
            case formName :

                if(val.length > 2 && val != '' && rv_name.test(val)){
                    notError($(this));
                } else {
                    showError ($(this) , errorName);
                }
                break;

            case 'phone':

                if (rv_mask.test(val)){ val = ""; }
                if (val == ''){
                    showError ($(this) , errorNoPhone );
                }

                if(val != '' && val.length >= 12){
                    notError($(this));
                }  else if ( val != '' && val.length <= 12 ){
                    showError ($(this), errorPhone );
                }

                if (val.indexOf('ext') + 1){
                    showError ($(this), errorPhone );
                }
                break;
        }

    })

});

var country = [];
var countryEn  = 0;
$(".intlTelInput").each(function() {
    var t = this;
    nameInputName()

    if ($(t).find("input[name='country']").val() ) {

        if ($(t).find("input[name='country']").val() != "RU"){

            libPhoneNumber ($(t).find(".phone"));
            country[countryEn] = $(t).find("input[name='country']").val();
            $(t).find(".phone").intlTelInput("selectCountry", country[countryEn]);
            errorLanguage ($(t).find("input[name='country']").val());

        } else {

            $(t).find(".phone").intlTelInput("destroy");
            addMask($(t).find('.phone'));
            errorLanguage ($(t).find("input[name='country']").val());

        }

    }
    if ($(t).find('select[name="country"] option:selected').length > 0 ){

        dataIdDefault = $(t).find('select[name="country"] option:selected').data('id');

        if ($(t).find('select[name="country"] option:selected').val() != "RU") {

            libPhoneNumber ($(t).find(".phone"));
            country[countryEn] = $(t).find('select[name="country"] option:selected').val();
            $(t).find(".phone").intlTelInput("selectCountry", country[countryEn]);
            errorLanguage ($(t).find("select[name='country'] option:selected").val());
            notError($(t).find('input[name="'+ formName +'"]'));
        } else {

            $(t).find(".phone").intlTelInput("destroy");
            addMask($(t).find('.phone'));
            errorLanguage ($(t).find("select[name='country'] option:selected").val());
            notError($(t).find('input[name="'+ formName +'"]'));
        }

        $(t).find("select[name='country']").change(function () {
            parentsChange = $(this).parents('.intlTelInput');
            if (parentsChange.find('select[name="country"] option:selected').val() != "RU"){
                dataId = parentsChange.find('select[name="country"] option:selected').data('id');


                country[countryEn] = $(t).find("select[name='country'] option:selected").val();
                notError($(t).find('.phone'));
                parentsChange.find('.phone').unmask();
                // parentsChange.find('.phone').attr( "placeholder","");
                libPhoneNumber (parentsChange.find(".phone"));
                parentsChange.find(".phone").intlTelInput("selectCountry", country[countryEn]);
                errorLanguage (parentsChange.find("select[name='country'] option:selected").val());
                notError(parentsChange.find('input[name="'+ formName +'"]'));
                changeSelect(dataId);

            } else {
                dataId = parentsChange.find('select[name="country"] option:selected').data('id');

                parentsChange.find('.phone').unmask();
                parentsChange.find(".phone").intlTelInput("destroy");
                addMask(parentsChange.find('.phone'));
                errorLanguage (parentsChange.find("select[name='country'] option:selected").val());
                notError(parentsChange.find('input[name="'+ formName +'"]'));
                changeSelect(dataId);

            }
        });
    }
    countryEn++;
});
