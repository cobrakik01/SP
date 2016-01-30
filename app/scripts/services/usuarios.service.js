'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.usuarios.service
 * @description
 * # usuarios.service
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .service('UserService', function (toaster, api, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var url = api + 'Usuarios/';
    var service = {};

    service.error = function(a, status, c, d) {
      toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
      console.log(a);
      console.log(status);
      console.log(c);
      console.log(d);
    };

    service.existsUserName = function(UserName, fnSuccess) {
        var _url = url + 'ExistsUserName';
        $http.post(_url, { userName: UserName }).success(fnSuccess).error(service.error);
    };

    service.roles = function(fnSuccess) {
      var _url = url + 'AllRoles';
      $http({method: 'GET', url: _url, cache: false}).success(fnSuccess).error(service.error);
    };

    service.createAccount = function(userAccount, fnSuccess) {
      var _url = url + 'CreateAccount';
      $http.post(_url, { roles: userAccount.roles, userName: userAccount.userName }).success(fnSuccess).error(service.error);
    };

    return service;
  });
