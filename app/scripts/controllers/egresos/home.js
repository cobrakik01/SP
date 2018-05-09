'use strict';

/**
 * @ngdoc function
 * @name sistemaPolizasPgApp.controller:EgresosHomeCtrl
 * @description
 * # EgresosHomeCtrl
 * Controller of the sistemaPolizasPgApp
 */
angular.module('sistemaPolizasPgApp')
  .controller('EgresosHomeCtrl', function (
  	$scope,
    EgresosService,
    MinisteriosService,
    toaster, 
    DataTable,
    cbk,
    utils,
    $modal) {

  	$scope.table = DataTable.params({
      sorting: { Cantidad: 'asc' },
      data: {
        filterObject: { Descripcion: '', 'MinisteriosPublicos.Nombre': '', 'MinisteriosPublicos.Autoridad.Nombre': '', Cantidad: '', StrFechaDeEgreso: '' }
      }
    }, EgresosService);

    $scope.formatMony = utils.formatMony;

    $scope.toDate = function(str) {
        return utils.formatDate(new Date(str));
    };

    $scope.cargarMinisterios = function() {
      MinisteriosService.all(function(data) {
        $scope.MinisteriosPublicos = data;
      });
    };

    $scope.resetData = function() {
      $scope.data = {};
      $scope.cargarMinisterios();
      $scope.table.params.reload();
    };

    $scope.nuevo = function(dataReq) {
      if(!dataReq || !dataReq.Cantidad || !dataReq.MinisteriosPublicos || !dataReq.MinisteriosPublicos.Nombre) { return; }
      EgresosService.create(dataReq, function(dataRes) {
        if(dataRes.Message) {
          toaster.pop(dataRes.Message.Type, dataRes.Message.Title, dataRes.Message.Message);
          $scope.resetData();
        }
      });
    };

    $scope.generarReporte = function() {
      var element = window.document.getElementById('egresosReport');
       var specialElementHandlers = {
                '#bypassme': function (element, renderer) {
                    return true;
                }
            };
      var doc = new jsPDF(); 
      doc.fromHTML(element, 15, 15, {
                'width': 75,'elementHandlers': specialElementHandlers
            }, function(data){
                console.log(data);
                var string = 'Hola mundo!';
                $('.previewIFRAME').html(string);
                if (navigator.msSaveBlob) {
                    string = doc.output('datauristring');
                } else {
                    string = doc.output('bloburi');
                }
            });
      //doc.output("dataurlnewwindow");
      doc.save('Test.pdf');
    };

    $scope.resetData();
    
  });
