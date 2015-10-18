'use strict';

angular.module('categories')
    .factory('Category', function($http) {
        return {
            getMostAcessed: function(harpyId) {
                return $http.get('/'+harpyId+'/category/most-acessed');
            }
        }
});
