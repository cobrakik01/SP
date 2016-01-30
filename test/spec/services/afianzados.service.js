'use strict';

describe('Service: afianzados.service', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var afianzados.service;
  beforeEach(inject(function (_afianzados.service_) {
    afianzados.service = _afianzados.service_;
  }));

  it('should do something', function () {
    expect(!!afianzados.service).toBe(true);
  });

});
