'use strict';

angular.module('index').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('index', {
            url: '/',
            templateUrl: '/src/js/modules/index/views/index.client.view.html'
        });

        $urlRouterProvider.otherwise('/');
	}
]);