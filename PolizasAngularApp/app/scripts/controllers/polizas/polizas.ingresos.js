'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:PolizasPolizasIngresosCtrl
 * @description
 * # PolizasPolizasIngresosCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('PolizasIngresosCtrl', function ($scope, $stateParams, $state, IngresosService) {
    if(!angular.isDefined($stateParams.id) || $stateParams.id === "") {
    	$state.go('polizas.listar');
    }

    $scope.loadIngresos = function() {
    	$scope.ingresos = IngresosService.all($stateParams.id, function(data) {
	    	console.log(data);
	    });
    };

    $scope.loadIngresos();

  });
