import {
  CHANGE_APPOINTMENT_PAGE,
  GET_AVAILABLE_TIMES,
  SELECT_COMPANY
} from '../constants/ActionTypes';
import objectAssign from 'object-assign';
import availableTimes from '../components/fakeAppointments.json';
import _ from 'lodash';

const initialState = {
  page: 1,
  companyName: '',
  availableTimes: []
};

export default function appointmentFormAppState(state = initialState, action) {
	switch (action.type) {
		case CHANGE_APPOINTMENT_PAGE:
			return objectAssign({}, state, { page: action.page});
    case SELECT_COMPANY:
    {
      let companyName = action.companyName;
      return objectAssign({}, state, { availableTimes: availableTimes, companyName: companyName});
    }
		default:
			return state;
	}
}
