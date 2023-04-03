const { Claim } = require('./claim.class');
const createModel = require('../../models/claim.model');
const hooks = require('./claim.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/claim', new Claim(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('claim');

  service.hooks(hooks);
};