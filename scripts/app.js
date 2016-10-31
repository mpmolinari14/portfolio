'use strict';

$(document).ready(function() {

  $('#portfolio').hide();

  // MOBILE DROPDOWN //
  $('#header-menu').on('click', function() {
    $('#main-nav').toggleClass('open-nav');
  });

  // LOAD PORTFOLIO PAGE //
  $('#portfolio-button').on('click', function() {
    $('#home').fadeOut();
    $('body').css('background', 'none');
    $('header, footer').css('background-color', 'rgba(60,60,60,0.8)');
    $('#portfolio').fadeIn();
  });

  // MAIN NAVIGATION //
  $('#home-nav').on('click', function() {
    $('#about, #blog, #contact, #resume, #portfolio').fadeOut();
    $('#home').fadeIn();
    $('body').css('background', 'url(../img/mmHero.jpg) no-repeat center fixed');
  });

});
