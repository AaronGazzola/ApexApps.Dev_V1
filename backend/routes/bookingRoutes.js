import express from 'express';
import {
	getAvailableBookings,
	confirmBooking,
	adminCancelBooking,
	clientCancelBooking,
	listBookings,
	setBookingAvailability
} from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, listBookings);
router.route('/calendar/:start/:end').get(getAvailableBookings);
router.route('/confirm/:id').post(confirmBooking);
router.route('/cancel/admin/:id/').post(protect, adminCancelBooking);
router.route('/cancel/client/:id/').post(clientCancelBooking);
router.route('/available/:from/:to').post(protect, setBookingAvailability);

export default router;
