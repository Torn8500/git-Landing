$(function () {

  $(".scroll[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top - 60 + "px"});
    return false;
  });

});