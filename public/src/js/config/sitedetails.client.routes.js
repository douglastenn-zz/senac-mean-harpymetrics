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

        .state('pages', {
            url: '/admin/details/:harpyid/reports/pages',
            templateProvider: function($templateCache){
                return $templateCache.get('pages.client.view.html');
            }
        })
        
        .state('products', {
            url: '/admin/details/:harpyid/reports/products',
            templateProvider: function($templateCache){
				return $templateCache.get('products.client.view.html');
			}
        })
        
        .state('searches', {
            url: '/admin/details/:harpyid/reports/searches',
            templateProvider: function($templateCache){
				return $templateCache.get('searches.client.view.html');
			}
        })
        
        .state('navigations', {
            url: '/admin/details/:harpyid/reports/navigations',
            templateProvider: function($templateCache){
				return $templateCache.get('navigations.client.view.html');
			}
        });

        $urlRouterProvider.otherwise('/');

	}
]);
