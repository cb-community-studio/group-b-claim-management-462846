const assert = require('assert');
const app = require('../../src/app');

describe('\'tracking\' service', () => {
  it('registered the service', () => {
    const service = app.service('tracking');

    assert.ok(service, 'Registered the service (tracking)');
  });
});
