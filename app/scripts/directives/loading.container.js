'use strict';

/**
 * @ngdoc directive
 * @name sistemaPolizasPgApp.directive:loading.container
 * @description
 * # loading.container
 */
angular.module('sistemaPolizasPgApp')
  .directive('loadingContainer', function (loader) {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var html = '<div class="loading"><div class="img-container"><img src="' + loader + '" width="50" height="50" align="center" /><br />Cargando...</div></div>';
            var loadingLayer = angular.element(html);
            element.append(loadingLayer);
            element.addClass('loading-container');
            scope.$watch(attrs.loadingContainer, function(value) {
                loadingLayer.toggleClass('ng-hide', !value);
            });
        }
    };
  });
