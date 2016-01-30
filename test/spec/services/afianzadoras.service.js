'use strict';

describe('Service: afianzadoras.service', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var afianzadoras.service;
  beforeEach(inject(function (_afianzadoras.service_) {
    afianzadoras.service = _afianzadoras.service_;
  }));

  it('should do something', function () {
    expect(!!afianzadoras.service).toBe(true);
  });

});
