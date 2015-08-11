'use strict';

angular.module('customer').controller('CustomerController', ['$scope', '$http',
    function($scope, $http) {

	$scope._ = _;
    $scope.formData = {};
    $scope.success = false;

    $scope.createCustomer = function(form) {
    	console.info('formData', $scope.formData);

    	$http.post('/customer/create', $scope.formData )
          .success(function(data) {
          	  $scope.success = true;
          })
          .error(function(data) {
              console.log('Error: ' + data);
         });
    }
  }
]);
