const alfy = require('alfy');
const isNumber = require('is-number');
const listTrafficTypes = require('./lib/list-traffictypes');
const searchStation = require('./lib/search-station');

const inputParts = alfy.input.split(' ');

if (inputParts.length === 2 && isNumber(inputParts[0])) {
	// Station and traffic type is selected.
	console.log('Should show current data.');
} else if (inputParts.length === 1 && isNumber(inputParts[0])) {
	// Station already selected, show traffic types.
	listTrafficTypes(alfy.input);
} else {
	// Search for a station.
	searchStation(alfy.input);
}
