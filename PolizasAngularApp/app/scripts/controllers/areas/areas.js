'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:AreasCtrl
 * @description
 * # AreasCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('AreasCtrl', function (
    $scope,
    AreasService,
    toaster, 
    DataTable,
    cbk,
    $modal) {

    $scope.area = { nombre: '' };

    $scope.table = DataTable.params({
        sorting: { Nombre: 'asc' },
        filter: { Nombre: '' }
    }, AreasService);

    $scope.table.params.reload();

    $scope.nuevo = function() {
      AreasService.create($scope.area, function(data) {
        $scope.area = {};
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
                AreasService.delete({id: model.Id}, function(resp){
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
            templateUrl: 'mdlEditarArea.html',
            controller: 'AreasEditarModalCtrl',
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
