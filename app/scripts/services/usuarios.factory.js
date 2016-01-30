'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.usuarios.factory
 * @description
 * # usuarios.factory
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
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
