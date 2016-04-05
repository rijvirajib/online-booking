import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/AppointmentFormActions';
import AppointFormFirstPage from '../components/AppointFormFirstPage';
import AppointFormSecondPage from '../components/AppointFormSecondPage';
import AppointFormThirdPage from '../components/AppointFormThirdPage';


class AppointmentFormPage extends Component {
  constructor(props) {
    super(props);
    // Pro tip: The best place to bind your member functions is in the component constructor
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  nextPage() {
    this.props.actions.changePage(this.props.appState, this.props.appState.page + 1);
  }

  previousPage() {
    this.props.actions.changePage(this.props.appState, this.props.appState.page - 1);
  }

  render() {
    const {onSubmit} = this.props;
    const {page} = this.props.appState.page
    return (
      <div>
        {this.props.appState.page === 1 && <AppointFormFirstPage onSubmit={this.nextPage} appState={this.props.appState}/>}
        {this.props.appState.page === 2 && <AppointFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {this.props.appState.page === 3 && <AppointFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    );
  }
}

AppointmentFormPage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
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
