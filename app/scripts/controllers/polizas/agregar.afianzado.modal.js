'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:PolizasAgregarAfianzadoModalCtrl
 * @description
 * # PolizasAgregarAfianzadoModalCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('PolizasAgregarAfianzadoModalCtrl', function ($scope, $modalInstance, params) {

  	$scope.afianzado = {};
  	
  	$scope.agregar = function () {
  		if(!$scope.disabledForm()) {
  			$modalInstance.close($scope.afianzado);
  		}
  	};

  	$scope.disabledForm = function() {
  		return !($scope.afianzado.ApellidoMaterno 
            && $scope.afianzado.ApellidoPaterno 
            && $scope.afianzado.Nombre 
            && $scope.afianzado.FechaDeNacimiento);
  	};

  	$scope.cancelar = function () {
  		$modalInstance.dismiss($scope.afianzado);
  	};

  });
