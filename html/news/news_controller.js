angular.module('news.controller', ['news.service']).controller('NewsCtrl', function($scope, $http) {

	$http.get("data/dataNews.json").success(function(data) {
		$scope.obj_NewsData = data;
	});
});