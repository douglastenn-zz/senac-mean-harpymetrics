'use strict';

angular.module('index').controller('IndexController', ['$scope', '$http',
    function($scope, $http) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do index.client.controller.js';
  }
]);
