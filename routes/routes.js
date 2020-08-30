const uploader = require('../helpers/upload');
const passport = require('passport');
require('../helpers/passport.js')();
const Users = require('../modules/users/users_controller');

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.send("********");
  });

  // social auths
  app.post('/api/auth/facebook', passport.authorize('facebook-token', { session: false }), Users.fbAuth());

  //verify Identity 
  app.post('/api/verify/identity', Users.verifyIdentity());

  
};
