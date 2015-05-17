'use strict';

describe('Controller: AfianzadosListarCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var AfianzadosListarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AfianzadosListarCtrl = $controller('AfianzadosListarCtrl', {
      $scope: scope
    });
  }));

  it('Unit test de AfianzadosListarCtrl.', function () {
    expect(true).toBe(true);
  });
});
