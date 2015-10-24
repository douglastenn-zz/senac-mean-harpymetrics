'use strict';

angular.module('reports').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('reports', {
            url: '/admin/reports',
            templateProvider: function($templateCache){
				return $templateCache.get('report.client.view.html'); 
			}
        });

        $urlRouterProvider.otherwise('/');
	}
]);
