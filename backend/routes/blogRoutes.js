import express from 'express';
import {
	getBlogs,
	getBlog,
	deleteBlog,
	createBlog,
	updateBlog,
	uploadImage
} from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getBlogs).post(protect, createBlog);
router.route('/delete/:id').delete(protect, deleteBlog);
router.route('/image').post(protect, uploadImage);
router.route('/:slug').get(getBlog);
router.route('/:id').put(protect, updateBlog);

export default router;
