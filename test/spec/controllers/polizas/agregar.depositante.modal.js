'use strict';

describe('Controller: PolizasAgregarDepositanteModalCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var PolizasAgregarDepositanteModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizasAgregarDepositanteModalCtrl = $controller('PolizasAgregarDepositanteModalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PolizasAgregarDepositanteModalCtrl.awesomeThings.length).toBe(3);
  });
});
