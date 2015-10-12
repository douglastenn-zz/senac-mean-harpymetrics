'use strict';

angular.module('products').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('products', {
            url: '/admin/reports/products',
            templateUrl: '/src/js/modules/reports/views/products.client.view.html'
        });
	}
]);
