import {
	LOG_IN_REQUEST,
	LOG_IN_SUCCESS,
	LOG_IN_FAIL,
	LOG_IN_CLEAR,
	LOG_OUT
} from 'constants/adminConstants';

export const loginReducer = (state = {}, action) => {
	switch (action.type) {
		case LOG_IN_REQUEST:
			return { loading: true };
		case LOG_IN_SUCCESS:
			return {
				loading: false,
				success: true,
				token: action.payload,
				isAuth: !!action.payload
			};
		case LOG_IN_FAIL:
			return { loading: false, error: action.payload };
		case LOG_IN_CLEAR:
			return { ...state, error: null, success: null };
		case LOG_OUT:
			return {};
		default:
			return state;
	}
};
