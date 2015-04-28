'use strict';

describe('Service: AuthProvider', function () {

  // load the service's module
  beforeEach(module('polizasAngularAppApp'));

  // instantiate service
  var AuthProvider;
  beforeEach(inject(function (_AuthProvider_) {
    AuthProvider = _AuthProvider_;
  }));

  it('should do something', function () {
    expect(!!AuthProvider).toBe(true);
  });

});
