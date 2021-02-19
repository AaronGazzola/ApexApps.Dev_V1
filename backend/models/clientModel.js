import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	name: [
		{
			type: String,
			required: true
		}
	],
	phone: [
		{
			type: String,
			required: true
		}
	],
	bookings: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Booking'
		}
	]
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
