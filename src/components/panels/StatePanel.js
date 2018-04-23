import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const StatePanel = ({ currentState }) => (
  <div>
    <h1 style={{ textAlign: "center" }}>Current state is: {currentState}</h1>
  </div>
);

StatePanel.propTypes = {
  currentState: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  currentState: state.userReducer.stateName
});

export default connect(mapStateToProps)(StatePanel);
