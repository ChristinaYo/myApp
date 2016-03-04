var app = angular.module('myApp', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/index");
	$stateProvider
		.state("Index", {
			url: "/index",
			templateUrl: "index.html",
            controller: 'IndexCtrl'
		})
})