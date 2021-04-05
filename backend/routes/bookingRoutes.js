import express from 'express';
import {
	getAvailableBookings,
	cancelBooking,
	listBookings,
	setBookingAvailability,
	submitBooking,
	verifyClient,
	listClients
} from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, listBookings);
router.route('/clients').get(listClients);
router.route('/submit/:id').post(submitBooking);
router.route('/verifyclient/:token').post(verifyClient);
router.route('/calendar/:start/:end').get(getAvailableBookings);
router.route('/cancel/:isClient/:id/').post(cancelBooking);
router.route('/available/:from/:to').post(protect, setBookingAvailability);

export default router;
