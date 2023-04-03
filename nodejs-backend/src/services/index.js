const users = require("./users/users.service.js");
const claim = require("./claim/claim.service.js");
const policy = require("./policy/policy.service.js");
const tracking = require("./tracking/tracking.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(claim);
  app.configure(policy);
  app.configure(tracking);
  // ~cb-add-configure-service-name~
};
