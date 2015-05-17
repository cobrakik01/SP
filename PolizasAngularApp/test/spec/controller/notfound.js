'use strict';

describe('Controller: NotfoundCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var NotfoundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotfoundCtrl = $controller('NotfoundCtrl', {
      $scope: scope
    });
  }));

  it('UnitTest de NotfoundCtrl', function () {
    expect(true).toBe(true);
  });
});
