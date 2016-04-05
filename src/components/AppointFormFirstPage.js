import React, { Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import { Link } from 'react-router';
import { isEmail } from 'validator';
export const fields = ['firstName', 'lastName', 'email'];

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!isEmail(values.email)) {
    errors.email = 'Email is invalid';
  }
  return errors;
};

class AppointmentFormFirstPage extends Component {
  render() {
    const {
      fields: {firstName, lastName, email},
      handleSubmit
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="form-title">
            <h3 className="text-uppercase">Select your appointment date and time</h3>
            <div className="bottom-line"></div>
          </div>
          <div className="form-group top-margin">
            <div className="row">
              <div className="col-lg-6 col-xs-12">
                <label htmlFor="first-name">First Name</label>
                <input type="text" className="form-control" {...firstName} />
                {firstName.touched && firstName.error && <div>{firstName.error}</div>}
              </div>
              <div className="col-lg-6 col-xs-12">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" className="form-control" {...lastName} />
                {lastName.touched && lastName.error && <div>{lastName.error}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-xs-12">
                <label htmlFor="email">Email Address <span className="light-text">(Best for calendar invite atwork)</span></label>
                <input type="email" className="form-control"  placeholder="Email" {...email} />
                {email.touched && email.error && <div>{email.error}</div>}
              </div>
              <div className="col-lg-6 col-xs-12">
                <label htmlFor="your-company">Find your company</label>
                <i className="light-text">Start typing to find your company</i>
                <div className="input-group">
                  <span className="input-group-addon" id="sizi"><i className="fa fa-search"></i></span>
                  <input autoComplete="off" className="form-control" id="your-company" placeholder="Company name..." type="text"/>
                </div>
              </div>
            </div>
          </div>
          <div className="form-footer">
            <div className="row">
              <div className="col-xs-6 text-left">
                <span>{this.props.appState.page}</span> of <span>4</span>
              </div>
              <div className="col-xs-6 text-right">
                <button className="btn btn-primary" type="submit">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}


AppointmentFormFirstPage.propTypes = {
  appState: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'appointments',
  fields,
  destroyOnUnmount: false,
  validate
})(AppointmentFormFirstPage);
