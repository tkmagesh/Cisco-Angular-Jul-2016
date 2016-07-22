angular
	.module("bugTrackerApp")
	.directive('bugDetails', function(){
		return {
			templateUrl : '/templates/bugs-details.template.html',
			controller : 'bugDetailsController'
		};
	})
	.controller("bugDetailsController", function($scope, bugService, $routeParams){
		var id = $routeParams.id;
		bugService
			.getOne(id)
			.then(function(bug){
				$scope.bug = bug;
			});
	});