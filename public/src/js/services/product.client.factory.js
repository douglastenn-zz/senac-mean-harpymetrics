'use strict';

angular.module('products')
    .factory('Product', function($http) {
        return {
            getMostAcessed: function(harpyId) {
                return $http.get('/'+harpyId+'/product/most-acessed');
            },
            getMostViewed: function(harpyId) {
                return $http.get('/'+harpyId+'/product/most-viewed');
            }
        }
});
