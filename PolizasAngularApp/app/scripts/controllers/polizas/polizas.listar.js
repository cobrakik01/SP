'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:PolizaslistarCtrl
 * @description
 * # PolizaslistarCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('PolizasListarCtrl', function ($scope, AuthService) {
    AuthService.auth();
  });
