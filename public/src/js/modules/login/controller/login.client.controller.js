'use strict';

angular.module('login').controller('LoginController', ['$scope', '$http',
    function($scope, $http) {

	$scope._ = _;
    $scope.formData = {};
    $scope.success = false;

    $scope.signin = function(form) {
    	console.info('formData', $scope.formData);

    	$http.post('/customer/signin', $scope.formData )
          .success(function(data) {
          	  $scope.success = true;
              $scope.formData = {};
          })
          .error(function(data) {
              console.log('Error: ' + data);
         });
    }
  }
]);
