'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.polizas.service
 * @description
 * # polizas.service
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .service('PolizasService', function ($http, api, toaster, utils) {
  	var url = api + 'polizas/';
  	var service = {};

    service.error = function(a, status, c, d) {
      if(typeof status == 'undefined') {
        toaster.pop('error', 'Error', a.data.Message);
      } else {
        toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
      }
    };

    service.query = function(par, fn) {
      // var params = '?count=' + par.count + '&filter=' + par.filter + '&page=' + par.page + '&sorting=' + par.sorting;
      var _url = url + '?' + par;
      $http({method: 'GET', url: _url, headers: utils.getHeader(), cache: false}).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.create = function(model, fn) {
      var _url = url;
      $http({ method: 'POST', url: _url, headers: utils.getHeader(), data: model}).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.update = function(model, fn) {
      var _url = url;
      $http({ method: 'PATCH', url: _url, headers: utils.getHeader(), data: model}).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    /*
    service.delete = function(model, fn) {
      var _url = url + '?id=' + model.id;
      $http.delete(_url).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.all = function(fn) {
      // var params = '?count=' + par.count + '&filter=' + par.filter + '&page=' + par.page + '&sorting=' + par.sorting;
      // var _url = url + params;
      var _url = url + '/All';
      $http({method: 'GET', url: _url, cache: false}).success(function(data) {
        fn(data);
      }).error(service.error);
    };
    */

    service.find = function(idPoliza, fn) {
      var _url = url + idPoliza;
      $http({method: 'GET', url: _url, headers: utils.getHeader(), cache: false}).success(function(data) {
        fn(data);
      }).error(service.error);
    };
  	return service;
  });
