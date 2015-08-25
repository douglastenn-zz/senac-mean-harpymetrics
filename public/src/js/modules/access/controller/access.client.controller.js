'use strict';

angular.module('access').controller('AccessController', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

	$scope._ = _;
    $scope.formData = {};
    $scope.success = false;

    $scope.signin = function(form) {
    	console.info('formData', $scope.formData);

    	$http.post('/signin', $scope.formData )
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
