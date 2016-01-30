'use strict';

describe('Controller: AfianzadosNuevoCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var AfianzadosNuevoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AfianzadosNuevoCtrl = $controller('AfianzadosNuevoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AfianzadosNuevoCtrl.awesomeThings.length).toBe(3);
  });
});
