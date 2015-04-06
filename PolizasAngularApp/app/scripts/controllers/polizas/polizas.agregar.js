'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:PolizasPolizasAgregarCtrl
 * @description
 * # PolizasPolizasAgregarCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('PolizasAgregarCtrl', function ($scope, $modal, $log) {
  	$scope.poliza = {};
  	$scope.nombreCompletoAfianzado = undefined;
    $scope.nombreCompletoDepositante = undefined;
  	$scope.poliza.afianzado = undefined;
  	$scope.poliza.depositante = undefined;

  	$scope.agregar = function() {
  		if(!$scope.disabled()) {
        $log.info("Se enviara.");
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
  		$scope.poliza = {};
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
	      $scope.poliza.afianzado = afianzado;
	      $scope.nombreCompletoAfianzado = ($scope.poliza.afianzado.apellidoPaterno 
	      									+ ' ' + $scope.poliza.afianzado.apellidoMaterno 
	      									+ ' ' + $scope.poliza.afianzado.nombre);
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
        $scope.poliza.depositante = depositante;
        $scope.nombreCompletoDepositante = ($scope.poliza.depositante.apellidoPaterno 
                          + ' ' + $scope.poliza.depositante.apellidoMaterno 
                          + ' ' + $scope.poliza.depositante.nombre);
      });
    };

  	$scope.disabled = function() {
  		return !(
           $scope.poliza.averiguacionPrevia
        && $scope.nombreCompletoAfianzado
        && $scope.nombreCompletoDepositante
        && $scope.poliza.cantidad
        && $scope.poliza.afianzadora);
  	};
  });
