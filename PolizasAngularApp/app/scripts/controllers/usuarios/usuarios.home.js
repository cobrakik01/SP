'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:UsuariosUsuarioshomeCtrl
 * @description
 * # UsuariosUsuarioshomeCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('UsuariosHomeCtrl', function ($scope, $state, AuthService, toaster, DataTable) {

    $scope.table = DataTable.params({
        sorting: { UserName: 'asc' },
        filter: { UserName: '' }
    }, AuthService);

    $scope.table.params.reload();

    $scope.roles = [];

    /*
    $scope.role = function(UserName) {
        AuthService.userInRole(UserName, function(data) {
            $scope.roles = data;
        });
        return '';
    };
    */

    $scope.mdlEditar = function(item) {
    	$state.go("usuarios.detalles", { id: item.UserId });
    };

  });
