'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:PolizasPolizasIngresosCtrl
 * @description
 * # PolizasPolizasIngresosCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('PolizasIngresosCtrl', function ($scope, $stateParams, $state, DataTable, IngresosService) {
    
    if(!angular.isDefined($stateParams.id) || $stateParams.id === "") {
    	$state.go('polizas.listar');
    }

    $scope.table = DataTable.params({
        sorting: { Precio: 'asc'},
        filter: { Precio: '' },
        data: {
          filerObject: { Precio: '' }
        }
    }, IngresosService, { key: 'filterObject.PolizaId', value: $stateParams.id });

    $scope.table.params.reload();

  });
