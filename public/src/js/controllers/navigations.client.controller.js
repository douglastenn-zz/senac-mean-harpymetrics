'use strict';

angular.module('navigations').controller('NavigationsController', ['$scope', '$http', '$stateParams', 'Navigation',
    function($scope, $http, $stateParams, Navigation) {

	$scope.getNavigationsDetails = function() {
        if($stateParams.harpyid) {
            $scope.harpyid = $stateParams.harpyid;
            Navigation.getNavigationsDetails($stateParams.harpyid).then(
            function success(result) {
                console.log('result', result);
                $scope.navigationsDetails = result.data;
            }, 
            function failed(err) {
                console.log('Error: ' + err);
            })
        }
    };

    $scope.getNavigationsDetails();

  }
]);
