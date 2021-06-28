angular.module('nav.route', ['nav.controller']).config(function($stateProvider) {
	$stateProvider.state('nav', {
		url: '/nav',
		abstract: true,
		templateUrl: 'html/nav/nav.html',
		controller: 'NavCtrl'
	})
});
