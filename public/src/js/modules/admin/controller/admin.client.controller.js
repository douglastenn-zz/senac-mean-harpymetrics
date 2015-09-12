'use strict';

angular.module('admin').controller('AdminController', ['$scope', '$window', '$http',
    function($scope, $window, $http, Website) {

	  $scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do admin.client.controller.js';
    $scope.websites = [];
    $scope.success = false;
    $scope.filterWebsite = '';
        
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
    
    $scope.saveWebsite = function(form) {
    	console.info('formData', $scope.formData);

    	$http.post('/websites', $scope.formData)
          .success(function(data) {
          	  $scope.success = true;
              $scope.formData = {};
              $scope.adminForm.$setPristine();
              getWebsites();
              $window.location.href = '/admin'
          })
          .error(function(data) {
              console.log('Error: ' + data);
         });
    }

   $scope.removeWebsite = function(website) {
       Website.delete(website._id)
          .success(function(data) {
              getWebsites();
          })
          .error(function(err) {
              $scope.mensagem = {
                   texto: 'Não foi possível remover o website.'
               };
               console.log(err);
         }); 
   }
  }
]);
