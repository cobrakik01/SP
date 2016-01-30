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
          //console.log(params);
          // console.log('incia for');
          var strFilterObject = '';
          for(var obj in filterObject.filterObject) {
            strFilterObject += 'filterObject.' + obj + '=' + filterObject.filterObject[obj] + '&';
          }
          strFilterObject = strFilterObject.substr(0, strFilterObject.length - 1);
          // console.log('termina for');
          //console.log(_params.sorting());

          var _strSorting = '';
          for(var s in _params.sorting()) {
            _strSorting = 'sortingField=' + s + '&sorting=' + _params.sorting()[s];
          }
          
          par.filter = filterObject;
          // par.sorting = _params.sorting().Nombre;
          par.sorting = _strSorting;
          data.items = [];

          var __params = '';
          if(typeof params.data !== 'undefined' && typeof params.data.filerObject !== 'undefined') {
            // __params = 'count=' + par.count + '&page=' + par.page + '&sorting=' + par.sorting + '&' + strFilterObject;
            __params = 'count=' + par.count + '&page=' + par.page + '&' + strFilterObject + '&' + _strSorting;
          } else if(typeof params.filter !== 'undefined') {
            var _filter = '';
            for(var property in params.filter) {
              _filter = typeof params.filter[property] === 'undefined' ? '' : params.filter[property];
            } 
            // __params = 'count=' + par.count + '&filter=' + _filter + '&page=' + par.page + '&sorting=' + par.sorting;
            __params = 'count=' + par.count + '&filter=' + _filter + '&page=' + par.page + '&' + _strSorting;
          }

          if(typeof identity !== 'undefined')
          {
            if(typeof identity.key !== 'undefined' && typeof identity.value !== 'undefined')
            {
              __params += '&' + identity.key + '=' + identity.value;
            } else {
              for (var i = 0; i < identity.length; i++) {
                __params += '&' + identity[i].key + '=' + identity[i].value;
              }
            }
          }
          
          data.items = service.query(__params, function(a) {
            $timeout(function() {
                      data.items = [];
                      data.items = a.result;
                      _params.total(a.total); // Total de registros
                      $defer.resolve(a.result); // Datos de todas las paginas
                  }, 500);
          });
        }
      });
      return data;
    };

    // Public API here
    return factory;
  });
