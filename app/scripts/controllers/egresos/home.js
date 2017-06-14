'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:EgresosHomeCtrl
 * @description
 * # EgresosHomeCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('EgresosHomeCtrl', function (
  	$scope,
    EgresosService,
    MinisteriosService,
    toaster, 
    DataTable,
    cbk,
    utils,
    $modal) {

  	$scope.table = DataTable.params({
      sorting: { Cantidad: 'asc' },
      data: {
        filterObject: { Descripcion: '', 'MinisteriosPublicos.Nombre': '', 'MinisteriosPublicos.Autoridad.Nombre': '', Cantidad: '', FechaDeEgreso: '' }
      }
    }, EgresosService);

    $scope.formatMony = utils.formatMony;

    $scope.toDate = function(str) {
        return utils.formatDate(new Date(str));
    };

    $scope.cargarMinisterios = function() {
      MinisteriosService.all(function(data) {
        $scope.MinisteriosPublicos = data;
      });
    };

    $scope.resetData = function() {
      $scope.data = {};
      $scope.cargarMinisterios();
      $scope.table.params.reload();
    };

    $scope.nuevo = function(dataReq) {
      if(!dataReq || !dataReq.Cantidad || !dataReq.MinisteriosPublicos || !dataReq.MinisteriosPublicos.Nombre) { return; }
      EgresosService.create(dataReq, function(dataRes) {
        if(dataRes.Message) {
          toaster.pop(dataRes.Message.Type, dataRes.Message.Title, dataRes.Message.Message);
          $scope.resetData();
        }
      });
    };

    $scope.resetData();
    
  });
