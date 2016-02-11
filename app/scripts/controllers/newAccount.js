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
		$scope.emailInUse = true;
		$scope.showEmailInUse = false;	
				
				$scope.anAccount = accountFactory.getAccount().query({email: 'email@email.com'});
				console.log(accountFactory.getAccount().query({email: 'email@email.com'}).length);
		
		$scope.submitNewAccount = function() {
			$scope.testEmailInUse($scope.newAccount.email);
			if (!$scope.emailInUse) {
				$scope.newAccount.dateCreated = new Date().toISOString();
				$scope.newAccount.dateLastLogin = new Date().toISOString();
				accountFactory.getAccounts().save($scope.newAccount);
				$scope.accounts.push($scope.newAccount);
				$scope.newAccount = {name:'', email:'', password:'', dateCreated:'', dateLastLogin:'', jobs:[], skills:[]};
				$scope.newAccountForm.$setPristine();
				$scope.pwordConfirm = '';
				$scope.emailInUse = false;
				$scope.showEmailInUse = false;
				//console.log($scope.accounts);
			} else {
				$scope.showEmailInUse = true;
			}
		};
		
		$scope.testEmailInUse = function(newEmail) {
			$scope.anAccount = accountFactory.getAccount().query({email: '' + newEmail + ''});
				console.log($scope.anAccount.length);
						
						if ($scope.anAccount.length > 0){
							console.log('email already in use!');
							$scope.emailInUse = true;
							$scope.showEmailInUse = true;
						} else {
							console.log('good to go!');
							$scope.emailInUse = false;
							$scope.showEmailInUse = false;
						}
		};
		
		/*$scope.anAccount = {};
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
                );*/
		

	
  }]);
