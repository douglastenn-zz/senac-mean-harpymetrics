'use strict';

angular.module('reports').controller('ReportController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do report.client.controller.js';

  }
]);
