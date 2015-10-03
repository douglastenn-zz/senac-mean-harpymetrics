'use strict';

angular.module('harpyid').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('harpyid', {
            url: '/admin/harpyid',
            templateUrl: '/src/js/modules/harpyid/views/harpyid.client.view.html'
        });
	}
]);
