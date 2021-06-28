angular.module('list.controller', ['list.service']).controller('ListCtrl', function($scope, $http) {

	$http.get("data/datails.json").success(function(data) {
		$scope.obj_ListData = data;
	});
});
