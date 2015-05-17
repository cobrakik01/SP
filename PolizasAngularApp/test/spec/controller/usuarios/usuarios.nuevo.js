'use strict';

describe('Controller: UsuariosNuevoCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var UsuariosNuevoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosNuevoCtrl = $controller('UsuariosNuevoCtrl', {
      $scope: scope
    });
  }));

  it('UnitTest de UsuariosNuevoCtrl', function () {
    expect(true).toBe(true);
  });
});
