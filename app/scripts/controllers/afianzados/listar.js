'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:AfianzadosListarCtrl
 * @description
 * # AfianzadosListarCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('AfianzadosListarCtrl', function (
  	$scope, 
  	toaster, 
    DataTable,
    cbk,
    $modal,
    utils,
    AfianzadosService) {

  	$scope.parseDate = function(date) {
  		return utils.strToDate(date);
  	};

  	$scope.table = DataTable.params({
        sorting: { Nombre: 'asc'},
        filter: { Nombre: '', ApellidoPaterno: '', ApellidoMaterno: '' },
        data: {
        	filerObject: { Nombre: '', ApellidoPaterno: '', ApellidoMaterno: '' }
        }
    }, AfianzadosService);

    $scope.table.params.reload();

  });
