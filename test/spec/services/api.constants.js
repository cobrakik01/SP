'use strict';

describe('Service: api.constants', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var api.constants;
  beforeEach(inject(function (_api.constants_) {
    api.constants = _api.constants_;
  }));

  it('should do something', function () {
    expect(!!api.constants).toBe(true);
  });

});
