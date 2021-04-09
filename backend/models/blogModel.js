import mongoose from 'mongoose';
import slugify from 'slugify';
import sanitizeHtml from 'sanitize-html';

const blogSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	paragraphs: [
		{
			subtitle: {
				type: String
			},
			body: {
				type: String
			},
			imagePath: {
				type: String
			},
			imageLabel: {
				type: String
			}
		}
	],
	createdAt: {
		type: Date,
		default: Date.now
	},
	slug: {
		type: String,
		required: true,
		unique: true
	}
});

blogSchema.pre('validate', function () {
	if (this.title) {
		this.slug = slugify(this.title, { lower: true, strict: true });
	}
	this.paragraphs?.map(p => (p.body = sanitizeHtml(p.body)));
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
