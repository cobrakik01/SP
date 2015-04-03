'use strict';

describe('Controller: AutoridadesAutoridadesCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var AutoridadesAutoridadesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutoridadesAutoridadesCtrl = $controller('AutoridadesAutoridadesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
