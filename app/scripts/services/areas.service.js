'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.areas.service
 * @description
 * # areas.service
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .service('AreasService', function ($http, api, toaster, $localStorage) {
    function getHeader() {
        var headers = {};
        var token = $localStorage.token;
        if (token) {
            headers.Authorization = 'Bearer ' + token;
        }
        return headers;
    }

  	var url = api + 'areas/';
  	var service = {};

    service.error = function(a, status, c, d) {
      toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
      console.log(a);
      console.log(status);
      console.log(c);
      console.log(d);
    };

  	service.query = function(par, fn) {
      // var params = '?count=' + par.count + '&filter=' + par.filter + '&page=' + par.page + '&sorting=' + par.sorting;
      // var _url = url + params;
      var _url = url + '?' + par;
      $http({method: 'GET', url: _url, headers: getHeader(), cache: false}).success(function(data) {
        fn(data);
      }).error(service.error);
    };
    
  	service.create = function(model, fn) {
      var data = {nombre: model.nombre};
      $http({
        method: 'POST',
        url: url,
        headers: getHeader(),
        data: data
      }).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.delete = function(model, fn) {
      var _url = url + '?id=' + model.id;
      $http({
        method: 'DELETE',
        url: _url,
        headers: getHeader()
      }).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.edit = function(model, fn) {
      $http({
        method: 'PATCH',
        url: url,
        headers: getHeader(),
        data: model
      }).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.all = function(fn) {
      var _url = url + 'all';
      $http({ method: 'GET', url: _url, headers: getHeader(), cache: false }).success(function(data) {
        fn(data);
      }).error(service.error);
    };
    
  	return service;
  });
