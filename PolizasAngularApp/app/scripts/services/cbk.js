'use strict';

/**
 * @ngdoc service
 * @name polizasAngularAppApp.cbk
 * @description
 * # cbk
 * Factory in the polizasAngularAppApp.
 */
angular.module('polizasAngularAppApp')
  .factory('cbk', function ($modal) {
    // Service logic
    // ...

    var factory = {};
    factory.alert = function(params) {
      var modalInstance = $modal.open({
        templateUrl: (typeof params.template == 'undefined') ? 'mdlConfirm.html': params.template,
        controller: (typeof params.controller == 'undefined') ? 'ModalinstancectrlCtrl' : params.controller,
        size: (typeof params.size == 'undefined') ? 'sm' : params.size,
        resolve: {
          params: function () {
            return {
              msg: (typeof params.msg == 'undefined') ? 'Mensaje' : params.msg,
              title: (typeof params.title == 'undefined') ? 'Titulo' : params.title,
              data: (typeof params.data == 'undefined') ? undefined : params.data,
              accept: function(data) {
                if(typeof params.url != 'undefined') {
                  location.href = params.url;
                }
                if(typeof params.accept != 'undefined')
                {
                  params.accept({data: data, ctx: modalInstance});
                }
              },
              cancel: function(data) {
                if(typeof params.cancel != 'undefined')
                {
                  params.cancel({data: data, ctx: modalInstance});
                }
                else
                {
                  modalInstance.dismiss();
                }
              }
            };
          }
        }
      });
    };

    // Public API here
    return factory;
  });
