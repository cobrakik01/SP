'use strict';

describe('Service: AfianzadosService', function () {

  // load the service's module
  beforeEach(module('polizasAngularAppApp'));

  // instantiate service
  var AfianzadosService;
  beforeEach(inject(function (_AfianzadosService_) {
    AfianzadosService = _AfianzadosService_;
  }));

  it('should do something', function () {
    expect(!!AfianzadosService).toBe(true);
  });

});
