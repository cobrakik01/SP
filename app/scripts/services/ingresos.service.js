'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.ingresos.service
 * @description
 * # ingresos.service
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .service('IngresosService', function ($http, api, toaster, utils) {
  	var url = api + 'ingresos/';
  	var service = {};

    service.error = function(a, status, c, d) {
      if(typeof status == 'undefined') {
        toaster.pop('error', 'Error', a.data.Message);
      } else {
        toaster.pop('error', 'Error', 'Ocurrio un error ' + status);
      }
    };

    service.query = function(par, fn, urlParams) {
      /*
      var _url = url + '?' + par;
      $http({method: 'GET', url: _url, cache: false}).success(function(data) {
        fn(data);
      }).error(service.error);
      */
      var _url = api + 'polizas/' + urlParams + 'ingresos' + '?' + par;
      $http({method: 'GET', url: _url, headers: utils.getHeader(), cache: false}).success(function(data) {
        fn(data);
      }).error(service.error);
    };

  	service.count = function(par, fn) {
      var _url = url + 'Count?anio=' + par.anio + '&mes=' + par.mes + '&dia' + par.dia;
      $http.get(_url).success(function(data) {
        fn(data);
      }).error(service.error);
    };

    service.all = function(id, fnSuccess) {
      var _url = url + 'All?id=' + id;
      console.log(_url);
      $http.get(_url).success(fnSuccess).error(service.error);
    };

    service.add = function(idPoliza, ingreso, depositante, fnSuccess) {
      var _url = url + 'Add';
      return $http.post(_url, { idPoliza: idPoliza, ingreso : ingreso, depositante: depositante })
        .success(fnSuccess)
        .error(service.error);
    };

    service.total = function(fnSuccess, fnError) {
      var _url = url + 'total';

      return $http({
        type: 'GET',
        url: _url,
        headers: utils.getHeader()
      }).then(function(_data) {
        var data = {};
        if(typeof _data.data != 'undefined') {
          data = _data.data;
        } else {
          data = _data;
        }

        fnSuccess(data);
      }, fnError);
    };

    return service;
  });
