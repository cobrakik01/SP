'use strict';

describe('Controller: DefaultModalInstanceCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var DefaultModalInstanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DefaultModalInstanceCtrl = $controller('DefaultModalInstanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DefaultModalInstanceCtrl.awesomeThings.length).toBe(3);
  });
});
