'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:MinisteriosEditarCtrl
 * @description
 * # MinisteriosEditarCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('MinisteriosEditarCtrl', function ($scope, $modalInstance, params, MinisteriosService, toaster) {
    $scope.title = 'Editar Ministerio';
  	$scope.msg = 'Mi mensaje de prueba';

  	$scope.item = {
  		id: params.model.Id,
  		nombre: params.model.Nombre
  	};

  	$scope.editar = function() {
  		MinisteriosService.edit($scope.item, function(data) {
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
