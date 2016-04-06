import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class AppointmentFormConfirmationPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>We have booked your appointment!</h4>
            </div>
            <div className="panel-body">
                You have been booked for {this.props.appState.companyName}
                on {moment(this.props.appState.selectedEvent.startTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}.
            </div>
          </div>
        </div>
      </div>
    );
  }
}


AppointmentFormConfirmationPage.propTypes = {
  appState: PropTypes.object.isRequired
};

export default AppointmentFormConfirmationPage;
