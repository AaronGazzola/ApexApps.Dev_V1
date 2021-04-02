import axios from 'axios';
import {
	LOG_IN_REQUEST,
	LOG_IN_SUCCESS,
	LOG_IN_FAIL,
	LOG_OUT
} from 'constants/adminConstants';

export const loginAction = password => async dispatch => {
	try {
		dispatch({
			type: LOG_IN_REQUEST
		});
		const { data } = await axios.post(`/api/v1/admin/`, { password });

		dispatch({ type: LOG_IN_SUCCESS, payload: data.token });
		localStorage.setItem('admin', JSON.stringify({ token: data.token }));
	} catch (error) {
		dispatch({
			type: LOG_IN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const logoutAction = () => dispatch => {
	localStorage.removeItem('admin');
	dispatch({ type: LOG_OUT });
};
