'use strict';

/**
 * @ngdoc function
 * @name prioriSkillPrototypeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prioriSkillPrototypeApp
 */
angular.module('prioriSkillPrototypeApp')
  .controller('JobsController', ['$scope', function ($scope) {
	  	$scope.showDetails = false;
		
		$scope.jobs = [
		{	date:'2016-01-25T17:57:28.556094Z',
			title:'Web Developer',
			company:'Some Company', 
			description:'We are looking for someone with expertise in HTML, CSS, JavaScript, and Angular.',
			shortDescription:'We are looking for...',
			words: 'HTML, CSS, JavaScript, Angular'
		}, 
		{	date:'2016-02-01T17:57:28.556094Z',
			title:'Java Developer',
			company:'Another Company', 
			description:'Applicant must have experience with OOP, Java, and Git version control.',
			shortDescription:'Applicant must have...',
			words: 'OOP, Java, Git'
		}];
		
		$scope.toggleJobDetails = function() {
             $scope.showDetails = !$scope.showDetails;
        };
		
		var jobsOrder = 'date';
		$scope.jobsOrder = jobsOrder;
		



  }]);