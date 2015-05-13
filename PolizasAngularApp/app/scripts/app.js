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
    'ngLoader' // https://github.com/jfeigel/ngLoader,
  ])
  .run(function($rootScope, $interval, utils, AuthService, img, $state, $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.img = img;

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

    var auth = function(AuthService, $location, $state) {
      AuthService.check(function() {
        if(AuthService.loginActive) {
          AuthService.user(function(user) {
            AuthService.details(user.UserId, function(userDetails) {
              if((!userDetails.detalles || !userDetails.detalles.Id) && ($location.path() !== '/administrar/areas'))
              {
                $state.transitionTo('perfil');
              }
            });
          });
        } else {
          $state.transitionTo('login');
        }
      }, function() {
        $state.transitionTo('login');
      });
    };

    var home = {
      name: 'home',
      url: '/',
      templateUrl: view + 'views/main.html',
      controller: 'MainCtrl',
      deepStateRedirect: true,
      onEnter: auth
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
      templateUrl: view + 'views/afianzadoras/afianzadoras.html',
      controller: 'AfianzadorasCtrl',
      deepStateRedirect: true,
      onEnter: auth
    };

    var areas = {
      name: 'areas',
      url: '/administrar/areas',
      templateUrl: view + 'views/areas/areas.html',
      controller: 'AreasCtrl',
      deepStateRedirect: true,
      onEnter: auth,
    };

    var autoridades = {
      name: 'autoridades',
      url: '/administrar/autoridades',
      controller: 'AutoridadesCtrl',
      templateUrl: view + 'views/autoridades/home.html',
      deepStateRedirect: true,
      onEnter: auth
    };

    var polizas = {
      name: 'polizas',
      url: '/polizas',
      controller: 'PolizasCtrl',
      templateUrl: view + 'views/polizas/home.html',
      deepStateRedirect: true,
      onEnter: auth
    };

    var polizasListar = {
      name: 'polizas.listar',
      url: '/listar',
      controller: 'PolizasListarCtrl',
      templateUrl: view + 'views/polizas/list.html',
      deepStateRedirect: true,
      onEnter: auth
    };

    var polizasAgregar = {
      name: 'polizas.agregar',
      url: '/agregar',
      templateUrl: view + 'views/polizas/agregar.html',
      controller: 'PolizasAgregarCtrl',
      deepStateRedirect: true,
      onEnter: auth
    };

    var polizasIngresos = {
      name: 'polizas.listar.ingresos',
      url: '/:id/ingresos',
      templateUrl: view + 'views/polizas/ingresos.html',
      controller: 'PolizasIngresosCtrl',
      deepStateRedirect: true,
      onEnter: auth
    };

    var perfil = {
      name: 'perfil',
      url: '/perfil',
      templateUrl: view + 'views/perfil/home.html',
      controller: 'PerfilHomeCtrl',
      deepStateRedirect: true,
      onEnter: auth
    };

    var afianzados = {
      name: 'afianzados',
      url: '/afianzados',
      templateUrl: view + 'views/afianzados/home.html',
      controller: 'AfianzadosHomeCtrl',
      onEnter: auth
    };

    var afianzadosListar = {
      name: 'afianzados.listar',
      url: '/listar',
      templateUrl: view + 'views/afianzados/listar.html',
      controller: 'AfianzadosListarCtrl',
      onEnter: auth
    };

    var afianzadosNuevo = {
      name: 'afianzados.nuevo',
      url: '/nuevo',
      templateUrl: view + 'views/afianzados/nuevo.html',
      controller: 'AfianzadosNuevoCtrl',
      onEnter: auth
    };

    var usuarios = {
      name: 'usuarios',
      url: '/usuarios',
      templateUrl: view + 'views/usuarios/home.html',
      controller: 'UsuariosHomeCtrl',
      onEnter: auth
    };

    var usuariosDetalles = {
      name: 'usuarios.detalles',
      url: '/:id/detalles',
      templateUrl: view + 'views/usuarios/detalles.html',
      controller: 'UsuariosDetallesCtrl',
      onEnter: auth
    };

    var usuariosNuevo = {
      name: 'usuarios.nuevo',
      url: '/nuevo',
      templateUrl: view + 'views/usuarios/nuevo.html',
      controller: 'UsuariosNuevoCtrl',
      onEnter: auth
    };

    $stateProvider
      .state(notfound)
      .state(home)
      .state(login)
      .state(perfil)

      /*
      |************************************
      |     Administracion
      |************************************
      */
      .state(areas)
      .state(afianzadoras)
      .state(autoridades)

      /*
      |-----------------------------
      |       Polizas
      |-----------------------------
      */
      .state(polizas)
      .state(polizasListar)
      .state(polizasAgregar)
      .state(polizasIngresos)


      // .state(afianzados)
      // .state(afianzadosListar)
      // .state(afianzadosNuevo)

      /*
      |-----------------------------
      |       Usuarios
      |-----------------------------
      */
      .state('usuarios', usuarios)
      .state(usuariosNuevo)
      .state(usuariosDetalles);
  });
