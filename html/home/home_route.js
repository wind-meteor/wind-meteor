angular.module('home.route', ['home.controller']).config(function($stateProvider) {
	$stateProvider.state('nav.home', {
		url: '/home',
		views: {
			'home': {
				templateUrl: 'html/home/home.html',
				controller: 'HomeCtrl'
			}
		}
	});
})
