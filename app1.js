(function(angular){
	'use strict'
	//创建正在热映模块
	var module =  angular.module("moviecat",['ngRoute','movielist','moviecat.services.http'])
	
	module.config(['$routeProvider', function($routeProvider) {
  		$routeProvider
    	.otherwise({
      		redirectTo: '/in_theaters/1'
    	});
}]);
	
})(angular)
