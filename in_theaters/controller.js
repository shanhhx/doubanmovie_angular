(function(angular){
	'use strict'
	//创建正在热映模块
	var module = angular.module("moviecat.intheaters",['ngRoute']);
	//创建路由模块
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/in_theaters',{
			templateUrl:"in_theaters/view.html",
			controller:'InTheatersController'
		})
		
	}])
	//创建控制器
	module.controller("InTheatersController",[
	"$scope",
	"HttpService",
	
	function($scope,HttpService){
		$scope.data = [];
//		$scope.message = '';
		$scope.sum = 0;
		$scope.loading = true;
		
		HttpService.jsonp("http://api.douban.com/v2/movie/in_theaters",{count:20,
					start:1
					},
					function(data){
						$scope.data = data.subjects;
//						console.log(data)
						$scope.sum = data.total;
						$scope.loading = false;
						$scope.$apply($scope.data);
						
						
						
					}
					)
//		var doubanApiAdress = "http://api.douban.com/v2/movie/in_theaters"
//		$http.jsonp(doubanApiAdress + '?callback = JSON_CALLBACK').then(function(res){
//			if(res.status == 200){
//				$scope.data = res.data.subjects;	
//			}
//			else{
//				$scope.message = "未请求到数据";
//				
//			}
//		},function(err){
//			$scope.message = "未请求到数据"+err.statusText;
//		}
//		)
		
	}])
	
})(angular)
