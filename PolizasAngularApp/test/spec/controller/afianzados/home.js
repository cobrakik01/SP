'use strict';

describe('Controller: AfianzadosHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var AfianzadosHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AfianzadosHomeCtrl = $controller('AfianzadosHomeCtrl', {
      $scope: scope
    });
  }));

  it('UnitTest de AfianzadosHomeCtrl', function () {
    expect(true).toBe(true);
  });
});
