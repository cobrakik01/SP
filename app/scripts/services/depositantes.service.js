'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.depositantes.service
 * @description
 * # depositantes.service
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .service('DepositantesService', function ($http, api, toaster, utils) {
  	var url = api + 'depositantes/';
  	var service = {};

    service.error = function(a, status, c, d) {
      if(typeof status == 'undefined') {
        toaster.pop('error', 'Error', a.data.Message);
      } else {
        toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
      }
    };

  	service.query = function(par, fn, urlParams) {
      // var params = '?count=' + par.count + '&filter=' + par.filter + '&page=' + par.page + '&sorting=' + par.sorting;
      // var _url = url + params;
      var _url = api + 'afianzados/' + urlParams + 'depositantes' + '?' + par;
      $http({method: 'GET', url: _url, headers: utils.getHeader(), cache: false}).success(function(data) {
        fn(data);
      }).error(service.error);
    };
    
  	service.create = function(model, fn) {
      var data = {nombre: model.nombre};
      $http.post(url, data).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.delete = function(model, fn) {
      var _url = url + '?id=' + model.id;
      $http.delete(_url).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.edit = function(model, fn) {
      $http.patch(url, model).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.all = function(fn) {
      var _url = url + 'All';
      $http({ method: 'GET', url: _url, cache: false }).success(function(data) {
        fn(data);
      }).error(service.error);
    };
    
  	return service;
  });
