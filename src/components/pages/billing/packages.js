import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Icon } from 'antd';
import $ from 'jquery';

export default class packages extends Component {
    static propTypes = {
        prop: PropTypes
    }
    componentDidMount() {
        $(document).ready(function () {
            if ($(".chkPassport").is(":checked")) {
                $(".years").show();
                $(".yearp").show();
                $(".months").hide();
                $(".monthp").hide();
            }
            $(".chkPassport").click(function () {
                if ($(this).is(":checked")) {
                    $(".years").show();
                    $(".yearp").show();
                    $(".months").hide();
                    $(".monthp").hide();
                } else {
                    $(".months ").show();
                    $(".monthp").show();
                    $(".years").hide();
                    $(".yearp").hide();
                }
            });
        })
    }
    render() {
        return (
            <div className="custom-container">
                <div className="app-hdng">
                    <h3>Billing and Subscription</h3>
                </div>

                <Row gutter={24}>
                    <Col span={24}>
                        <Row gutter={24} type="flex" className="Billing-cntr">
                            <Col xs={24} md={24} lg={24} >
                                <div>
                                    <Col xs={24} md={4} lg={4} >
                                        <div className="from">
                                            <p>Package Name :</p>
                                        </div>
                                    </Col>
                                    <Col xs={24} md={20} lg={20}>
                                        <div className="billing-data">
                                            <p>  CatchLetter Pro LTD</p>
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={24} md={24} lg={24} >
                                <div >
                                    <Col xs={24} md={4} lg={4} >
                                        <div className="from">
                                            <p>Package Price :</p>
                                        </div>
                                    </Col>
                                    <Col xs={24} md={20} lg={20}>
                                        <div className="billing-data">
                                            <p>$99</p>
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={24} md={24} lg={24} >
                                <div>
                                    <Col xs={24} md={4} lg={4} >
                                        <div className="from">
                                            <p>Package Validity :</p>
                                        </div>
                                    </Col>
                                    <Col xs={24} md={20} lg={20}>
                                        <div className="billing-data">
                                            <p> Life-Time</p></div>
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={24} md={24} lg={24} >
                                <div >
                                    <Col xs={24} md={4} lg={4} >

                                        <div className="from">
                                            <p>     Package Information :</p>
                                        </div>
                                    </Col>
                                    <Col xs={24} md={20} lg={20}>
                                        <div className="billing-data">
                                            <p>Billing Data will  be here</p>
                                            <p>Billing Data will  be here</p>
                                            <p>Billing Data will  be here</p>
                                            <p>Billing Data will  be here</p>
                                            <p>Billing Data will  be here</p>
                                            <p>Billing Data will  be here</p>
                                            <p>Billing Data will  be here</p>

                                        </div>

                                    </Col>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Col xs={24} md={24} lg={24} style={{ textAlign: 'center', marginTop: '40px' }}>
                    <div className="billContainer">
                        <div className="pricing_switchBanner">
                            <label className="cmLfLabel month">Monthly</label>
                            <label class="switch">
                                <input type="checkbox" class="chkPassport" defaultChecked={true} />
                                <span class="slider round"></span>
                            </label>
                            <label className="cmRgLabel year">Yearly</label>
                        </div>
                    </div>
                </Col>
                <div>
                    <Row gutter={24} style={{ marginTop: '50px' }}>
                        <Col span={24} style={{ marginTop: '50px' }}>
                            <Row gutter={24} type="flex">
                                <Col xs={24} md={24} lg={8} style={{ textAlign: 'center' }}>
                                    <div className="plan-cntr">
                                        <div className="billing-upper-cntnr months">
                                            <h2>
                                                CatchLetter Starter Monthly
                                            </h2>
                                            <h3>
                                                $19 / Monthly
                                            </h3>
                                        </div>
                                        <div className="billing-upper-cntnr years">
                                            <h2>
                                                CatchLetter Starter Yearly

                                            </h2>
                                            <h3>
                                                $190 / Yearly
                                            </h3>
                                        </div>
                                        <div className="billing-middle-cntnr billing-data">
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>10 websites monitored 24/7 </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month</h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>10 websites monitored 24/7 </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>All emails captured and available to your entire team (Coming Soon)</h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>10 websites monitored 24/7 </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>All emails captured and available to your entire team (Coming Soon)</h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month </h1>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} md={24} lg={8} style={{ textAlign: 'center' }}>
                                    <div className="plan-cntr">
                                        <div className="billing-upper-cntnr months">
                                            <h2>
                                                CatchLetter Starter Monthly
                                            </h2>
                                            <h3>
                                                $19 / Monthly
                                            </h3>
                                        </div>
                                        <div className="billing-upper-cntnr years">
                                            <h2>
                                                CatchLetter Starter Yearly
                                            </h2>
                                            <h3>
                                                $190 / Yearly
                                            </h3>
                                        </div>
                                        <div className="billing-middle-cntnr billing-data">
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>10 websites monitored 24/7 </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month</h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>10 websites monitored 24/7 </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>All emails captured and available to your entire team (Coming Soon)</h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>10 websites monitored 24/7 </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>All emails captured and available to your entire team (Coming Soon)</h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month </h1>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} md={24} lg={8} style={{ textAlign: 'center' }}>
                                    <div className="plan-cntr">
                                        <div className="billing-upper-cntnr months">
                                            <h2>
                                                CatchLetter Starter Monthly
                                            </h2>
                                            <h3>
                                                $19 / Monthly
                                            </h3>
                                        </div>
                                        <div className="billing-upper-cntnr years">
                                            <h2>
                                                CatchLetter Starter Yearly

                                            </h2>
                                            <h3>
                                                $190 / Yearly
                                            </h3>
                                        </div>
                                        <div className="billing-middle-cntnr billing-data">
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>10 websites monitored 24/7 </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month</h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>10 websites monitored 24/7 </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>All emails captured and available to your entire team (Coming Soon)</h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>10 websites monitored 24/7 </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month </h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>All emails captured and available to your entire team (Coming Soon)</h1>
                                                </Col>
                                            </Row>
                                            <Row className="bill-row">
                                                <Col className="check-icon" xs={24} md={6} lg={2}>
                                                    <Icon type="check" style={{ textAlign: 'center' }} />
                                                </Col>
                                                <Col xs={24} md={18} lg={22} style={{ textAlign: 'start' }}>
                                                    <h1>1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month </h1>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>





            </div>
        )
    }
}

