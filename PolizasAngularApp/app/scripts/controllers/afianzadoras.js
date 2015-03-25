'use strict';

/**
 * @ngdoc function
 * @name polizasAngularAppApp.controller:AfianzadorasCtrl
 * @description
 * # AfianzadorasCtrl
 * Controller of the polizasAngularAppApp
 */
angular.module('polizasAngularAppApp')
  .controller('AfianzadorasCtrl', function ($scope, AfianzadoraService, $filter, ngTableParams, toaster, $timeout, cbk) {
    var self = $scope;

    self.items = [];
    self.afianzadora = {
    	Nombre: ''
    };

    self.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,
        sorting: {
            Nombre: 'asc'     // initial sorting
        },
        filter: {
            Nombre: ''       // initial filter
        }
    }, {
        total: 0, // length of data
        getData: function($defer, params) {
        	var par = params.url();
        	par.filter = params.filter().Nombre;
        	par.sorting = params.sorting().Nombre;

        	self.items = AfianzadoraService.query(par, function(a) {
		    	$timeout(function() {
                    self.items = a.result;
                    params.total(a.total); // Total de registros
                    $defer.resolve(a.result); // Datos de todas las paginas
                }, 500);
		    });
        }
    });
    self.tableParams.reload();

    self.nuevo = function() {
    	AfianzadoraService.create(self.afianzadora, function(data) {
    		self.afianzadora = {};
    		if(data.Message)
    		{
    			toaster.pop(data.Message.Type, data.Message.Title, data.Message.Message);
    			//self.cargarTodos();
                self.tableParams.reload();
    		}
    	});
    };

    self.mdlEditar = function(model) {
        cbk.alert({
            template: 'mdlEditarAfianzadora.html',
            title: "Editar", 
            msg: "Este es mi mensaje", 
            data: model, 
            controller: 'AfianzadorasEditarModalCtrl'
        });
    };

    self.mdlEliminar = function(model) {
        cbk.alert({
            title: "Eliminar", 
            msg: "¿Esta seguro de eliminarlo?", 
            data: model, 
            accept: function(data)  {
                console.log(data);
                data.ctx.dismiss();
            },
            cancel: function(data) {
                console.log("cerrar");
            }
        });
    };

  });
