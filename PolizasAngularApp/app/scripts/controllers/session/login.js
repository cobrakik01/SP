'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('LoginCtrl', function ($scope, $state, AuthService, $timeout, $rootScope, loader) {

    $scope.loader = loader;

    $scope.starting = false;

  	$scope.fail = false;

  	$scope.entrar = function() {
      $scope.starting = true;
      var attemp = 1;
  		var login = function(){
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
        });
      };

      login();
      $timeout(function(){
        login();
      }, 3000);
  	};


  });
