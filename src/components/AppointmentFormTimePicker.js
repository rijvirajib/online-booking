import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import _ from 'underscore';

class AppointmentFormTimePicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <h4>Choose a visit date for {this.props.appState.companyName}</h4>
          <div ref="test">

          </div>
        </div>
      </div>
    );
  }
}


AppointmentFormTimePicker.propTypes = {
  appState: PropTypes.object.isRequired,
  selectedTime: PropTypes.func.isRequired
};

export default AppointmentFormTimePicker;
