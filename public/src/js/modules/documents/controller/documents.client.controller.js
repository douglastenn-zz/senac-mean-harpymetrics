'use strict';

angular.module('documents').controller('DocumentsController', ['$scope', '$http',
    function($scope, $http) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do documents.client.controller.js';
  }
]);
