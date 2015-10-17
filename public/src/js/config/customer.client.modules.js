'use strict';

angular.module('customer').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('signup', {
            url: '/signup',
            templateProvider: function($templateCache){
				return $templateCache.get('create.client.view.html'); 
			}
        });
	}
]);
