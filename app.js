(function(angular){
	'use strict'
	//创建正在热映模块
	var module =  angular.module("moviecat",['ngRoute','moviecat.top250','moviecat.comingsoon','moviecat.intheaters','moviecat.services.http'])
	
	module.config(['$routeProvider', function($routeProvider) {
  		$routeProvider
    	.otherwise({
      		redirectTo: '/in_theaters/1'
    	});
}]);
	
})(angular)
