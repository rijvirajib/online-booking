import {
  CHANGE_APPOINTMENT_PAGE,
  SELECT_COMPANY,
  SELECT_DAY,
  SELECT_TIME
} from '../constants/ActionTypes';
import objectAssign from 'object-assign';
import availableTimes from '../components/fakeAppointments.json';
import _ from 'lodash';
import moment from 'moment';

const initialState = {
  page: 1,
  companyName: '',
  availableTimes: [],
  formattedTimes: {},
  days: [],
  selectedDay: '',
  selectedEvent: {}
};

export default function appointmentFormAppState(state = initialState, action) {
	switch (action.type) {
		case CHANGE_APPOINTMENT_PAGE:
			return objectAssign({}, state, { page: action.page});
    case SELECT_COMPANY:
    {
      let companyName = action.companyName;
      let formattedTimes = {};
      let sortedTimes = _.sortBy(availableTimes, 'startTime');
      _.each(sortedTimes, (v, k) => {
        let startTime = moment(v.startTime);
        let day = startTime.format('YYYY-MM-DD');
        if(_.has(formattedTimes, day)) {
          formattedTimes[day].push(v);
        } else {
          formattedTimes[day] = [v];
        }
      });
      let days = _.keys(formattedTimes);
      let sortedDays = _.sortBy(days, function(k){
          return k;
      });


      return objectAssign({}, state, { days: sortedDays, formattedTimes: formattedTimes, availableTimes: availableTimes, companyName: companyName});
    }

    case SELECT_DAY:
      return objectAssign({}, state, { selectedDay: action.selectedDay });
    case SELECT_TIME:
      return objectAssign({}, state, { selectedEvent: action.entireObject });
		default:
			return state;
	}
}
