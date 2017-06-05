'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:SessionLoginCtrl
 * @description
 * # SessionLoginCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('LoginCtrl', function ($scope, $state, AuthService, loader, img, toaster) {

    $scope.img = img;

    $scope.loader = loader;

    $scope.starting = false;

  	$scope.fail = false;

    $scope.data = {};

    $scope.ready = function() {
      var user = $scope.data.usuario;
      return user && user.email && user.password;
    };

  	$scope.entrar = function() {
      $scope.starting = true;

      if($scope.ready()) {
        AuthService.OAuthLogin($scope.data.usuario, function(data) {
          $state.transitionTo('home');
        }, function(a, b, c) {
          console.log(a);
          if(a.responseJSON) {
            toaster.pop('warning', 'Error', a.responseJSON.error_description);

          } else {
            toaster.pop('warning', 'Error', 'Ocurrio un error.');
          }
          $scope.starting = false;
        });
      } else {
        $scope.starting = false;
        toaster.pop('warning', 'Cuidado!', 'Es nesesario el nombre de usuario y password.');
      }
  	};

  });