import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const DashboardPage = ({ isAuthenticated, userEmail, logout }) => (
  <div>
    <div>
      <h1>Dashboard</h1>
    </div>
    <div>Hello {userEmail} </div>
    <div>
      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({
              email: localStorage.testEmail,
              token: localStorage.testToken
            })
          }
        >
          Logout
        </button>
      ) : (
        <span />
      )}
    </div>
  </div>
);

DashboardPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state =>
  !!state.userReducer.token
    ? {
        isAuthenticated: !!state.userReducer.token,
        userEmail: state.userReducer.email
      }
    : { isAuthenticated: false, userEmail: "" };

export default connect(mapStateToProps, { logout: actions.logout })(
  DashboardPage
);
