'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.TokenService
 * @description
 * # TokenService
 * Service in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .service('TokenService', function ($http, api) {
  	var service = {};
  	service.get = function(fn) {
  		var url = api + 'TokenApi';
  		$http.get(url).success(function(data) {
  			var token = {
	          __RequestVerificationToken: data.token.value
	        };
  			fn(token);
  		}).error(function(a, status, c, d) {
  			console.log("Get Token");
  			console.log(a);
  			console.log(status);
  			console.log(c);
		    console.log(d);
		    console.log("Fin - Get Token");
  		});
  	};
  	return service;
  });
