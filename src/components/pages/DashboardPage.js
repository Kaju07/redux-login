import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const DashboardPage = ({ isAuthenticated, userEmail, logout }) => (
  <div>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Dashboard
        </Header>
        <Message
          header="This is the app for beloved user"
          content={userEmail}
          style={{
            marginBottom: "1em",
            marginTop: "1em"
          }}
        />
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
            Logoutaaaa
          </Button>
        ) 
        : (
            <span />
          )}
      </Grid.Column>
    </Grid>
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
