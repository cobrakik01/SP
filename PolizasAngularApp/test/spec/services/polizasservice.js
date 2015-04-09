'use strict';

describe('Service: PolizasService', function () {

  // load the service's module
  beforeEach(module('polizasAngularAppApp'));

  // instantiate service
  var PolizasService;
  beforeEach(inject(function (_PolizasService_) {
    PolizasService = _PolizasService_;
  }));

  it('should do something', function () {
    expect(!!PolizasService).toBe(true);
  });

});
