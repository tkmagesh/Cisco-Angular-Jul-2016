var utils = angular.module('utils', []);
utils.value('defaultTrimLength', 20);


utils.filter('trimText', function(defaultTrimLength){
	return function(data, trimLength){
		trimLength = trimLength || defaultTrimLength;
		return data.length < trimLength ? data : data.substr(0,trimLength)+'...';
	}
});

utils.value('momentApi', moment);

utils.filter('elapsed', function(momentApi){
	return function(value){
		return momentApi(value).fromNow();
	}
})