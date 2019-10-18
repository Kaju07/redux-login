import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import * as actions from "../actions/auth";

import PropTypes from "prop-types";

const { Header, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;
class Sidebar extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render(isAuthenticated,
        isFetching,
        pathname, 
        login,
        logout) {
        console.log("Sidebar Props", this.props);
        console.log("collapsed", this.props.collapsed)
        return (
            <Sider trigger={null} theme="dark" width="235" collapsible
            >
                <div className="App">
                    CatchLetter
                    </div>
                <Menu className="custom-scroll-none-moz" theme="dark" mode="inline" defaultSelectedKeys={['/']} >
                    <Menu.Item key="/dashboard">
                        <NavLink to="/dashboard">
                            <Icon type="dashboard" />
                            <span className="cs-icon">Dashboard</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/websites">
                        <NavLink to="/websites">
                            <Icon type="video-camera" />
                            <span className="cs-icon">Website</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/Inbox">
                        <NavLink to="/inbox">
                            <Icon type="upload" />
                            <span className="cs-icon">Inbox</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/Favorite">
                        <NavLink to="/favorites">
                            <Icon type="upload" />
                            <span className="cs-icon">Favorite Email</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/alerts">
                        <NavLink to="/alerts">
                            <Icon type="alert" />
                            <span className="cs-icon">Alert</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/customdomain">
                        <NavLink to="/customdomain">
                            <Icon type="upload" />
                            <span className="cs-icon">Custom Domains</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/billing">
                        <NavLink to="/billing">
                            <Icon type="money-collect" />
                            <span className="cs-icon">Billing</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
                <Header>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                </Header>

            </Sider>

        );
    }
}
Sidebar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    pathname: PropTypes.string.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

// ownProps is for the props of the component
// this had to be used because this is a stateless component
const mapStateToProps = (state, ownProps) => ({
    isAuthenticated: !!state.userReducer.token,
    isFetching: state.userReducer.isFetching,
    pathname: ownProps.location.pathname
});

// withRouter() wraps the component so that in ownProps is accessible 'location'
export default withRouter(
    connect(mapStateToProps, { login: actions.login, logout: actions.logout })(
        Sidebar
    )
);
