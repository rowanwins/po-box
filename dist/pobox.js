'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// var pattern = / *((#\d+)|((box|bin)[-. \/\\]?\d+)|(.*p[ \.]??(o|0)[-. \/\\]? *-?((box|bin)|b|(num)?\d+))|(p(ost)? *(o(ff(ice)?)?)? ((box|bin)|b)? *\d+)|(p *-?\/?(o)? *-?box)|post office box|((box|bin)|b) *(number|num)? *\d+|(num|number) *\d+)\d/igm;
var pattern = / *(?:p\.?\s*o\.?|(post|postal)\s+(office|))(\s+)?(?:box|[0-9]*)? *(number|num)? *\d+|(num|number) *\d+\d/igm;


function extractBoxNumber(string){
	var boxNumber = new RegExp(/\d+/, 'gmiu').exec(string);
	if (boxNumber)
	return boxNumber[0]
}

function extractBoxDesc(string){
	var boxDesc = new RegExp(/[a-z A-Z .]+/).exec(string);
	return boxDesc[0].trim()
}

function containsPoBox(string){
	var regex = new RegExp(pattern);
	return regex.test(string)
}

function extractPoBox(string){
	
	var outputPoBox = {
		containsPoBox: false,
		fullString: null,
		poBoxNumber: null,
		poBoxDesc: null
	}

	var match = string.match(pattern);
	if (match !== null){
		outputPoBox.containsPoBox = true;
		outputPoBox.fullString = match[0].trim();
		outputPoBox.poBoxNumber = extractBoxNumber(match[0].trim())
		outputPoBox.poBoxDesc = extractBoxDesc(match[0].trim())
	}
	return outputPoBox
}

exports.containsPoBox = containsPoBox;
exports.extractPoBox = extractPoBox;