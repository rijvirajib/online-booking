import React, {Component, PropTypes} from 'react';
import AppointFormFirstPage from './AppointFormFirstPage';
import AppointFormSecondPage from './AppointFormSecondPage';
import AppointFormThirdPage from './AppointFormThirdPage';

const AppointmentForm = ({changePage, appState}) => {
  const onChangePage = (page) => {
    if (page < 1) {
      page = 1;
    }
    changePage(appState, page);
  };

  return (
    <div>
      {appState.page === 1 && <AppointFormFirstPage onChangePage={onChangePage} appState={appState}/>}
      {appState.page === 2 && <AppointFormSecondPage onChangePage={onChangePage} appState={appState}/>}
      {appState.page === 3 && <AppointFormThirdPage onChangePage={onChangePage} appState={appState}/>}
    </div>
  );
};

AppointmentForm.propTypes = {
  changePage: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default AppointmentForm;
