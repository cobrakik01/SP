'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:UsuariosDetallesCtrl
 * @description
 * # UsuariosDetallesCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
    .controller('UsuariosDetallesCtrl', function ($scope, $stateParams, AuthService, AreasService, toaster, utils, loader) {

    $scope.loader = loader;
  	$scope.starting = false;

    $scope.data = {
      detalles: {},
      area: {}
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

  	if(angular.isDefined($stateParams.id)) {
      $scope.cargarAreas();
      $scope.cargarDetalles();
  	}
  });
