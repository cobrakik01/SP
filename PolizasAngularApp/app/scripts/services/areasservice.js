'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.AreasService
 * @description
 * # AreasService
 * Service in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .service('AreasService', function ($http, api, toaster) {
  	var url = api + 'AreasApi';
  	console.log(url);
  	var service = {};

  	service.query = function(fn) {
  		$http.get(url).success(function(data) {
  			fn(data);
  		});
  	};
  	service.create = function(nombre, fn) {
  		$http.post(url, {
  			"area_Nombre": nombre,
  			"area.Nombre": nombre,
  			Nombre: nombre
  		}).success(function(data){
  			fn(data);
  		}).error(function(data) {
  			console.log("Error");
  			console.log(data);
  			if(data != null)
  			{
  				if(typeof data.Message != 'undefined') {
	  				toaster.pop('error', 'Error', data.Message + ", " + data.MessageDetail);
	  			}
  			}
  		});
  	};
  	return service;
  });
