'use strict';

describe('Controller: PolizasIngresosCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var PolizasIngresosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizasIngresosCtrl = $controller('PolizasIngresosCtrl', {
      $scope: scope
    });
  }));

  it('UnitTest de PolizasIngresosCtrl', function () {
    expect(true).toBe(true);
  });
});
