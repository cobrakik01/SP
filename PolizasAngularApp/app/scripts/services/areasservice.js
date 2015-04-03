'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.AreasService
 * @description
 * # AreasService
 * Service in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .service('AreasService', function ($http, api, toaster) {
  	var url = api + 'Areas/';
  	var service = {};

    service.error = function(a, status, c, d) {
      toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
      console.log(a);
      console.log(status);
      console.log(c);
      console.log(d);
    };

  	service.query = function(par, fn) {
      var params = "?count=" + par.count + "&filter=" + par.filter + "&page=" + par.page + "&sorting=" + par.sorting;
      var _url = url + params;
      $http.get(_url).success(function(data) {
        fn(data);
      });
    };
    
  	service.create = function(model, fn) {
      var data = {nombre: model.nombre};
      $http.post(url, data).success(function(data) {
        fn(data);
      });
    };

    service.delete = function(model, fn) {
      var _url = url + '?id=' + model.id;
      $http.delete(_url).success(function(data) {
        fn(data);
      });
    };

    service.edit = function(model, fn) {
      $http.patch(url, model).success(function(data) {
        fn(data);
      });
    };
  	return service;
  });
