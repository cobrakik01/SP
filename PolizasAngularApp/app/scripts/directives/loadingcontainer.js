'use strict';

/**
 * @ngdoc directive
 * @name polizasAngularAppApp.directive:loadingContainer
 * @description
 * # loadingContainer
 */
angular.module('polizasAngularAppApp')
  .directive('loadingContainer', function () {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var loadingLayer = angular.element('<div class="loading"></div>');
            element.append(loadingLayer);
            element.addClass('loading-container');
            scope.$watch(attrs.loadingContainer, function(value) {
                loadingLayer.toggleClass('ng-hide', !value);
            });
        }
    };
  });
