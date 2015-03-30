'use strict';

describe('Service: DataTable', function () {

  // load the service's module
  beforeEach(module('polizasAngularAppApp'));

  // instantiate service
  var DataTable;
  beforeEach(inject(function (_DataTable_) {
    DataTable = _DataTable_;
  }));

  it('should do something', function () {
    expect(!!DataTable).toBe(true);
  });

});
