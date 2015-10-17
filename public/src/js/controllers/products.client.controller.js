'use strict';

angular.module('products').controller('ProductsController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do products.client.controller.js';
        
    function getWebsite() {
        if($stateParams.websiteId) {
            $http.get('/websites/' + $stateParams.websiteId)
            .success(function(website) {
                $scope.website = website;
                getMostAcessed(website);
            })
            .error(function(err) {
                console.log('Error: ' + err);
                $scope.message = {
                   texto: 'Não foi possível obter a lista.'
                };
            });
        }
    }
    getWebsite();
        
    function getMostAcessed(website) {
        console.log('website', website.harpyid);
        $http.get('/' + website.harpyid + '/product/most-acessed')
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
]);
