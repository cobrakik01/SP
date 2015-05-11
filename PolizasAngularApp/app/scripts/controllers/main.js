'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('MainCtrl', function ($scope, IngresosService, img) {
  	$scope.img = img;
    $scope.ingresos = IngresosService.count({}, function(data) {
    	$scope.ingresos = data.cont;
    });
  });
