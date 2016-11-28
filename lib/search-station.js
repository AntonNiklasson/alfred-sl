const alfy = require('alfy');

module.exports = input => {
	alfy.fetch('sl.se/api/TypeAhead/Find/' + input)
		.then(response => {
			alfy.output(response.data
				.slice(0, 10)
				.filter(hit => hit.Type === 'station')
				.map(hit => ({
					title: hit.Name,
					arg: hit.SiteId
				})));
		});
};
