'use strict';

describe('Controller: UsuariosUsuariosDetallesCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var UsuariosUsuariosDetallesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosUsuariosDetallesCtrl = $controller('UsuariosUsuariosDetallesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
