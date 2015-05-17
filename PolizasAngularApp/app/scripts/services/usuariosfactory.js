'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.UsuariosFactory
 * @description
 * # UsuariosFactory
 * Factory in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .factory('UsuariosFactory', function () {
    // Service logic
    // ...

    var scopeController;

    // Public API here
    return {
      setController: function(ctrl) {
        scopeController = ctrl;
      },
      getController: function () {
        return scopeController;
      }
    };
  });
