'use strict';

angular.module('admin').controller('AdminController', ['$scope', '$http',
    function($scope, $http) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do admin.client.controller.js';
  }
]);
