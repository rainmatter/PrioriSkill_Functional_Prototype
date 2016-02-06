'use strict';

angular.module('prioriSkillPrototypeApp')
        .factory('jobsFactory', function() {
			var jobFac = {};
		
			var jobs = [
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
			
			jobFac.jobs = jobs;
		
			jobFac.getJobs = function () {
				return jobs;
			};

			return jobFac;


        });