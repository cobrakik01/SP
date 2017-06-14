'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('MainCtrl', function ($scope, $rootScope, utils, IngresosService, EgresosService) {

  	$scope.ingresos = IngresosService.total(function(data) {
  		return $scope.ingresos = data;
  	}, function(a, b, c) {
  		console.log(a);
  	});

  	$scope.egresos = EgresosService.total(function(data) {
      return $scope.egresos = data;
    }, function(a, b, c) {
      console.log(a);
    });

  	$scope.formatMony = function(num) {
  		return utils.formatMony(num);
  	};

    $rootScope.loadUser();
  });
