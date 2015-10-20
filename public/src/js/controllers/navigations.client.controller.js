'use strict';

angular.module('navigations').controller('NavigationsController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do navigation.client.controller.js';

  }
]);
