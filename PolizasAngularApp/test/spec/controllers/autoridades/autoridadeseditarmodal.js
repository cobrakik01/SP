'use strict';

describe('Controller: AutoridadesAutoridadeseditarmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var AutoridadesAutoridadeseditarmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutoridadesAutoridadeseditarmodalCtrl = $controller('AutoridadesAutoridadeseditarmodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
