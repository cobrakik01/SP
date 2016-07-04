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
  	PolizasService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.poliza;

    var idPoliza = $stateParams.idPoliza;

    PolizasService.find(idPoliza, function(data) {
    	$scope.poliza = data;
    	/*
        $scope.afianzado = data.Afianzado;
        $scope.AveriguacionPrevia = data.AveriguacionPrevia;
        */
    });

  });
