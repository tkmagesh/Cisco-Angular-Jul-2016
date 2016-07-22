angular.module('bugTrackerApp')
		.factory('bugOperations' , function(defaultBugName){
		return {
			create : function(id, bugName){
				return {
					id : id,
					name : bugName || defaultBugName,
					isClosed : false,
					createdAt : new Date(),
				}
			},
			toggle : function(bug){
				bug.isClosed = !bug.isClosed;
			}
		}
	})