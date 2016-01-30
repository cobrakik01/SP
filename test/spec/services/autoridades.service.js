'use strict';

describe('Service: autoridades.service', function () {

  // load the service's module
  beforeEach(module('sistemaPolizasPgApp'));

  // instantiate service
  var autoridades.service;
  beforeEach(inject(function (_autoridades.service_) {
    autoridades.service = _autoridades.service_;
  }));

  it('should do something', function () {
    expect(!!autoridades.service).toBe(true);
  });

});
