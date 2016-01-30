'use strict';

describe('Service: datatable.service', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var datatable.service;
  beforeEach(inject(function (_datatable.service_) {
    datatable.service = _datatable.service_;
  }));

  it('should do something', function () {
    expect(!!datatable.service).toBe(true);
  });

});
