'use strict';

angular.module('navigation').controller('NavigationController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do navigation.client.controller.js';

  }
]);
