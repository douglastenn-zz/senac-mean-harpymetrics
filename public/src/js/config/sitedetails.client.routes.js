'use strict';

angular.module('sitedetails').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('sitedetails', {
            url: '/admin/details/:websiteId',
<<<<<<< HEAD:public/src/js/config/sitedetails.client.routes.js
            templateProvider: function($templateCache){
				return $templateCache.get('sitedetails.client.view.html'); 
			}
=======
            templateUrl: '/src/js/modules/admin/views/sitedetails.client.view.html'
>>>>>>> 147d057fcf7e83f682d1c7bdb5408eb31ec9564b:public/src/js/modules/admin/config/sitedetails.client.routes.js
        });
	}
]);
