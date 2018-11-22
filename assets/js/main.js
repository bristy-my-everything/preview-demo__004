/***************************************************
==================== JS INDEX ======================
****************************************************
01. Avoid console errors in browsers
02. Preloader Js
03. ScrollToTop Js
04. Smooth Scroll
05. WOW Js
06. Sticky Js
07. Menu for Mobile
****************************************************/



(function ($) {
  "use strict";


  ////////////////////////////////////////////////////
  // 01. Avoid console errors in browsers
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  };



  ////////////////////////////////////////////////////
  // 03. ScrollToTop Js
  //Check to see if the window is top if not then display button
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 500) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.scrollToTop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });



  ////////////////////////////////////////////////////
  // 04. Smooth Scroll
  $('a.smooth-scroll').on('click', function (event) {
    event.preventDefault();
    var section_smooth = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section_smooth).offset().top - 64
    }, 1250, 'easeInOutExpo');
  });



  ////////////////////////////////////////////////////
  // 05. WOW Js
  new WOW().init();



  ////////////////////////////////////////////////////
  // 06. Sticky Js
  $(".oilymenu").sticky({
    topSpacing: 0
  });



  ////////////////////////////////////////////////////
  // 07. Menu for Mobile
  $('#menu').slicknav({
    'label': '',
    'closedSymbol': '&#10010;',
    'openedSymbol': '&#9866;',
    'appendTo': '.oilymenu-mobile'
    // 'prependTo' : '.oilymenu4'
  });



  ////////////////////////////////////////////////////
  // 08. Menu for Mobile
  $('.mobile__open-btn').click(function () {
    $('.mobile__nav').css("height", "100%");
  });
  $('.mobile__close-btn, .mobile__nav a').click(function () {
    $('.mobile__nav').css("height", "0%");
  });



  ////////////////////////////////////////////////////
  // 09. Isotope
  $('#isotope-filters li').on('click', function () {
    $("#isotope-filters li").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr('data-filter');
    $("#isotope-container").isotope({
      filter: selector
    });
  });
  $(window).on("load", function () {
    $("#isotope-container").isotope();
  });



})(jQuery);



//////////////////////////////////////////////////////
// window load function
(function ($) {
  "use strict";
  $(window).on("load", function () {

    //////////////////////////////////////////////////////
    // 18. Preloader Js
    $(".preloader").delay(350).fadeOut('slow');


  });
})(jQuery);



////////////////////////////////////////////////////
// 10. sticky
$(function () {
  showHideNav();
  $(window).on('scroll', function () {
    showHideNav();
  });

  function showHideNav() {
    if ($(this).scrollTop() > 50) {
      // Add class sticky 
      $('nav').addClass('sticky');
      // FadeIn scroll-to-top 
      // $('#back-to-top').fadeIn();
      // Logo img 
      // $(".navbar-brand img").attr("src", "assets/img/logo/logo-dark.png");
    } else {
      // Remove class sticky 
      $('nav').removeClass('sticky');
      // FadeOut scroll-to-top 
      // $('#back-to-top').fadeOut();
      // Logo img 
      // $(".navbar-brand img").attr("src", "assets/img/logo/logo.png");
    }
  };
});