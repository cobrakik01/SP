'use strict';

describe('Controller: UsuariosNuevoCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var UsuariosNuevoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosNuevoCtrl = $controller('UsuariosNuevoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsuariosNuevoCtrl.awesomeThings.length).toBe(3);
  });
});
