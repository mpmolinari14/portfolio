'use strict';

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

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone().removeClass('template');
  $newProject.find('h1').html(this.projName);
  $newProject.find('.byline span').html(this.developers);
  $newProject.find('time').html(this.deployedOn);
  $newProject.find('img').attr('src', this.projImage);
  $newProject.find('#repo-button a').attr('href', this.projRepo);
  $newProject.find('#url-button a').attr('href', this.projURL);
  $newProject.find('.description').html(this.description);

  return $newProject;
};

projectData.sort(function(a, b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(y) {
  $('#portfolio').append(y.toHtml());
});
