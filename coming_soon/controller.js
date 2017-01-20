(function(angular){
	'use strict'
	//创建正在热映模块
	var module = angular.module("moviecat.comingsoon",['ngRoute']);
	//创建路由模块
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/coming_soon',{
			templateUrl:"coming_soon/view.html",
			controller:'ComingSoonController'
		})
		
	}])
	//创建控制器
	module.controller("ComingSoonController",[
	"$scope",
	function($scope){
		
		
	}])
	
})(angular)
