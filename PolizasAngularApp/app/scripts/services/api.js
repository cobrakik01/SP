'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.api
 * @description
 * # api
 * Constant in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .constant('api', 'http://localhost:49531/api/')
  //.constant('view', 'Content/')
  .constant('view', '')
  .constant('loader', '../images/loading.GIF')
  .constant('img', {
  	header: '../images/cabAx.jpg',
  	fondo: '../images/Pdp_fondo.gif',
  	login: '../images/login.jpg',
  	home: '../images/home.png',
  	logo: {
  		pgj: '../images/pgj_df.png',
  		df: '../images/cdmx.png'
  	}
  });
