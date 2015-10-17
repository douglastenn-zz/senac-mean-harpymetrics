'use strict';

angular.module('sitedetails').controller('SiteDetailsController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {

    $scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do sitedetails.client.controller.js';
    $scope.status = {};
        
    function getWebsite() {
        if($stateParams.websiteId) {
            $http.get('/websites/' + $stateParams.websiteId)
            .success(function(website) {
                $scope.website = website;
                getStatus(website);
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
        
    function getStatus(website) {
        setStatusProduct(website);
        setStatusCategory(website);
        setStatusPage(website);
        setStatusSearch(website);
    }
        
    function setStatusProduct(website) {
        $http.get('/' + website.harpyid + '/product/most-acessed-of-day')
            .success(function(productsAcessed) {
                
                $scope.status.product = {name: productsAcessed[0].product.name, quantity: productsAcessed[0].quantity};
            })
            .error(function(err) {
                console.log('Error: ' + err);
                $scope.message = {
                   texto: 'Não foi possível obter a lista.'
                };
            });
    }
    
    function setStatusCategory(website) {
        $http.get('/' + website.harpyid + '/category/most-acessed-of-day')
            .success(function(categoriesAcessed) {
                
                $scope.status.category = {name: categoriesAcessed[0].category.name, quantity: categoriesAcessed[0].quantity};
            })
            .error(function(err) {
                console.log('Error: ' + err);
                $scope.message = {
                   texto: 'Não foi possível obter a lista.'
                };
            });
    }
        
    function setStatusPage(website) {
        $http.get('/' + website.harpyid + '/page/most-acessed-of-day')
            .success(function(pagesAcessed) {
                
                $scope.status.page = {name: pagesAcessed[0].page, quantity: pagesAcessed[0].quantity};
            })
            .error(function(err) {
                console.log('Error: ' + err);
                $scope.message = {
                   texto: 'Não foi possível obter a lista.'
                };
            });
    }
    
    function setStatusSearch(website) {
        $http.get('/' + website.harpyid + '/search/most-searched-of-day')
            .success(function(termsSearcheds) {
                
                $scope.status.search = {name: termsSearcheds[0].search, quantity: termsSearcheds[0].quantity};
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
