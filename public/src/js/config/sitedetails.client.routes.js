'use strict';

angular.module('sitedetails').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('sitedetails', {
            url: '/admin/details/:websiteId',
            templateProvider: function($templateCache) {
				return $templateCache.get('sitedetails.client.view.html'); 
			}
		});
	}
]);
