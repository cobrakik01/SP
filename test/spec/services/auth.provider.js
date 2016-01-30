'use strict';

describe('Service: auth.provider', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var auth.provider;
  beforeEach(inject(function (_auth.provider_) {
    auth.provider = _auth.provider_;
  }));

  it('should do something', function () {
    expect(!!auth.provider).toBe(true);
  });

});
