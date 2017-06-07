'use strict';

describe('Controller: MinisteriosHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var MinisteriosHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MinisteriosHomeCtrl = $controller('MinisteriosHomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MinisteriosHomeCtrl.awesomeThings.length).toBe(3);
  });
});
