'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.AuthService
 * @description
 * # AuthService
 * Service in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .service('AuthService', function ($location, $state, api, $http, $window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var url = api + 'Usuarios/';
    var service = {};

    service.login= function(model, fnSuccess) {
        var _url = url + 'Login';
        $http.post(_url, model).success(fnSuccess);
    };

    service.logout = function() {
        var _url = url + 'Logout';
        $http.post(_url, {}).success(function(data) {
            $window.location.reload();
            $state.transitionTo('home');
        });
    };

    service.loginActive = false;

    service.check = function(fnSuccess) {
        var _url = url + 'IsLogin';
        $http.post(_url, {}).success(function(data) {
            service.loginActive = data.Login;
            fnSuccess(data);
        });
    };

    service.auth = function() {
        service.check(function(data) {
            if(!data.Login) {
                // $location.path('/login');
                // console.log('Path: ' + $location.path());
                $state.transitionTo('login');
            }
        });
        // console.log('Auth');
    };

    service.user = function(fnSuccess) {
        var _url = url + 'UserInfo';
        $http.post(_url, {}).success(function(data) {
            fnSuccess(data);
        });  
    };

    return service;
  });
