'use strict';

angular.module('pages')
    .factory('Page', function($http) {
        return {
            getMostAcessed: function(harpyId) {
                return $http.get('/'+harpyId+'/page/most-acessed');
            }
        }
});
