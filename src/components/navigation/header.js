import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Badge, Icon, Dropdown, message, Menu } from 'antd';
import 'antd/dist/antd.css';
import { connect } from "react-redux";
import Notification from "./notification";
import Addwebsite from './addwebsite';
import Profile from "./profile";
import { withRouter } from "react-router";
import Logout from './logout';
import * as actions from "../../actions/auth";

class Header extends Component {
    static propTypes = {
        prop: PropTypes
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        console.log("Header props", this.props);
        const menu = (
            <Menu style={{ width: "100px" }}>
                <Menu.Item key="1"><Profile/></Menu.Item>
                <Menu.Item key="2"><Logout /></Menu.Item>
            </Menu>
        );
        return (
            <div className="header">
                <Row style={{ height: '50px', marginTop: '20px' }}>
                    <Col span={1}>
                    </Col>
                    <Col span={1} offset={20}>
                        <Notification />
                    </Col>
                    <Col span={1}>
                        <Addwebsite />
                    </Col>
                    <Col span={1}>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                                <Icon type="user" style={{ fontSize: '22px', color: '#08c' }} />
                                <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        )
    }
}


Header.propTypes = {
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
        Header
    )
);

