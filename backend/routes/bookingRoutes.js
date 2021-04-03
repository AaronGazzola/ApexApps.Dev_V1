import express from 'express';
import {
	getAvailableBookings,
	confirmBooking,
	cancelBooking,
	listBookings
} from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, listBookings);
router.route('/calendar/:start/:end').get(getAvailableBookings);
router.route('/confirm/:id').post(confirmBooking);
router.route('/cancel/:id/').post(cancelBooking);

export default router;
