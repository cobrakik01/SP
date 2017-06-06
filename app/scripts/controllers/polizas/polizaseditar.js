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
    toaster,
  	PolizasService,
    AfianzadoraService) {

    $scope.nomAfianzadoraActual;
    $scope.nomCompletoAfianzado;
    $scope.poliza;

    var idPoliza = $stateParams.idPoliza;

    $scope.cargarInfoPoliza = function() {
      PolizasService.find(idPoliza, function(data) {
        $scope.poliza = data.Poliza;
        $scope.polizaUpdated = angular.copy(data.Poliza);
        $scope.nomCompletoAfianzado = $scope.poliza.Afianzado.ApellidoPaterno + ' ' + $scope.poliza.Afianzado.ApellidoMaterno + ' ' + $scope.poliza.Afianzado.Nombre;
        $scope.nomAfianzadoraActual = $scope.poliza.Afianzadoras.Nombre;
      });
    };

    $scope.loaderAfianzadora = true;
    $scope.afianzadoras = AfianzadoraService.all(function(data) {
      $scope.afianzadoras = data;
      $scope.loaderAfianzadora = false;
    });

    $scope.update = function(data) {
      PolizasService.update(data, function(res) {
        if (res.Message) {
          $scope.cargarInfoPoliza();
          toaster.pop(res.Message.Type, res.Message.Title, res.Message.Message);
        }
      });
    };

    $scope.cargarInfoPoliza();

  });
