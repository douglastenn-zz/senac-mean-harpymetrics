'use strict';

angular.module('categories').controller('CategoriesController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do categories.client.controller.js';

  }
]);
