
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import { Drawer, Button ,Icon} from 'antd';
import { Drawer, Form, Button, Col, Row, Input, Select, Icon, Tooltip } from 'antd';
const { Option } = Select;


export default class Editwebsite extends React.Component {
    constructor() {
        super();
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
    render() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <div>
                <Tooltip title="Edit Website">
                    <Icon onClick={this.showDrawer} type="edit" style={{ fontSize: '22px', color: '#08c' }} />
                </Tooltip>
                <Drawer
                    title="Edit Website"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item label="Website Name">
                                    <Input placeholder="Please enter website name" value="test@test.com" />
                                </Form.Item>

                            </Col>

                            <Col span={24}>
                                <Form.Item label="Url">
                                    <Input
                                        style={{ width: '100%' }}
                                        addonBefore="http://"
                                        addonAfter=".com"
                                        placeholder="Please enter url"
                                        value="test22907573@catchletter.com"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item label="Tags for your websites">
                                    <Select mode="tags" style={{ width: '100%' }} placeholder="Tags" >
                                        {children}
                                    </Select>
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

