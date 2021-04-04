import mongoose from 'mongoose';
import crypto from 'crypto';

const clientSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a name']
	},
	email: {
		type: String,
		required: [true, 'Please add an email'],
		unique: true,
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			'Please add a valid email'
		]
	},
	phone: {
		type: String,
		required: true
	},
	pendingBooking: {
		description: {
			type: String,
			required: false
		},
		timestamp: {
			type: Number,
			required: false
		}
	},
	isVerified: {
		type: Boolean,
		default: false
	},
	bookings: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Booking'
		}
	],
	verifyClientToken: { type: String, select: false }
});

// Generate and hash verify token
clientSchema.methods.getVerifyToken = function () {
	// Generate token
	const token = crypto.randomBytes(20).toString('hex');
	// Hash token
	const hash = crypto.createHash('sha256').update(token).digest('hex');
	// add token to document

	this.verifyClientToken = hash;

	return token;
};

export default mongoose.model('Client', clientSchema);
