'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:PolizasAgregarDepositanteModalCtrl
 * @description
 * # PolizasAgregarDepositanteModalCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('PolizasAgregarDepositanteModalCtrl', function ($scope, $modalInstance, params) {
    
    $scope.depositante = {};
  	
  	$scope.agregar = function () {
  		if(!$scope.disabled()) {
  			$modalInstance.close($scope.depositante);
  		}
  	};

  	$scope.disabled = function() {
  		return !($scope.depositante.ApellidoMaterno && $scope.depositante.ApellidoPaterno && $scope.depositante.Nombre);
  	};

  	$scope.cancelar = function () {
  		$modalInstance.dismiss($scope.depositante);
  	};
  });
