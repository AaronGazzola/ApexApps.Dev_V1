import {
	GET_BLOGS_REQUEST,
	GET_BLOGS_SUCCESS,
	GET_BLOGS_FAIL,
	GET_BLOGS_CLEAR,
	GET_BLOG_REQUEST,
	GET_BLOG_SUCCESS,
	GET_BLOG_FAIL,
	GET_BLOG_CLEAR,
	DELETE_BLOG_REQUEST,
	DELETE_BLOG_SUCCESS,
	DELETE_BLOG_FAIL,
	DELETE_BLOG_CLEAR,
	UPDATE_BLOG_REQUEST,
	UPDATE_BLOG_SUCCESS,
	UPDATE_BLOG_FAIL,
	UPDATE_BLOG_CLEAR,
	CREATE_BLOG_REQUEST,
	CREATE_BLOG_SUCCESS,
	CREATE_BLOG_FAIL,
	CREATE_BLOG_CLEAR,
	UPLOAD_IMAGE_REQUEST,
	UPLOAD_IMAGE_SUCCESS,
	UPLOAD_IMAGE_FAIL,
	UPLOAD_IMAGE_CLEAR
} from 'constants/blogConstants';

export const getBlogsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_BLOGS_REQUEST:
			return { loading: true };
		case GET_BLOGS_SUCCESS:
			return {
				loading: false,
				success: true,
				blogs: action.payload
			};
		case GET_BLOGS_FAIL:
			return { loading: false, error: action.payload };
		case GET_BLOGS_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};

export const getBlogReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_BLOG_REQUEST:
			return { loading: true };
		case GET_BLOG_SUCCESS:
			return {
				loading: false,
				success: true,
				blog: action.payload
			};
		case GET_BLOG_FAIL:
			return { loading: false, error: action.payload };
		case GET_BLOG_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};

export const deleteBlogReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_BLOG_REQUEST:
			return { loading: true };
		case DELETE_BLOG_SUCCESS:
			return {
				loading: false,
				success: action.payload
			};
		case DELETE_BLOG_FAIL:
			return { loading: false, error: action.payload };
		case DELETE_BLOG_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};

export const updateBlogReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_BLOG_REQUEST:
			return { loading: true };
		case UPDATE_BLOG_SUCCESS:
			return {
				loading: false,
				success: action.payload
			};
		case UPDATE_BLOG_FAIL:
			return { loading: false, error: action.payload };
		case UPDATE_BLOG_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};

export const createBlogReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_BLOG_REQUEST:
			return { loading: true };
		case CREATE_BLOG_SUCCESS:
			return {
				loading: false,
				success: action.payload
			};
		case CREATE_BLOG_FAIL:
			return { loading: false, error: action.payload };
		case CREATE_BLOG_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};

export const uploadImageReducer = (state = {}, action) => {
	switch (action.type) {
		case UPLOAD_IMAGE_REQUEST:
			return { loading: true };
		case UPLOAD_IMAGE_SUCCESS:
			return {
				loading: false,
				success: action.payload
			};
		case UPLOAD_IMAGE_FAIL:
			return { loading: false, error: action.payload };
		case UPLOAD_IMAGE_CLEAR:
			return { ...state, error: null, success: null };
		default:
			return state;
	}
};
