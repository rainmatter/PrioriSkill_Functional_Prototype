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
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  
  
  
  .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/main.html',
                        controller  : 'SkillsController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
                    // route for the aboutus page
            .state('app.main', {
                url:'main',
                views: {
                    'content@': {
                        template: '<h1>To be Completed</h1>',
                        controller  : 'SkillsController'
                   }
                }
            })
                    // route for the jobs page
            .state('app.jobs', {
                url:'jobs',
                views: {
                    'content@': {
                        templateUrl : 'views/jobs.html',
                        controller  : 'JobsController'
                     }
                }
            });

            $urlRouterProvider.otherwise('/');
    });
  /*
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
      });*/
  //});
