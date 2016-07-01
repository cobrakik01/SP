'use strict';

describe('Controller: PolizasPolizaseditarCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var PolizasPolizaseditarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizasPolizaseditarCtrl = $controller('PolizasPolizaseditarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PolizasPolizaseditarCtrl.awesomeThings.length).toBe(3);
  });
});
