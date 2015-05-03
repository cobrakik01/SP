'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('LoginCtrl', function ($scope, $state, AuthService, $timeout, $rootScope, loader, toaster) {

    $scope.loader = loader;

    $scope.starting = false;

  	$scope.fail = false;

    $scope.data = {};

    $scope.ready = function() {
      var user = $scope.data.usuario;
      return user && user.username && user.password;
    };

  	$scope.entrar = function() {
      $scope.starting = true;
      var attemp = 1;

  		var login = function() {
        if($scope.ready()) {
          AuthService.login($scope.data.usuario, function(data) {
            console.log(data);
            if(attemp === 2)
            {
              if(data.UserId !== 1)
              {
                $scope.fail = true;
                $scope.starting = false;
              }
              else
              {
                $rootScope.loadUser();
                $state.transitionTo('home');
              }
            } else 
            {
              attemp = 1;
            }
            attemp++;
          }, function(data, b, c) {
            $scope.starting = false;
            if(data === null && b === 0) {
              toaster.pop('error', 'Error', 'Error de conexión, por favor revise su conexión a internet o intranet e inténtelo de nuevo más tarde.');
            }
          });
        } else {
          $scope.starting = false;
          toaster.pop('warning', 'Cuidado!', 'Es nesesario el nombre de usuario y password.');
        }
      };

      login();
      $timeout(function(){
        login();
      }, 3000);
  	};


  });
