'use strict';

angular.module('reports').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('reports', {
            url: '/admin/reports',
            templateUrl: '/src/js/modules/reports/views/report.client.view.html'
        });
	}
]);
