import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import _ from 'underscore';
import AppointmentFormTimePicker from './AppointmentFormTimePicker';

class AppointmentFormDateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.timeRows = [];
    this.showTimes = this.showTimes;
  }

  showTimes (day) {
    this.props.selectDay(this.props.appState, day);
  }

  render() {
    let dayRows = [];
    this.props.appState.days.forEach( (day) => {
      dayRows.push(<div onClick={this.showTimes.bind(this, day)}>{day}</div>);
    });
    return (
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <h4>Choose a visit date for {this.props.appState.companyName}</h4>
          <div ref="test">
            {dayRows}
          </div>
        </div>
        <div className="col-lg-6 col-xs-12">
          <div>
            {this.props.appState.selectedDay &&
              <AppointmentFormTimePicker
                appState={this.props.appState}
                selectTime={this.props.selectTime}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}


AppointmentFormDateTimePicker.propTypes = {
  appState: PropTypes.object.isRequired,
  selectDay: PropTypes.func.isRequired,
  selectTime: PropTypes.func.isRequired
};

export default AppointmentFormDateTimePicker;
