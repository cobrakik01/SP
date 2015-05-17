'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.AuthService
 * @description
 * # AuthService
 * Service in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .service('AuthService', function ($location, $state, api, $http, $window, toaster) {
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

    service.login= function(model, fnSuccess, fnError) {
        var _url = url + 'Login';
        $http.post(_url, model).success(fnSuccess).error(fnError);
    };

    service.logout = function() {
        var _url = url + 'Logout';
        $http.post(_url, {}).success(function() {
            $window.location.reload();
            $state.transitionTo('home');
        });
    };

    service.loginActive = false;

    service.check = function(fnSuccess, fnError) {
        var _url = url + 'IsLogin';
        $http.post(_url, {}).success(function(data) {
            service.loginActive = data.Login;
            fnSuccess(data);
        }).error(fnError);
    };

    service.auth = function() {
        service.check(function(data) {
            if(!data.Login) {
                // $location.path('/login');
                // console.log('Path: ' + $location.path());
                $state.transitionTo('login');
            }
        }, function() {
            $state.transitionTo('login');
        });
        // console.log('Auth');
    };

    service.user = function(fnSuccess) {
        var _url = url + 'UserInfo';
        $http.post(_url, {}).success(function(data) {
            fnSuccess(data);
        });  
    };

    service.update = function(userId, detalles, area, fnSuccess) {
        var _url = url + 'UpdateUserDetails';
        var data = {userId: userId, detalles: detalles, area: area};
        $http.post(_url, data).success(function(data) {
            fnSuccess(data);
        });  
    };

    service.details = function(userId, fnSuccess) {
        var _url = url + 'UserDetails';
        var data = {userId: userId};
        $http.post(_url, data).success(function(data) {
            fnSuccess(data);
        });  
    };

    service.query = function(par, fn) {
      var _url = url + '?' + par;
      $http({method: 'GET', url: _url, cache: false}).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.userInRole = function(UserName, fnSuccess) {
        var _url = url + 'UserInRoles?UserName=' + UserName;
        $http({method: 'GET', url: _url, cache: false}).success(fnSuccess).error(service.error);
    };

    service.changePassword = function(oldPassword, newPassword, fnSuccess) {
        var _url = url + 'ChangePassword';
        $http({ method: 'POST', url: _url, data: { oldPassword: oldPassword, newPassword: newPassword } }).success(fnSuccess).error(service.error);
    };

    return service;
  });
