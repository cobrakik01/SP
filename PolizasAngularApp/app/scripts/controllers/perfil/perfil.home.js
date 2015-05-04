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
  		area: {}
  	};

    $scope.cargarDetalles = function() {
      $scope.starting = true;
      AuthService.user(function(userData) {
        AuthService.details(userData.UserId, function(data) {
          $scope.data.detalles = data.detalles;
          $scope.data.detalles.FechaDeNacimiento = utils.formatDate(utils.toDate(data.detalles.FechaDeNacimiento));

          angular.forEach($scope.data.areas, function(value, key) {
            if(data.area.Id === value.Id) {
              $scope.data.area = $scope.data.areas[key];
            }
          });
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


    /*
    |*****************************************
    |         Controles de Fecha de nacimiento
    |*****************************************
    */

    $scope.today = function() {
      $scope.data.detalles.FechaDeNacimiento = new Date();
    };
    // $scope.today();

    $scope.clear = function () {
      $scope.data.detalles.FechaDeNacimiento = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      // $scope.minDate = $scope.minDate ? null : new Date();
      var d = new Date();
      $scope.minDate = new Date((d.getFullYear() - 80) + "/07/30");
    };

    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];

  });
