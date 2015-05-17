'use strict';

describe('Controller: UsuariosHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var UsuariosHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosHomeCtrl = $controller('UsuariosHomeCtrl', {
      $scope: scope
    });
  }));

  it('UnitTest de UsuariosHomeCtrl', function () {
    expect(true).toBe(true);
  });
});
