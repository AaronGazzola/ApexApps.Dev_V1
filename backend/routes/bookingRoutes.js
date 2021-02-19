import express from 'express';
import {
	getAvailableBookings,
	confirmBooking,
	cancelBooking
} from '../controllers/bookingController.js';

const router = express.Router();

router.route('/calendar/:timestamp').get(getAvailableBookings);
router.route('/confirm/:id').post(confirmBooking);
router.route('/cancel/:id').post(cancelBooking);

export default router;
