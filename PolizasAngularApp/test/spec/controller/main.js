'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('polizasAngularAppApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('UnitTes de MainCtrl, Debe tener la propiedad img', function () {
    expect(angular.isDefined(scope.img)).toBe(true);
  });

  it('UnitTes de MainCtrl, Debe tener la propiedad img', function () {
    expect(!angular.isDefined(scope.ingresos)).toBe(true);
  });
});
