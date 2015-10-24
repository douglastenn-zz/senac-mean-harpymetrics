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
      })

			.state('category', {
					url: '/documents/category',
					templateProvider: function($templateCache){
					return $templateCache.get('category.documents.client.view.html');
				}
			})

			.state('product', {
					url: '/documents/product',
					templateProvider: function($templateCache){
					return $templateCache.get('product.documents.client.view.html');
				}
			})

			.state('overview', {
					url: '/documents/overview',
					templateProvider: function($templateCache){
					return $templateCache.get('overview.documents.client.view.html');
				}
			})

			.state('checkout', {
					url: '/documents/checkout',
					templateProvider: function($templateCache){
					return $templateCache.get('checkout.documents.client.view.html');
				}
			})

			.state('search', {
					url: '/documents/search',
					templateProvider: function($templateCache){
					return $templateCache.get('search.documents.client.view.html');
			}
		});

		$urlRouterProvider.otherwise('/');

	}
]);
