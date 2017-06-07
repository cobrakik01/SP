'use strict';

describe('Service: MinisteriosService', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var MinisteriosService;
  beforeEach(inject(function (_Ministerios_Service) {
    MinisteriosService = _Ministerios_Service;
  }));

  it('should do something', function () {
    expect(!!MinisteriosService).toBe(true);
  });

});
