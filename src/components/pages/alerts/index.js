

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Pagination, List, Modal, Input, Select, Tabs } from 'antd';
import { Button } from 'antd/lib/radio';
import $ from 'jquery';
const TabPane = Tabs.TabPane;

// const { Option } = Select;

const data = [
    <div className="web-title"><p>test22907573@catchletter.com</p></div>,
    <div className="web-title"><p>testing</p></div>,
    <div className="web-title"><p>samiscoding</p></div>,
    <div className="web-title"><p>Hostthename.com</p></div>,
    <div className="web-title"><p>test</p></div>,
    <div className="web-title"><p>quora.com</p></div>,
    <div className="web-title"><p>test22907573@catchletter.com</p></div>
];

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        value: '',
    };
    state = { visible: false };
    confirm = () => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to delete this website?',
            okText: 'OK',
            cancelText: 'Cancel',
        });
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    callback(key) {
        console.log(key);
    }

    onChange = ({ target: { value } }) => {
        this.setState({ value });
        console.log(value)
    };
    onchange = (value) => {
        console.log("value", value);
    }
    emailoptions = () => {
        const { value } = this.state;
        console.log(value);
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="All Sites" key="1">
                        <h3>
                            You will receive Alerts from all sites
                        </h3>
                    </TabPane>
                    <TabPane tab="Selected Sites" key="2">
                        <Input name="data" placeholder="enter name of the site" onChange={this.onChange} />
                        <br /><br />
                        <Button>{value}</Button>
                        <Button>{value}</Button>
                    </TabPane>
                </Tabs>
            </div>
        )
    }

    render() {
        return (
            <div className="custom-container">
                <Modal
                    title="Add Eamil Alert"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {this.emailoptions()}
                </Modal>

                <Row className="app-hdng">
                    <h2>Email Alerts</h2>
                </Row>
                <Row gutter={24} style={{ marginTop: '50px' }}>
                    <Col span={24} style={{ marginTop: '50px' }}>
                        <List
                            header={
                                <div className="wbsit-list">
                                    <div className="mail-title app-hdng">
                                        <h5>List of Mail Alerts</h5>
                                    </div>
                                    <div>
                                        <Button onClick={this.showModal}><h3>+ Add Alert</h3></Button>
                                    </div>
                                </div>
                            }
                            bordered
                            dataSource={data}
                            renderItem={item =>
                                <List.Item className="wbsit-list"
                                    actions={[<a onClick={this.confirm} key="list-loadmore-delete">delete</a>]}
                                >{item}
                                </List.Item>
                            }
                        />
                    </Col>
                </Row>
                <div className="App">
                    <Pagination className="pagination" defaultCurrent={1} total={50} />
                </div>
            </div>
        );
    }
}

