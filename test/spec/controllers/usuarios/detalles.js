'use strict';

describe('Controller: UsuariosDetallesCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var UsuariosDetallesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosDetallesCtrl = $controller('UsuariosDetallesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsuariosDetallesCtrl.awesomeThings.length).toBe(3);
  });
});
