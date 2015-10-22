'use strict';

angular.module('sitedetails').controller('SiteDetailsController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {

    $scope._ = _;
    $scope.username = $('.loggedUser').val();
    $scope.formData = {};
    $scope.status = {};
        
    function getWebsite() {
        if($stateParams.harpyid) {
            $scope.harpyid = $stateParams.harpyid;
            $http.get('/websites/' + $scope.harpyid)
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
                if(productsAcessed && productsAcessed[0]) {
                    $scope.status.product = {name: productsAcessed[0].product.name, quantity: productsAcessed[0].quantity};
                } else {
                    $scope.status.product = {name: '-', quantity: '-'};
                }
                
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
                if(categoriesAcessed && categoriesAcessed[0]) {
                    $scope.status.category = {name: categoriesAcessed[0].category.name, quantity: categoriesAcessed[0].quantity};
                } else {
                    $scope.status.category = {name: '-', quantity: '-'};
                }
                
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
                if(pagesAcessed && pagesAcessed[0]) {
                    $scope.status.page = {name: pagesAcessed[0].page, quantity: pagesAcessed[0].quantity};
                } else {
                    $scope.status.page = {name: '-', quantity: '-'};
                }
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
                if(termsSearcheds && termsSearcheds[0]) {
                    $scope.status.search = {name: termsSearcheds[0].search, quantity: termsSearcheds[0].quantity};
                } else {
                    $scope.status.search = {name: '-', quantity: '-'};
                }
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
