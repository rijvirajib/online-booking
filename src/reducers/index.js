import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import appointmentFormAppState from './appointmentReducer';

const rootReducer = combineReducers({
  appointmentFormAppState: appointmentFormAppState,
  form: formReducer
});

export default rootReducer;
