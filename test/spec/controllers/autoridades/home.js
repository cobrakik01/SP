'use strict';

describe('Controller: AutoridadesHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var AutoridadesHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutoridadesHomeCtrl = $controller('AutoridadesHomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AutoridadesHomeCtrl.awesomeThings.length).toBe(3);
  });
});
