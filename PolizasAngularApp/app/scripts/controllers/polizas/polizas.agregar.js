'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:PolizasPolizasAgregarCtrl
 * @description
 * # PolizasPolizasAgregarCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('PolizasAgregarCtrl', function ($scope, $modal, PolizasService, $log) {

    $scope.data = {
      poliza: undefined,
      afianzado: undefined,
      depositante: undefined,
      afianzadora: undefined,
      cantidad: 0
    };

    // $scope.data.poliza.AveriguacionPrevia;
  	$scope.nombreCompletoAfianzado = undefined;
    $scope.nombreCompletoDepositante = undefined;

  	$scope.agregar = function() {
  		if(!$scope.disabled()) {
        PolizasService.test($scope.data, function(data) {
          console.log("Parametros resividos.");
          console.log(data);
        });
      }
  	};

  	$scope.reset = function(form) {
  		if(form) {
  			if(form.$setPristine) {
  				form.$setPristine();
  			}
  			if(form.$setUntouched) {
  				form.$setUntouched();
  			}
  		}
  		$scope.data = {};
  	};

  	$scope.agregarAfianzado = function(afianzado) {
  		var modalInstance = $modal.open({
	      templateUrl: 'agregarAfianzado.html',
	      controller: 'PolizasAgregarAfianzadoModalCtrl',
	      size: 'sm',
	      resolve: {
	        params: function() {
	          return afianzado;
	        }
	      }
	    });

	    modalInstance.result.then(function (afianzado) {
	      $scope.data.afianzado = afianzado;
	      $scope.nombreCompletoAfianzado = ($scope.data.afianzado.ApellidoPaterno 
	      									+ ' ' + $scope.data.afianzado.ApellidoMaterno 
	      									+ ' ' + $scope.data.afianzado.Nombre);
	    });
  	};

    $scope.agregarDepositante = function(depositante) {
      var modalInstance = $modal.open({
        templateUrl: 'agregarDepositante.html',
        controller: 'PolizasAgregarDepositanteModalCtrl',
        size: 'sm',
        resolve: {
          params: function() {
            return depositante;
          }
        }
      });

      modalInstance.result.then(function (depositante) {
        $scope.data.depositante = depositante;
        $scope.nombreCompletoDepositante = ($scope.data.depositante.ApellidoPaterno 
                          + ' ' + $scope.data.depositante.ApellidoMaterno 
                          + ' ' + $scope.data.depositante.Nombre);
      });
    };

  	$scope.disabled = function() {
      return !($scope.data.poliza 
        && $scope.data.afianzado
        && $scope.data.depositante
        && $scope.data.afianzadora 
        && $scope.data.cantidad);
  	};
  });
