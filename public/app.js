var app = angular.module('myApp', ['ui.router']);

angular.module("myApp").value('baseUrl', '');
app.config(function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/index");
	$stateProvider
		.state("Index", {
			url: "/index",
			templateUrl: "index.html",
            controller: 'IndexCtrl'
		})
		.state("MyCardList", {
			url: "/MyCardList",
			templateUrl: "src/auth/template/myCardList.html",
            controller: 'MyCardListCtrl'
		})
});