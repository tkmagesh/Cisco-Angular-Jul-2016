angular.module('bugTrackerApp')
		.controller('bugsController', function($scope, bugStorage){
			//console.log(bugStorage);
		$scope.bugs = bugStorage.getAll()

		$scope.addBug = function(newBugName){
			var newBug = bugStorage.add(newBugName);
			$scope.bugs.push(newBug);
		};

		$scope.toggleBug = function(bug){
			bugStorage.toggle(bug);
		};
		$scope.setSelectedBug = function(bug){
			$scope.selectedBug = bug;
		};

		$scope.removeClosed = function(){
			for(var i=$scope.bugs.length-1; i>=0; i--)
				if ($scope.bugs[i].isClosed){
					bugStorage.remove($scope.bugs[i]);
					$scope.bugs.splice(i,1);
				}
		};

	});