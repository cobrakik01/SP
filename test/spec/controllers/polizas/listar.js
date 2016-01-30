'use strict';

describe('Controller: PolizasListarCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var PolizasListarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizasListarCtrl = $controller('PolizasListarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PolizasListarCtrl.awesomeThings.length).toBe(3);
  });
});
