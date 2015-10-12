// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'app';

// Create the main application

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngAnimate', 'ui.router', 'index', 'customer', 'access', 'admin', 'documents','harpyid','sitedetails', 'report', 'products']);

// Configure the hashbang URLs using the $locationProvider services
mainApplicationModule.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

// Fix Facebook's OAuth bug
if (window.location.hash === '#_=_') window.location.hash = '#!';

// Manually bootstrap the AngularJS application
angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});
