'use strict';

angular.module('documents').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('documents', {
            url: '/documents',
            templateProvider: function($templateCache){
				return $templateCache.get('documents.client.view.html');
			}
        })

        .state('events', {
            url: '/documents/events',
            templateProvider: function($templateCache){
				return $templateCache.get('events.documents.client.view.html');
			}
        });
	}
]);
