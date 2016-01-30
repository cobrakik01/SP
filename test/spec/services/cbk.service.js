'use strict';

describe('Service: cbk.service', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var cbk.service;
  beforeEach(inject(function (_cbk.service_) {
    cbk.service = _cbk.service_;
  }));

  it('should do something', function () {
    expect(!!cbk.service).toBe(true);
  });

});
