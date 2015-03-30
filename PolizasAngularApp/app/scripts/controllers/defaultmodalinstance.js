'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:ModalinstancectrlCtrl
 * @description
 * # ModalinstancectrlCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('DefaultModalInstanceCtrl', function ($scope, $modalInstance, params) {

  	$scope.msg = params.msg;
  	$scope.title = params.title;
    $scope.data = {
      data: params.data,
      ctx: $modalInstance
    };

  	$scope.accept = function() {
      if(typeof params.accept != 'undefined')
      {
        params.accept($scope.data);
      }
  	};

  	$scope.cancel = function() {
      if(typeof params.cancel != 'undefined')
      {
        params.cancel($scope.data);
      }
      else
      {
        $modalInstance.dismiss();
      }
  	};

  });
