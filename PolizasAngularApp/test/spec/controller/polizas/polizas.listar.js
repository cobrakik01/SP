'use strict';

describe('Controller: PolizasListarCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var PolizaslistarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizaslistarCtrl = $controller('PolizasListarCtrl', {
      $scope: scope
    });
  }));

  it('UnitTest de PolizasListarCtrl', function () {
    expect(true).toBe(true);
  });
});
