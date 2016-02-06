'use strict';

/**
 * @ngdoc function
 * @name prioriSkillPrototypeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prioriSkillPrototypeApp
 */
angular.module('prioriSkillPrototypeApp')
  .controller('JobsController', ['$scope', 'jobsFactory', function ($scope, jobsFactory) {
	  	$scope.showDetails = false;
		$scope.showJob = false;
		$scope.jobViewed = {id:'', date:'', title:'', company:'', description:'', shortDescription:'', words:'' };
		
		$scope.toggleJobDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };
		
		$scope.jobs = jobsFactory.getJobs();
		$scope.toggleViewJob = function(jobID) {
			console.log(jobID);
			$scope.jobViewed = jobsFactory.getJob(jobID);
			$scope.showJob = true;
		};
		
		
		var jobsOrder = 'date';
		$scope.jobsOrder = jobsOrder;
		



  }])
  
  
  .controller('JobFormController', ['$scope', function($scope) {
		$scope.newJob = {id:'', date:'', title:'', company:'', description:'', shortDescription:'', words:'' };
							 
		$scope.submitNewJob = function () {
			console.log('clickie!');
			$scope.newJob.date = new Date().toISOString();
			$scope.newJob.id = $scope.jobs.length;
			$scope.newJob.shortDescription = shortenDescription($scope.newJob.description);
			$scope.jobs.push($scope.newJob);
			$scope.newJobForm.$setPristine();
			$scope.newJob = {id: '', date:'', title:'', company:'', description:'', shortDescription:'', words:'' };
			console.log($scope.jobs);
		};
		
		function shortenDescription (desc) {
			if (desc.length < 10) {
				return desc;
			} else {
				return desc.substr(0, 10) +  '...';
			}
		}
		
		console.log($scope.jobs);

   }]);