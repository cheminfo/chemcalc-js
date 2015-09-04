'use strict';

var analyseMF = require('..').analyseMF;

describe('analyseMF', function () {

    var simpleMF = 'ONC2H3N';

    it('should work with simple MF', function () {
        var result = analyseMF('ONC2H3N');
        result.should.be.an.Object;
        result.mf.should.equal('C2H3N2O');
        result.mw.should.be.approximately(71.058, 1e-3);
        result.em.should.be.approximately(71.025, 1e-3);
        result.nominalMass.should.equal(71);
        result.parts.should.be.an.Array().with.length(1);
        result.parts[0].should.have.properties(['mf', 'mw', 'em', 'unsaturation', 'msem', 'ea']);
        result.parts[0].unsaturation.should.equal(2.5);
    });

    describe('isotopomers', function () {

        it('should work with array (backwards compatibility)', function () {
            var result = analyseMF(simpleMF, {isotopomers: 'array'});
            result.spectrum.should.be.an.Array().with.lengthOf(2);
            result.spectrum[0].should.be.an.Array().with.lengthOf(11);
        });

        it('should work with xy', function () {
            var result = analyseMF(simpleMF, {isotopomers: 'xy'});
            result.xy.should.be.a.String;
            result.xy.should.match(/(\d+\.\d+, \d+\.?\d*\r\n)+/);
        });

        it('should work with jcamp', function () {
            var result = analyseMF(simpleMF, {isotopomers: 'jcamp'});
            result.jcamp.should.be.a.String;
            result.jcamp.should.startWith('##TITLE= C2H3N2O');
        });

        it('should work with arrayXYXY', function () {
            var result = analyseMF(simpleMF, {isotopomers: 'arrayXYXY'});
            result.arrayXYXY.should.be.an.Array().with.lengthOf(11);
            result.arrayXYXY[0].should.be.an.Array().with.lengthOf(2);
        });

        it('should work with arrayXXYY', function () {
            var result = analyseMF(simpleMF, {isotopomers: 'arrayXXYY'});
            result.arrayXXYY.should.be.an.Array().with.lengthOf(2);
            result.arrayXXYY[0].should.be.an.Array().with.lengthOf(11);
            result.arrayXXYY[1].should.be.an.Array().with.lengthOf(11);
            result.arrayXXYY[1][0].should.equal(1);
        });

        it('should work with comma-separated values', function () {
            var result = analyseMF(simpleMF, {isotopomers: 'xy,jcamp,arrayXXYY'});
            result.should.have.properties(['xy', 'jcamp', 'arrayXXYY']);
        })

    });

});
