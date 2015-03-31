'use strict';

var CC = require('..');

describe('getInfo', function () {
    var info = CC.getInfo();
    it('should return information about elements', function () {
        var elements = info.elements;
        elements.should.be.an.Array;
        var hasCarbon, hasFermium;
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            if (el.atomicNumber === 6) {
                hasCarbon = true;
                el.should.have.properties({
                    symbol: 'C',
                    name: 'Carbon'
                });
                el.isotopes.should.be.an.Array;
            } else if (el.atomicNumber === 100) {
                hasFermium = true;
                el.mass.should.equal(0);
                el.isotopes.should.have.length(1);
                el.isotopes[0].percentage.should.equal(0);
            }
        }
        hasCarbon.should.be.true;
        hasFermium.should.be.true;
    });

    it('should return information about groups', function () {
        var groups = info.groups;
        groups.should.be.an.Array;
        var hasValine, hasFmoc, hasTritium;
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            if (group.symbol === 'T') {
                hasTritium = true;
                group.mf.should.equal('[3H]');
                group.mass.should.be.approximately(3.016, 1e-3);
                group.name.should.equal('Tritium');
            } else if (group.symbol === 'Val') {
                hasValine = true;
                group.mf.should.equal('C5H9NO');
            } else if (group.symbol === 'Fmoc') {
                hasFmoc = true;
            }
        }
        hasValine.should.be.true;
        hasFmoc.should.be.true;
        hasTritium.should.be.true;
    });

});
