'use strict';

describe('Directive: loadingContainer', function () {

  // load the directive's module
  beforeEach(module('polizasAngularAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<loading-container></loading-container>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the loadingContainer directive');
  }));
});
