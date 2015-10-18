'use strict';

angular.module('sitedetails').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('details', {
            url: '/admin/details/:websiteId',
            templateProvider: function($templateCache) {
				return $templateCache.get('sitedetails.client.view.html');
			}
		})
		
		.state('categories', {
            url: '/admin/report/:websiteId/categories',
            templateProvider: function($templateCache){
				return $templateCache.get('categories.client.view.html');
			}
        });

	}
]);
