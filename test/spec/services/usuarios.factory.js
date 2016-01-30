'use strict';

describe('Service: usuarios.factory', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var usuarios.factory;
  beforeEach(inject(function (_usuarios.factory_) {
    usuarios.factory = _usuarios.factory_;
  }));

  it('should do something', function () {
    expect(!!usuarios.factory).toBe(true);
  });

});
