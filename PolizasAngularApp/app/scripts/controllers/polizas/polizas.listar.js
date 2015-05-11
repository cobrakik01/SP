'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:PolizaslistarCtrl
 * @description
 * # PolizaslistarCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('PolizasListarCtrl', function ($scope, PolizasService, toaster, DataTable, utils) {
    // AuthService.auth();

    $scope.table = DataTable.params({
        sorting: { AveriguacionPrevia: 'asc', Descripcion: '', 'Afianzado.Nombre' : '', 'Afianzadora.Nombre': ''},
        data: {
        	filerObject: { AveriguacionPrevia: '', Descripcion: '', 'Afianzado.Nombre': '', 'Afianzadora.Nombre': '' }
        }
    }, PolizasService);

    $scope.table.params.reload();

    $scope.toDate = function(str) {
        return utils.formatDate(utils.toDate(str));
    };

    $scope.mdlEditar = function(item) {

    };

    $scope.mdlEliminar = function(item) {

    };

  });
