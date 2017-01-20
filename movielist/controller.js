(function(angular){
	'use strict'
	//创建正在热映模块
	var module = angular.module("movielist",['ngRoute']);
	//创建路由模块
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/:category',{
			templateUrl:"movielist/view.html",
			controller:'movieListConller'
		})
		
	}])
	//创建控制器
	module.controller("movieListConller",[
	"$scope",
	"HttpService",
	"$routeParams",
	function($scope,HttpService,$routeParams){
		$scope.data = [];
//		$scope.message = '';
		$scope.sum = 0;
		$scope.loading = true;
		
		HttpService.jsonp("http://api.douban.com/v2/movie/"+$routeParams.category,{count:20,
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
		//正常请求
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
