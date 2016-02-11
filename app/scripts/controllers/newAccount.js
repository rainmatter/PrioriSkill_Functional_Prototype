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
				
				
		
		$scope.submitNewAccount = function() {
			$scope.newAccount.dateCreated = new Date().toISOString();
			$scope.newAccount.dateLastLogin = new Date().toISOString();
			accountFactory.getAccounts().save($scope.newAccount);
			$scope.accounts.push($scope.newAccount);
			$scope.newAccount = {name:'', email:'', password:'', dateCreated:'', dateLastLogin:'', jobs:[], skills:[]};
			$scope.newAccountForm.$setPristine();
			$scope.pwordConfirm = '';
			//console.log($scope.accounts);
		};
		
		$scope.anAccount = {};
            $scope.anAccount = accountFactory.getAccount().query({email: 'email@email.com'})
                .$promise.then(
                    function (response) {
                        $scope.anAccount = response;
                        console.log($scope.anAccount);
						console.log('email already in use!');
                    },
                    function (response) {
                        console.log('Error: ' + response.status + ' ' + response.statusText);
						console.log('good to go!');
                    }
                );
		

	
  }]);
