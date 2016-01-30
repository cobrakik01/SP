'use strict';

describe('Controller: AfianzadorasEditarModalCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaPolizasPgApp'));

  var AfianzadorasEditarModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AfianzadorasEditarModalCtrl = $controller('AfianzadorasEditarModalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AfianzadorasEditarModalCtrl.awesomeThings.length).toBe(3);
  });
});
