'use strict';

/**
 * @ngdoc overview
 * @name prioriSkillPrototypeApp
 * @description
 * # prioriSkillPrototypeApp
 *
 * Main module of the application.
 */
angular
  .module('prioriSkillPrototypeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'SkillsController',
        controllerAs: 'skillsCtrl'
      })
      .when('/jobs', {
        templateUrl: 'views/jobs.html',
        controller: 'JobsController',
        controllerAs: 'jobsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
