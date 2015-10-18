'use strict';

angular.module('navigations').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('navigations', {
            url: '/admin/reports/navigations',
            templateProvider: function($templateCache){
				return $templateCache.get('navigations.client.view.html');
			}
        });
	}
]);
