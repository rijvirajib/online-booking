import {
  CHANGE_APPOINTMENT_PAGE,
  GET_AVAILABLE_TIMES,
  SELECT_COMPANY
} from '../constants/ActionTypes';
import objectAssign from 'object-assign';
import availableTimes from '../components/fakeAppointments.json';
import _ from 'lodash';
import moment from 'moment';

const initialState = {
  page: 1,
  companyName: '',
  availableTimes: [],
  formattedTimes: {}
};

export default function appointmentFormAppState(state = initialState, action) {
	switch (action.type) {
		case CHANGE_APPOINTMENT_PAGE:
			return objectAssign({}, state, { page: action.page});
    case SELECT_COMPANY:
    {
      let companyName = action.companyName;
      let formattedDates = {};
      _.each(availableTimes, (v, k) => {
        let startTime = moment(v.startTime);
        let day = startTime.format('YYYY-MM-DD');
        if(_.has(formattedDates, day)) {
          formattedDates[day].push(v);
        } else {
          formattedDates[day] = [v];
        }
      });

      return objectAssign({}, state, { formattedTimes: formattedDates, availableTimes: availableTimes, companyName: companyName});
    }
		default:
			return state;
	}
}
