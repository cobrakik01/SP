'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:PolizasHomeCtrl
 * @description
 * # PolizasHomeCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('PolizasListarCtrl', function (
  	$scope,
  	PolizasService,
  	toaster,
  	DataTable,
  	utils,
    $state) {

  	$scope.polizaSelected = {};
  	$scope.table = {};

  	
  });
