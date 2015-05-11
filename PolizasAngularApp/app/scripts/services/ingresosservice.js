'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.IngresosService
 * @description
 * # IngresosService
 * Service in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .service('IngresosService', function ($http, api, toaster) {
  	var url = api + 'Ingresos/';
  	var service = {};

    service.error = function(a, status, c, d) {
      toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
      console.log(a);
      console.log(status);
      console.log(c);
      console.log(d);
    };

  	service.count = function(par, fn) {
      // var params = '?count=' + par.count + '&filter=' + par.filter + '&page=' + par.page + '&sorting=' + par.sorting;
      var _url = url + 'Count?anio=' + par.anio + '&mes=' + par.mes + '&dia' + par.dia;
      $http.get(_url).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    return service;
  });
