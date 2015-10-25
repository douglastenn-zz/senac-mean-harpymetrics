'use strict';

angular.module('index').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('index', {
            url: '/',
            templateProvider: function($templateCache){
				return $templateCache.get('index.client.view.html');
			}
        })

				.state('error', {
						url: '/error',
						templateProvider: function($templateCache){
						return $templateCache.get('error.client.view.html');
				}
			});

        $urlRouterProvider.otherwise('/');
	}
]);
