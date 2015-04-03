'use strict';

describe('Service: AutoridadesService', function () {

  // load the service's module
  beforeEach(module('polizasAngularAppApp'));

  // instantiate service
  var AutoridadesService;
  beforeEach(inject(function (_AutoridadesService_) {
    AutoridadesService = _AutoridadesService_;
  }));

  it('should do something', function () {
    expect(!!AutoridadesService).toBe(true);
  });

});
