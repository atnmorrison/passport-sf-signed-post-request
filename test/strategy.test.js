const { expect } = require('chai');
const chai = require('chai');
var Strategy = require('../lib/strategy');

describe('Strategy', function(){

    var strategy = new Strategy({secret: 'test'});

    it('should be named sf-signed-post-request', function(){
        expect(strategy.name).to.equal('sf-signed-post-request');
    });

});
