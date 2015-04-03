'use strict';

describe('Controller: AreasAreaseditarmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var AreasAreaseditarmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AreasAreaseditarmodalCtrl = $controller('AreasAreaseditarmodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
