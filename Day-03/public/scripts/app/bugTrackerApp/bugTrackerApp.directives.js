
		angular
			.module("bugTrackerApp")
			.directive('bugStats', function(){
				return {
					templateUrl : '/templates/bugs-stats.template.html',
					scope : {
						bugs : '='
					}
				}
			})
			.directive('bugSearch', function(){
				return {
					templateUrl : '/templates/bugs-search.template.html',
					scope : {
						searchCriteria : '='
					}
				}
			})
			.directive('bugSort', function(){
				return {
					templateUrl : '/templates/bugs-sort.template.html',
					scope : {
						sortDetails : '='
					}
				}
			})
			.directive('bugList', function(){
				return {
					//scope : false,
					templateUrl : '/templates/bugs-list.template.html',
					link : function($scope){
						console.dir($scope);
					}
				}
			})
			.directive('bugs', function(){
				return {
					restrict : 'E',
					controller : "bugsController",
					templateUrl : '/templates/bugs.template.html',
					scope : {}
				}
			})

			
	