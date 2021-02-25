import {
	GET_BLOGS_REQUEST,
	GET_BLOGS_SUCCESS,
	GET_BLOGS_FAIL,
	GET_BLOGS_CLEAR
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
