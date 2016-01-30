'use strict';

describe('Controller: AfianzadorasHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var AfianzadorasHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AfianzadorasHomeCtrl = $controller('AfianzadorasHomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AfianzadorasHomeCtrl.awesomeThings.length).toBe(3);
  });
});
