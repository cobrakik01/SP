'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.api
 * @description
 * # api
 * Constant in the polizasAngularAppApp.
 */
var host = 'http://localhost:49531/';
var view = ''; // 'Content/';
var assets = '../';

angular.module('polizasAngularAppApp')
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
