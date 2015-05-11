'use strict';

describe('Service: IngresosService', function () {

  // load the service's module
  beforeEach(module('polizasAngularAppApp'));

  // instantiate service
  var IngresosService;
  beforeEach(inject(function (_IngresosService_) {
    IngresosService = _IngresosService_;
  }));

  it('should do something', function () {
    expect(!!IngresosService).toBe(true);
  });

});
