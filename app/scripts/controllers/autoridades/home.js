'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:AutoridadesHomeCtrl
 * @description
 * # AutoridadesHomeCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('AutoridadesCtrl', function (
  	$scope,
    AutoridadesService,
    toaster, 
    DataTable,
    cbk,
    $modal) {

  	$scope.autoridad = { nombre: '' };

  	$scope.table = DataTable.params({
        sorting: { Nombre: 'asc' },
        filter: { Nombre: '' }
    }, AutoridadesService);

    $scope.table.params.reload();

    $scope.nuevo = function() {
      AutoridadesService.create($scope.autoridad, function(data) {
        $scope.autoridad = {};
        if(data.Message)
        {
          toaster.pop(data.Message.Type, data.Message.Title, data.Message.Message);
          $scope.table.params.reload();
        }
      });
    };

    $scope.mdlEliminar = function(model) {
      cbk.alert({
            title: "Eliminar", 
            msg: "¿Esta seguro de eliminarlo?", 
            accept: function(data)  {
                AutoridadesService.delete({id: model.Id}, function(resp){
                    data.ctx.dismiss();
                    $scope.table.params.reload();
                    if(typeof resp.Message != 'undefined') {
                        toaster.pop(resp.Message.Type, resp.Message.Title, resp.Message.Message);
                    }
                }, function(){
                    $scope.table.params.reload();
                });
            }
        });
    };

    $scope.mdlEditar = function(model) {
      $modal.open({
            templateUrl: 'mdlEditarAutoridad.html',
            controller: 'AutoridadesEditarModalCtrl',
            size: 'sm',
            resolve: {
                params: function () {
                    return {
                        model: model,
                        table: $scope.table
                    };
                }
            }
        });
    };

  });
