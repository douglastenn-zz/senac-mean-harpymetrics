'use strict';

angular.module('searches').controller('SearchesController', ['$scope', '$http', '$stateParams', 'Search',
    function($scope, $http, $stateParams, Search) {
        
    $scope.getMostSearched = function() {
        if($stateParams.harpyid) {
            $scope.harpyid = $stateParams.harpyid;
            Search.getMostSearched($stateParams.harpyid).then(
            function success(result) {
                console.log('result', result);
                $scope.searchesMostSearched = result.data;
            }, 
            function failed(err) {
                console.log('Error: ' + err);
            })
        }
    };

    $scope.getMostSearched();

  }
]);
