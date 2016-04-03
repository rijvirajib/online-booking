import {CHANGE_APPOINTMENT_PAGE} from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  page: 1
};

export default function appointmentFormAppState(state = initialState, action) {
	switch (action.type) {
		case CHANGE_APPOINTMENT_PAGE:
			return objectAssign({}, state, { page: action.page});

		default:
			return state;
	}
}
