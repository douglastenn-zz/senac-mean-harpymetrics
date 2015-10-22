'use strict';

angular.module('navigations').controller('NavigationsController', ['$scope', '$http', '$stateParams', 'Navigation',
    function($scope, $http, $stateParams, Navigation) {
        $scope.username = $('.loggedUser').val();
        
        $scope.danger = {'background-color': '#f2d6d6'};
        $scope.warning = {'background-color': '#F4EAAC'};
        
        $scope.getWebsite = function () {
            if($stateParams.harpyid) {
                $scope.harpyid = $stateParams.harpyid;
                $http.get('/websites/' + $scope.harpyid)
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
        $scope.getWebsite();

        $scope.getNavigationsDetails = function() {
            if($stateParams.harpyid) {
                $scope.harpyid = $stateParams.harpyid;
                Navigation.getNavigationsDetails($stateParams.harpyid).then(
                function success(result) {
                    console.log('result', result);
                    $scope.navigationsDetails = result.data;
                }, 
                function failed(err) {
                    console.log('Error: ' + err);
                })
            }
        };

        $scope.getNavigationsDetails();

  }
]);
