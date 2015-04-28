'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:PerfilHomeCtrl
 * @description
 * # PerfilHomeCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('PerfilHomeCtrl', function ($scope, AreasService) {
  	$scope.data = {
  		detalles: {},
  		area: {}
  	};

  	$scope.data.areas = AreasService.all(function(data) {
  		$scope.data.areas = data;
  	});

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
  			console.log('Listo para actualizar');
  		}
  		else
  		{
  			console.log('Aún no esta listo para actualizar');
  		}
  	};

  });
