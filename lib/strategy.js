var util = require('util');
var passport = require('passport-strategy');
const crypto = require('crypto');

function Strategy(options) {    
    this.name = 'sf-signed-post-request';
    this._client_secret = options.secret;
}

util.inherits(Strategy, passport.Strategy);
Strategy.prototype.authenticate = function(req, options) {

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
      return this.success(sr.user, sr)
    }
    return this.fail({message: 'Unauthorized'}, 401);
}

module.exports = Strategy;