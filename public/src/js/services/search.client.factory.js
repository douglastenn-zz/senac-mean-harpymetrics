'use strict';

angular.module('searches')
    .factory('Search', function($http) {
        return {
            getMostSearched: function(harpyId) {
                return $http.get('/'+harpyId+'/search/most-searched');
            }
        }
});
