import moment from 'moment';

// set booking times (GMT +!!)
const times = [7, 8, 9, 13, 14, 15, 18, 19, 20];
// set number of days to populate`
const datesToPopulate = 2;

// determine hourly increments from first booking;
const hourlyIncrements = times.map((time, i) => {
	if (i > 0) {
		return time - times[i - 1];
	} else {
		return 0;
	}
});
// determine time from last appointment to first
const resetIncrement = 24 - hourlyIncrements.reduce((a, b) => a + b, 0);

// determine UTC date and time of first booking
let booking = moment.utc(
	moment().add(1, 'd').hour(times[0]).minute(0).second(0)
);

// loop through dates to populate bookings
let bookings = [];
for (let i = 0; i < datesToPopulate; i++) {
	hourlyIncrements.forEach(increment => {
		booking.add(increment, 'h');
		bookings.push({
			timestamp: booking.unix(),
			hour: booking.hour(),
			date: booking.date(),
			month: booking.month()
		});
	});
	booking.add(resetIncrement, 'h');
}

export default bookings;
