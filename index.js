const alfy = require('alfy');

alfy.fetch('sl.se/api/TypeAhead/Find/' + alfy.input)
	.then(response => {
		alfy.output(response.data
			.slice(0, 10)
			.filter(hit => hit.Type === 'station')
			.map(hit => ({
				title: hit.Name,
				arg: `http://sl.se/#/Realtime/${encodeURIComponent(hit.Name)}/${hit.SiteId}`
			})));
	});
