import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";
import { connect } from "react-redux";

// this is used to show an header with Redux' current state name.
const StatePanel = ({ currentState }) => (
  <div>
    <Message
      header="Current state:"
      content={currentState}
      style={{
        marginBottom: "2em",
        marginTop: "2em"
      }}
    />
  </div>
);

StatePanel.propTypes = {
  currentState: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  currentState: state.userReducer.stateName
});

export default connect(mapStateToProps)(StatePanel);
