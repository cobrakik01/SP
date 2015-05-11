'use strict';

describe('Controller: UsuariosUsuarioshomeCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var UsuariosUsuarioshomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosUsuarioshomeCtrl = $controller('UsuariosUsuarioshomeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
