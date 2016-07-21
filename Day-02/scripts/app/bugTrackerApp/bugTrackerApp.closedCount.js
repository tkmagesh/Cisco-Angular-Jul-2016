angular.module('bugTrackerApp')
		.filter('closedCount', function(){
		return function(bugs){
			var result = 0;
			for(var i=0; i<bugs.length; i++)
				if (bugs[i].isClosed)
					++result;
			return result;
		}
	});

	angular.module('bugTrackerApp')
		.filter('closedCount', function($filter){
		var builtinFilter = $filter('filter');
		return function(bugs){
			return builtinFilter(bugs, {isClosed : true}).length;
		}
	});

	angular.module('bugTrackerApp')
		.filter('closedCount', function(){
		return function(bugs){
			return bugs.filter(function(bug){
				return bug.isClosed;
			}).length;
		}
	});
	
	angular.module('bugTrackerApp')
		.filter('closedCount', function(){
		return function(bugs){
			return bugs.reduce(function(result, bug){
				return bug.isClosed ? ++result : result;
			},0);
		}
	});
