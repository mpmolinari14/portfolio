'use strict';

$(document).ready(function() {

  var projects = [];

  function Project (opts) {
    this.projName = opts.projName;
    this.developers = opts.developers;
    this.deployedOn = opts.deployedOn;
    this.projImage = opts.projImage;
    this.projRepo = opts.projRepo;
    this.projURL = opts.projURL;
    this.description = opts.description;
  };

  Project.prototype.toHtml() = function() {
    
  }

  // HIDE OTHER PAGES ON LOAD //
  $('#projects').hide();

  // SHOW PORTFOLIO PAGE //
  $('#portfolio-button').on('click', function() {
    $('#resume-button, #portfolio-button, .name-cont').hide();
    $('body').css('background', 'none');
    $('.main-header, footer').css('background-color', 'rgba(0,0,0,0.8)');
    $('#projects').show();
  });



});
