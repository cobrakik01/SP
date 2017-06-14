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

    $scope.getCurrentYear = function() {
      return utils.formatDate(new Date()).split('/')[2];
    };

  	$scope.totalIngresos = IngresosService.total(function(data) {
  		return $scope.totalIngresos = data;
  	}, function(a, b, c) {
  		console.log(a);
  	});

    $scope.totalIngresosAnioActual = IngresosService.total(function(data) {
      return $scope.totalIngresosAnioActual = data;
    }, function(a, b, c) {
      console.log(a);
    }, $scope.getCurrentYear());

  	$scope.totalEgresos = EgresosService.total(function(data) {
      return $scope.totalEgresos = data;
    }, function(a, b, c) {
      console.log(a);
    });

    $scope.totalEgresosAnioActual = EgresosService.total(function(data) {
      return $scope.totalEgresosAnioActual = data;
    }, function(a, b, c) {
      console.log(a);
    }, $scope.getCurrentYear());

  	$scope.formatMony = function(num) {
  		return utils.formatMony(num);
  	};

    $rootScope.loadUser();
  });
