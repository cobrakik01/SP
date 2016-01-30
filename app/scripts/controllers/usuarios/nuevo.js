'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:UsuariosNuevoCtrl
 * @description
 * # UsuariosNuevoCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('UsuariosNuevoCtrl', function ($scope, $state, UserService, UsuariosFactory, toaster) {
  	
  	$scope.userExists = 0;
  	$scope.$state = $state;

  	$scope.data = {
  		UserName: undefined,
  		roles: [],
  		selectedRoles: new Array(),
  		rolSelected: undefined
  	};

  	
  	$scope.loadRoles = function() {
  		UserService.roles(function(data) {
  			$scope.data.roles = data.roles;
  		});
  	};

  	$scope.loadRoles();

  	$scope.findUserByName = function() {
  		UserService.existsUserName($scope.data.UserName, function(data) {
  			if(!angular.isDefined($scope.data.UserName)) {
  				$scope.userExists = 0;
  			} else if(data.exists) {
  				$scope.userExists = 1;
  			} else {
  				$scope.userExists = 2;
  			}
  		});
  	};

  	$scope.removerUsuario = function() {
  		$scope.data.UserName = undefined;
  		$scope.data.selectedRoles = new Array();
  	};

  	$scope.addRoleToUser = function(rol) {
  		if(angular.isDefined(rol)) {
  			if($scope.data.selectedRoles.length === 0) {
  				$scope.data.selectedRoles.push(rol);
  			}
  			angular.forEach($scope.data.selectedRoles, function(element) {
  				if(element !== rol) {
  					$scope.data.selectedRoles.push(rol);
  				}
  			});
  		}
  	};

  	$scope.removeRolSelected = function(rol) {
  		$scope.data.selectedRoles.pop(rol);
  	};

    $scope.createUserAccount = function() {
      var userAccount = {roles: $scope.data.selectedRoles, userName: $scope.data.UserName};
      UserService.createAccount(userAccount, function(data) {
        if (data.Message) {
          toaster.pop(data.Message.Type, data.Message.Title, data.Message.Message);
        }
        UsuariosFactory.getController().table.params.reload();
        $state.go('usuarios');
      });
    };
  });
