'use strict';

angular.module('pages').controller('PagesController', ['$scope', '$http', '$stateParams','Website', 'Page',
    function($scope, $http, $stateParams, Website, Page) {
            
		    $scope.getMostAcessed = function() {
                if($stateParams.harpyid) {
                    $scope.harpyid = $stateParams.harpyid;
                    Page.getMostAcessed( $stateParams.harpyid ).then(
		    		function success(result) {
		    			console.log('result', result);
	    				$scope.pages = result.data;
	    				$scope.drawChart( result.data );
		    		}, 
		    		function failed(err) {
		    			console.log('Error: ' + err);
		    		})
                }
		    };

		    $scope.drawChart = function( data ) {
		    	$scope.chartPages = {};
    			$scope.chartPages.type = "ColumnChart";

    			var arrChart = [];
    			$(data).each(function(i,e) { 
				   var chart = {};
				   chart.c = [];
				    
				   chart.c.push({ v: e.page });
				   chart.c.push({ v: e.quantity });

				   arrChart.push( chart );
				});


			    $scope.chartPages.data = {"cols": [
			        {id: "t", label: "Páginas", type: "string"},
			        {id: "s", label: "Acessos", type: "number"}
			    ], "rows": arrChart };

		    };

		    $scope.getMostAcessed();
  	}
]);
