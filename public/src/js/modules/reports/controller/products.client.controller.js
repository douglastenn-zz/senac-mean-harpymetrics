'use strict';

angular.module('products').controller('ProductsController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do products.client.controller.js';

  }
]);
