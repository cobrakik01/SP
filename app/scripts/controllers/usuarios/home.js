'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:UsuariosHomeCtrl
 * @description
 * # UsuariosHomeCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
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
