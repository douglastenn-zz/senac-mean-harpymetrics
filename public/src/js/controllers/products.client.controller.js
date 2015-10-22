'use strict';

angular.module('products').controller('ProductsController', ['$scope', '$http', '$stateParams', 'Product',
    function($scope, $http, $stateParams, Product) {
    
    $scope.username = $('.loggedUser').val();
        
    function getWebsite() {
        if($stateParams.harpyid) {
            $scope.harpyid = $stateParams.harpyid;
            $http.get('/websites/' + $scope.harpyid)
            .success(function(website) {
                $scope.website = website;
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
    
    $scope.getMostAcessed = function() {
        if($stateParams.harpyid) {
            $scope.harpyid = $stateParams.harpyid;
            Product.getMostAcessed($stateParams.harpyid).then(
            function success(result) {
                console.log('result', result);
                $scope.productsMostAcessed = result.data;
                $scope.drawChart( result.data );
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
                $scope.drawChartViewed( result.data );
            }, 
            function failed(err) {
                console.log('Error: ' + err);
            })
        }
    };

    $scope.getMostViewed();

    $scope.drawChart = function( data ) {
        $scope.chartProductMostAcessed = {};
        $scope.chartProductMostAcessed.type = "ColumnChart";

        var arrChart = [];
        $(data).each(function(i,e) { 
           var chart = {};
           chart.c = [];
            
           chart.c.push({ v: e.product.name });
           chart.c.push({ v: e.quantity });

           arrChart.push( chart );
        });


        $scope.chartProductMostAcessed.data = {"cols": [
            {id: "t", label: "Produto", type: "string"},
            {id: "s", label: "Acessos", type: "number"}
        ], "rows": arrChart };

    };

    $scope.drawChartViewed = function( data ) {
        $scope.chartProductMostViewed = {};
        $scope.chartProductMostViewed.type = "ColumnChart";

        var arrChart = [];
        $(data).each(function(i,e) { 
           var chart = {};
           chart.c = [];
            
           chart.c.push({ v: e.product.name });
           chart.c.push({ v: e.quantity });

           arrChart.push( chart );
        });


        $scope.chartProductMostViewed.data = {"cols": [
            {id: "t", label: "Produto", type: "string"},
            {id: "s", label: "Visualizações", type: "number"}
        ], "rows": arrChart };

    };

  }
]);
