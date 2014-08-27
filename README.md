chemcalc-js
===========

Use chemcalc in javascript !

Installation
-----------

npm install chemcalc

Usage
-----------

### In NodeJS
```javascript
var chemcalc = require('chemcalc').Chemcalc;
var result = chemcalc.analyseMF('CaSO4.1/2H2O');
```
### In the browser

#### By default
```javascript
var result = CI.Chemcalc.analyseMF('PhNH2.HCl');
```
#### Using an AMD loader
```javascript
require(['lib/chemcalc'], function(CI) { 
	var result = CI.Chemcalc.analyseMF('Ph(CO)C(CH3)3');
});
```
