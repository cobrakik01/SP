'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:PolizasListarCtrl
 * @description
 * # PolizasListarCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('PolizasListarCtrl', function ($scope, PolizasService, toaster, DataTable, utils, $state) {

    $scope.polizaSelected;
    $scope.$state = $state;

    $scope.table = DataTable.params({
        sorting: { AveriguacionPrevia: 'asc', Descripcion: '', 'Afianzado.Nombre' : '', 'Afianzadora.Nombre': ''},
        data: {
        	filerObject: { AveriguacionPrevia: '', Descripcion: '', 'Afianzado.Nombre': '', 'Afianzadora.Nombre': '', FechaDeAlta: '' }
        }
    }, PolizasService);

    $scope.table.params.reload();

    $scope.toDate = function(str) {
        return utils.formatDate(utils.toDate(str));
    };

    $scope.btnSelectPoliza = function(poliza) {
        $scope.polizaSelected = poliza;
        if($state.includes('polizas.listar.ingresos') && angular.isDefined(poliza.Id)) {
            $state.go('polizas.listar.ingresos', {idPoliza: poliza.Id, idAfianzado: poliza.Afianzado.Id});
        }
    };

  });
