import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Pagination, List, Modal, Menu, Dropdown, Tabs, Input } from 'antd';
import { Button } from 'antd/lib/radio';
import { Remarkable } from 'remarkable';
import $ from 'jquery';
const TabPane = Tabs.TabPane;
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

    state = { visible: false };
    componentDidMount = () => {
        $("#button").click(function () {
            $("#fn").show();
        });

    }
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { placeholder: 'click here' };
    }
    confirm = () => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to delete this website?',
            okText: 'OK',
            cancelText: 'Cancel',
        });
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getRawMarkup() {
        const md = new Remarkable();
        return { __html: md.render(this.state.value) };
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
    emailoptions = () => {
        return (
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor="markdown-content">
                    Enter some markdown
                </label>
                <textarea
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <h3>Output</h3>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                />
            </div>
        )

    }
    callback(key) {
        console.log(key);
    }
    onChange = ({ target: { value } }) => {
        this.setState({ value });
        console.log(value)
    };
    custdomain = () => {
        const { value } = this.state;
        console.log(value);
        return (
            <div>
                <Input name="data" placeholder="enter name of the site" onChange={this.onChange} />
                <br /><br />
                <p>We suggest you to choose cl.{value}</p>
                <div className="site-btn">
                    <Button className="ant-btn">{value}</Button>
                    <Button>cl.{value}</Button>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="custom-container">
                <Modal
                    title="Custom Domain"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {this.custdomain()}
                </Modal>


                <Row gutter={24}>
                    <Col span={24}>
                        <Row gutter={24}>
                            <Col xs={24} md={24} lg={24} >
                                <div className="wbsit-list">
                                    <div className="mail-title app-hdng">
                                        <h3>Custom Domain</h3>
                                    </div>
                                    <div>
                                        <Button onClick={this.showModal}>+ Add Custom Domain</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: '20px' }}>
                    <Col span={24}>
                        <div className="app-hdng">
                            <p>
                                Enter your custom domain here for receiving emails with your custom domain. Please note that in order to receive email from your custom domain you will need to add certain DNS records. If you do not have access to your DNS records you will not be able to use this feature. We recommend that you use a subdomain or a separate domain name than your actual company domain name in order to avoid making changes to your mail settings that will affect you in other areas.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row gutter={24} style={{ marginTop: '50px' }}>
                    <Col span={24}>
                        <List
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
                    <Pagination defaultCurrent={1} total={50} />
                </div>


            </div>
        );
    }
}

