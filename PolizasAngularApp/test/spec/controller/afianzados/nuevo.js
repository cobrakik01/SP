'use strict';

describe('Controller: AfianzadosNuevoCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var AfianzadosNuevoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AfianzadosNuevoCtrl = $controller('AfianzadosNuevoCtrl', {
      $scope: scope
    });
  }));

  it('UnitTes de AfianzadosNuevoCtrl', function () {
    expect(true).toBe(true);
  });
});
