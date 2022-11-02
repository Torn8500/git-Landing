//для клонирования блока в попап используются следующие айдишники
// #cloneThis - для десктопа
// #cloneMobileThis - для мобильного (если нужно)
//брейкпоинт для переключения попапа при необходимости дефолт значение = 1000

// в случае, если мы не клонируем форму, а верстаем попап произвольно,
// то делать это необходимо в контейнере с классом .ever-popup-build
// false (показывать контейнер) / true (не показывать контейнер)

var popupBuild = true; // false/true


//.ever-popup-btn - класс для для открытия попапа

//проверка кода
//.check__field - класс для поля проверки кода
//.check__btn - класс для кнопки провеки кода
//.check__result - класс для контейнера с результатом проверки кода

//таймер
//для вывода счетчика таймера используется 3 контенера (часы, минуты, секунды)
//.hours класс для вывода часов
//.minutes класс для вывода минут
//.seconds класс для вывода секунд

(function () {

    function initiate() {

        var breakpoint = 999,
            desktop = document.querySelector('#cloneThis'),
            mobile = document.querySelector('#cloneMobileThis');

        if (popupBuild) {
            // в случае, если мы верстаем попап в контейнере .ever-popup-build, даное условие прячет его, если значение переменной popupBuild = true
            var style = document.createElement('style');
            style.innerHTML = '.ever-popup-build{position: fixed; opacity: 0;z-index: -1; top: 0; left: 0;}';
            document.querySelector('head').appendChild(style)
        }

        function addPopupStyle() {
            // добавляем стили для нашего поапа
            var cont = document.createElement('style'),
                head = document.querySelector('head');
            cont.innerHTML = '.ever-popup__body.ever-mobile{display:none}.ever-popup{position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,.7);z-index: 111;display: none;overflow: auto;}.ever-popup__body{position: static;float: none;display: block;margin: 0 auto;width:auto}.ever-popup.show{display: block;align-items: center;}.ever-popup__inner{position: relative;margin: 0 auto;padding-top:35px}.ever-popup__close{width: 35px;height: 30px;position: absolute;cursor:pointer;top: 0;right: 0;z-index: 1;-webkit-transition: .3s; -moz-transition: .3s; -ms-transition: .3s; -o-transition: .3s; transition: .3s;}.ever-popup__close:after, .ever-popup__close:before {content: "";position: absolute;right: 0;top: 10px;width: 35px;height: 10px;background: #fff;transition: all 1s;}.ever-popup__close:after {-webkit-transform: rotate(-45deg);-ms-transform: rotate(-45deg);-o-transform: rotate(-45deg);transform: rotate(-45deg);}.ever-popup__close:before {-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);transform: rotate(45deg);}' +
                '@media screen and (max-width: ' + breakpoint + 'px' + '){' +
                '.ever-popup__body.ever-desktop{display:none}' +
                '.ever-popup__body.ever-mobile{display:block}' +
                '}';
            head.appendChild(cont)
        }

        function addMobilePopupStyle() {
            // добавляем стили для нашего поапа
            var cont = document.createElement('style'),
                head = document.querySelector('head');
            cont.innerHTML = '@media screen and (max-width: ' + breakpoint + 'px' + ') {.ever-popup {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, .7);z-index: 111;display: none;overflow: auto;}.ever-popup__body {position: static;float: none;display: block;margin: 0 auto;width: auto}.ever-popup.show {display: block;align-items: center;}.ever-popup__inner {position: relative;margin: 0 auto;padding-top: 35px}.ever-popup__close {width: 35px;height: 30px;position: absolute;cursor: pointer;top: 0;right: 0;z-index: 1;-webkit-transition: .3s;-moz-transition: .3s;-ms-transition: .3s;-o-transition: .3s;transition: .3s;}.ever-popup__close:after, .ever-popup__close:before {content: "";position: absolute;right: 0;top: 10px;width: 35px;height: 10px;background: #fff;transition: all 1s;}.ever-popup__close:after {-webkit-transform: rotate(-45deg);-ms-transform: rotate(-45deg);-o-transform: rotate(-45deg);transform: rotate(-45deg);}.ever-popup__close:before {-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);transform: rotate(45deg);}}';
            head.appendChild(cont)
        }

        function createOverlay() {
            // создаем затемненный фон для попапа и вставляем его в разметку html
            var parent = document.createElement('div'),
                parentInner = document.createElement('div'),
                closeParent = document.createElement('div');

            parent.classList.add('ever-popup');
            parentInner.classList.add('ever-popup__inner');
            closeParent.classList.add('ever-popup__close');

            parent.appendChild(parentInner);
            parentInner.appendChild(closeParent);
            document.body.appendChild(parent);
        }

        function createModalBody(breakpoint) {
            // функция определяет содержимое для попапа, клонирует его содержимое, и поещает в контейнер ever-popup__body
            var parent = document.querySelector('.ever-popup__inner');

            if (desktop) {
                var desktopClone = desktop.cloneNode(true);
                desktopClone.classList.add('ever-popup__body');
                desktopClone.removeAttribute('id');
                parent.appendChild(desktopClone);
                document.querySelector('.ever-popup .ever-popup__inner').style.width = document.querySelector('#cloneThis').offsetWidth + 'px';
            }

            if (mobile) {
                var mobileClone = mobile.cloneNode(true);
                if (desktopClone) {
                    desktopClone.classList.add('ever-desktop');
                }
                mobileClone.classList.add('ever-popup__body');
                mobileClone.classList.add('ever-mobile');
                mobileClone.removeAttribute('id');
                parent.appendChild(mobileClone);
                var mobileStyles = '.ever-desktop{display: block}.ever-mobile{display: none}@media screen and (max-width: ' + breakpoint + 'px){.ever-mobile{display: block}.ever-desktop{display: none;}}';

                var mobileStylesContainer = document.createElement('style');
                mobileStylesContainer.innerHTML = mobileStyles;
                document.querySelector('head').appendChild(mobileStylesContainer)
                document.querySelector('.ever-popup .ever-popup__inner').style.width = document.querySelector('#cloneMobileThis').offsetWidth + 'px';
                console.log(mobile.offsetWidth)
            }


        }

        function modalPosition(screenHeight) {
            //расчет ширины и вывод ее в html, функция вызывается при загрузке страницы, а так же при ресайзе
            var container = document.querySelector('.ever-popup  .ever-popup__inner');
            if (container) {

                var desktop = document.querySelector('#cloneThis'),
                    mobile = document.querySelector('#cloneMobileThis');


                if (desktop) {
                    checkPosition(desktop, container, screenHeight);
                    if (window.innerWidth >= breakpoint) {
                        container.style.width = desktop.offsetWidth + 'px';
                    }
                    if (!mobile) {
                        container.style.width = desktop.offsetWidth + 'px';
                    }
                }
                if (mobile) {
                    checkPosition(mobile, container, screenHeight);
                    if (window.innerWidth <= breakpoint) {
                        container.style.width = mobile.offsetWidth + 'px';
                    }
                }
            }
        }

        function checkPosition(selector, container, screenHeight) {
            //позиционирование попапа по вертикали

            var cont = selector,
                contHeight = cont.offsetHeight;

            if (contHeight > screenHeight) {
                container.style.margin = '40px auto';
            } else {
                var top = (screenHeight - contHeight) / 2;
                container.style.margin = top + 'px auto 20px';
            }
        }

        function showPopup() {
            //функция для показа попапа
            var popup = document.querySelector('.ever-popup');
            popup.classList.add('show')
        }

        function hidePopup() {
            //функция для скрытия попапа
            var popup = document.querySelector('.ever-popup');
            popup.classList.remove('show')
        }

        function notHide(e) {
            //функция для прерывания выполнения сценария по клику
            e.stopPropagation()
        }

        function checkCode(event) {
            // проверка кода подлинности
            event.preventDefault();

            var code = document.querySelector(".check__field").value,
                msg = document.querySelector(".check__result");

            if (code.length === 15) {
                msg.innerHTML = 'Данный код верен. Спасибо, что выбрали нашу продукцию!';
            } else if (code.length === 0) {
                msg.innerHTML = 'Введите, пожалуйста, код.';
            } else {
                msg.innerHTML = 'К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.';
            }
        }

        var mouseOutCount = 0;
        document.body.addEventListener('mouseleave', function (event) {
            //событие на увод мышки со страницы. если мышка уходит за верхнюю границу документа, вызывается попап
            var e = event || window.event;
            e = e.clientY;
            var popup = document.querySelector('.ever-popup');

            if (popup && e < 10 && mouseOutCount === 0) {
                popup.classList.add('show');
                mouseOutCount++;
            }
        });

        function addPhoneBtn(breakpoint) {
            // добавление синей трубки для вызова попапа на десктопе
            var phoneBtnContainer = document.createElement('div');
            phoneBtnContainer.classList.add('phoneBtnContainer');
            phoneBtnContainer.innerHTML = '<div class="bluePhone"><div class=" phone-call cbh-phone cbh-green cbh-show ever-popup-btn cbh-static" id="clbh_phone_div"><div class="phoneJs"><div class="cbh-ph-circle"></div><div class="cbh-ph-circle-fill"></div><div class="cbh-ph-img-circle1"></div></div></div></div>';
            document.body.appendChild(phoneBtnContainer);

            var phoneStyles = document.createElement('style');
            phoneStyles.innerHTML = '.phoneBtnContainer{position:fixed; right: 10px;bottom: 10px; visibility:hidden;background-color:transparent;width:200px;height:200px;cursor:pointer;z-index:99;-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0);-webkit-transition:visibility .5s;-moz-transition:visibility .5s;-o-transition:visibility .5s;transition:visibility .5s}.cbh-phone.cbh-show{visibility:visible}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);-ms-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none}}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeOutRight{0%{opacity:1}100%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{0%{opacity:1}100%{opacity:0;-webkit-transform:translate3d(100%,0,0);-ms-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}.cbh-phone.cbh-static1{opacity:.6}.cbh-phone.cbh-hover1{opacity:1}.cbh-ph-circle{width:160px;height:160px;top:20px;left:20px;position:absolute;background-color:transparent;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:2px solid rgba(30,30,30,.4);opacity:.1;-webkit-animation:cbh-circle-anim 1.2s infinite ease-in-out;-moz-animation:cbh-circle-anim 1.2s infinite ease-in-out;-ms-animation:cbh-circle-anim 1.2s infinite ease-in-out;-o-animation:cbh-circle-anim 1.2s infinite ease-in-out;animation:cbh-circle-anim 1.2s infinite ease-in-out;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s}.cbh-phone.cbh-active .cbh-ph-circle1{-webkit-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;-moz-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;-ms-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;-o-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;animation:cbh-circle-anim 1.1s infinite ease-in-out!important}.cbh-phone.cbh-static .cbh-ph-circle{-webkit-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;-moz-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;-ms-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;-o-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;animation:cbh-circle-anim 2.2s infinite ease-in-out!important}.cbh-phone.cbh-hover .cbh-ph-circle{border-color:rgba(0,175,242,1);opacity:.5}.cbh-phone.cbh-green.cbh-hover .cbh-ph-circle{border-color:rgba(117,235,80,1);opacity:.5}.cbh-phone.cbh-green .cbh-ph-circle{border-color:rgba(0,175,242,1);opacity:.5}.cbh-phone.cbh-gray.cbh-hover .cbh-ph-circle{border-color:rgba(204,204,204,1);opacity:.5}.cbh-phone.cbh-gray .cbh-ph-circle{border-color:rgba(117,235,80,1);opacity:.5}.cbh-ph-circle-fill{width:100px;height:100px;top:50px;left:50px;position:absolute;background-color:#000;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:2px solid transparent;opacity:.1;-webkit-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-moz-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-ms-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-o-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s}.cbh-phone.cbh-active .cbh-ph-circle-fill{-webkit-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;-moz-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;-ms-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;-o-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important}.cbh-phone.cbh-static .cbh-ph-circle-fill{-webkit-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;-moz-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;-ms-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;-o-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;opacity:0!important} .cbh-phone.cbh-hover .cbh-ph-circle-fill{background-color:rgba(0,175,242,.5);opacity:.75!important}.cbh-phone.cbh-green.cbh-hover .cbh-ph-circle-fill{background-color:rgba(117,235,80,.5);opacity:.75!important}.cbh-phone.cbh-green .cbh-ph-circle-fill{background-color:rgba(0,175,242,.5);opacity:.75!important}.cbh-phone.cbh-gray.cbh-hover .cbh-ph-circle-fill{background-color:rgba(204,204,204,.5);opacity:.75!important}.cbh-phone.cbh-gray .cbh-ph-circle-fill{background-color:rgba(117,235,80,.5);opacity:.75!important}.cbh-ph-img-circle1{width:60px;height:60px;top:70px;left:70px;position:absolute;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAB/ElEQVR42uya7W3CMBCG31QM4A1aNggTlG6QbpBMkHYC1AloJ4BOABuEDcgGtBOETnD9c1ERCH/lwxeaV8oPFGP86Hy+DxMREW5Bd7gRjSDSNGn4/RiAOvm8C0ZCRD5PSkQVXSr1nK/xE3mcWimA1ZV3JYBZCIO4giQANoYxMwYS6+xKY4lT5dJPreWZY+uspqSCKPYN27GJVBDXheVSQe494ksiEWTuMXcu1dld9SARxDX1OAJ4lgjy4zDnFsC076A4adEiRwAZg4hOUSpNoCsBPDGM+HqkNGynYBCuILuWj+dgWysGsNe8nwL4GsrW0m2fxZBq9rW0rNcX5MOQ9eZD8JFahcG5g/iKT671alGAYQggpYWvpEPYWrU/HDTOfeRIX0q2SL3QN4tGhZJukVobQyXYWw7WtLDKDIuM+ZSzscyCE9PCy5IttCvnZNaeiGLNHKuz8ZVh/MXTVu/1xQKmIqLEAuJ0fNo3iG5B51oSkeKnsBi/4bG9gYB/lCytU5G9DryFW+3Gm+JLwU7ehbJrwTjq4DJU8bHcVbEV9dXXqqP6uqO5e2/QZRYJpqu2IUAA4B3tXvx8hgKp05QZW6dJqrLTNkB6vrRURLRwPHqtYgkC3cLWQAcDQGGKH13FER/NATzi786+BPDNjm1dMkfjn2pGkBHkf4D8DgBJDuDHx9BN+gAAAABJRU5ErkJggg==);background-color:rgba(30,30,30,.1);background-position:center center;background-repeat:no-repeat;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:2px solid transparent;opacity:.7;-webkit-animation:cbh-circle-img-anim 1s infinite ease-in-out;-moz-animation:cbh-circle-img-anim 1s infinite ease-in-out;-ms-animation:cbh-circle-img-anim 1s infinite ease-in-out;-o-animation:cbh-circle-img-anim 1s infinite ease-in-out;animation:cbh-circle-img-anim 1s infinite ease-in-out}.cbh-phone.cbh-active .cbh-ph-img-circle1{-webkit-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;-moz-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;-ms-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;-o-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;animation:cbh-circle-img-anim 1s infinite ease-in-out!important}.cbh-phone.cbh-static .cbh-ph-img-circle1{-webkit-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;-moz-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;-ms-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;-o-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;animation:cbh-circle-img-anim 0s infinite ease-in-out!important}.cbh-phone.cbh-hover .cbh-ph-img-circle1{background-color:rgba(0,175,242,1)}.cbh-phone.cbh-green.cbh-hover .cbh-ph-img-circle1:hover{background-color:rgba(117,235,80,1)}.cbh-phone.cbh-green .cbh-ph-img-circle1{background-color:rgba(0,175,242,1)}.cbh-phone.cbh-green .cbh-ph-img-circle1{background-color:rgba(0,175,242,1)}.cbh-phone.cbh-gray.cbh-hover .cbh-ph-img-circle1{background-color:rgba(204,204,204,1)}.cbh-phone.cbh-gray .cbh-ph-img-circle1{background-color:rgba(117,235,80,1)}@-moz-keyframes cbh-circle-anim{0%{-moz-transform:rotate(0deg) scale(0.5) skew(1deg);opacity:.1;-moz-opacity:.1;-webkit-opacity:.1;-o-opacity:.1}30%{-moz-transform:rotate(0deg) scale(.7) skew(1deg);opacity:.5;-moz-opacity:.5;-webkit-opacity:.5;-o-opacity:.5}100%{-moz-transform:rotate(0deg) scale(1) skew(1deg);opacity:.6;-moz-opacity:.6;-webkit-opacity:.6;-o-opacity:.1}}@-webkit-keyframes cbh-circle-anim{0%{-webkit-transform:rotate(0deg) scale(0.5) skew(1deg);-webkit-opacity:.1}30%{-webkit-transform:rotate(0deg) scale(.7) skew(1deg);-webkit-opacity:.5}100%{-webkit-transform:rotate(0deg) scale(1) skew(1deg);-webkit-opacity:.1}}@-o-keyframes cbh-circle-anim{0%{-o-transform:rotate(0deg) kscale(0.5) skew(1deg);-o-opacity:.1}30%{-o-transform:rotate(0deg) scale(.7) skew(1deg);-o-opacity:.5}100%{-o-transform:rotate(0deg) scale(1) skew(1deg);-o-opacity:.1}}@keyframes cbh-circle-anim{0%{transform:rotate(0deg) scale(0.5) skew(1deg);opacity:.1}30%{transform:rotate(0deg) scale(.7) skew(1deg);opacity:.5}100%{transform:rotate(0deg) scale(1) skew(1deg);opacity:.1}}@-moz-keyframes cbh-circle-fill-anim{0%{-moz-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{-moz-transform:rotate(0deg) -moz-scale(1) skew(1deg);opacity:.2}100%{-moz-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@-webkit-keyframes cbh-circle-fill-anim{0%{-webkit-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{-webkit-transform:rotate(0deg) scale(1) skew(1deg);opacity:.2}100%{-webkit-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@-o-keyframes cbh-circle-fill-anim{0%{-o-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{-o-transform:rotate(0deg) scale(1) skew(1deg);opacity:.2}100%{-o-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@keyframes cbh-circle-fill-anim{0%{transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{transform:rotate(0deg) scale(1) skew(1deg);opacity:.2}100%{transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@keyframes cbh-circle-img-anim{0%{transform:rotate(0deg) scale(1) skew(1deg)}10%{transform:rotate(-25deg) scale(1) skew(1deg)}20%{transform:rotate(25deg) scale(1) skew(1deg)}30%{transform:rotate(-25deg) scale(1) skew(1deg)}40%{transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{transform:rotate(0deg) scale(1) skew(1deg)}}@-moz-keyframes cbh-circle-img-anim{0%{transform:rotate(0deg) scale(1) skew(1deg)}10%{-moz-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-moz-transform:rotate(25deg) scale(1) skew(1deg)}30%{-moz-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-moz-transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{-moz-transform:rotate(0deg) scale(1) skew(1deg)}}@-webkit-keyframes cbh-circle-img-anim{0%{-webkit-transform:rotate(0deg) scale(1) skew(1deg)}10%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}30%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{-webkit-transform:rotate(0deg) scale(1) skew(1deg)}}@-o-keyframes cbh-circle-img-anim{0%{-o-transform:rotate(0deg) scale(1) skew(1deg)}10%{-o-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-o-transform:rotate(25deg) scale(1) skew(1deg)}30%{-o-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-o-transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{-o-transform:rotate(0deg) scale(1) skew(1deg)}}.cbh-ph-img-circle1 {}.cbh-phone.cbh-green .cbh-ph-circle {border-color: rgba(0, 175, 242, 1)}.cbh-phone.cbh-green .cbh-ph-circle-fill {background-color: rgba(0, 175, 242, 1);}.cbh-phone.cbh-green .cbh-ph-img-circle1 {background-color:rgba(0, 175, 242, 1);}body, div, dl, dt, dd, ul, ol, li, nav, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td, a {-webkit-transform-origin: center center;-ms-transform-origin: center center;-o-transform-origin: center center;transform-origin: center center;}@media screen and (max-width: ' + breakpoint + 'px) {#clbh_phone_div{display: none !important;}}';
            document.querySelector('head').appendChild(phoneStyles)
        }

        function init() {

            var desktopPopup = document.querySelector('#cloneThis'),
                mobilePopup = document.querySelector('#cloneMobileThis');

            var h = document.querySelector('.hours'),
                m = document.querySelector('.minutes'),
                s = document.querySelector('.seconds');

            if (h && m && s) {
                // если все значения (часы/минуты/секунды) сущесвтуют, тогда срабатывает таймер
                initializeTimer();
            }
            if (desktopPopup) {
                createOverlay();
                addPopupStyle();
                addPhoneBtn(breakpoint);
                document.querySelector('.phoneBtnContainer').addEventListener('click', showPopup);
            } else {
                createOverlay();
                addMobilePopupStyle()
            }
            if (desktopPopup || mobilePopup) {
                //если у нас есть #cloneThis или #cloneMobileThis, тогда все функции ниже выполняются

                createModalBody(breakpoint);
                modalPosition(window.innerHeight);
                document.querySelector('.ever-popup__close').addEventListener('click', hidePopup);
                document.querySelector('.ever-popup__inner').addEventListener('click', notHide);
                document.querySelector('.ever-popup').addEventListener('click', hidePopup);

                var modalBtn = document.querySelectorAll('.ever-popup-btn');
                for (var i = 0; i < modalBtn.length; i++) {
                    modalBtn && modalBtn[i].addEventListener('click', showPopup);
                }
            }
            // рабоатет если у нас есть класс .check__btn
            var checkBtn = document.querySelector(".check__btn");
            checkBtn && checkBtn.addEventListener('click', checkCode);
        }

        // при документ реди вызывается функция init, описаная выше
        document.addEventListener('DOMContentLoaded', init);

        window.addEventListener('resize', function () {
            //при ресайзе пересчитываем позиционирование модального окна
            modalPosition(window.innerHeight);
        });

        function initializeTimer() {

            if (!localStorage.getItem("heytimer")) {
                var time = {
                        hours: 0,
                        minutes: 27,
                        seconds: 0
                    },
                    different = false;

                time = time.hours * 3600 + time.minutes * 60 + time.seconds;

                localStorage.setItem("time", time);
                localStorage.setItem("heytimer", true);
                localStorage.setItem("different", different);
            }

            timerSettings();
        }

        function timerSettings() {
            var time = localStorage.getItem('time'),
                different = localStorage.getItem('different') === "true",
                hours = parseInt(time / 3600, 10),
                minutes = parseInt((time - hours * 3600) / 60, 10),
                seconds = parseInt(time % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : "" + minutes;
            seconds = seconds < 10 ? "0" + seconds : "" + seconds;
            hours = hours < 10 ? "0" + hours : "" + hours;

            var hoursHTML = document.getElementsByClassName("hours");
            var minutesHTML = document.getElementsByClassName("minutes");
            var secondsHTML = document.getElementsByClassName("seconds");

            if (--time < 0) {
                localStorage.removeItem("heytimer");
                return;
            }
            if (different) {
                seconds = seconds.split("");
                minutes = minutes.split("");
                hours = hours.split("");

                doubleFilling(hoursHTML, hours);
                doubleFilling(minutesHTML, minutes);
                doubleFilling(secondsHTML, seconds);
            } else {
                filling(hoursHTML, hours);
                filling(minutesHTML, minutes);
                filling(secondsHTML, seconds);
            }

            localStorage.setItem("time", time);
            setTimeout(timerSettings, 1000);
        }

        function filling(obj, value) {
            for (var i = 0; i < obj.length; i++) {
                obj[i].innerHTML = value;
            }
        }

        function doubleFilling(obj, value) {
            for (var i = 0; i < obj.length; i++) {
                obj[i].innerHTML = value[i % 2];
            }
        }
    }

    initiate();

})();