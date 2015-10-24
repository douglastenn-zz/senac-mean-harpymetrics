'use strict';

angular.module('admin').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('admin', {
            url: '/admin',
            templateProvider: function($templateCache){
				return $templateCache.get('admin.client.view.html');
				}
      })

			.state('admin.leftnav', {
					templateProvider: function($templateCache){
			return $templateCache.get('admin-left-nav.html');
			}
		});

		$urlRouterProvider.otherwise('/');


	}
]);
