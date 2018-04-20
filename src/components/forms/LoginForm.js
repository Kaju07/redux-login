import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';

class LoginForm extends React.Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    // this is in abstract form in order to avoid using two functions: onChangeEmail, onChangePassword 
    onChange = e => this.setState({ 
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
    }


    validate = (data) => {
        const errors = {}
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if ((!data.password) || (data.password.length < 8))
            errors.password = "Password must be at least 8 characters long";
        return errors;
    }

    render() {
        const { data, errors } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="youremail@here.com"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    <span style={{ color: "#ae5856" }}>
                        {errors.email}
                    </span>  
                        
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="your password here"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    <span style={{ color: "#ae5856" }}>
                        {errors.password}
                    </span>
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        )
    }
}

LoginForm.propTypes ={
    submit: PropTypes.func.isRequired
};

export default LoginForm;