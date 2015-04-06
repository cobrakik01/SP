'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:PolizasPolizasAgregarDepositanteModalCtrl
 * @description
 * # PolizasPolizasAgregarDepositanteModalCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('PolizasAgregarDepositanteModalCtrl', function ($scope, $modalInstance, params) {
    
    $scope.depositante = {};
  	
  	$scope.agregar = function () {
  		if(!$scope.disabled()) {
  			$modalInstance.close($scope.depositante);
  		}
  	};

  	$scope.disabled = function() {
  		return !($scope.depositante.apellidoMaterno && $scope.depositante.apellidoPaterno && $scope.depositante.nombre);
  	};

  	$scope.cancelar = function () {
  		$modalInstance.dismiss($scope.depositante);
  	};
  });
