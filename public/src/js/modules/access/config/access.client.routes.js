'use strict';

angular.module('access').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: '/src/js/modules/access/views/access.client.view.html'
        });
	}
]);
