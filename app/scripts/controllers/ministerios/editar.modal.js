'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:MinisteriosEditarCtrl
 * @description
 * # MinisteriosEditarCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('MinisteriosEditarCtrl', function (
    $scope, 
    $modalInstance, 
    params, 
    MinisteriosService, 
    AutoridadesService, 
    toaster) {

    $scope.title = 'Editar Ministerio';
  	$scope.msg = 'Mi mensaje de prueba';

    $scope.data = angular.copy(params.model);

  	$scope.editar = function(dataEdited) {
  		MinisteriosService.edit(dataEdited, function(data) {
  			if (data.Message) {
  				toaster.pop(data.Message.Type, data.Message.Title, data.Message.Message);
  				params.table.params.reload();
  			}
  		});
  		$modalInstance.dismiss();
  	};

  	$scope.cancelar = function() {
  		$modalInstance.dismiss();
  	};

    $scope.cargarAutoridades = function() {
        AutoridadesService.all(function(data) {
            $scope.Autoridades = data;
        });
    };

    $scope.cargarAutoridades();

  });
