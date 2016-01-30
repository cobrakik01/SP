'use strict';

describe('Service: polizas.service', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var polizas.service;
  beforeEach(inject(function (_polizas.service_) {
    polizas.service = _polizas.service_;
  }));

  it('should do something', function () {
    expect(!!polizas.service).toBe(true);
  });

});
