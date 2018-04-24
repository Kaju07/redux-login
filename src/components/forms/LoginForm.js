import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";

class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  // this is in abstract form in order to avoid using two functions: onChangeEmail, onChangePassword
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).then(() => {
        if (!localStorage.testEmail || !localStorage.testToken) {
          this.setState({
            errors: { loginDenied: true },
            loading: false
          });
        }
      });
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";

    if (!!data.password) {
      let format = /[ ^\\,./]/;
      if (format.test(data.password)) {
        errors.password =
          "Password cannot contain special characters: \\ / , . ^ <space>";
      }
    } else {
      errors.password = "Password cannot be void";
    }

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.loginDenied && (
          <Message negative>
            <p>Error in login: wrong password or username not found.</p>
          </Message>
        )}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@here.com"
            value={data.email}
            onChange={this.onChange}
          />
          <span style={{ color: "#ae5856" }}>{errors.email}</span>
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="your password here"
            value={data.password}
            onChange={this.onChange}
          />
          <span style={{ color: "#ae5856" }}>{errors.password}</span>
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
