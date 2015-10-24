'use strict';

angular.module('access').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider
        
        .state('signin', {
            url: '/signin',
            templateProvider: function($templateCache){
				return $templateCache.get('access.client.view.html'); 
			}
        });

        $urlRouterProvider.otherwise('/');
	}
]);
