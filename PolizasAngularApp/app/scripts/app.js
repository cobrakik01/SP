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
  .run(function($rootScope, $interval, utils, AuthService) {

    $interval(function() {
      $rootScope.currentTime = utils.currentTime();
    }, 1000);

    $rootScope.operaciones = false;
    $rootScope.administracion = false;

    $rootScope.resetMenuSelect = function() {
      $rootScope.operaciones = false;
      $rootScope.administracion = false;      
    };

    
    $rootScope.session = AuthService;

    $rootScope.loadUser = function() {
      $rootScope.user = AuthService.user(function(data) {
        $rootScope.user = data;
      });
    };

    $rootScope.loadUser();

  })
  .config(function ($routeProvider, view, $stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    var auth = function(AuthService) {
      AuthService.auth();
      console.log('Auth desde config.');
    };

    var home = {
      name: 'home',
      url: '/',
      templateUrl: view + 'views/main.html',
      onEnter: auth,
      controller: 'MainCtrl'
      // ,deepStateRedirect: true
    };

    var notfound = {
      name: 'notfound',
      url: '/notfound',
      templateUrl: view + 'views/notfound.html',
      controller: 'NotfoundCtrl'
    };

    var login = {
      name: 'login',
      url: '/login',
      templateUrl: view + 'views/login.html',
      controller: 'LoginCtrl'
    };

    var afianzadoras = {
      name: 'afianzadoras',
      url: '/administrar/afianzadoras',
      onEnter: auth,
      templateUrl: view + 'views/afianzadoras/afianzadoras.html',
      controller: 'AfianzadorasCtrl'
      // , deepStateRedirect: true
    };

    var areas = {
      name: 'areas',
      url: '/administrar/areas',
      onEnter: auth,
      templateUrl: view + 'views/areas/areas.html',
      controller: 'AreasCtrl'
      // ,deepStateRedirect: true
    };

    var autoridades = {
      name: 'autoridades',
      onEnter: auth,
      url: '/administrar/autoridades',
      controller: 'AutoridadesCtrl',
      templateUrl: view + 'views/autoridades/home.html',
      // deepStateRedirect: true
    };

    var polizas = {
      name: 'polizas',
      url: '/polizas',
      controller: 'PolizasCtrl',
      templateUrl: view + 'views/polizas/home.html'
      // , deepStateRedirect: true
    };

    var polizasListar = {
      name: 'polizas.listar',
      url: '/listar',
      controller: 'PolizasListarCtrl',
      templateUrl: view + 'views/polizas/list.html',
      deepStateRedirect: true
    };

    var polizasAgregar = {
      name: 'polizas.agregar',
      url: '/agregar',
      templateUrl: view + 'views/polizas/agregar.html',
      controller: 'PolizasAgregarCtrl',
      deepStateRedirect: true
    };

    var perfil = {
      name: 'perfil',
      url: '/perfil',
      templateUrl: view + 'views/perfil/home.html',
      controller: 'PerfilHomeCtrl',
      deepStateRedirect: true,
      onEnter: auth
    };

    $stateProvider
      .state(notfound)
      .state(home)
      .state(login)
      .state(perfil)
      .state(areas)
      .state(afianzadoras)
      .state(autoridades)
      .state(polizas)
      .state(polizasListar)
      .state(polizasAgregar);
      /*
      .state('polizas.agregar.afianzado', {
        url: '/afianzado',
        templateUrl: view + 'views/polizas/agregarafianzadomodal.html',
        controller: 'PolizasAgregarCtrl'
      })
      .state('afianzados', {
        url: '/afianzados',
        templateUrl: view + 'views/afianzados/home.html',
        onEnter: auth,
        controller: 'AfianzadosHomeCtrl'
      })
      .state('afianzados.listar', {
        url: '/listar',
        templateUrl: view + 'views/afianzados/listar.html',
        onEnter: auth,
        controller: 'AfianzadosListarCtrl'
      })
      .state('afianzados.nuevo', {
        url: '/nuevo',
        templateUrl: view + 'views/afianzados/nuevo.html',
        onEnter: auth,
        controller: 'AfianzadosNuevoCtrl'
      });
      */
  });
