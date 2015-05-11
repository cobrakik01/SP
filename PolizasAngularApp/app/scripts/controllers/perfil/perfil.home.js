'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:PerfilHomeCtrl
 * @description
 * # PerfilHomeCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('PerfilHomeCtrl', function ($scope, AreasService, AuthService, toaster, utils, loader) {

    $scope.loader = loader;
    $scope.starting = false;

  	$scope.data = {
  		detalles: {},
  		area: {},
      change: {}
  	};

    $scope.cargarDetalles = function() {
      $scope.starting = true;
      AuthService.user(function(userData) {
        AuthService.details(userData.UserId, function(data) {
          if(data.detalles) {
            $scope.data.detalles = data.detalles;
            $scope.data.detalles.FechaDeNacimiento = utils.formatDate(utils.toDate(data.detalles.FechaDeNacimiento));

            angular.forEach($scope.data.areas, function(value, key) {
              if(data.area.Id === value.Id) {
                $scope.data.area = $scope.data.areas[key];
              }
            });
          }
          $scope.starting = false;
        });
      });
    };

    $scope.cargarAreas = function() {
      $scope.data.areas = AreasService.all(function(data) {
        $scope.data.areas = data;
      });
    };

    $scope.cargarAreas();

    $scope.cargarDetalles();

  	$scope.isReady = function() {
  		var d = $scope.data.detalles;
  		var a = $scope.data.area;
  		var b = d 
  			&& a
  			&& (d.Nombre 
  			&& d.ApellidoPaterno
  			&& d.ApellidoMaterno
  			&& d.FechaDeNacimiento
  			&& d.NumeroDeEmpleado)
  			&& a.Nombre;
  		return b;
  	};

  	$scope.actualizar = function() {
  		if($scope.isReady())
  		{
        AuthService.user(function(data) {
          AuthService.update(data.UserId, $scope.data.detalles, $scope.data.area, function(data) {
            if (data.Message) {
              toaster.pop(data.Message.Type, data.Message.Title, data.Message.Message);
            }
          });
        });
  		}
  	};


    $scope.cambiarPassword = function() {
      if($scope.readyPassword()) {
        AuthService.changePassword($scope.data.change.oldPassword, $scope.data.change.newPassword, function(data) {
          console.log(data);
          if (data.Message) {
            toaster.pop(data.Message.Type, data.Message.Title, data.Message.Message);
          }
          $scope.resetFormChangePassword();
        });
      }
    };

    $scope.resetFormChangePassword = function() {
      $scope.data.change = {};
    };

    $scope.readyPassword = function() {
      return angular.isDefined($scope.data.change.newPassword) 
            && angular.isDefined($scope.data.change.confirmPassword)
            && $scope.data.change.newPassword === $scope.data.change.confirmPassword;
    };
    

  });
