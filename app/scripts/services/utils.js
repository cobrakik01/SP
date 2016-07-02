'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.utils
 * @description
 * # utils
 * Service in the sistemaPolizasPgApp.
 */
angular.module('sistemaPolizasPgApp')
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

    factory.formatNum = function(n) {
        return factory.f(n);
    };

    factory.formatDate = function(date) {
        // return date.getFullYear() + '/' + factory.f(date.getMonth() + 1) + '/' + factory.f(date.getDate());
        if(typeof date === 'object')
            return factory.f(date.getDate()) + '/' + factory.f(date.getMonth() + 1) + '/' + date.getFullYear();
        else
            return "";
    };

    factory.parseDateTime = function(date) {
      return dias[date.getDay()] + ' ' + factory.f(date.getDate()) + ' de ' + meses[date.getMonth()] + ' del ' + date.getFullYear() + ' ' + factory.f(date.getHours()) + ':' + factory.f(date.getMinutes()) + ':' + factory.f(date.getSeconds());
    };

    factory.parseDate = function(date) {
      return dias[date.getDay()] + ' ' + factory.f(date.getDate()) + ' de ' + meses[date.getMonth()] + ' del ' + date.getFullYear();
    };

    factory.toDate = function(strDate) {
        // console.log(strDate);
        if(typeof strDate !== 'undefined') {
            return new Date(parseInt(strDate.substr(6)));
        }
        return "";
    };

    factory.strToDate = function(strDate) {
      return factory.parseDate(factory.toDate(strDate));
    };

    factory.currentTime = function() {
      return factory.parseDateTime(new Date());
    };

    factory.formatMony = function(num) {
        var strNum = num.toString();
        var strEnteros = '';
        var strEnterosConComas = '';
        var strDecimales = '00';
        if(strNum.indexOf('.') != -1) { // tiene decimales
            strEnteros = strNum.toString().substr(0, strNum.indexOf('.'));
            strDecimales = strNum.toString().substr(strNum.indexOf('.') + 1, strNum.length);
        } else {
            strEnteros = strNum;
        }
        strEnteros = strEnteros.split('').reverse().join('');
        var numCount = 3;
        for(var i = strEnteros.length - 1; i >= 0; i--) {
            if(numCount == 0) {
                strEnterosConComas += ',' + strEnteros[i];
                numCount = 3;
            } else {
                strEnterosConComas += strEnteros[i];
                numCount--;
            }
        }
        return strEnterosConComas + '.' + strDecimales;
    };

    // Public API here
    return factory;
  });
