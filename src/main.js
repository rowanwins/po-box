var pattern = / *(?:p\.?\s*o\.?|(post|postal)\s+(office|))(\s+)?(?:box|[0-9]*)? *(number|num|no)? *\d+/igm;

function extractBoxNumber(string){
	var boxNumber = new RegExp(/\d+/, 'gmiu').exec(string);
	if (boxNumber)
	return boxNumber[0]
};

function extractBoxDesc(string){
	var boxDesc = new RegExp(/[a-z A-Z .]+/).exec(string);
	return boxDesc[0].trim()
};

export function containsPoBox(string){
	var regex = new RegExp(pattern);
	return regex.test(string)
};

export function extractPoBox(string){
	
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
};