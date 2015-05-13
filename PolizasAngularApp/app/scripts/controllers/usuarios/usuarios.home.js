'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:UsuariosUsuarioshomeCtrl
 * @description
 * # UsuariosUsuarioshomeCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('UsuariosHomeCtrl', function ($scope, $state, AuthService, toaster, DataTable, UsuariosFactory) {

    $scope.$state = $state;

    $scope.table = DataTable.params({
        sorting: { UserName: 'asc' },
        filter: { 'filterObject.UserName': '' }
    }, AuthService);

    $scope.table.params.reload();

    $scope.roles = [];

    $scope.mdlEditar = function(item) {
    	$state.go("usuarios.detalles", { id: item.UserId });
    };

    UsuariosFactory.setController($scope);

  });
