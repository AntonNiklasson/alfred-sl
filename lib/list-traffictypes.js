const alfy = require('alfy');

const TRAFFICTYPES = {
	BusGroups: 'Bus',
	TrainGroups: 'Train',
	MetroGroups: 'Metro'
};

module.exports = input => {
	alfy.fetch('http://sl.se/api/sv/RealTime/GetDepartures/' + input)
	.then(response => {
		const items = Object.keys(TRAFFICTYPES).map(type => {
			const trafficTypeData = response.data[type];
			console.log(trafficTypeData[0]);
			return {
				title: TRAFFICTYPES[type]
			};
		});

		alfy.output(items);
	});
};
