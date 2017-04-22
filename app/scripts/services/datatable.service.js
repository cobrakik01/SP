'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.datatable.service
 * @description
 * # datatable.service
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .factory('DataTable', function (ngTableParams, $filter, $timeout) {
    // Service logic
    // ...

    var factory = {};
    factory.params = function(params, service, identity) {
      var data = {};
      data.items = [];
      var NgTable = ngTableParams;
      data.params = new NgTable({
          page: 1,            // show first page
          count: 10,
          /*
          sorting: {
              Nombre: 'asc'     // initial sorting
          },
          filter: {
              Nombre: ''       // initial filter
          }
          */
          sorting: (typeof params.sorting === 'undefined') ? { } : params.sorting,
          filter: (typeof params.filter === 'undefined') ? { } : params.filter
      },
      {
        total: 0, // length of data
        getData: function($defer, _params) {
          var par = _params.url();
          var filterObject = { filterObject: _params.filter() };

          var strFilterObject = 'filterObject=' + JSON.stringify(filterObject.filterObject);

          var _strSorting = '';
          for(var s in _params.sorting()) {
            _strSorting = 'sortingField=' + s + '&sorting=' + _params.sorting()[s];
          }
          
          par.filter = filterObject;
          par.sorting = _strSorting;
          data.items = [];

          var __params = '';
          if(typeof params.data !== 'undefined' && typeof params.data.filterObject !== 'undefined') {
            __params = 'count=' + par.count + '&page=' + par.page + '&' + strFilterObject + '&' + _strSorting;
          } else if(typeof params.filter !== 'undefined') {
            var _filter = '';
            for(var property in params.filter) {
              _filter = typeof params.filter[property] === 'undefined' ? '' : params.filter[property];
            } 
            __params = 'count=' + par.count + '&filter=' + _filter + '&page=' + par.page + '&' + _strSorting;
          }

          var urlParams = '';
          if(typeof identity !== 'undefined')
          {
            if(identity.urlParams !== 'undefined') {
              urlParams = '';
              for(var i = 0; i < identity.urlParams.length; i++) {
                urlParams += identity.urlParams[i] +'/';
              }
            } else {
              angular.forEach(identity, function(index, value) {
                if(__params.length > 0) {
                  __params += '&filterObject.' + value + '=' + index;
                } else {
                  __params += 'filterObject.' + value + '=' + index;
                }
              });
            }
          }
          
          data.items = service.query(__params, function(a) {
            $timeout(function() {
                      data.items = [];
                      data.items = a.result;
                      _params.total(a.total); // Total de registros
                      $defer.resolve(a.result); // Datos de todas las paginas
                  }, 500);
          }, urlParams);
        }
      });
      return data;
    };

    // Public API here
    return factory;
  });
