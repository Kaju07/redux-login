
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Drawer, Form, Button, Col, Row, Input, Select, Icon, Checkbox } from 'antd';
 export default class Profile extends React.Component {
    constructor() {
        super();

        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }
    render = ({ isAuthenticated, userEmail, logout }) => {
        const content = this.state.checked
            ? <div><Input placeholder="Email prefix" />  </div>
            : null;

        return (
            <div>
                <span onClick={this.showDrawer}>
                    Profile
                    <Icon type="user" style={{ fontSize: '22px', color: '#08c' }} />
                </span>
                <Drawer
                    title="Profile"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Form.Item label="First Name">
                                    <Input placeholder="Please enter First name" value="Oscar" />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Last Name">
                                    <Input placeholder="Please enter Last name" value="Hernandez" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Form.Item label="Email">
                                    <Input placeholder="Change Email" value={userEmail} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Url">
                                    <Input
                                        style={{ width: '100%' }}
                                        addonBefore="http://"
                                        addonAfter=".com"
                                        placeholder="Please enter url"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <h3>Change Password</h3>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Form.Item label="Old Password">
                                    <Input.Password placeholder="enter Old Password" />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="New Password">
                                    <Input.Password placeholder="enter New Password" />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Confirm Password">
                                    <Input.Password placeholder="Confirm Password" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e9e9e9',
                            padding: '10px 16px',
                            background: '#fff',
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={this.onClose} type="primary">
                            Submit
                        </Button>
                    </div>
                </Drawer>
            </div>
        );
    }
}




