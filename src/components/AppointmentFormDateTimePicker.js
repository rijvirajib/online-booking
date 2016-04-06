import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import _ from 'lodash';
import classnames from 'classnames';
import AppointmentFormTimePicker from './AppointmentFormTimePicker';

class AppointmentFormDateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.showTimes = this.showTimes;
  }

  showTimes (day) {
    this.props.selectDay(this.props.appState, day);
  }

  render() {
    let dayRows = [];
    this.props.appState.days.forEach( (day, i) => {
      let momentDay = moment(day);
      let classes = classnames('displayDays', {selected: this.props.appState.selectedDay});
      dayRows.push(
        <div className={classes} key={i} onClick={this.showTimes.bind(this, day)}>
          <div>{momentDay.format('MMMM')}</div>
          <div>{momentDay.format('D')}</div>
        </div>
      );
    });
    return (
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <h4>Choose a visit date for {this.props.appState.companyName}</h4>
          <div className="panel panel-default panel-selection">
            <div className="panel-body">
                {dayRows}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xs-12">
          {this.props.appState.selectedDay &&
            <AppointmentFormTimePicker
              appState={this.props.appState}
              selectTime={this.props.selectTime}
            />
          }
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
