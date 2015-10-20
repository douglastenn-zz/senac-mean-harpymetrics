'use strict';

angular.module('products').controller('ProductsController', ['$scope', '$http', '$stateParams', 'Product',
    function($scope, $http, $stateParams, Product) {
        
    $scope.getMostAcessed = function() {
        if($stateParams.harpyid) {
            $scope.harpyid = $stateParams.harpyid;
            Product.getMostAcessed($stateParams.harpyid).then(
            function success(result) {
                console.log('result', result);
                $scope.productsMostAcessed = result.data;
            }, 
            function failed(err) {
                console.log('Error: ' + err);
            })
        }
    };

    $scope.getMostAcessed();
    
    $scope.getMostViewed = function() {
        if($stateParams.harpyid) {
            $scope.harpyid = $stateParams.harpyid;
            Product.getMostViewed($stateParams.harpyid).then(
            function success(result) {
                console.log('result', result);
                $scope.productsMostViewed = result.data;
            }, 
            function failed(err) {
                console.log('Error: ' + err);
            })
        }
    };

    $scope.getMostViewed();

  }
]);
