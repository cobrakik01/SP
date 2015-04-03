'use strict';

/**
 * @ngdoc overview
 * @name polizasAngularAppApp
 * @description
 * # polizasAngularAppApp
 *
 * Main module of the application.
 */
angular
  .module('polizasAngularAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngTable',// https://github.com/esvit/ng-table/
    'toaster',// https://github.com/jirikavi/AngularJS-Toaster
    'ui.bootstrap', // https://angular-ui.github.io/bootstrap/
    'ui.utils', // http://angular-ui.github.io/ui-utils/#/routing
    // 'ui.router' // https://github.com/angular-ui/ui-router
  ])
  .config(function ($routeProvider, view) {
    $routeProvider
      .when('/', {
        templateUrl: view + 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: view + 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/administrar/afianzadoras', {
        templateUrl: view + 'views/afianzadoras.html',
        controller: 'AfianzadorasCtrl'
      })
      .when('/notfound', {
        templateUrl: view + 'views/notfound.html',
        controller: 'NotfoundCtrl'
      })
      .when('/administrar/areas', {
        templateUrl: 'views/areas/areas.html',
        controller: 'AreasCtrl'
      })
      .otherwise({
        redirectTo: '/notfound'
      });
  });
