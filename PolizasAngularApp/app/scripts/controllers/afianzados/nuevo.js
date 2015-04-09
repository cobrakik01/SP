'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:AfianzadosNuevoCtrl
 * @description
 * # AfianzadosNuevoCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('AfianzadosNuevoCtrl', function ($scope, toaster, AfianzadosService) {

    $scope.data = {
      afianzado: undefined
    };

    $scope.today = function() {
  		$scope.afianzado.FechaDeNacimiento = new Date();
  	};
  	// $scope.today();

  	$scope.clear = function () {
  		$scope.afianzado.FechaDeNacimiento = null;
  	};

  	// Disable weekend selection
  	$scope.disabled = function(date, mode) {
  		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  	};

  	$scope.toggleMin = function() {
  		// $scope.minDate = $scope.minDate ? null : new Date();
  		var d = new Date();
  		$scope.minDate = new Date((d.getFullYear() - 80) + "/07/30");
  	};

  	$scope.toggleMin();

  	$scope.open = function($event) {
  		$event.preventDefault();
  		$event.stopPropagation();
  		$scope.opened = true;
  	};

  	$scope.dateOptions = {
  		formatYear: 'yy',
  		startingDay: 1
  	};

  	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  	$scope.format = $scope.formats[1];


  	$scope.nuevo = function() {
      if(!$scope.formDisabled()) {
        AfianzadosService.create($scope.data.afianzado, function(data) {
          $scope.data.afianzado = undefined;
          if(data.Message) {
            toaster.pop(data.Message.Type, data.Message.Title, data.Message.Message);
          }
        });
      }
  	};

    $scope.formDisabled = function() {

      return !($scope.data.afianzado !== undefined && 
            ($scope.data.afianzado.Nombre
            && $scope.data.afianzado.ApellidoPaterno
            && $scope.data.afianzado.ApellidoMaterno
            && $scope.data.afianzado.FechaDeNacimiento));
    };
  });
