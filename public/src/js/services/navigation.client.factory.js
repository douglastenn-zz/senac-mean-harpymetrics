'use strict';

angular.module('navigations')
    .factory('Navigation', function($http) {
        return {
            getNavigationsDetails: function(harpyId) {
                return $http.get('/'+harpyId+'/navigationsDetails');
            }
        }
});
