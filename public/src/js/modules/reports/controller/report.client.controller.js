'use strict';

angular.module('report').controller('ReportController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do report.client.controller.js';

    function getWebsite() {
        if($stateParams.websiteId) {
            $http.get('/websites/' + $stateParams.websiteId)
            .success(function(website) {
                $scope.website = website;
            })
            .error(function(err) {
                console.log('Error: ' + err);
                $scope.message = {
                   texto: 'Não foi possível obter a lista.'
                };
            });
        }
    }
    getWebsite();
  }
]);
