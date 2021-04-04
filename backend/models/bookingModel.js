import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
	timestamp: {
		type: Number,
		requried: true
	},
	isBooked: {
		type: Boolean,
		default: false
	},
	description: {
		type: String,
		required: false
	},
	client: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
		ref: 'Client'
	},
	isCanceled: {
		type: Boolean,
		default: false
	},
	isAvailable: {
		type: Boolean,
		default: true
	}
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
