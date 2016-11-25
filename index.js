const alfy = require('alfy');

alfy.fetch('sl.se/api/TypeAhead/Find/' + alfy.input)
	.then(response => {
		const items = response.data
			.slice(0, 10)
			.filter(hit => {
				return hit.Type === 'station';
			})
			.map(hit => {
				return {
					title: hit.Name,
					subtitle: hit.Type,
					arg: `http://sl.se/#/Realtime/${encodeURIComponent(hit.Name)}/${hit.SiteId}`
				};
			});

		alfy.output(items);
	});
