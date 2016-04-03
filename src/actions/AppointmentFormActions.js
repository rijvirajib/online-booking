import * as types from '../constants/ActionTypes';

export function changePage(settings, page) {
	return { type: types.CHANGE_APPOINTMENT_PAGE, settings, page };
}
