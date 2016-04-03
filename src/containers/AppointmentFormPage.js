import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/AppointmentFormActions';
import AppointmentForm from '../components/AppointmentForm';

class AppointmentFormPage extends Component {
  render() {
    return (
      <AppointmentForm
        changePage={this.props.actions.changePage}
        appState={this.props.appState}
      />
    );
  }
}

AppointmentFormPage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.appointmentFormAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentFormPage);
