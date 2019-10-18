import React, { Component } from 'react';
import { connect } from "react-redux";
import { MiniArea } from 'ant-design-pro/lib/Charts';
import moment from 'moment';
import { Row, Col, Pagination } from 'antd';
import Emaillist from "./emaillist"
import './singlemail';
const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
    visitData.push({
        x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 100) + 10,
    });
}
export default class Dashboard extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="Dashboard">
                <div className="custom-container"></div>
                <Row>
                    <Row className="custom-container app-hdng">
                        <h2>Graph for All Websites</h2>
                    </Row>
                    <Col span={24}>
                        <MiniArea line color="#cceafe" height={250} data={visitData} />
                    </Col>
                </Row>
                <Row gutter={24} style={{ marginTop: '50px' }} className="custom-container">
                    <Col span={24} style={{ marginTop: '50px' }}>
                        <Row gutter={24} type="flex">
                            <Col xs={24} md={12} lg={6}>
                                <div className="main">
                                    <div className="inner">
                                        <Col xs={18} md={18} lg={12} style={{ alignContent: 'center', textAlign: 'center' }} >
                                            <h4>Today</h4>
                                        </Col>
                                        <Col xs={6} md={6} lg={12} style={{ alignContent: 'center', textAlign: 'center' }} >
                                            <h3>00</h3>
                                        </Col>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} md={12} lg={6}>
                                <div className="main">
                                    <div className="inner">
                                        <Col xs={18} md={18} lg={12} style={{ alignContent: 'center', textAlign: 'center' }} >
                                            <h4>Last 7 Days</h4>
                                        </Col>
                                        <Col xs={6} md={6} lg={12} style={{ alignContent: 'center', textAlign: 'center' }} >
                                            <h3>06</h3>
                                        </Col>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} md={12} lg={6}>
                                <div className="main">
                                    <div className="inner">
                                        <Col xs={18} md={18} lg={12} style={{ alignContent: 'center', textAlign: 'center' }} >
                                            <h4>Last 30 Days</h4>
                                        </Col>
                                        <Col xs={6} md={6} lg={12} style={{ alignContent: 'center', textAlign: 'center' }} >
                                            <h3>100</h3>
                                        </Col>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} md={12} lg={6}>
                                <div className="main">
                                    <div className="inner">
                                        <Col xs={18} md={18} lg={12} style={{ alignContent: 'center', textAlign: 'center' }} >
                                            <h4>All Time</h4>
                                        </Col>
                                        <Col xs={6} md={6} lg={12} style={{ alignContent: 'center', textAlign: 'center' }} >
                                            <h3>1000</h3>
                                        </Col>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Emaillist />
                <div className="App">
                    <Pagination className="pagination" defaultCurrent={1} total={50} />
                </div>
            </div>
        );
    }
}



