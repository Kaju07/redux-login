import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const HomePage = ({ isAuthenticated, isFetching, logout }) => (
  <div>
    <h1>Home Page</h1>
    {isAuthenticated ? (
      <Button
        primary
        onClick={() =>
          logout({
            email: localStorage.testEmail,
            token: localStorage.testToken
          })
        }
      >
        Logout
      </Button>
    ) : (
      <div>
        <Button
          primary
          disabled={isFetching}
          loading={isFetching}
          as={Link}
          to="/login"
        >
          Go to Login
        </Button>
      </div>
    )}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.userReducer.token,
  isFetching: state.userReducer.isFetching
});

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
