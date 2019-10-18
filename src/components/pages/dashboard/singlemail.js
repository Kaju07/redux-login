import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Tabs } from 'antd';
import Mail from "../../../images/mail.png"
import { connect } from "react-redux";
const { TabPane } = Tabs;
class Singlemail extends Component {
    static propTypes = {
        prop: PropTypes
    }
    callback(key) {
        console.log(key);
    }
    screenshot = () => {
        return (
            <Row gutter={24}>
                <div className="image">
                    <Col xs={24} md={24} lg={24} style={{ alignContent: 'center', textAlign: 'center' }} >
                        <img src={Mail} />
                    </Col>
                </div>
            </Row>

        )
    }
    render() {
        console.log("in single mail");
        return (
            <div className="custom-container">
                <Row>
                    <Row>
                        <div className="mail-title app-hdng">
                            <h3>This Is Just A Test</h3>
                        </div>
                    </Row>
                    <Row gutter={24}>
                        <div>
                            <Col xs={24} md={2} lg={2}>
                                <div className="from">
                                    <p>From :</p>
                                </div>
                            </Col>
                            <Col xs={24} md={22} lg={22}>
                                <div className="Sent">
                                    <p>sam ota</p>
                                </div>
                            </Col>
                        </div>
                        <div>
                            <Col xs={24} md={2} lg={2}>
                                <div className="from">
                                    <p>Sent: </p>
                                </div>
                            </Col>
                            <Col xs={24} md={22} lg={22}>
                                <div className="Sent">
                                    <p>Sun, 29 Sep 2019 03:35:20</p>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Row>
                <Tabs defaultActiveKey="1" onChange={this.callback()}>
                    <TabPane tab={<div className="app-hdng"><h3>Email ScreenShot</h3></div>} key="1">
                        {this.screenshot()}
                    </TabPane>
                    <TabPane tab={<div className="app-hdng"><h3>Email HTML</h3></div>} key="2">
                        <Row gutter={24}>
                            <Col xs={24} md={24} lg={24}>
                                {this.screenshot()}
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default connect(Singlemail);