$(function () {
  "use strict"
  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
    } else {
      $(".navbar-area").addClass("sticky")
    }
  });
  
    //wow js
    new WOW().init();
    // tyny slider
    var slider = tns({
        container: '.partenaire-active',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        nav: false,
        controlsText: ['<i class="fa-solid fa-angle-left prev"></i>', '<i class="fa-solid fa-angle-right next"></i>'],
      });
      // scrollit
      $.scrollIt();
});