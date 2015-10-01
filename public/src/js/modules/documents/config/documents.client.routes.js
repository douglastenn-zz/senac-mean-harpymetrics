'use strict';

angular.module('documents').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('documents', {
            url: '/documents',
            templateUrl: '/src/js/modules/documents/views/documents.client.view.html'
        });
	}
]);
