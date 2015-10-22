'use strict';

angular.module('harpyid')
    .factory('Harpyid', function($http) {
        return {
			getWebsite : function(harpyid) {
                return $http.get('/websites/' + harpyid);
            },
            saveWebsite : function(formData) {
                return $http.post('/websites/', formData);
            },
            deleteWebsite : function(id) {
                return $http.delete('websites/' + id);
            }
		}
});
