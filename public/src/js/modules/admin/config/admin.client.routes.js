'use strict';

angular.module('admin').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('admin', {
            url: '/admin',
            templateUrl: '/src/js/modules/admin/views/admin.client.view.html'
        });
	}
]);
