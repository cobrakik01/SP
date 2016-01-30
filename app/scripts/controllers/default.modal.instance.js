'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:DefaultModalInstanceCtrl
 * @description
 * # DefaultModalInstanceCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('DefaultModalInstanceCtrl', function ($scope, $modalInstance, params) {

  	$scope.msg = params.msg;
  	$scope.title = params.title;
    $scope.data = {
      data: params.data,
      ctx: $modalInstance
    };

  	$scope.accept = function() {
      if(typeof params.accept !== 'undefined')
      {
        params.accept($scope.data);
      }
  	};

  	$scope.cancel = function() {
      if(typeof params.cancel !== 'undefined')
      {
        params.cancel($scope.data);
      }
      else
      {
        $modalInstance.dismiss();
      }
  	};

  });
