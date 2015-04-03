'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:AreasAreaseditarmodalCtrl
 * @description
 * # AreasAreaseditarmodalCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
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
