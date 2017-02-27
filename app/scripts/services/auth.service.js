'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.auth.service
 * @description
 * # auth.service
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .service('AuthService', function ($location, $state, api, $http, $window, toaster, $localStorage) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    $.support.cors = true;
    var token = $localStorage.token;
    var headers = {};
    headers = getHeader();

    var url = api + 'security/';
    var service = {};

    service.error = function(a, status, c, d) {
      toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
      console.log(a);
      console.log(status);
      console.log(c);
      console.log(d);
    };

    service.login= function(model, fnSuccess, fnError) {
        var _url = url + 'login';
        $http.post(_url, model).success(fnSuccess).error(fnError);
    };

    service.OAuthLogin= function(model, fnSuccess, fnError) {
        var _url = api + 'token';
        _url = _url.replace('/api', '');
        var loginData = {
            grant_type: 'password',
            username: model.email,
            password: model.password
        };

        $.ajax({
            type: 'POST',
            url: _url,
            data: loginData
        }).done(function(_data, c, b){
            var data = {};
            if(typeof _data.data != 'undefined') {
                data = _data.data;
            } else {
                data = _data;
            }
            $localStorage.token = data.access_token;
            $localStorage.sessionInfo = data;
            service.loginActive = true;
            fnSuccess(data);
        }).fail(function(data) {
            $localStorage.token = '';
            fnError(data);
        });
    };

    service.logout = function() {
        $localStorage.token = '';
        $window.location.reload();
        $state.transitionTo('home');
    };

    function getHeader() {
        var token = $localStorage.token;
        if (token) {
            headers.Authorization = 'Bearer ' + token;
        }
        return headers;
    }

    service.loginActive = false;

    service.check = function(fnSuccess, fnError) {
        var _url = url + 'islogin';
        var req = {
            method: 'GET',
            url: _url,
            headers: getHeader()
        }
        $http(req).then(function(data) {
            if(typeof data.data != 'undefined') {
                service.loginActive = data.data.Login;
            } else {
                service.loginActive = data.Login;
            }
            fnSuccess(data);
        }, function(a,b,c) {
            fnError(a);
        });
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
        var _url = url + 'user/info';
        var req = {
            method: 'GET',
            url: _url,
            headers: headers
        }
        $http(req).then(function(a) {
            var data = {};
            if(typeof a.data.data != 'undefined') {
                data = a.data.data;
            } else {
                data = a.data;
            }
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
        var _url = url + 'user/details';
        //var data = {userId: userId};
        $http({
            method: 'GET',
            url: _url,
            headers: headers
            //,data: data
            //params: data
        }).success(function(data) {
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
