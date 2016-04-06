import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['email', 'gender', 'phone', 'dobMonth', 'dobDay', 'dobYear'];

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.gender) {
    errors.gender = 'Required';
  }
  if (!values.phone) {
    errors.phone = 'Required';
  }
  if (!values.dobMonth || !values.dobDay || !values.dobYear) {
    errors.dobMonth = 'All fields are required';
  }
  return errors;
};

class AppointFormSecondPage extends Component {
  render() {
    const {
      fields: {email, gender, phone, month, dobMonth, dobDay, dobYear},
      handleSubmit,
      previousPage
      } = this.props;
    return (<form onSubmit={handleSubmit}>
      <div className="form-body">
        <div className="form-title">
          <h3 className="text-uppercase">TELL US ABOUT YOURSELF</h3>
          <div className="bottom-line"></div>
        </div>
        <div className="form-group top-margin">
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" {...email} />
              {email.touched && email.error && <div>{email.error}</div>}
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control" {...phone} />
              {phone.touched && phone.error && <div>{phone.error}</div>}
            </div>
            <div className="col-lg-6 col-xs-12">
              <div className="row"><label>Gender</label></div>
              <div className="row">
                <div className="col-md-3 col-xs-3">
                  <label>
                    <input type="radio" {...gender} value="male" checked={gender.value === 'male'}/> Male
                  </label>
                </div>
                <div className="col-md-3 col-xs-3">
                  <label>
                    <input type="radio" {...gender} value="female" checked={gender.value === 'female'}/> Female
                  </label>
                </div>
              </div>
              {gender.touched && gender.error && <div className="row">{gender.error}</div>}
              <div className="row">
                <label htmlFor="dob">Date of Birth</label>
              </div>
              <div className="row">
                <div className="col-xs-4">
                  <input type="text" className="form-control" {...dobMonth} placeholder="MM"/>
                </div>
                <div className="col-xs-4">
                  <input type="text" className="form-control" {...dobDay} placeholder="DD"/>
                </div>
                <div className="col-xs-4">
                  <input type="text" className="form-control" {...dobYear} placeholder="YYYY"/>
                </div>
              </div>
              {dobMonth.touched && dobMonth.error && <div className="row">{dobMonth.error}</div>}
            </div>
          </div>

          <div className="form-footer">
            <div className="row">
              <div className="col-xs-6 text-left">
                <span>{this.props.appState.page}</span> of <span>4</span>
              </div>
              <div className="col-xs-6 text-right">
                <button type="button" onClick={previousPage}>
                  <i/> Previous
                </button>
                <button type="submit">
                  Continue <i/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    );
  }
}

AppointFormSecondPage.propTypes = {
  appState: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'appointments',              // <------ same form name
  fields,                      // <------ only fields on this page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(AppointFormSecondPage);
