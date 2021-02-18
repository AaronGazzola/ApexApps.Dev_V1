import express from 'express';
import { getAvailableBookings } from '../controllers/bookingController.js';

const router = express.Router();

router.route('/:timestamp').get(getAvailableBookings);

export default router;
