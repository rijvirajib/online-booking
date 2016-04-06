import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {initialize} from 'redux-form';
import * as actions from '../actions/AppointmentFormActions';
import AppointFormFirstPage from '../components/AppointFormFirstPage';
import AppointFormSecondPage from '../components/AppointFormSecondPage';
import AppointFormThirdPage from '../components/AppointFormThirdPage';
import AppointmentFormConfirmationPage from '../components/AppointmentFormConfirmationPage';

class AppointmentFormPage extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.changePage(this.props.appState, 4);
  }

  nextPage() {
    this.props.changePage(this.props.appState, this.props.appState.page + 1);
  }

  previousPage() {
    this.props.changePage(this.props.appState, this.props.appState.page - 1);
  }

  render() {
    const {page} = this.props.appState.page;
    return (
      <div>
        {this.props.appState.page === 1 &&
          <AppointFormFirstPage
            onSubmit={this.nextPage}
            appState={this.props.appState}
            selectCompany={this.props.selectCompany}
            selectDay={this.props.selectDay}
            selectTime={this.props.selectTime}
            />
        }
        {this.props.appState.page === 2 &&
          <AppointFormSecondPage
            appState={this.props.appState}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            />
        }
        {this.props.appState.page === 3 && <AppointFormThirdPage previousPage={this.previousPage} onSubmit={this.handleSubmit}/>}
        {this.props.appState.page === 4 && <AppointmentFormConfirmationPage appState={this.props.appState}/>}
      </div>
    );
  }
}

AppointmentFormPage.propTypes = {
  changePage: PropTypes.func.isRequired,
  selectCompany: PropTypes.func.isRequired,
  selectDay: PropTypes.func.isRequired,
  selectTime: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.appointmentFormAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actions, dispatch),
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentFormPage);
