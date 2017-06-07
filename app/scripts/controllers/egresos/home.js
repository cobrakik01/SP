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
    toaster, 
    DataTable,
    cbk,
    $modal) {

  	$scope.table = DataTable.params({
        sorting: { Nombre: 'asc' },
        filter: { Nombre: '' }
    }, EgresosService);

    $scope.table.params.reload();
    
  });
