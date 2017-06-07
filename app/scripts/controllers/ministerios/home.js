'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:MinisteriosHomeCtrl
 * @description
 * # MinisteriosHomeCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('MinisteriosHomeCtrl', function (
    $scope,
    MinisteriosService,
    toaster, 
    DataTable,
    cbk,
    $modal) {

    $scope.ministerio = { nombre: '' };

    $scope.table = DataTable.params({
        sorting: { Nombre: 'asc' },
        filter: { Nombre: '' }
    }, MinisteriosService);

    $scope.table.params.reload();

    $scope.nuevo = function() {
      MinisteriosService.create($scope.ministerio, function(data) {
        $scope.ministerio = {};
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
                MinisteriosService.delete({id: model.Id}, function(resp){
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
            templateUrl: 'mdlEditarMinisterio.html',
            controller: 'MinisteriosEditarCtrl',
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
