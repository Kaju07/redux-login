import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Menu, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import * as actions from "../../actions/auth";

class TopNavigation extends Component {
	render(isAuthenticated,
		isFetching,
		pathname,
		login,
		logout) {
		return (
			<div>
				{pathname !== "/login" ? (
					<Menu
						inverted
						style={{
							marginBottom: "1em"
						}}
					>
						<Menu.Item as={Link} to="/">
							<NavLink to="/login">
								<span className="cs-icon">Home</span>
							</NavLink>
						</Menu.Item>
						<Menu.Item disabled={!isAuthenticated} as={Link} to="/dashboard">
							<NavLink to="/dashboard">
								<span className="cs-icon">Dashboard</span>
							</NavLink>
							Dashboard
				   </Menu.Item>
						{isAuthenticated ? (
							<Menu.Menu position="right">
								<Dropdown item text="Dropdown">
									<Dropdown.Menu>
										<Dropdown.Item
											disabled={isFetching}
											onClick={() =>
												logout({
													email: localStorage.testEmail,
													token: localStorage.testToken
												})
											}
										>
											Logout
							 </Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Menu.Menu>
						) : null}
					</Menu>
				) : null}
			</div>
		);
	}
}

TopNavigation.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	isFetching: PropTypes.bool.isRequired,
	pathname: PropTypes.string.isRequired,
	login: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired
};
const mapStateToProps = (state, ownProps) => ({
	isAuthenticated: !!state.userReducer.token,
	isFetching: state.userReducer.isFetching,
	pathname: ownProps.location.pathname
});
export default withRouter(
	connect(mapStateToProps, { login: actions.login, logout: actions.logout })(
		TopNavigation
	)
);
