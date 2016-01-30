'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:AutoridadesEditarModalCtrl
 * @description
 * # AutoridadesEditarModalCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('AutoridadesEditarModalCtrl', function (
    $scope, 
    $modalInstance, 
    params, 
    AutoridadesService, 
    toaster) {

  	$scope.title = 'Editar Autoridad';
  	$scope.msg = 'Mi mensaje de prueba';

  	$scope.item = {
  		id: params.model.Id,
  		nombre: params.model.Nombre
  	};

  	$scope.editar = function() {
  		AutoridadesService.edit($scope.item, function(data) {
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
