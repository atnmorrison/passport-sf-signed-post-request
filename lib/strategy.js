var util = require('util');
var passport = require('passport-strategy');
const crypto = require('crypto');

function Strategy(secret) {    
    this.name = 'sf-signed-post-request';
    this._client_secret = secret;
}

util.inherits(Strategy, passport.Strategy);

Strategy.prototype.authenticate = function(req) {
    
    var self = this; 
  
    let signed_req = req.body.signed_request;
    if(signed_req) {

      let signedContext = signed_req.split('.')[0];
      let base64Context = signed_req.split('.')[1];
      let hmac = crypto.createHmac('sha256', this._client_secret);
      let data = hmac.update(base64Context);
      let gen_hmac = data.digest('base64');

      if(signedContext !== gen_hmac){
        return this.fail({message: 'Unauthorized'}, 401);
      }

      let buff = Buffer.from(base64Context, 'base64');
      let jsonString = buff.toString('utf-8');
      let sr = JSON.parse(jsonString);
      
      req.session.sr = sr; 
      req.session.recordId = sr.context.environment.parameters.recordId;
      req.session.authToken = sr.client.oauthToken;

      return this.success(sr.context.user);

    } else {

      if(req.session.passport.user && req.session.passport.isAuthenticated) {
        return this.success(req.session.passport.user);
      }

    }

    return this.fail({message: 'Unauthorized'}, 401);
}

module.exports = Strategy;