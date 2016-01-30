'use strict';

describe('Service: perfil.service', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var perfil.service;
  beforeEach(inject(function (_perfil.service_) {
    perfil.service = _perfil.service_;
  }));

  it('should do something', function () {
    expect(!!perfil.service).toBe(true);
  });

});
