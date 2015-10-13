'use strict';

angular.module('harpyid').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('harpyid', {
            url: '/admin/harpyid',
            templateProvider: function($templateCache){
				return $templateCache.get('harpyid.client.view.html'); 
			}
        });
	}
]);
