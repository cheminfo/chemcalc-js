# chemcalc-js

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![npm download][download-image]][download-url]

Library allowing to manipulate and find molecular formula.  
This library contains 2 main functions: <b>analyzeMF</b> and <b>mfFromMonoisotopicMass</b>.  
In all the molecular formula you are allowed to use groups like Phe, Ala, Gly, Ph, ...

## Installation

`npm install chemcalc`  
OR  
`bower install chemcalc`  
OR just include in a script tag

## Usage

### In NodeJS
```js
var chemcalc = require('chemcalc');
var result = chemcalc.analyseMF('CaSO4.1/2H2O');
```
### In the browser

#### By default
```js
var result = CI.Chemcalc.analyseMF('PhNH2.HCl');
```
#### Using an AMD loader
```js
require(['lib/chemcalc'], function(Chemcalc) { 
	var result = Chemcalc.analyseMF('Ph(CO)C(CH3)3');
});
```

## Documentation

### General

#### getInfo()

Get information about elements, isotopes and special groups.  

### Molecular formula

#### analyseMF(mf, [options])

Get various information about a molecular formula as an object.  
From a molecular formula and different options, this function will return an object that may contain
the monoisotopic mass, molecular weight, element analysis, isotopic distribution (as a JDX of XY).  
Molecular formula can be entered using groups, parenthesis, isotopes, combinatorial elements, enriched isotopic elements, ...

__Arguments__

* `mf` - string with the molecular formula to analyse

__Options__

* `isotopomers` - Should we calculate the isotompers, possible values are xy, jcamp, array or any combination (default: false). The use of "array" allows to get back a javascript array for further processing.
* `resolution` - Specify the resolution to calculate the information (default: 0.001)
* `threshold` - Intensity cutoff (default: 1e-5)
* `gaussianWidth` - Define the number of point (default: 0). A good value is 10 which means that the width at half the height will be 10 points.
* `gaussianResolution` - Define resolution that corresponds the width at half-height (default: resolution * gaussianWidth).
* `joiningAlgorithm` - May take 2 values: "center" (center of mass) or "main" (keep the main peak) (default: main)
* `typedResult` - The result field will be typed like "mf" "jcamp" ... so instead of having "mf":"C10H12" the json will contain "mf":{type:"mf",value:"C10H12"} (default: false)

__Examples__

`Chemcalc.analyzeMF("CH3CH2Cl")` Retrieve a JSON containing the information about all the parts of this molecular formula. In this case there is only one part.  
`Chemcalc.analyzeMF("CH3CH2Cl",{isotopomers:"xy,jcamp",reolustion:0.0001})` Retrieve a JSON containing the information for a molecular formula with a resolution of 0.0001 and calculate also the isotopomers as a jcamp and xy.  
`Chemcalc.analyzeMF("RuClH(CO)(PPh3)3")` MF containing groups (like "Ph") and parenthesis.  
`Chemcalc.analyzeMF("CuSO4.5H2O")` MF containing many parts.  
`Chemcalc.analyzeMF("{Ph,Me}Me")` MF containing a mixture of groups (like in combinatorial chemistry), ie 0.5PhMe+0.5MeMe.  
`Chemcalc.analyzeMF("HAla(H-1Ph)OH")` MF containing a negative atom count. Funny way to represent the phenyl alanine but very practical to describe peptide side-chain modification.  
`Chemcalc.analyzeMF("C{50,50}10C10")` MF containing atoms with non natural isotopic ratio. ie 10 atoms of enriched C (50% 12C and 50% 13C) and 10 natural abundance carbons.  
`Chemcalc.analyzeMF("HAla10OH+.HAla10OH++.HAla10OH+++")` MF containing many parts and charges. ie a mixure of mono, di and tri- charged decapeptide, perfect for mass spectra simulation.  

#### mfFromMonoisotopicMass(mass, [options])

Find molecular formulas from a monoisotopic mass.  
This general method allow to retrieve the possible molecular formula based on a monoisotopic mass and a range of atoms or groups. Various options may be specified.  
This method is well optimized and can provide possible molecular formula even with huge ranges.  
It also allows to provide groups of atoms. For example you may allow a possible sequence of amino acids: H2OAla0-20Arg0-20Asn0-20Asp0-20Cys0-20Gln0-20Glu0-20Gly0-20His0-20Ile0-20Leu0-20Lys0-20Met0-20Phe0-20Pro0-20Ser0-20Val0-20Thr0-20Trp0-20Tyr0-20.

__Arguments__

* `mass` - Target monoisotopic mass

__Options__

* `mfRange` - Molecular formula range like for example: 'C1-30H1-60' (default: C0-20H0-40N0-5O0-8F0-3Cl0-3Br0-1). The range may also include groups or non natural isotopic ratio.
* `minUnsaturation` - Minimal number of unsaturation (default: 0)
* `maxUnsaturation` - Maximal number of unsaturation (default: 50)
* `integerUnsaturation` - Integer number of unsaturation (default: true)
* `useUnsaturation` - Should we use unsaturation as a filter if possible (default: true)
* `numberOfResultsOnly` - Returns only the number of results found (default: false)
* `massRange` - Range of mass to analyze (default: 0.5)
* `maxNumberRows` - Maximum number of results (rows) to retrieve (default: 1000)
* `typedResult` - The result field will be typed like "mf" "jcamp" ... so instead of having "mf":"C10H12" the json will contain "mf":{type:"mf",value:"C10H12"}

__Examples__

`Chemcalc.mfFromMonoisotopicMass(397.17,{'mfRange':'C1-30F0-10H1-60N0-10O0-10'})` Retrieve all the molecular formula close to 397.17 and within a range of C1-30F0-10H1-60N0-10O0-10. The other options will be used by default. Only integer unsaturation from 0 to 50 and a massRange of +/- 0.5.  
`Chemcalc.mfFromMonoisotopicMass(1000,{'mfRange':'H2OAla0-20Arg0-20Asn0-20Asp0-20Cys0-20Gln0-20Glu0-20Gly0-20His0-20Ile0-20Leu0-20Lys0-20Met0-20Phe0-20Pro0-20Ser0-20Val0-20Thr0-20Trp0-20Tyr0-20'})` Find a peptide with monoisotopic mass close to 1000. You should note the H2O that is added in order to add the H on the N-terminal and OH on the C-terminal. All the groups like Ala, Gly, Thr, etc. are diradicals.

### Peptides

#### convertAASequence(sequence)

Returns a peptidic sequence from a PDB or one letter code to the internal molecular formula format

__Arguments__

* `sequence` - string with the amino acids sequence

#### chargePeptide(mf)

Add a positive charge on Arg, His and Lys

__Arguments__

* `mf` - string with a molecular formula to charge

#### generatePeptideFragments(mf, [options])

Generate [peptide fragmentation](http://en.wikipedia.org/wiki/Peptide_sequence_tag).  
Returns an array of molecular formulas with the different fragments. 

__Arguments__

* `mf` - string with the molecular formula
* `options` - object with requested fragments. Default: `{a:false, b:true, c:false, x:false, y:true, z:false, i:false}`

## Development

To build the project, run `gulp build:min`
To test the build, run `npm test`

## License

  [BSD](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/chemcalc.svg?style=flat-square
[npm-url]: https://npmjs.org/package/chemcalc
[travis-image]: https://img.shields.io/travis/cheminfo/chemcalc/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo/chemcalc
[download-image]: https://img.shields.io/npm/dm/chemcalc.svg?style=flat-square
[download-url]: https://npmjs.org/package/chemcalc
