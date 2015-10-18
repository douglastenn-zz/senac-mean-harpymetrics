'use strict';

angular.module('sitedetails').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('details', {
            url: '/admin/details/:harpyid',
            templateProvider: function($templateCache) {
				return $templateCache.get('sitedetails.client.view.html');
			}
		})
		
		.state('categories', {
            url: '/admin/details/:harpyid/reports/categories',
            templateProvider: function($templateCache){
				return $templateCache.get('categories.client.view.html');
			}
        })
        
        .state('products', {
            url: '/admin/details/:harpyid/reports/products',
            templateProvider: function($templateCache){
				return $templateCache.get('products.client.view.html');
			}
        });

	}
]);
