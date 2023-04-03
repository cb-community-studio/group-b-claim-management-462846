const { Tracking } = require('./tracking.class');
const createModel = require('../../models/tracking.model');
const hooks = require('./tracking.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tracking', new Tracking(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tracking');

  service.hooks(hooks);
};