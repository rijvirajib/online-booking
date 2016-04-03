import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AppointmentFormThirdPage = ({onChangePage, appState}) => {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div>Page 3</div>
        <button className="btn btn-primary" type="button" onClick={() => onChangePage(appState.page - 1)}>Back</button>
      </div>
    </div>
  );
};

AppointmentFormThirdPage.propTypes = {
  onChangePage: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default AppointmentFormThirdPage;
