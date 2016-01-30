'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.perfil.service
 * @description
 * # perfil.service
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .service('PerfilService', function ($http, api, toaster) {
  	var url = api + 'Usuarios/';
  	var service = {};

    service.error = function(a, status, c, d) {
      toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
      console.log(a);
      console.log(status);
      console.log(c);
      console.log(d);
    };

    service.edit = function(model, fn) {
      $http.post(url, model).success(function(data) {
        fn(data);
      }).error(service.error);
    };
  	return service;
  });
