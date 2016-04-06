import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import _ from 'underscore';

class AppointmentFormDateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.timeRows = [];
  }

  setEvent (v) {
    console.log(v);
  }

  showTimes (day) {
    this.timeRows = [];
    _.each(this.props.appState.formattedTimes[day], (v) => {
      let startTime = moment(v.startTime);
      let visibleTime = startTime.format("h:mm");
      this.timeRows.push(<div onClick={this.setEvent.bind(this, v)}>{visibleTime}</div>);
    });

    this.timeRows = _.sortBy(this.timeRows, (o) => {
      return o;
    });
  }

  render() {
    let dayRows = [];
    this.props.appState.days.forEach( (day) => {
      dayRows.push(<div onClick={this.showTimes(day)}>{day}</div>);
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
            {this.timeRows}
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
