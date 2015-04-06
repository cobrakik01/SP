'use strict';

describe('Controller: PolizasPolizasCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var PolizasPolizasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizasPolizasCtrl = $controller('PolizasPolizasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
