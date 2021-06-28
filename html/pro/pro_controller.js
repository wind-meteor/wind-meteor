angular.module('pro.controller',['pro.service']).controller('ProCtrl',function($scope,$ionicHistory,$stateParams,$http){
	var listId = $stateParams.listId;
	
	$scope.Back=function(){
		$ionicHistory.goBack();
	};
	
	$http.get("data/datails.json").success(function (data) {
	    $scope.obj_ProInfo = data[listId-1];
	  });
})