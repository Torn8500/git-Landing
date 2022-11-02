(function () {
    'use strict';

    var nav = (function () {
      $('.nav__menu').on("click", function () {
        $('.nav__menu-open').css('opacity', '1');
        $('.nav__menu-open').css('display', 'block');
      });
      $('.close').on("click", function () {
        $('.nav__menu-open').css('opacity', '0');
        $('.nav__menu-open').css('display', 'none');
      });
      $('.close-menu').on("click", function () {
        $('.nav__menu-open').css('opacity', '0');
        $('.nav__menu-open').css('display', 'none');
      });
      $('.nav__menu-bg').on("click", function () {
        $('.nav__menu-open').css('opacity', '0');
        $('.nav__menu-open').css('display', 'none');
      });
      $('.close__btn').on("click", function () {
        $('.nav__menu-open').css('opacity', '0');
        $('.nav__menu-open').css('display', 'none');
      });
    });

    var reviews = (function () {
      $(document).ready(function () {
        function clearSliderItemState() {
          var allText = $('.js-comment');
          allText.attr('data-expanded', 'false');
          more.removeClass('active');
          allText.removeClass('show');
          allText.css({
            maxHeight: allText.height() + 'px'
          });
        }
        $('.js-reviews-slider').on('beforeChange', function () {
          clearSliderItemState();
        });
        var more = $('.js-show-comment');
        more.on('click', function () {
          var parent = $(this).parent();
          var text = parent.children('.js-comment');

          if (text.attr('data-expanded') == 'false') {
            var allText = $('.js-comment');
            text.addClass('show');
            allText.not(text).css({
              maxHeight: allText.height() + 'px'
            });
            allText.not(text).removeClass('show');
            allText.attr('data-expanded', 'false');
            more.removeClass('active');
            $(this).addClass('active');
            text.attr('data-expanded', 'true');
            text.css({
              'max-height': text[0].scrollHeight + 'px'
            });
          } else {
            clearSliderItemState();
          }
        });
        var toggleFormBtn = $('.toggle-form-btn');
        var reviewsBottom = $('.reviews__bottom');
        var reviewsCta = $('.reviews-cta');
        var inputNum = document.querySelectorAll('.input-num');
        var reviewsInputsWrap = $('.reviews-form__field-wrap');
        var inputAgeWrap = $('.reviews-form__field-wrap--age');
        var inputAge = $('.input-age');
        var inputFile = $('.input-file');
        var labelFile = $('.reviews-form__file');
        var reviewsInput = $('.reviews-input');
        var reviewsInputText = $('.reviews-input-text');
        var reviewsInputTextarea = $('.reviews-form__textarea');
        var reviewsInputTextareaJS = document.querySelector('.reviews-form__textarea');
        var reviewsInputName = $('.reviews-form__input-name');
        var reviewsPopup = $('.reviews-popup');
        var fileText = $('.reviews-form__file-text');
        var fileImg = $('.reviews-form__file-img img');
        var fileIcon = $('.reviews-form__checkmark-icon');
        // reviewsInputTextareaJS.value = '';
        reviewsInputTextarea.on('input', function () {
          if ($(this).val().trim().length > 0) {
            $(this).addClass('o-auto');
          } else {
            $(this).removeClass('o-auto');
          }
        });


        toggleFormBtn.on('click', function () {
          toggleFormBtn.hide();
          reviewsCta.show();
        });
      });
    });

    function main() {
      nav();
      reviews();
    }

    main();

}());
if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll', function () {
    return setTimeout(slidersInit, 1000), {
      once: true
    };
  });
} else {
  slidersInit();
}

function slidersInit() {

  $('.soon__slider').not('.slick-initialized').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<svg class="arrow-left slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"></path></g></g></svg>',
    nextArrow: '<svg class="arrow-right slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"></path></g></g></svg>',
    dots: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      }
    }]
  });
  $('.js-reviews-slider').not('.slick-initialized').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<svg class="arrow-left slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"></path></g></g></svg>',
    nextArrow: '<svg class="arrow-right slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"></path></g></g></svg>',
    dots: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}