import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const DashboardPage = ({ isAuthenticated, userEmail }) => (
  <div>
    <div>
      <h1>Dashboard</h1>
    </div>
    <div>Hello {userEmail} </div>
  </div>
);

DashboardPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state =>
  !!state.userReducer.token
    ? {
        isAuthenticated: !!state.userReducer.token,
        userEmail: state.userReducer.email
      }
    : { isAuthenticated: false, userEmail: "" };

export default connect(mapStateToProps)(DashboardPage);
