'use strict';

describe('Controller: PolizasPolizasAgregarDepositanteModalCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var PolizasPolizasAgregarDepositanteModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizasPolizasAgregarDepositanteModalCtrl = $controller('PolizasPolizasAgregarDepositanteModalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
