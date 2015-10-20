'use strict';

angular.module('categories').controller('CategoriesController', ['$scope', '$http', '$stateParams','Website', 'Category',
    function($scope, $http, $stateParams, Website, Category) {
            
		    $scope.getMostAcessed = function() {
                if($stateParams.harpyid) {
                    $scope.harpyid = $stateParams.harpyid;
                    Category.getMostAcessed( $stateParams.harpyid ).then(
		    		function success(result) {
		    			console.log('result', result);
	    				$scope.categories = result.data;
		    		}, 
		    		function failed(err) {
		    			console.log('Error: ' + err);
		    		})
                }
		    };

		    $scope.getMostAcessed();
  	}
]);
