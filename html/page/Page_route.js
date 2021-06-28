angular.module('Page.route', ['Page.controller'])
	.config(function($stateProvider) {
		$stateProvider.state('Page', {
			url: '/Page',
			templateUrl: 'html/page/page.html',
			controller: 'PageCtrl'
		})
	});
