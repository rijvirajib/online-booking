import * as types from '../constants/ActionTypes';

export function changePage(settings, page) {
	return { type: types.CHANGE_APPOINTMENT_PAGE, settings, page };
}

export function selectCompany(settings, companyName) {
	return { type: types.SELECT_COMPANY, settings, companyName };
}

export function getOpenTimes(settings, companyName) {
	return { type: types.GET_APPOINTMENT_TIMES, settings, companyName };
}
