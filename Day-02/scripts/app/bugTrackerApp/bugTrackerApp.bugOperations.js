angular.module('bugTrackerApp')
		.factory('bugOperations' , function(defaultBugName){
		var maxBugId = 0;
		return {
			create : function(bugName){
				return {
					id : ++maxBugId,
					name : bugName || defaultBugName,
					isClosed : false
				}
			},
			toggle : function(bug){
				bug.isClosed = !bug.isClosed;
			}
		}
	})