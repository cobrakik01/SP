'use strict';

describe('Controller: AfianzadosListarCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var AfianzadosListarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AfianzadosListarCtrl = $controller('AfianzadosListarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AfianzadosListarCtrl.awesomeThings.length).toBe(3);
  });
});
