'use strict';

angular.module('prioriSkillPrototypeApp')
		.constant('baseURL','http://localhost:3000/')
        .factory('jobsFactory', function() {
			var jobFac = {};
		
			var jobs = [
			{	id: 0,
				date:'2016-01-25T17:57:28.556094Z',
				title:'Web Developer',
				company:'Some Company', 
				description:'We are looking for someone with expertise in HTML, CSS, JavaScript, and Angular.',
				shortDescription:'We are looking for...',
				words: 'HTML, CSS, JavaScript, Angular'
			}, 
			{	id: 1,
				date:'2016-02-01T17:57:28.556094Z',
				title:'Java Developer',
				company:'Another Company', 
				description:'Applicant must have experience with OOP, Java, and Git version control.',
				shortDescription:'Applicant must have...',
				words: 'OOP, Java, Git'
			}];
			
			jobFac.jobs = jobs;
		
			jobFac.getJobs = function () {
				return jobs;
			};
			
			jobFac.getJob = function (id) {
				return jobs[id];
			};

			return jobFac;


        })
		
		
		.factory('accountFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
			var accountFac = {};
		
			var accounts = [
			{	id: 0,
				name:'Mary',
				email:'email@email.com',
				password:'12345',
				dateCreated:'2016-01-25T17:57:28.556094Z',
				dateLastLogin:'2016-02-25T17:57:28.556094Z',
				jobs: {},
				skills: {}
			}];
			
			accountFac.accounts = accounts;
		
			accountFac.getAccounts = function () {
				return $resource(baseURL + 'accounts/:id', null, {'update': {method: 'PUT'}});
			};
			
			accountFac.getAccount = function () {
				return $resource(baseURL + 'accounts/', null, {'update': {method:'GET', isArray:true}});
			};
			

			return accountFac;


        }]);