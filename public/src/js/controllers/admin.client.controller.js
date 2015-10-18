'use strict';

angular.module('admin').controller('AdminController', ['$scope', '$http',
    function($scope, $http) {

    $scope._ = _;
    $scope.formData = {};
        
    function getWebsites() {
        $http.get('/websites')
            .success(function(websites) {
                $scope.websites = websites;
                $scope.message = {};
            })
            .error(function(err) {
                console.log('Error: ' + err);
                $scope.message = {
                   texto: 'Não foi possível obter a lista.'
                };
            });
    }
    
    getWebsites();
  }
]);
