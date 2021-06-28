angular.module('list.route', ['list.controller']).config(function($stateProvider) {
	$stateProvider.state('nav.list', {
		url: '/list',
		views: {
			'list': {
				templateUrl: 'html/list/list.html',
				controller: 'ListCtrl'
			}
		}
	})
});
