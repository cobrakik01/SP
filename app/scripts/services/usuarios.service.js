'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.usuarios.service
 * @description
 * # usuarios.service
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .service('UserService', function (toaster, api, $http, utils) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var url = api + 'users/';
    var service = {};

    service.error = function(a, status, c, d) {
      if(typeof status == 'undefined') {
        toaster.pop('error', 'Error', a.data.Message);
      } else {
        toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
      }
    };

    service.existsUserName = function(UserName, fnSuccess) {
        var _url = url +  UserName + "/exists";
        //$http.post(_url, { userName: UserName }).success(fnSuccess).error(service.error);
        $http({method: 'GET', url: _url, headers: utils.getHeader(), cache: false}).success(fnSuccess).error(service.error);
    };

    service.existsRolName = function(RolName, fnSuccess) {
        var _url = url +  RolName + "/rol-exists";
        //$http.post(_url, { userName: UserName }).success(fnSuccess).error(service.error);
        $http({method: 'GET', url: _url, headers: utils.getHeader(), cache: false}).success(fnSuccess).error(service.error);
    };

    service.roles = function(fnSuccess) {
      var _url = url + 'roles/all';
      $http({method: 'GET', url: _url, headers: utils.getHeader(), cache: false}).success(function(_data) {
        var data = {};
        if(typeof _data.data != 'undefined') {
          data = _data.data;
        } else {
          data = _data;
        }
        fnSuccess(data);
      }).error(service.error);
    };

    service.createAccount = function(userAccount, fnSuccess) {
      var _url = url + 'CreateAccount';
      $http.post(_url, { roles: userAccount.roles, userName: userAccount.userName }).success(fnSuccess).error(service.error);
    };

    service.createRol = function(rolName, fnSuccess) {
      var _url = url + 'roles/' + rolName;
      $http({method: 'POST', url: _url, headers: utils.getHeader(), cache: false}).success(fnSuccess).error(service.error);
    };

    service.query = function(par, fn) {
      // var params = '?count=' + par.count + '&filter=' + par.filter + '&page=' + par.page + '&sorting=' + par.sorting;
      // var _url = url + params;
      var _url = url + '?' + par;
      $http({method: 'GET', url: _url, headers: utils.getHeader(), cache: false}).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    return service;
  });
