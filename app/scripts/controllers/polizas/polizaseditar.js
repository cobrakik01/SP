'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:PolizasPolizaseditarCtrl
 * @description
 * # PolizasPolizaseditarCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('PolizasEditarCtrl', function (
  	$scope,
  	$stateParams,
  	PolizasService,
    AfianzadoraService) {

    $scope.nomAfianzadoraActual;
    $scope.nomCompletoAfianzado;
    $scope.poliza;

    var idPoliza = $stateParams.idPoliza;

    PolizasService.find(idPoliza, function(data) {
    	$scope.poliza = data;
      $scope.nomCompletoAfianzado = $scope.poliza.Afianzado.ApellidoPaterno + ' ' + $scope.poliza.Afianzado.ApellidoMaterno + ' ' + $scope.poliza.Afianzado.Nombre;
      // $scope.nomAfianzadoraActual = angular.copy($scope.poliza.Afianzadora.Nombre);
      $scope.nomAfianzadoraActual = $scope.poliza.Afianzadora.Nombre;
    	/*
        $scope.afianzado = data.Afianzado;
        $scope.AveriguacionPrevia = data.AveriguacionPrevia;
        */
    });

    $scope.loaderAfianzadora = true;
    $scope.afianzadoras = AfianzadoraService.all(function(data) {
      $scope.afianzadoras = data;
      $scope.loaderAfianzadora = false;
    });

  });
