'use strict';

angular.module('access').controller('AccessController', ['$scope', '$http',
    function($scope, $http) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do access.client.controller.js';
  }
]);
