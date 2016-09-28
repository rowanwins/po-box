var test = require('tape');

var pobox = require(__dirname+ '/dist/pobox');


test('Upper case and at beginning of string', function (t) {

	var addressString = "PO BOX 123, Main St, City, Country"
	var doneAddress = pobox.extractPoBox(addressString);
	
	var returnedAddress = {
		containsPoBox: true,
		fullString: 'PO BOX 123',
		poBoxNumber: '123',
		poBoxDesc: 'PO BOX'
	}

	t.deepEqual(doneAddress, returnedAddress, 'matching object returned');

	var validAddress = pobox.containsPoBox(addressString);
	t.equal(validAddress, true, 'yep a match exists');

	t.end();

});

test('Lower case and in middle of string', function (t) {
	var addressString2 = "Main St, po box 123 , City, Country"
	var doneAddress2 = pobox.extractPoBox(addressString2);
	var returnedAddress2 = {
		containsPoBox: true,
		fullString: 'po box 123',
		poBoxNumber: '123',
		poBoxDesc: 'po box'
	}

	t.deepEqual(doneAddress2, returnedAddress2, 'matching object returned');


	var validAddress2 = pobox.containsPoBox(addressString2);
	t.equal(validAddress2, true, 'yep a match exists');

	t.end();

});

test('Full spelling', function (t) {
	var addressString2 = "Main St, Post Office Box 123 , City, Country"
	var doneAddress2 = pobox.extractPoBox(addressString2);
	var returnedAddress2 = {
		containsPoBox: true,
		fullString: 'Post Office Box 123',
		poBoxNumber: '123',
		poBoxDesc: 'Post Office Box'
	}

	t.deepEqual(doneAddress2, returnedAddress2, 'matching object returned');


	var validAddress2 = pobox.containsPoBox(addressString2);
	t.equal(validAddress2, true, 'yep a match exists');

	t.end();

});

test('Full spelling shortened', function (t) {
	var addressString2 = "Main St, Post Box 123 , City, Country"
	var doneAddress2 = pobox.extractPoBox(addressString2);
	var returnedAddress2 = {
		containsPoBox: true,
		fullString: 'Post Box 123',
		poBoxNumber: '123',
		poBoxDesc: 'Post Box'
	}

	t.deepEqual(doneAddress2, returnedAddress2, 'matching object returned');


	var validAddress2 = pobox.containsPoBox(addressString2);
	t.equal(validAddress2, true, 'yep a match exists');

	t.end();

});


test('no match test ', function (t) {
	var addressString2 = "Main St, City, Country"
	var doneAddress2 = pobox.extractPoBox(addressString2);
	var returnedAddress2 = {
		containsPoBox: false,
		fullString: null,
		poBoxNumber: null,
		poBoxDesc: null
	}

	t.deepEqual(doneAddress2, returnedAddress2, 'Could not find a match - returned object contains nulls');

	var validAddress2 = pobox.containsPoBox(addressString2);
	t.equal(validAddress2, false, 'returns false when running contains check');

	t.end();

});

test('Address with dots', function (t) {
	var addressString2 = "p.o. box 234 Main St, City, Country"
	
	var doneAddress2 = pobox.extractPoBox(addressString2);
	var returnedAddress2 = {
		containsPoBox: true,
		fullString: 'p.o. box 234',
		poBoxNumber: '234',
		poBoxDesc: 'p.o. box'
	}

	t.deepEqual(doneAddress2, returnedAddress2, 'matching object returned');

	var validAddress2 = pobox.containsPoBox(addressString2);
	t.equal(validAddress2, true, 'yep a match exists');

	t.end();

});