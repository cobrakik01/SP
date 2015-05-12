'use strict';

describe('Service: UsuariosFactory', function () {

  // load the service's module
  beforeEach(module('polizasAngularAppApp'));

  // instantiate service
  var UsuariosFactory;
  beforeEach(inject(function (_UsuariosFactory_) {
    UsuariosFactory = _UsuariosFactory_;
  }));

  it('should do something', function () {
    expect(!!UsuariosFactory).toBe(true);
  });

});
