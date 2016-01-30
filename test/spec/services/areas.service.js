'use strict';

describe('Service: areas.service', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var areas.service;
  beforeEach(inject(function (_areas.service_) {
    areas.service = _areas.service_;
  }));

  it('should do something', function () {
    expect(!!areas.service).toBe(true);
  });

});
