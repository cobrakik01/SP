'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.AuthProvider
 * @description
 * # AuthProvider
 * Provider in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
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
