import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AppointmentFormSecondPage = ({onChangePage, appState}) => {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div>Page 2</div>
        <button className="btn btn-primary" type="button" onClick={() => onChangePage(appState.page - 1)}>Back</button>
        <button className="btn btn-primary" type="button" onClick={() => onChangePage(appState.page + 1)}>Next</button>
      </div>
    </div>
  );
};

AppointmentFormSecondPage.propTypes = {
  onChangePage: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default AppointmentFormSecondPage;
