'use strict';

describe('Service: cbk', function () {

  // load the service's module
  beforeEach(module('polizasAngularAppApp'));

  // instantiate service
  var cbk;
  beforeEach(inject(function (_cbk_) {
    cbk = _cbk_;
  }));

  it('should do something', function () {
    expect(!!cbk).toBe(true);
  });

});
