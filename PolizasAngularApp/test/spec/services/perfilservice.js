'use strict';

describe('Service: PerfilService', function () {

  // load the service's module
  beforeEach(module('polizasAngularAppApp'));

  // instantiate service
  var PerfilService;
  beforeEach(inject(function (_PerfilService_) {
    PerfilService = _PerfilService_;
  }));

  it('should do something', function () {
    expect(!!PerfilService).toBe(true);
  });

});
