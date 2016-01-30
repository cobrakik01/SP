'use strict';

describe('Service: ingresos.service', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var ingresos.service;
  beforeEach(inject(function (_ingresos.service_) {
    ingresos.service = _ingresos.service_;
  }));

  it('should do something', function () {
    expect(!!ingresos.service).toBe(true);
  });

});
