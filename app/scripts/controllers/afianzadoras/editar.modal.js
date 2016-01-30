'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:AfianzadorasEditarModalCtrl
 * @description
 * # AfianzadorasEditarModalCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('AfianzadorasEditarModalCtrl', function ($scope, $modalInstance, params, AfianzadoraService, toaster) {
  	$scope.title = 'Editar Afianzadora';
  	$scope.msg = 'Mi mensaje de prueba';

  	$scope.af = {
  		id: params.model.Id,
  		nombre: params.model.Nombre
  	};

  	$scope.editar = function() {
  		AfianzadoraService.edit($scope.af, function(data) {
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
  });