angular.module('bugTrackerApp')
		.controller('bugsController', function($scope, bugOperations){
		$scope.bugs = [
			bugOperations.create('Unable to write to the local storage'),
			bugOperations.create('User actions not recognized'),
			bugOperations.create('Server communication failure'),

		];

		$scope.addBug = function(newBugName){
			var newBug = bugOperations.create(newBugName);
			$scope.bugs.push(newBug);
		};

		$scope.toggleBug = function(bug){
			bugOperations.toggle(bug);
		};
		$scope.setSelectedBug = function(bug){
			$scope.selectedBug = bug;
		};

		$scope.removeClosed = function(){
			for(var i=$scope.bugs.length-1; i>=0; i--)
				if ($scope.bugs[i].isClosed)
					$scope.bugs.splice(i,1);
		};

	});