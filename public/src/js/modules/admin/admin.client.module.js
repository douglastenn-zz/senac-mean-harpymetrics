'use strict';

angular.module('admin', [])
	.factory('Website', function($http) {
		return {
			get : function() {
                return $http.get('/websites');
            },
            save : function(formData) {
                return $http.post('/websites/', formData);
            },
            delete : function(id) {
                return $http.delete('websites/' + id);
            }
		}
	});
