'use strict';

describe('Controller: PerfilHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var PerfilHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerfilHomeCtrl = $controller('PerfilHomeCtrl', {
      $scope: scope
    });
  }));

  it('UnitTest de PerfilHomeCtrl', function () {
    expect(true).toBe(true);
  });
});
