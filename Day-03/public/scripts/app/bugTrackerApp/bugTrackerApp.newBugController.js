angular
	.module("bugTrackerApp")
	.controller("newBugController", function($scope, bugService, $location){
		$scope.addBug = function(newBugName){
			bugService
				.add(newBugName)
				.then(function(newBug){
					//to do
					$location.path('/list');
				})
			
		};
	})