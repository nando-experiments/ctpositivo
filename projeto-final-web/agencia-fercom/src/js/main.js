
//= include ../bower/jquery/dist/jquery.min.js
//= include ../bower/wow/dist/wow.min.js

//= include vendor/transition.js
//= include vendor/carousel.js

//= include components/scrolltoo.js

$('a[href^="#"]').scrolltoo();

var $header = $('.header');

$(document).ready(function(){
  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 70;
    if ($(window).scrollTop() > 0) {
      $header.addClass('p-fixed animated fadeInDown');
    } else {
      $header.removeClass('p-fixed animated fadeInDown');
    }
  });
});

wow = new WOW({
  boxClass     : 'wow',
  animateClass : 'animated',
  offset       : 0,
  mobile       : true,
  live         : true
});

wow.init();
