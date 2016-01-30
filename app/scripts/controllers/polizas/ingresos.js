'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:PolizasIngresosCtrl
 * @description
 * # PolizasIngresosCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('PolizasIngresosCtrl', function (
    $scope, 
    $stateParams, 
    $state, 
    DataTable, 
    IngresosService, 
    PolizasService,
    DepositantesService,
    utils,
    toaster,
    $modal) {
    
    var idPoliza = $stateParams.idPoliza;
    var idAfianzado = $stateParams.idPoliza;

    if((!angular.isDefined(idPoliza) || idPoliza === "") && (!angular.isDefined(idAfianzado) || idAfianzado === "")) {
    	$state.go('polizas.listar');
    }

    $scope.poliza;
    $scope.data = {
      depositante: {},
      ingreso: {}
    };
    $scope.data.txtDepositante = '';

    $scope.table = {};
    $scope.table.ingresos = DataTable.params({
      sorting: { FechaDeIngreso: 'desc' },
      data: {
        filerObject: { Cantidad: '', Descripcion: '', FechaDeIngreso: '' }
      }
    }, IngresosService, { key: 'filterObject.PolizaId', value: idPoliza });

    $scope.table.depositantes = DataTable.params({
      sorting: { Nombre: 'asc'},
      filter: { Nombre: '' },
      data: {
        filterObject: { Nombre: '' }
      }
    }, DepositantesService, { key: 'filterObject.AfianzadoId', value: idAfianzado });

    $scope.toDate = function(str) {
        return utils.formatDate(utils.toDate(str));
    };

    $scope.cargarDatosPoliza = function() {
      PolizasService.find(idPoliza, function(data) {
        $scope.poliza = data;
        $scope.afianzado = data.Afianzado;
        $scope.AveriguacionPrevia = data.AveriguacionPrevia;
      });
    };

    $scope.btnSelectDepositante = function(item) {
      $scope.data.depositante = item;
      $scope.data.txtDepositante = item.ApellidoPaterno + ' ' + item.ApellidoMaterno + ' ' + item.Nombre;
    };

    $scope.btnOtroDepositante = function() {
      var depositante = $scope.data.depositante;
      var modalInstance = $modal.open({
        templateUrl: 'agregarDepositante.html',
        controller: 'PolizasAgregarDepositanteModalCtrl',
        size: 'sm',
        resolve: {
          params: function() {
            return depositante;
          }
        }
      });

      modalInstance.result.then(function (depositante) {
        $scope.data.depositante = depositante;
        $scope.data.txtDepositante = ($scope.data.depositante.ApellidoPaterno 
                          + ' ' + $scope.data.depositante.ApellidoMaterno 
                          + ' ' + $scope.data.depositante.Nombre);
      });
    };

    $scope.nuevoIngreso = function() {
      if($scope.ingresoListo()) {
        console.log('Se agregara un nuevo ingreso.');
        IngresosService.add(idPoliza, $scope.data.ingreso, $scope.data.depositante, function(data) {
          if(data.Message)
          {
            toaster.pop(data.Message.Type, data.Message.Title, data.Message.Message);
            $scope.table.ingresos.params.reload();
            $scope.table.depositantes.params.reload();
            $scope.reset();
          }
        });
      }
    };

    $scope.reset = function() {
      $scope.data.depositante = {};
      $scope.data.ingreso = {};
      $scope.data.txtDepositante = '';
    };

    $scope.ingresoListo = function() {
      return $scope.data.depositante.Nombre
        && $scope.data.depositante.Nombre
        && $scope.data.depositante.ApellidoMaterno
        && $scope.data.depositante.ApellidoPaterno
        && $scope.data.ingreso.Cantidad;
    };

    $scope.cargarDatosPoliza();
    // $scope.table.ingresos.params.reload();
    // $scope.table.depositantes.params.reload();

  })

.controller('Ingresos.AgregarDepositanteModalCtrl', function($scope, $modalInstance, params) {
  $scope.depositante = {};
    
    $scope.agregar = function () {
      if(!$scope.disabled()) {
        $modalInstance.close($scope.depositante);
      }
    };

    $scope.disabled = function() {
      return !($scope.depositante.ApellidoMaterno && $scope.depositante.ApellidoPaterno && $scope.depositante.Nombre);
    };

    $scope.cancelar = function () {
      $modalInstance.dismiss($scope.depositante);
    };
});
