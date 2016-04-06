import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import _ from 'lodash';
import classnames from 'classnames';
class AppointmentFormTimePicker extends Component {
  constructor(props) {
    super(props);
  }

  setEvent (v) {
    this.props.selectTime(this.props.appState, v);
  }

  render() {
    let timeRows = [];
    _.each(this.props.appState.formattedTimes[this.props.appState.selectedDay], (v, i) => {
      let classes = classnames('displayTimes', {selected: v.truckReservationId === this.props.appState.selectedEvent.truckReservationId});
      if(v.reserved !== false) {
        return;
      }
      let startTime = moment(v.startTime);
      let visibleTime = startTime.format("h:mm A");
      timeRows.push(<div className={classes} key={i} onClick={this.setEvent.bind(this, v)}>{visibleTime}</div>);
    });
    return (
      <div>
        <h4>Times</h4>
          <div className="panel panel-default panel-selection">
            <div className="panel-body">
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
