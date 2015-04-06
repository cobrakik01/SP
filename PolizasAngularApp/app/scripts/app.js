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
    'ui.router', // https://github.com/angular-ui/ui-router
    'ngLoader' // https://github.com/jfeigel/ngLoader
  ])
  .run(function($rootScope, $interval) {
    $interval(function(){
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
      var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      var f = new Date();

      function n(n) {
        return n > 9 ? '' + n: '0' + n;
      }
      $rootScope.currentTime =  dias[f.getDay()] + ' ' + n(f.getDate()) + ' de ' + meses[f.getMonth()] + ' del ' + f.getFullYear() + ' ' + n(f.getHours()) + ':' + n(f.getMinutes()) + ':' + n(f.getSeconds());
    }, 1000);

    $rootScope.operaciones = false;
    $rootScope.administracion = false;

    $rootScope.resetMenuSelect = function() {
      $rootScope.operaciones = false;
      $rootScope.administracion = false;      
    };


  })
  .config(function ($routeProvider, view, $stateProvider, $urlRouterProvider, $locationProvider) {
    /*
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
    */
    $locationProvider.html5Mode(false).hashPrefix('!');
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: view + 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about',{
        url: '/about',
        templateUrl: view + 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('notfound',{
        url: '/notfound',
        templateUrl: view + 'views/notfound.html',
        controller: 'NotfoundCtrl'
      })
      .state('afianzadoras',{
        url: '/administrar/afianzadoras',
        templateUrl: view + 'views/afianzadoras/afianzadoras.html',
        controller: 'AfianzadorasCtrl'
      })
      .state('areas',{
        url: '/administrar/areas',
        templateUrl: view + 'views/areas/areas.html',
        controller: 'AreasCtrl'
      })
      .state('autoridades', {
        url: '/administrar/autoridades',
        templateUrl: view + 'views/autoridades/home.html',
        controller: 'AutoridadesCtrl'
      })
      .state('polizas', {
        url: '/polizas',
        templateUrl: view + 'views/polizas/home.html',
        controller: 'PolizasCtrl'
      })
      .state('polizas.listar', {
        templateUrl: view + 'views/polizas/list.html',
        controller: 'PolizasCtrl'
      })
      .state('polizas.agregar', {
        url: '/agregar',
        templateUrl: view + 'views/polizas/agregar.html',
        controller: 'PolizasAgregarCtrl'
      });
  });
