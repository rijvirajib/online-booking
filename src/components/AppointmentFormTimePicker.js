import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import _ from 'underscore';

class AppointmentFormTimePicker extends Component {
  constructor(props) {
    super(props);
  }

  setEvent (v) {
    this.props.selectTime(this.props.appState, v);
  }

  render() {
    let timeRows = [];
    _.each(this.props.appState.formattedTimes[this.props.appState.selectedDay], (v) => {
      if(v.reserved !== false) {
        return;
      }
      let startTime = moment(v.startTime);
      let visibleTime = startTime.format("h:mm A");
      timeRows.push(<div onClick={this.setEvent.bind(this, v)}>{visibleTime}</div>);
    });
    return (
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <div ref="test">
            <h4>Times</h4>
            {timeRows}
          </div>
        </div>
      </div>
    );
  }
}


AppointmentFormTimePicker.propTypes = {
  appState: PropTypes.object.isRequired,
  selectTime: PropTypes.func.isRequired
};

export default AppointmentFormTimePicker;
