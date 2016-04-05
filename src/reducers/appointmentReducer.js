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
  days: []
};

export default function appointmentFormAppState(state = initialState, action) {
	switch (action.type) {
		case CHANGE_APPOINTMENT_PAGE:
			return objectAssign({}, state, { page: action.page});
    case SELECT_COMPANY:
    {
      let companyName = action.companyName;
      let formattedTimes = {};
      let days = [];
      _.each(availableTimes, (i, v) => {
        let startTime = moment(v.startTime);
        let endTime = moment(v.endTime);
        days.push(startTime.format('YYYY-MM-DD'));

        let reserved = v.reserved;
        let truckReservationId = v.truckReservationId;
      });

      return objectAssign({}, state, { days: days, availableTimes: availableTimes, companyName: companyName});
    }
		default:
			return state;
	}
}
