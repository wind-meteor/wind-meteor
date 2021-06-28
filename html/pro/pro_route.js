angular.module('pro.route', ['pro.controller']).config(function($stateProvider) {
	$stateProvider.state('pro', {
		url: '/pro/:listId',
		templateUrl: 'html/pro/proAll.html',
		controller: 'ProCtrl'
	});
});
