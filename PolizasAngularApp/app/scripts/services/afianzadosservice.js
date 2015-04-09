'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.AfianzadosService
 * @description
 * # AfianzadosService
 * Service in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .service('AfianzadosService', function ($http, api, toaster) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var url = api + 'Afianzados/';
  	var service = {};

    service.error = function(a, status, c, d) {
      toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
      console.log(a);
      console.log(status);
      console.log(c);
      console.log(d);
    };

    service.query = function(par, fn) {
      var params = '?count=' + par.count + '&filter=' + par.filter + '&page=' + par.page + '&sorting=' + par.sorting;
      var _url = url + params;
      $http({method: 'GET', url: _url, cache: false}).success(function(data) {
        fn(data);
      }).error(service.error);
    };

  	service.create = function(model, fn) {
  		console.log(model);
  		$http.post(url, { afianzado: model }).success(function(data) {
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

    service.find = function(id, fn) {
      var _url = url + 'Find/' + id;
      $http({ method: 'GET', url: _url, cache: false }).success(function(data) {
        fn(data);
      }).error(service.error);
    };
  	return service;
  });
