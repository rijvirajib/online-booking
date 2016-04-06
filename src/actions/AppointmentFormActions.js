import * as types from '../constants/ActionTypes';

export function changePage(settings, page) {
	return { type: types.CHANGE_APPOINTMENT_PAGE, settings, page };
}

export function selectCompany(settings, companyName) {
	return { type: types.SELECT_COMPANY, settings, companyName };
}

export function selectDay(settings, selectedDay) {
	return { type: types.SELECT_DAY, settings, selectedDay };
}

export function selectTime(settings, entireObject) {
	return { type: types.SELECT_TIME, settings, entireObject };
}
