
angular.module('myApp', []).controller('projectsCtrl', function ($scope) {
  $scope.projectList = [
    {
      name: 'MeBooks',
      type: 'Individual',
      demoLink: 'https://app-giftr.herokuapp.com',
      githubLink: 'https://github.com/tiptoptrio/giftr',
      screenshot: 'img/mebooks_screenshot.jpg',
      alt: 'Screenshot of Mebooks app',
      description: 'A MEAN stack app that allows children to create different characters',
      role: 'Front-end, Back-end',
      techUsed: ['html', 'css', 'js', 'angular', 'mongo', 'dark express', 'node']
    },
    {
      name: 'Giftr',
      type: 'Team',
      demoLink: 'https://app-giftr.herokuapp.com',
      githubLink: 'https://github.com/tiptoptrio/giftr',
      screenshot: 'img/giftr_screenshot.jpg',
      alt: 'Screenshot of Giftr app',
      description: 'A gift recommendation app',
      role: 'Front-end',
      techUsed: ['html', 'css', 'js', 'mongo', 'dark express', 'node']
    },
    {
      name: 'Top Tracks',
      type: 'Individual',
      demoLink: 'https://toptracks.herokuapp.com',
      githubLink: 'https://github.com/chadchristensen/beats_app',
      screenshot: 'img/toptracks_screenshot.jpg',
      alt: 'Screenshot of Top Tracks app',
      description: 'An application that allows music producers to showcase their funky fresh beats',
      role: 'Front-end, Back-end',
      techUsed: ['html', 'css', 'js', 'jquery', 'ruby', 'rails', 'postgresql']
    },
    {
      name: 'Wheel of WDI',
      type: 'Individual',
      demoLink: 'http://wheel-of-wdi.bitballoon.com',
      githubLink: 'https://github.com/chadchristensen/wheel_of_wdi',
      screenshot: 'img/wheelofwdi_screenshot.jpg',
      alt: 'Screenshot of Wheel of WDI app',
      description: 'An adaptation of the game show Wheel of Fortune with a programming twist',
      role: 'Front-end',
      techUsed: ['html', 'css', 'js', 'jquery']
    }
  ];
});

$(document).ready(function () {
  var menuToggle = $('#js-mobile-menu').unbind();

  $('#js-navigation-menu').removeClass('show');

  menuToggle.on('click', function (e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function () {
      if ($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});
