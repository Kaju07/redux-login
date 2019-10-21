
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Drawer, Form, Button, Col, Row, Input, Select, Icon, Checkbox } from 'antd';
const { Option } = Select;
function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

export default class Addwebsite extends React.Component {
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
    render() {
        const content = this.state.checked
            ? <div><Input placeholder="Email prefix" />  </div>
            : null;
        return (
            <div>
                <Icon onClick={this.showDrawer} type="plus-circle" style={{ fontSize: '22px', color: '#08c' }} />
                <Drawer
                    title="Create Website"
                    width={500}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="Website Name">
                                    <Input placeholder="Please enter website name" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
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
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="Keyword for your websites">
                                    <Input placeholder="Add new tag" required />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
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
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item label="Choose your email Domain">
                                    <Select
                                        showSearch
                                        style={{ width: '100%' }}
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onSearch={onSearch}
                                        defaultValue="Catchletter.com"
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        required >
                                        <Option value="Catchletter.com" >Catchletter.com</Option>
                                        <Option value="cl.abserver.net">cl.abserver.net</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item>
                                    <Checkbox onChange={this.handleChange}>CHOOSE CUSTOM EMAIL PREFIX</Checkbox>
                                </Form.Item>
                                {content}
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

