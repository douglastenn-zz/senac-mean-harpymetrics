'use strict';

angular.module('report').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('report', {
            url: '/admin/report/:websiteId',
            templateUrl: '/src/js/modules/admin/views/report.client.view.html'
        });
	}
]);
