'use strict';

describe('Controller: PolizasPolizasAgregarAfianzadoModalCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var PolizasPolizasAgregarAfianzadoModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizasPolizasAgregarAfianzadoModalCtrl = $controller('PolizasPolizasAgregarAfianzadoModalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
