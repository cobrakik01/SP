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
    AutoridadesService,
    toaster, 
    DataTable,
    cbk,
    $modal) {

    $scope.data = {
        autoridades: [],
        Autoridad: {},
        Ministerio: {}
    };

    $scope.table = DataTable.params({
        sorting: { 'Ministerio.Nombre': 'asc' },
        data: {
            filterObject: { 'Nombre': '', 'Autoridad.Nombre': '' }
        }
    }, MinisteriosService);

    $scope.table.params.reload();

    $scope.cargarAutoridades = function() {
        AutoridadesService.all(function(data) {
            $scope.data.autoridades = data;
        });
    };

    $scope.nuevo = function() {
      MinisteriosService.create($scope.data, function(data) {
        $scope.cargarAutoridades();
        $scope.data.Ministerio = {};
        $scope.data.Autoridad = {};
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

    $scope.cargarAutoridades();

  });
