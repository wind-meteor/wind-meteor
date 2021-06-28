angular.module('route', [
	'Page.route', //引导页
	'nav.route', //导航
	'home.route', //首页
	'news.route',
	'list.route', //职位列表
	'pro.route', //职位详情
	'main.route' //我的
]).config(function($stateProvider, $urlRouterProvider) {
	if (localStorage["isFirst"]) {
		$urlRouterProvider.otherwise('/nav/home')
	} else {
		$urlRouterProvider.otherwise('/Page');
	}
});
