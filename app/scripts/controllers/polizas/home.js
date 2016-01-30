'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:PolizasHomeCtrl
 * @description
 * # PolizasHomeCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('PolizasCtrl', function ($scope, AfianzadoraService, AuthService) {

  	AuthService.auth();

    $scope.loaderAfianzadora = true;
    $scope.afianzadoras = AfianzadoraService.all(function(data) {
    	$scope.afianzadoras = data;
      $scope.loaderAfianzadora = false;
    });

  });
