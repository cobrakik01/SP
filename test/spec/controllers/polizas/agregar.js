'use strict';

describe('Controller: PolizasAgregarCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var PolizasAgregarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizasAgregarCtrl = $controller('PolizasAgregarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PolizasAgregarCtrl.awesomeThings.length).toBe(3);
  });
});
