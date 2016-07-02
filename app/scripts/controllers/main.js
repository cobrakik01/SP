'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('MainCtrl', function ($scope, utils, IngresosService) {

  	$scope.ingresos = IngresosService.total(function(data) {
  		return $scope.ingresos = data;
  	});
  	$scope.egresos = 2345324;

  	$scope.formatMony = function(num) {
  		return utils.formatMony(num);
  	};
  });
