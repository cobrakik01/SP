'use strict';

describe('Service: EgresosService', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var EgresosService;
  beforeEach(inject(function (_EgresosService_) {
    EgresosService = _EgresosService_;
  }));

  it('should do something', function () {
    expect(!!EgresosService).toBe(true);
  });

});
