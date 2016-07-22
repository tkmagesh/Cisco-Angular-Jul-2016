angular
	.module("bugTrackerApp")
	.factory("bugStorage", function(bugOperations){
		var storage = window.localStorage;
		var maxBugId = 0;
		function getAllBugs(){
			var result = [];
			for(var i=0; i<storage.length; i++){
				var bugDataJson = storage.getItem(storage.key(i))
				var bugData = angular.fromJson(bugDataJson);
				maxBugId = bugData.id > maxBugId ? bugData.id : maxBugId;
				result.push(bugData);
			}
			return result;
		}
		function saveBug(bug){
			storage.setItem(bug.id, angular.toJson(bug));
		}
		function addNew(bugName){
			var newBug = bugOperations.create(++maxBugId, bugName);
			saveBug(newBug);
			return newBug;
		}
		function toggleBug(bug){
			bugOperations.toggle(bug);
			saveBug(bug);
		}
		function removeBug(bug){
			storage.removeItem(bug.id);
		}
		return {
			getAll : getAllBugs,
			add : addNew,
			toggle : toggleBug,
			remove : removeBug
		}
	});