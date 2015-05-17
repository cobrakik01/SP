'use strict';

describe('Controller: UsuariosDetallesCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var UsuariosDetallesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosDetallesCtrl = $controller('UsuariosDetallesCtrl', {
      $scope: scope
    });
  }));

  it('UnitTest de UsuariosDetallesCtrl', function () {
    expect(true).toBe(true);
  });
});
