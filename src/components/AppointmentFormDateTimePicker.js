import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class AppointmentFormDateTimePicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rows = [];
    let dayRows = [];
    this.props.appState.availableTimes.forEach( (v) => {
      if(v.reserved !== true) {
        let startTime = moment(v.startTime);
        let day = startTime.format('YYYY-MM-DD');
        rows.push(
          <div>{day}</div>
        );
      }
    });
    return (
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <h4>Choose a visit date for {this.props.appState.companyName}</h4>
          <div ref="test">
            {rows}
          </div>
        </div>
      </div>
    );
  }
}


AppointmentFormDateTimePicker.propTypes = {
  appState: PropTypes.object.isRequired
};

export default AppointmentFormDateTimePicker;
