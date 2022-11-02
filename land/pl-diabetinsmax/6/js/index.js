jQuery(document).ready(function($){
  new WOW().init();

  $('.block5__footer').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    asNavFor: '.block5__header',
    dots: false,
    fade: true,
    arrows: false,
    touchMove: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          centerMode: true
        }
      }
    ]
  });

  $('.block5__header').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    infinite: false,
    dots: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          variableWidth: false,
        }
      }
    ]
  });
  $('.block7__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
  $(".text__scroll").mCustomScrollbar({
    theme:"my-theme",
    scrollEasing:"lineaar"
  });
});
