'use strict';

describe('Controller: PolizasAgregarAfianzadoModalCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var PolizasAgregarAfianzadoModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizasAgregarAfianzadoModalCtrl = $controller('PolizasAgregarAfianzadoModalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PolizasAgregarAfianzadoModalCtrl.awesomeThings.length).toBe(3);
  });
});
