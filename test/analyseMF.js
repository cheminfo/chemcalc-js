'use strict';

var CC = require('..');

describe('analyseMF', function () {

    it('should work with simple MF', function () {
        var result = CC.analyseMF('ONC2H3N');
        result.should.be.an.Object;
        result.mf.should.equal('C2H3N2O');
        result.mw.should.be.approximately(71.058, 1e-3);
        result.em.should.be.approximately(71.025, 1e-3);
        result.nominalMass.should.equal(71);
        result.parts.should.be.an.Array.with.length(1);
        result.parts[0].should.have.properties(['mf', 'mw', 'em', 'unsaturation', 'msem', 'ea']);
        result.parts[0].unsaturation.should.equal(2.5);
    });

});
