'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.DataTable
 * @description
 * # DataTable
 * Factory in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .factory('DataTable', function (ngTableParams, $filter, $timeout) {
    // Service logic
    // ...

    var factory = {};
    factory.params = function(params, service) {
      var data = {};
      data.items = [];
      data.params = new ngTableParams({
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
          sorting: (typeof params.sorting == 'undefined') ? { } : params.sorting,
          filter: (typeof params.filter == 'undefined') ? { } : params.filter
      },
      {
        total: 0, // length of data
        getData: function($defer, _params) {
          var par = _params.url();
          par.filter = _params.filter().Nombre;
          par.sorting = _params.sorting().Nombre;
          
          data.items = service.query(par, function(a) {
            $timeout(function() {
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
