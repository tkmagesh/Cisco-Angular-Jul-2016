angular.module('bugTrackerApp')
	.service('bugService', function($http, bugOperations){
		var baseUrl = 'http://localhost:3000/bugs';
		this.getOne = function(id){
			return $http.get(baseUrl + '/' + id)
				.then(function(response){
					return response.data;
				});
		}
		this.getAll = function(){
			var httpPromise = $http.get(baseUrl)
			var resultPromise = httpPromise.then(function(response){
				return response.data;
			});
			return resultPromise;
		};

		this.add = function(bugName){
			var newBug = bugOperations.create(0, bugName);
			return $http
				.post(baseUrl, newBug)
				.then(function(response){
					return response.data;
				})
		};

		this.toggle = function(bug){
			bugOperations.toggle(bug);
			return $http
				.put(baseUrl + '/' + bug.id, bug)
				.then(function(response){
					return response.data;
				})
		};

		this.remove = function(bug){
			return $http
				.delete(baseUrl + '/' + bug.id, bug)
				
		};
	})	