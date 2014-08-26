chemcalc-js
===========

Use chemcalc in javascript !

Installation
-----------

npm install chemcalc

Usage
-----------

### In NodeJS

var chemcalc = require('chemcalc').ChemCalc;
var result = chemcalc.analyseMF('CaSO4.1/2H2O');

### In the browser

#### By default
var result = CI.Chemcalc.analyseMF('PhNH2.HCl');

#### Using an AMD loader
require(['lib/chemcalc'], function(CI) { 
	var result = CI.Chemcalc.analyseMF('Ph(CO)C(CH3)3');
});