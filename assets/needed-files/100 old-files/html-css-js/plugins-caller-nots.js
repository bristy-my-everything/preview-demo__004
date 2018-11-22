////////////////////////////////////////////////////
// Bootstrap Js
$('[data-toggle="popover"]').popover()
$('[data-toggle="tooltip"]').tooltip()


////////////////////////////////////////////////////
// bootstrap menu close on click
$('.navbar-collapse ul li a').on('click touch', function () {
  $('.navbar-toggler').click();
});


////////////////////////////////////////////////////
// Magnific Popup
$('.parent-container-class').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true
  }
});


////////////////////////////////////////////////////
// Ripples Js
$('.selector-class').ripples({
  dropRadius: 20,
  perturbance: 0.03,
});


////////////////////////////////////////////////////
// Typed Js
var options = {
  strings: ['<strong>I love </strong><strong class="typed-color">codings.</strong>', '<strong>and to </strong><strong class="typed-color">share !!.</strong>'],
  typeSpeed: 50,
  loop: true
}
var typed = new Typed(".empty-text-selector-class", options);


////////////////////////////////////////////////////
// Owl Carousel Slider For Hero area
var slider = $('.owl-carousel');
slider.owlCarousel({
  loop: true,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  autoplay: true,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
/* animation-delay and animation-duration (owl carousel slider 06. must be needed.) */
slider.on('translate.owl.carousel', function () {
  var layer = $("[data-animation]");
  layer.each(function () {
    var slider_animation = $(this).data('animation');
    $(this).removeClass('animated ' + slider_animation).css('opacity', '0');
  });
});
$("[data-delay]").each(function () {
  var animation_delay = $(this).data('delay');
  $(this).css('animation-delay', animation_delay);
});
$("[data-duration]").each(function () {
  var animation_dutation = $(this).data('duration');
  $(this).css('animation-duration', animation_dutation);
});
slider.on('translated.owl.carousel', function () {
  var layer = slider.find('.owl-item.active').find("[data-animation]");
  layer.each(function () {
    var slider_animation = $(this).data('animation');
    $(this).addClass('animated ' + slider_animation).css('opacity', '1');
  });
});


////////////////////////////////////////////////////
// Counter Up
$('.counter-selector-class').counterUp({
  delay: 10,
  time: 4000
});


////////////////////////////////////////////////////
// mixitup Js
var mixre = mixitup('.mix-area-selector-class');


////////////////////////////////////////////////////
// OwlCarousel team/service/testimonials
$('.selector-class-or-id').owlCarousel({
  loop: true,
  autoplay: true,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
});


////////////////////////////////////////////////////
// nicescroll
$("body").niceScroll({
  cursorcolor:"aquamarine",
  cursorwidth:"16px"
});


////////////////////////////////////////////////////
// sticker || your need a html #sticker id and a css class .stick { position: fixed; top:0px; z-index: 100000;}
$(document).ready(function () {
  var s = $("#sticker");
  var pos = s.position();
  $(window).scroll(function () {
    var windowpos = $(window).scrollTop();
    if (windowpos >= pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });
});


////////////////////////////////////////////////////
// responsiveTabs
$('#services-tabs').responsiveTabs({
  animation: 'slide', // The panels will slide up and down
});


//////////////////////////////////////////////////////
// sticky + scroll-to-top + logo img
$(function () {
  showHideNav();
  
  $(window).scroll(function () {
    showHideNav();
  });

  function showHideNav() {
    if ($(this).scrollTop() > 50) {
      // Add class sticky 
      // $('nav').addClass('sticky');

      // FadeIn scroll-to-top 
      $('#back-to-top').fadeIn();

      // Logo img 
      // $(".navbar-brand img").attr("src", "assets/img/logo/logo-dark.png");



    } else {
      // Remove class sticky 
      // $('nav').removeClass('sticky');

      // FadeOut scroll-to-top 
      $('#back-to-top').fadeOut();

      // Logo img 
      // $(".navbar-brand img").attr("src", "assets/img/logo/logo.png");
      

    }
  }
});



//////////////////////////////////////////////////////
// magnificPopup js
$(function () {
  $('.video-play-buttom').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'http://www.youtube.com/embed/%id%?autoplay=1'
        }
      },
      srcAction: 'iframe_src',
    }
  });
});