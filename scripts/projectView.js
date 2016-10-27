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
  var $newProject = $('article.template').clone().removeClass();
  $newProject.find('h1').html(this.projName);
  $newProject.find('address a').html(this.developers);
  $newProject.find('time').html(this.deployedOn);
  $newProject.find('img').attr('src', this.projImage);
  $newProject.find('#repo-button').attr('href', this.projRepo);
  $newProject.find('#url-button').attr('href', this.projURL);
  $newProject.find('.description').html(this.description);

  $newProject.find('time[pubdate]').attr('title', this.deployedOn);
  $newProject.find('time').text('about ' + parseInt((new Date() - new Date(this.deployedOn))/60/60/24/1000) + ' days ago');

  return $newProject;
};

projectData.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(project) {
  $('#portfolio').append(project.toHtml());
});
