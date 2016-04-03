import { combineReducers } from 'redux';
import appointmentFormAppState from './appointmentReducer';

const rootReducer = combineReducers({
  appointmentFormAppState
});

export default rootReducer;
