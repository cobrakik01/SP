'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.utils
 * @description
 * # utils
 * Factory in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .factory('utils', function () {
    // Service logic
    // ...

    var meses = [
        'Enero', 
        'Febrero', 
        'Marzo', 
        'Abril', 
        'Mayo', 
        'Junio', 
        'Julio', 
        'Agosto', 
        'Septiembre', 
        'Octubre', 
        'Noviembre',
        'Diciembre'];

      var dias = [
        'Domingo', 
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'];

    var factory = {};

    factory.f = function(n) {
      return n > 9 ? '' + n: '0' + n;
    };

    factory.parseDateTime = function(date) {
      return dias[date.getDay()] + ' ' + factory.f(date.getDate()) + ' de ' + meses[date.getMonth()] + ' del ' + date.getFullYear() + ' ' + factory.f(date.getHours()) + ':' + factory.f(date.getMinutes()) + ':' + factory.f(date.getSeconds());
    };

    factory.parseDate = function(date) {
      return dias[date.getDay()] + ' ' + factory.f(date.getDate()) + ' de ' + meses[date.getMonth()] + ' del ' + date.getFullYear();
    };

    factory.strToDate = function(strDate) {
      return factory.parseDate(new Date(parseInt(strDate.substr(6))));
    };

    factory.currentTime = function() {
      return factory.parseDateTime(new Date());
    };

    // Public API here
    return factory;
  });
