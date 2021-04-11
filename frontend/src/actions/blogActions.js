import axios from 'axios';
import {
	GET_BLOGS_REQUEST,
	GET_BLOGS_SUCCESS,
	GET_BLOGS_FAIL,
	GET_BLOG_BY_SLUG_REQUEST,
	GET_BLOG_BY_SLUG_SUCCESS,
	GET_BLOG_BY_SLUG_FAIL,
	GET_BLOG_BY_ID_REQUEST,
	GET_BLOG_BY_ID_SUCCESS,
	GET_BLOG_BY_ID_FAIL,
	DELETE_BLOG_REQUEST,
	DELETE_BLOG_SUCCESS,
	DELETE_BLOG_FAIL,
	CREATE_BLOG_REQUEST,
	CREATE_BLOG_SUCCESS,
	CREATE_BLOG_FAIL,
	UPDATE_BLOG_REQUEST,
	UPDATE_BLOG_SUCCESS,
	UPDATE_BLOG_FAIL,
	UPLOAD_IMAGE_REQUEST,
	UPLOAD_IMAGE_SUCCESS,
	UPLOAD_IMAGE_FAIL
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

export const getBlogBySlugAction = slug => async dispatch => {
	try {
		dispatch({
			type: GET_BLOG_BY_SLUG_REQUEST
		});
		const { data } = await axios.get(`/api/v1/blogs/slug/${slug}`);

		dispatch({ type: GET_BLOG_BY_SLUG_SUCCESS, payload: data.blog });
	} catch (error) {
		dispatch({
			type: GET_BLOG_BY_SLUG_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};
export const getBlogByIdAction = id => async (dispatch, getState) => {
	try {
		dispatch({
			type: GET_BLOG_BY_ID_REQUEST
		});

		const {
			login: { token }
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		};
		const { data } = await axios.get(`/api/v1/blogs/id/${id}`, config);

		dispatch({ type: GET_BLOG_BY_ID_SUCCESS, payload: data.blog });
	} catch (error) {
		dispatch({
			type: GET_BLOG_BY_ID_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const deleteBlogAction = id => async (dispatch, getState) => {
	try {
		dispatch({
			type: DELETE_BLOG_REQUEST
		});

		const {
			login: { token }
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		};

		await axios.delete(`/api/v1/blogs/delete/${id}`, config);

		dispatch({ type: DELETE_BLOG_SUCCESS, payload: 'Blog deleted' });
	} catch (error) {
		dispatch({
			type: DELETE_BLOG_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const updateBlogAction = (blog, id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: UPDATE_BLOG_REQUEST
		});

		const {
			login: { token }
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		};

		await axios.put(`/api/v1/blogs/${id}`, blog, config);

		dispatch({ type: UPDATE_BLOG_SUCCESS, payload: 'Blog updated' });
	} catch (error) {
		dispatch({
			type: UPDATE_BLOG_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const createBlogAction = blog => async (dispatch, getState) => {
	try {
		dispatch({
			type: CREATE_BLOG_REQUEST
		});

		const {
			login: { token }
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		};

		await axios.post(`/api/v1/blogs/`, blog, config);

		dispatch({ type: CREATE_BLOG_SUCCESS, payload: 'Blog created' });
	} catch (error) {
		dispatch({
			type: CREATE_BLOG_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const uploadImageAction = file => async (dispatch, getState) => {
	try {
		dispatch({
			type: UPLOAD_IMAGE_REQUEST
		});

		const {
			login: { token }
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		};

		const formData = new FormData();
		formData.append('image', file);

		const { data } = await axios.post(`/api/v1/blogs/image`, formData, config);

		dispatch({
			type: UPLOAD_IMAGE_SUCCESS,
			payload: 'Image uploaded',
			image: data.image
		});
	} catch (error) {
		dispatch({
			type: UPLOAD_IMAGE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};
