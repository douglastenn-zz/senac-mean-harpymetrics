'use strict';

angular.module('sitedetails').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('sitedetails', {
            url: '/admin/details/:websiteId',
            templateUrl: '/src/js/modules/admin/views/sitedetails.client.view.html'
        });
	}
]);
