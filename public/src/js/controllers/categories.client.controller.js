'use strict';

angular.module('categories').controller('CategoriesController', ['$scope', '$http', '$stateParams','Website', 'Category',
    function($scope, $http, $stateParams, Website, Category) {
            
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
                    Category.getMostAcessed( $stateParams.harpyid ).then(
		    		function success(result) {
		    			console.log('result', result);
	    				$scope.categories = result.data;
	    				$scope.drawChart(result.data);
		    		}, 
		    		function failed(err) {
		    			console.log('Error: ' + err);
		    		})
                }
		    };

		    $scope.drawChart = function( data ) {
		    	$scope.chartCategories = {};
    			$scope.chartCategories.type = "ColumnChart";

    			var arrChart = [];
    			$(data).each(function(i,e) { 
				   var chart = {};
				   chart.c = [];
				    
				   chart.c.push({ v: e.category.name });
				   chart.c.push({ v: e.quantity });

				   arrChart.push( chart );
				});


			    $scope.chartCategories.data = {"cols": [
			        {id: "t", label: "Categoria", type: "string"},
			        {id: "s", label: "Acessos", type: "number"}
			    ], "rows": arrChart };

			    $scope.chartCategories.options = {
			        'title': 'Categorias mais acessadas'
			    };

		    };

		    $scope.getMostAcessed();
  	}
]);
