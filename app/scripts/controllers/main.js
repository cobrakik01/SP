'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('MainCtrl', function ($scope, IngresosService) {
  	$scope.ingresos = IngresosService.total(function(data) {
  		return $scope.ingresos = data;
  	});
  	$scope.egresos = 2345324;
  });
