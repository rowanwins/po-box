# PO-BOX

This simple tool for checking for the presence of, and extracting PO BOX details from an address string.

## Install
```
npm install po-box
```

## Usage
pobox provides 2 methods

`extractPoBox(addressString)` returns an object containing various information 

````
var pobox = require('po-box');
var addressString = "PO BOX 123, Main St, City, Country"
pobox.extractPoBox(addressString);
// returns {
//    containsPoBox: true,
//    fullString: 'PO BOX 123',
//    poBoxNumber: '123',
//    poBoxDesc: 'PO BOX'
// }
````

`containsPoBox(addressString)` simply returns true or false

````
var pobox = require('po-box');
var addressString = "PO BOX 123, Main St, City, Country"
pobox.containsPoBox(addressString);
// returns true
````

## Matching Information
This module uses a regular expression to determine the presence of PO Box information. It looks for a range of common variations including upper case vs lower case, use of acroynms vs full spelling, at the start of the string vs in the middle etc
````
// Will return a match
- p.o. BOX 234 Main St, City, Country
- P.O. BOX 234 Main St, City, Country
- Main St, P.O. BOX 234, City, Country
- post office BOX 234 Main St, City, Country
- PO BOX 234 Main St, City, Country
- po box 234 Main St, City, Country
- po Box 234, 453 Main St, City, Country
- Postal Office BOX 234, Main St, City, Country
- POST BOX 234, Main St, City, Country
- POST BOX NO 234, Main St, City, Country
- POSTAL BOX 234, Main St, City, Country
- PO 234, 345 Main St, City, Country

// Won't return a match
- 345 Box St, Main St, City, Country
- 345 Po St, Main St, City, Country
- POSTAL NOTHING 234 Main St, City, Country
- p.o. BOX ABC, Main St, City, Country

````