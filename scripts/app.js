'use strict';

$(document).ready(function() {

  $('.tab-content').hide();
  $('#home').fadeIn();
  $('body').toggleClass('home-body');

  // MOBILE DROPDOWN //
  $('#header-menu').on('click', function() {
    $('#main-nav').toggleClass('open-nav');
  });

  // MAIN NAVIGATION //
  $('#main-nav').on('click', '.tab', function() {
    var $tab = $(this).attr('data-content');
    console.log($tab);
    $('.tab-content').fadeOut();
    $('#' + $tab).fadeIn();
  });

  $('#main-nav li').on('focus', function() {
    $(this).css('font-size', '40px');
  });

  // PORTFOLIO //
  $('#portfolio-button').on('click', function() {
    $('.tab-content').hide();
    $('#portfolio').fadeIn();
    $('.show-full').hide();
    $('body').toggleClass();
  });

  $('#portfolio .proj-logo').on('mouseover', function() {
    $('.proj-logo').hide();
    $('.show-full').fadeIn();
  });

  $('#portfolio .show-full').on('mouseout', function() {
    $('.show-full').hide();
    $('.proj-logo').fadeIn();
  });



});
