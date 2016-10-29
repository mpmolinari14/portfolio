'use strict';

$(document).ready(function() {

  // MOBILE DROPDOWN //
  $('#header-menu').on('click', function() {
    $('#main-nav').toggleClass('open-nav');
  });

  // LOAD PORTFOLIO PAGE //
  $('#portfolio-button').on('click', function() {
    $('#home').hide();
    $('body').css('background', 'none');
    $('header, footer').css('background-color', 'rgba(60,60,60,0.8)');
    $('#portfolio').css('display', 'block');
  });

});
