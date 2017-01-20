(function(angular){
	'use strict'
	//创建正在热映模块
	var module = angular.module("moviecat.top250",['ngRoute']);
	//创建路由模块
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/top250',{
			templateUrl:"top250/view.html",
			controller:'Top250Controller'
		})
			
	}])
	//创建控制器
	module.controller("Top250Controller",[
	"$scope",
	"$http",
	function($scope,$http){
		$scope.data = [];
		$scope.message = '';
		$http.get("top250/data.json").then(function(res){
			if(res.status == 200){
				
				$scope.data = res.data.subjects;
				console.log($scope.data);
			}else{
				$scope.message = '请求不到'+res.statusText;
			}
			
			
		},function(err){
				$scope.message = '请求不到'+err.statusText;
			
		})
		
	}])
	
})(angular)
