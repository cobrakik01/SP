'use strict';

describe('Controller: UsuariosHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var UsuariosHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosHomeCtrl = $controller('UsuariosHomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsuariosHomeCtrl.awesomeThings.length).toBe(3);
  });
});
