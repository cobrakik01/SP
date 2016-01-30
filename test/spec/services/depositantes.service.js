'use strict';

describe('Service: depositantes.service', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var depositantes.service;
  beforeEach(inject(function (_depositantes.service_) {
    depositantes.service = _depositantes.service_;
  }));

  it('should do something', function () {
    expect(!!depositantes.service).toBe(true);
  });

});
