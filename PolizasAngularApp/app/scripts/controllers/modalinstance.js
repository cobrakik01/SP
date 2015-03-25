'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:ModalinstancectrlCtrl
 * @description
 * # ModalinstancectrlCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('ModalinstancectrlCtrl', function ($scope, $modalInstance, params) {

  	$scope.msg = params.msg;
  	$scope.title = params.title;

    console.log(params);

  	$scope.accept = function() {
  		if(typeof params.accept != 'undefined')
  		{
  			params.accept(params.data);
  		}
  	};

  	$scope.cancel = function(data) {
  		$modalInstance.dismiss();
  		if(typeof params.cancel != 'undefined')
  		{
  			params.cancel(params.data);
  		}
  	};

  });
