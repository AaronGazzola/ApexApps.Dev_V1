import moment from 'moment';

// set booking times
//  Format = 24hr, colon separated, local time
const times = [
	'7:00',
	'7:30',
	'8:00',
	'8:30',
	'9:00',
	'9:30',
	'13:00',
	'13:30',
	'14:00',
	'14:30',
	'15:00',
	'15:30',
	'18:00',
	'18:30',
	'19:00',
	'19:30',
	'20:00',
	'20:30'
];

// convert booking times to moment instances for tomorrow's date
const momentTimes = times.map(time =>
	moment().add(1, 'd').hour(time.split(':')[0]).minute(time.split(':')[1])
);

//set number of dates to populate
const datesToPopulate = 90;

// populate array of bookings from momentTimes
let bookings = [];
for (let i = 0; i <= datesToPopulate; i++) {
	momentTimes.forEach(time => {
		bookings.push({ timestamp: time.unix() });
		time.add(1, 'd');
	});
}

export { times, datesToPopulate, bookings };
