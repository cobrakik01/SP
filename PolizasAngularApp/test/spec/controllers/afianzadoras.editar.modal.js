'use strict';

describe('Controller: AfianzadorasEditarModalCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var AfianzadorasEditarModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AfianzadorasEditarModalCtrl = $controller('AfianzadorasEditarModalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
