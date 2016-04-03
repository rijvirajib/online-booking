import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AppointmentFormFirstPage = ({onChangePage, appState}) => {
  return (
    <form id="form" name="form" noValidate="" role="form">
      <div className="form-body">
        <div className="form-title">
          <h3 className="text-uppercase">Select your appointment date and time</h3>
          <div className="bottom-line"></div>
        </div>
        <div className="form-group top-margin">
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <label htmlFor="first-name">First Name</label>
              <input className="form-control" name="firstName" required="" type="text" />
            </div>
            <div className="col-lg-6 col-xs-12">
              <label htmlFor="last-name">Last Name</label>
              <input className="form-control"id="last-name" name="lastName" required="" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <label htmlFor="email">Email Address <span className="light-text">(Best for calendar invite atwork)</span></label>
              <input className="form-control" id="email" name="email" required="" type="email"/>
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
              <span>{appState.page}</span> of <span>4</span>
            </div>
            <div className="col-xs-6 text-right">
              <button className="btn btn-primary" type="button" onClick={() => onChangePage(appState.page + 1)}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

AppointmentFormFirstPage.propTypes = {
  onChangePage: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default AppointmentFormFirstPage;
