'use strict';

angular.module('navigation').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('navigation', {
            url: '/admin/reports/navigation',
            templateProvider: function($templateCache){
				return $templateCache.get('navigation.client.view.html');
			}
        });
	}
]);
