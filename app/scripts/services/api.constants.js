'use strict';

/**
 * @ngdoc service
 * @name sistemaPolizasPgApp.api.constants
 * @description
 * # api.constants
 * Service in the sistemaPolizasPgApp.
 */
var host = 'http://localhost:51275/';
var view = ''; // 'Content/';
var assets = '../';

angular.module('sistemaPolizasPgApp')
  .constant('api', host + 'api/')
  .constant('view', view)
  .constant('loader', assets + 'images/loading.GIF')
  .constant('img', {
  	header: assets + 'images/cabAx.jpg',
  	fondo: assets + 'images/Pdp_fondo.gif',
  	login: assets + 'images/login.jpg',
  	home: assets + 'images/home.png',
  	logo: {
  		pgj: assets + 'images/pgj_df.png',
  		df: assets + 'images/cdmx.png'
  	}
  });
