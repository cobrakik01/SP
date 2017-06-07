'use strict';

describe('Controller: EgresosHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var EgresosHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EgresosHomeCtrl = $controller('EgresosHomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EgresosHomeCtrl.awesomeThings.length).toBe(3);
  });
});
