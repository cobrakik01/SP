'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.auth.service
 * @description
 * # auth.service
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .service('AuthService', function ($location, $state, api, $http, $window, toaster, utils) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    $.support.cors = true;
    var url = api + 'security/';
    var service = {};

    service.error = function(a, status, c, d) {
        if(typeof status == 'undefined') {
            toaster.pop('error', 'Error', a.data.Message);
        } else {
            toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
        }
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
            utils.startSession(data);
            service.loginActive = true;
            fnSuccess(data);
        }).fail(function(data) {
            utils.endSession();
            service.loginActive = false;
            fnError(data);
        });
    };

    service.logout = function() {
        utils.endSession();
        service.loginActive = false;
        //$window.location.reload();
        $state.transitionTo('login');
    };

    service.loginActive = false;

    service.check = function(fnSuccess, fnError) {
        var _url = url + 'islogin';
        var req = {
            method: 'GET',
            url: _url,
            headers: utils.getHeader()
        }
        $http(req).then(function(data) {
            if(typeof data.data != 'undefined') {
                service.loginActive = data.data.Login;
            } else {
                service.loginActive = data.Login;
            }
            fnSuccess(data);
        }, function(a,b,c) {
            utils.endSession();
            service.loginActive = false;
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
            headers: utils.getHeader()
        }
        $http(req).then(function(a) {
            var data = {};
            if(typeof a.data.data != 'undefined') {
                data = a.data.data;
            } else {
                data = a.data;
            }
            fnSuccess(data);
        }, service.error);
    };

    service.update = function(userId, detalles, area, fnSuccess) {
        var _url = url + 'user/update-details';
        var splitDate = detalles.FechaDeNacimiento.toString().split('/');
        if(splitDate.length == 3) {
            detalles.FechaDeNacimiento = splitDate[2] + '-' + splitDate[1] + '-' + splitDate[0];
            detalles.FechaDeNacimiento = new Date(detalles.FechaDeNacimiento);
        }
        var data = {userId: userId, detalles: detalles, area: area};
        $http({
            method: 'POST',
            url: _url,
            headers: utils.getHeader(),
            data: data
        }).then(function(_data) {
            var data = {};
            if(typeof _data.data != 'undefined') {
                data = _data.data;
            } else {
                data = _data;
            }
            fnSuccess(data);
        }, service.error);
    };

    service.details = function(userId, fnSuccess) {
        var _url = url + 'user/details';
        $http({
            method: 'GET',
            url: _url,
            headers: utils.getHeader()
        }).success(function(data) {
            if(data != "") {
                data.detalles.FechaDeNacimiento = new Date(data.detalles.FechaDeNacimiento);
            }
            fnSuccess(data);
        });
    };

    service.userInRole = function(UserName, fnSuccess) {
        var _url = url + 'UserInRoles?UserName=' + UserName;
        $http({method: 'GET', url: _url, headers: utils.getHeader(), cache: false}).success(fnSuccess).error(service.error);
    };

    service.changePassword = function(oldPassword, newPassword, fnSuccess) {
        var _url = url + 'user/change-password';
        $http({ method: 'POST', url: _url, headers: utils.getHeader(), data: { OldPassword: oldPassword, NewPassword: newPassword } }).success(fnSuccess).error(service.error);
    };

    return service;
  });
