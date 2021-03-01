import express from 'express';
import { getBlogs, getBlog } from '../controllers/blogController.js';

const router = express.Router();

router.route('/').get(getBlogs);
router.route('/:slug').get(getBlog);

export default router;
