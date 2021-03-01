import axios from 'axios';
import {
	GET_BLOGS_REQUEST,
	GET_BLOGS_SUCCESS,
	GET_BLOGS_FAIL,
	GET_BLOG_REQUEST,
	GET_BLOG_SUCCESS,
	GET_BLOG_FAIL
} from 'constants/blogConstants';

export const getBlogsAction = () => async dispatch => {
	try {
		dispatch({
			type: GET_BLOGS_REQUEST
		});
		const { data } = await axios.get(`/api/v1/blogs/`);

		dispatch({ type: GET_BLOGS_SUCCESS, payload: data.blogs });
	} catch (error) {
		dispatch({
			type: GET_BLOGS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const getBlogAction = slug => async dispatch => {
	try {
		dispatch({
			type: GET_BLOG_REQUEST
		});
		const { data } = await axios.get(`/api/v1/blogs/${slug}`);

		dispatch({ type: GET_BLOG_SUCCESS, payload: data.blog });
	} catch (error) {
		dispatch({
			type: GET_BLOG_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};
