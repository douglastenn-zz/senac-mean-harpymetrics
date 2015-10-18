'use strict';

angular.module('categories').controller('CategoriesController', ['$scope', '$http', '$stateParams','Website', 'Category',
    function($scope, $http, $stateParams, Website, Category) {

    		$scope.getWebsite = function() {
		        if($stateParams.websiteId) {
		            $http.get('/websites/' + $stateParams.websiteId)
		            .success(function(website) {
		                $scope.getMostAcessed(website);
		            })
		            .error(function(err) {
		                console.log('Error: ' + err);
		                $scope.message = {
		                   texto: 'Não foi possível obter a lista.'
		                };
		            });
		        }
		    };

		    $scope.getMostAcessed = function(website) {
		    	Category.getMostAcessed( website.harpyid ).then(
		    		function success(result) {
		    			console.log('result', result);
	    				$scope.categories = result.data;
		    		}, 
		    		function failed(err) {
		    			console.log('Error: ' + err);
		    		})
		    };

		    $scope.getWebsite();
  	}
]);
