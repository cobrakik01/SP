'use strict';

describe('Controller: AutoridadesCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var AutoridadesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutoridadesCtrl = $controller('AutoridadesCtrl', {
      $scope: scope
    });
  }));

  it('UnitTes de AutoridadesCtrl', function () {
    expect(true).toBe(true);
  });
});
