'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.AfianzadoraService
 * @description
 * # AfianzadoraService
 * Service in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .service('AfianzadoraService', function ($resource, api) {
  	var service = $resource(api + 'Afianzadoras/Index', {}, {
  		query: {method: 'GET', isArray: false}
  	});
  	service.create = function(model, fn) {
  		var data = {Nombre: model.Nombre};
  		$resource(api + 'Afianzadoras/Create', {}, {
  			create: { method: 'POST' }
  		}).create(data, fn);
  	};
  	return service;
  });
