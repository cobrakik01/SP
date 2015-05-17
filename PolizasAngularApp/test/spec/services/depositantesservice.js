'use strict';

describe('Service: DepositantesService', function () {

  // load the service's module
  beforeEach(module('polizasAngularAppApp'));

  // instantiate service
  var DepositantesService;
  beforeEach(inject(function (_DepositantesService_) {
    DepositantesService = _DepositantesService_;
  }));

  it('should do something', function () {
    expect(!!DepositantesService).toBe(true);
  });

});
