'use strict';

describe('Service: usuarios.service', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var usuarios.service;
  beforeEach(inject(function (_usuarios.service_) {
    usuarios.service = _usuarios.service_;
  }));

  it('should do something', function () {
    expect(!!usuarios.service).toBe(true);
  });

});
