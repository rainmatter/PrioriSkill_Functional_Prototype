'use strict';

/**
 * @ngdoc function
 * @name prioriSkillPrototypeApp.controller:NewAccountController
 * @description
 * # NewAccountCtrl
 * Controller of the prioriSkillPrototypeApp
 */
angular.module('prioriSkillPrototypeApp')
	.controller('AccountController', ['$scope', 'accountFactory', function ($scope, accountFactory) {
		
		$scope.showAccs = false;
        $scope.message = 'Loading ...';
          accountFactory.getAccounts().query(
                function (response) {
                    $scope.accounts = response;
					//console.log($scope.accounts);
                    $scope.showAccs = true;
                },
                function (response) {
                    $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
                });
		
		}])
  .controller('NewAccountController', ['$scope', 'accountFactory', function ($scope, accountFactory) {
	  
		var newAccount = {name:'', email:'', password:'', dateCreated:'', dateLastLogin:'', jobs:[], skills:[]};
		$scope.newAccount = newAccount;
		$scope.pwordConfirm = '';
		//$scope.emailInUse = true;
		$scope.showEmailInUse = false;	
		$scope.showPasswordNotMatched = false;
		$scope.showPasswordNotSufficient = false;
		
		$scope.submitNewAccount = function() {
			if (!$scope.testEmailInUse()) {
				$scope.showEmailInUse = false;
				if ($scope.passwordSufficient()) {
					$scope.showPasswordNotSufficient = false;
					if ($scope.newAccount.password === $scope.pwordConfirm) {
						$scope.newAccount.dateCreated = new Date().toISOString();
						$scope.newAccount.dateLastLogin = new Date().toISOString();
						accountFactory.getAccounts().save($scope.newAccount);
						$scope.accounts.push($scope.newAccount);
						$scope.newAccount = {name:'', email:'', password:'', dateCreated:'', dateLastLogin:'', jobs:[], skills:[]};
						$scope.newAccountForm.$setPristine();
						$scope.pwordConfirm = '';
						$scope.showPasswordNotMatched = false;
						$scope.showEmailInUse = false;
						$('newAccountModal').modal('toggle');
					} else {
						$scope.showPasswordNotMatched = true;
					}
				} else {
					$scope.showPasswordNotSufficient = true;
				}
			} else {
				$scope.showEmailInUse = true;
			}
		};
		
		$scope.testEmailInUse = function() {
			for (var i = 0; i < $scope.accounts.length; i++) {
				if ($scope.accounts[i].email === $scope.newAccount.email) {
					return true;
				}
			}
			return false;
		};
		
		$scope.passwordSufficient = function() {
			if ($scope.newAccount.password.length < 5) {
				return false;
			}
			var containsNum = false;
			for (var i = 0; i < 10; i++) {
				if ($scope.newAccount.password.indexOf(i) >= 0) {
					containsNum = true;
				}
			}
			return containsNum;	
		};
		
		

	
  }]);
