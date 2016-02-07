'use strict';

/**
 * @ngdoc function
 * @name prioriSkillPrototypeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prioriSkillPrototypeApp
 */
angular.module('prioriSkillPrototypeApp')
  .controller('SkillsController', ['$scope', function ($scope) {
	
	$scope.skills = [
		{	name:'HTML',
			count:5, 
			rank:1
		}, 
		{	name:'JavaScript',
			count:4, 
			rank:2
		}, 
		{	name:'CSS',
			count:2, 
			rank:3
		}, 
		{	name:'Angular',
			count:2, 
			rank:3
		}];
		
		var skillsOrder = 'rank';
		$scope.skillsOrder = skillsOrder;
		$scope.reverse = false;
		if (skillsOrder === 'name-desc') {
			$scope.skillsOrder = 'name';
			$scope.reverse = true;
		} else {
			$scope.reverse = false;
		}
  }])
  
  .controller('NavController', ['$scope', function ($scope) {
		$scope.selected = 0;
		
		$scope.isSelected = function(index) {
			return ($scope.selected === index);
		};
		
		$scope.selectLink = function(index) {
			$scope.selected = index;
		};
	
  }]);
