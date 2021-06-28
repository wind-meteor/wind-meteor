angular.module('main.route', ['main.controller']).config(function($stateProvider) {
	$stateProvider.state('nav.main', {
		url: '/main',
		views: {
			'main': {
				templateUrl: 'html/main/main.html',
				controller: 'MainCtrl'
			}
		}
	});
});
