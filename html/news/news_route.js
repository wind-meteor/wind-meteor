angular.module('news.route', ['news.controller']).config(function($stateProvider) {
	$stateProvider.state('nav.news', {
		url: '/news',
		views: {
			'news': {
				templateUrl: 'html/news/news.html',
				controller: 'NewsCtrl'
			}
		}
	});
});
