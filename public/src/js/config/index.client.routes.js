'use strict';

angular.module('index').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('index', {
            url: '/',
            templateProvider: function($templateCache){
				return $templateCache.get('index.client.view.html'); 
			}
        });
	}
]);
