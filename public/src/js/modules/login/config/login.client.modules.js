'use strict';

angular.module('login').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('signin', {
            url: '/signin',
            templateUrl: '/src/js/modules/login/views/login.client.view.html'
        });
	}
]);
