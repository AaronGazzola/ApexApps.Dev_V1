import mongoose from 'mongoose';
import slugify from 'slugify';

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
			content: {
				type: String
			},
			image: {
				path: {
					type: String
				},
				label: {
					type: String
				}
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
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
