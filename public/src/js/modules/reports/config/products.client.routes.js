'use strict';

angular.module('products').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('products', {
            url: '/admin/report/products',
            templateUrl: '/src/js/modules/reports/views/products.client.view.html'
        });
	}
]);
