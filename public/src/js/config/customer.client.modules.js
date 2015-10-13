'use strict';

angular.module('customer').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('signup', {
            url: '/signup',
            templateUrl: '/src/js/modules/customer/views/create.client.view.html'
        });
	}
]);
