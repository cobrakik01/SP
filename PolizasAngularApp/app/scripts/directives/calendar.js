'use strict';

/**
 * @ngdoc directive
 * @name polizasAngularAppApp.directive:calendar
 * @description
 * # calendar
 */
angular.module('polizasAngularAppApp')
.controller('cbkCalendarCtrl', function($scope) {
	/*
    |*****************************************
    |         Controles de Fecha de nacimiento
    |*****************************************
    */

    console.log($scope.cbkModel);

    $scope.today = function() {
      $scope.cbkModel = new Date();
    };
    // $scope.today();

    $scope.clear = function () {
      $scope.cbkModel = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      // $scope.minDate = $scope.minDate ? null : new Date();
      var d = new Date();
      $scope.minDate = new Date((d.getFullYear() - 80) + '/07/30');
    };

    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yyyy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
})
.directive('cbkCalendar', function (view) {
	return {
		scope: { cbkModel: '=', cbkPlaceholder: '=', cbkId: '=' },
    controller: 'cbkCalendarCtrl',
		// scope: { ctx:'=attr', miattr:'=' // es lo mismo que miattr='=miattr' }, // ctx, sera el modelo que se utilizara en la vista, '=attr', 
								   //se utilizara como atributo en la directiva:
								   // <cbk-calendar attr="modelo"></cbk-calendar>
								   // attr="modelo", el valor de "modelo" se asignara a ctx
								   // es decir, en la vista se utilizara "modelo" con el nombre "ctx"
		templateUrl: view + 'views/directives/cbk-calendar.html', // Vista parcial html
		// template: '<div class="alert alert-info">Hola mundo!</div>', // Si no se utiliza una vista parcial se puede utilizar un string.
		restrict: 'E', // Elemento: <cbk-calendar></cbk-calendar>
		// restrict: 'A', // Atributo <div cbk-calendar="exprecion"></div>
		// restrict: 'C', // Clase <div class="cbk-calendar: exprecion;"></div>
		// restrict: 'AEC', // Perimitira utilizar los tres tipos de restricciones, Elemento, Atributo, Clase:
							// <cbk-calendar></cbk-calendar>, por elemento
							// <div cbk-calendar="exprecion"></div>, por atributo
							// <div class="cbk-calendar: exprecion;"></div>, por clase
    /*compile: function(element){
      return function(scope, element, attrs, controller) {
      };
    },
		link: function postLink(scope, element, attrs) {
			// element.text('this is the calendar directive');
			// console.log(attrs);
			// console.log(scope.$parent);
		}
    */
	};
});
