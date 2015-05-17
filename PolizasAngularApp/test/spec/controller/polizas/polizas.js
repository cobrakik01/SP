'use strict';

describe('Controller: PolizasCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var PolizasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizasCtrl = $controller('PolizasCtrl', {
      $scope: scope
    });
  }));

  it('UnitTest de PolizasCtrl', function () {
    expect(true).toBe(true);
  });
});
