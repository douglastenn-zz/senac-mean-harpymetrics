'use strict';

angular.module('products').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('products', {
            url: '/admin/reports/{{website.harpyid}}/products/most-acessed',
            templateProvider: function($templateCache){
				return $templateCache.get('products.client.view.html');
			}
        });
	}
]);
