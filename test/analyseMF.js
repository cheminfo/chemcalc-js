'use strict';

var analyseMF = require('..').analyseMF;

describe('analyseMF', function () {

    

    describe('check various MF', function () {
        it('ONC2H3N', function () {
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
        it('Ru', function () {
            var result = analyseMF('Ru');
            result.should.be.an.Object;
            result.mf.should.equal('Ru');
            result.mw.should.be.approximately(101.06494, 1e-3);
            result.em.should.be.approximately(101.90434, 1e-3);
            result.nominalMass.should.equal(102);
        });
        it('Cm', function () {
            var result = analyseMF('Cm');
            result.should.be.an.Object;
            result.mf.should.equal('Cm');
            result.mw.should.be.approximately(247.070354, 1e-3);
            result.em.should.be.approximately(247.070354, 1e-3);
            result.nominalMass.should.equal(247);
        });
        it('Tc', function () {
            var result = analyseMF('Tc');
            result.should.be.an.Object;
            result.mf.should.equal('Tc');
            result.mw.should.be.approximately(97.9072124, 1e-3);
            result.em.should.be.approximately(97.9072124, 1e-3);
            result.nominalMass.should.equal(98);
        });
    });
    

    describe('isotopomers', function () {
        var simpleMF = 'ONC2H3N';
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
