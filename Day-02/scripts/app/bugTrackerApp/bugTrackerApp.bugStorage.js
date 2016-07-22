angular
	.module("bugTrackerApp")
	.factory("bugStorage", function(bugOperations){
		var storage = window.localStorage;
		var maxBugId = 0;
		var subscriptionFns = [];
		function getAllBugs(){
			var result = [];
			for(var i=0; i<storage.length; i++){
				var bugDataJson = storage.getItem(storage.key(i))
				var bugData = angular.fromJson(bugDataJson);
				maxBugId = bugData.id > maxBugId ? bugData.id : maxBugId;
				result.push(bugData);
			}
			return result;
			triggerChange();
		}
		function saveBug(bug){
			storage.setItem(bug.id, angular.toJson(bug));
			triggerChange();
		}
		function addNew(bugName){
			var newBug = bugOperations.create(++maxBugId, bugName);
			saveBug(newBug);
			
		}
		function toggleBug(bug){
			bugOperations.toggle(bug);
			saveBug(bug);
		}
		function removeBug(bug){
			storage.removeItem(bug.id);
			triggerChange();
		}
		function onStorageChange(subscriptionFn){
			subscriptionFns.push(subscriptionFn);
		}
		function triggerChange(){
			subscriptionFns.forEach(function(subscriptionFn){
				if (typeof subscriptionFn === 'function')
					subscriptionFn();
			})
		}
		return {
			getAll : getAllBugs,
			add : addNew,
			toggle : toggleBug,
			remove : removeBug,
			onChange : onStorageChange
		}
	});