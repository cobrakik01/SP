'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.auth.provider
 * @description
 * # auth.provider
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
  .provider('AuthProvider', function () {

    // Private variables
    var salutation = 'Hello';

    // Private constructor
    function Greeter() {
      this.greet = function () {
        return salutation;
      };
      this.auth = function() {
        console.log('Auth Service');
      };
    }

    // Public API for configuration
    this.setSalutation = function (s) {
      salutation = s;
    };

    // Method for instantiating
    this.$get = function () {
      return new Greeter();
    };

  });
