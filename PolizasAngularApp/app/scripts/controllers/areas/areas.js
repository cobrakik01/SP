'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:AreasCtrl
 * @description
 * # AreasCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('AreasCtrl', function (
    $scope,
    AreasService,toaster, 
    DataTable,
    cbk,
    $modal) {
  	
  	$scope.load = function(){
  		$scope.items = AreasService.query(function(data){
  			$scope.items = data;
	  	});
  	};
  	$scope.load();

  	$scope.create = function() {
  		console.log("Create");
  		AreasService.create($scope.nombre, function(data) {
  			console.log("Create fn");
  			console.log(data);
  			$scope.load();
  		});
  	};
  });
