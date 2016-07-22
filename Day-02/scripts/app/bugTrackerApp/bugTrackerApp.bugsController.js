angular.module('bugTrackerApp')
		.controller('bugsController', function($scope, bugStorage){
			//console.log(bugStorage);
			function loadBugs(){
				$scope.bugs = bugStorage.getAll()
			}
			bugStorage.onChange(loadBugs);
			loadBugs();

			$scope.addBug = function(newBugName){
				var newBug = bugStorage.add(newBugName);
				
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
					}
			};

	});