angular.module('bugTrackerApp')
	.controller('bugsController', function($scope, bugService){
		
		$scope.bugs = [];

		bugService
			.getAll()
			.then(function(bugs){
				$scope.bugs = bugs;
			});

		
		$scope.searchBug = {};
		$scope.sortBug = {};
		
		

		$scope.toggleBug = function(bug){
			bugService.toggle(bug);
		};
		$scope.setSelectedBug = function(bug){
			$scope.selectedBug = bug;
		};

		$scope.removeClosed = function(){
			for(var i=$scope.bugs.length-1; i>=0; i--)
				if ($scope.bugs[i].isClosed){
					bugService.remove($scope.bugs[i]);
					$scope.bugs.splice(i,1);
				}
		};

});