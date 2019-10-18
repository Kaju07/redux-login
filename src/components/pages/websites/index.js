import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { DatePicker, Col, Row, Tag, Menu, Dropdown, Icon, Input, List, Pagination, Button, notification, Modal, Select } from 'antd';

import Editwebsite from './editwebsite';
const { Search } = Input;
const { MonthPicker, RangePicker, WeekPicker, message } = DatePicker;
const { Option } = Select;
const data = [
    <div className="web-title"><p>test22907573@catchletter.com</p></div>,
    <div className="web-title"><p>testing</p></div>,
    <div className="web-title"><p>samiscoding</p></div>,
    <div className="web-title"><p>Hostthename.com</p></div>,
    <div className="web-title"><p>test</p></div>,
    <div className="web-title"><p>quora.com</p></div>,
    <div className="web-title"><p>test22907573@catchletter.com</p></div>
];
export default class Index extends Component {
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
        console.log("Show modal");
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
    openPromptModal(event) {
        this.props.showModal({
            open: true,
            title: 'Prompt Modal',
            fields: [{
                label: 'Address name',
                name: 'addressName',
                placeholder: 'Enter address name',
            }],
            onInputChange: this.onInputChange,
            confirmAction: this.showInput
        }, 'prompt')
    }
    render() {
        const openNotificationWithIcon = type => {
            if (type == "success") {

                notification[type]({
                    message: 'Copied Successfully',
                });
            } else
                if (type == "info") {

                    notification[type]({
                        message: 'Notification Title',
                    });
                }
        };
        return (
            <div className="custom-container">
                <Modal
                    title="Add Eamil Alert"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Editwebsite />
                </Modal>
                <Row gutter={24}>
                    <Col span={24}>
                        <Row gutter={24} type="flex">
                            <Col xs={24} md={18} lg={21} >
                                <div className="app-hdng">
                                    <h2>
                                        We're monitoring websites for you right now.
                                    </h2>
                                </div>
                            </Col>
                            <Col xs={24} md={6} lg={3} >
                                <Button onClick={this.openPromptModal}>
                                    Add New Website
                                </Button>

                            </Col>
                        </Row>
                    </Col>
                    <Col span={24} style={{ marginTop: '50px' }}>
                        <Row gutter={24} type="flex">
                            <Col xs={24} md={12} lg={6} className="select_site">
                                <Select defaultValue="website1" style={{ width: '70%' }}>
                                    <Option value="website1">Don't show Mail Count</Option>
                                    <Option value="website2">Show Mail Count</Option>
                                </Select>
                            </Col>
                            <Col xs={24} md={12} lg={6} className="select_site">
                                <Select placeholder="Select Website" style={{ width: '70%' }}>
                                    <Option value="website1">Website 1</Option>
                                    <Option value="website2">Website 2</Option>
                                    <Option value="website3">Website 3</Option>
                                </Select>
                            </Col>
                            <Col xs={24} md={12} lg={6} className="select_site">
                                <Select placeholder="select tag" style={{ width: '70%' }}>
                                    <Option value="tag1">tag 1</Option>
                                    <Option value="tag2">tag 2</Option>
                                    <Option value="tag3">tag 3</Option>
                                </Select>
                            </Col>
                            <Col xs={24} md={12} lg={6}>
                                <Search placeholder="Search Website" onSearch={value => console.log(value)} enterButton />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={24} >
                    <Col span={24} style={{ marginTop: '90px' }}>
                        <List
                            header={
                                <div className="mail-title app-hdng">
                                    <h5>List OF All Websites</h5>
                                </div>
                            }
                            bordered
                            dataSource={data}
                            renderItem={item =>
                                <List.Item className="wbsit-list"
                                    actions={[
                                        <a onClick={() => openNotificationWithIcon('success')}>Copy To Clipbpoard</a>,
                                        <Editwebsite />,
                                        <a onClick={this.confirm} key="list-loadmore-delete">delete</a>,
                                        <a key="list-loadmore-export">export</a>,
                                        <a key="list-loadmore-Heatmap">Heatmap</a>]}
                                >{item}
                                </List.Item>
                            }
                        />
                    </Col>
                </Row>
                <div className="App">
                    <Pagination className="" defaultCurrent={1} total={50} />
                </div>
            </div>
        )
    }
}



