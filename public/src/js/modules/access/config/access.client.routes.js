'use strict';

angular.module('access').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider
        
        .state('signin', {
            url: '/signin',
            templateUrl: '/src/js/modules/access/views/access.client.view.html'
        });
	}
]);
