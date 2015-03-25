'use strict';

describe('Service: AfianzadoraService', function () {

  // load the service's module
  beforeEach(module('polizasAngularAppApp'));

  // instantiate service
  var AfianzadoraService;
  beforeEach(inject(function (_AfianzadoraService_) {
    AfianzadoraService = _AfianzadoraService_;
  }));

  it('should do something', function () {
    expect(!!AfianzadoraService).toBe(true);
  });

});
