'use strict';

angular.module('admin').controller('AdminController', ['$scope', '$http',
    function($scope, $http) {

	$scope._ = _;
    $scope.formData = {};
    $scope.variable = 'Variavél do controller do admin.client.controller.js';
    $scope.websites = [];
    $scope.success = false;
        
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

    	$http.post('/websites', $scope.formData )
          .success(function(data) {
          	  $scope.success = true;
              $scope.formData = {};
              getWebsites();
          })
          .error(function(data) {
              console.log('Error: ' + data);
         });
    }

//    $scope.remove = function(website) {
//        Website.delete({id: website._id}, 
//            getWebsites, 
//            function(erro) {
//                $scope.mensagem = {
//                    texto: 'Não foi possível remover o website.'
//                };
//                console.log(erro);
//            }
//        );
//    }
  }
]);
