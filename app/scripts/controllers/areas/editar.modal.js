'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:AreasEditarModalCtrl
 * @description
 * # AreasEditarModalCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('AreasEditarModalCtrl', function ($scope, $modalInstance, params, AreasService, toaster) {
    $scope.title = 'Editar Area';
  	$scope.msg = 'Mi mensaje de prueba';

  	$scope.item = {
  		id: params.model.Id,
  		nombre: params.model.Nombre
  	};

  	$scope.editar = function() {
  		AreasService.edit($scope.item, function(data) {
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
