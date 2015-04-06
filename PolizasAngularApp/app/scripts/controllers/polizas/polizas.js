'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:PolizasPolizasCtrl
 * @description
 * # PolizasPolizasCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('PolizasCtrl', function ($scope, AfianzadoraService) {

    $scope.loaderAfianzadora = true;
    $scope.afianzadoras = AfianzadoraService.all(function(data) {
    	$scope.afianzadoras = data;
      $scope.loaderAfianzadora = false;
    });

  });
