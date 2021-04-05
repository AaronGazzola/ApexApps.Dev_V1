import express from 'express';
import {
	getBlogs,
	getBlog,
	deleteBlog
} from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getBlogs);
router.route('/delete/:id').delete(protect, deleteBlog);
router.route('/:slug').get(getBlog);

export default router;
