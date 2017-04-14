'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.areas.service
 * @description
 * # areas.service
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .service('AreasService', function ($http, api, toaster, utils) {

  	var url = api + 'areas/';
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
      // var _url = url + params;
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

    service.delete = function(model, fn) {
      var _url = url +  model.id;
      $http({ method: 'DELETE', url: _url, headers: utils.getHeader()}).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.edit = function(model, fn) {
      $http({ method: 'PATCH', url: url, headers: utils.getHeader(), data: model }).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.all = function(fn) {
      var _url = url + 'all';
      $http({ method: 'GET', url: _url, headers: utils.getHeader(), cache: false }).success(function(data) {
        fn(data);
      }).error(service.error);
    };
    
  	return service;
  });
