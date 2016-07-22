angular
	.module("bugTrackerApp")
	.directive('newBug', function(){
		return {
			templateUrl : '/templates/bugs-new.template.html',
			scope : {},
			controller : 'newBugController'
		}
	});