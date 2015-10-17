// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'app';

// Create the main application

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ui.router', 'templateCache', 'index', 'customer', 'access', 'admin', 'documents','harpyid','sitedetails', 'reports', 'products','categories','navigation']);

// Configure the hashbang URLs using the $locationProvider services
mainApplicationModule.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

// Fix Facebook's OAuth bug
if (window.location.hash === '#_=_') window.location.hash = '#!';

// Require modules
var modules = require.context('modules', true, /\.js$/);
	modules.keys().forEach(modules);

var config = require.context('config', true, /\.js$/);
	config.keys().forEach(config);

var controllers = require.context('controllers', true, /\.js$/);
	controllers.keys().forEach(controllers);

// Manually bootstrap the AngularJS application
angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});
