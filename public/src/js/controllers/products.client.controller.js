'use strict';

angular.module('products').controller('ProductsController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {
                
    function getMostAcessed() {
        if($stateParams.harpyid) {
            $scope.harpyid = $stateParams.harpyid;
            $http.get('/' + $stateParams.harpyid + '/product/most-acessed')
                .success(function(products) {
                    $scope.products = products;
                })
                .error(function(err) {
                    console.log('Error: ' + err);
                    $scope.message = {
                       texto: 'Não foi possível obter a lista.'
                    };
                });
        }
    }
    getMostAcessed();

  }
]);
