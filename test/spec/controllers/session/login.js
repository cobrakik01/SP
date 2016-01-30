'use strict';

describe('Controller: SessionLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var SessionLoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SessionLoginCtrl = $controller('SessionLoginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SessionLoginCtrl.awesomeThings.length).toBe(3);
  });
});
