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
    $('.main-header, .main-footer').css('background-color', 'black');
    $('#portfolio').css('display', 'block');
  });

});
