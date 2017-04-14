'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:PolizasListarCtrl
 * @description
 * # PolizasListarCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('PolizasListarCtrl', function (
    $scope,
    PolizasService, 
    toaster, 
    DataTable, 
    utils, 
    $state) {

    $scope.polizaSelected;
    $scope.$state = $state;

    $scope.table = {};
    $scope.table.polizas = DataTable.params({
        sorting: { AveriguacionPrevia: 'asc', TotalIngresos: '', 'TotalIngresos' : '', 'Afianzadora.Nombre': ''},
        data: {
        	filterObject: { AveriguacionPrevia: '', TotalIngresos: '', 'TotalIngresos': '', 'Afianzadora.Nombre': '', FechaDeAlta: '' }
        }
    }, PolizasService);

    $scope.table.polizas.params.reload();

    $scope.toDate = function(str) {
        return utils.formatDate(utils.toDate(str));
    };

    $scope.formatMony = utils.formatMony;

    $scope.btnSelectPoliza = function(poliza) {
        $scope.polizaSelected = poliza;
        if($state.includes('polizas.listar.ingresos') && angular.isDefined(poliza.Id)) {
            $state.go('polizas.listar.ingresos', {idPoliza: poliza.Id, idAfianzado: poliza.Afianzado.Id});
        }
    };

  });
